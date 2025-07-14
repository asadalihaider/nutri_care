import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import prisma from '../../prisma/client';
import { config } from '../config/env';
import { sendOtpEmail } from '../utils/mailer';
import { generateOtp } from '../utils/otp';

const SALT_ROUNDS = 10;

export async function signup(data: { email: string; password: string }) {
  const { email, password } = data;

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) throw new Error('Email already exists');

  const hashed = await bcrypt.hash(password, SALT_ROUNDS);
  const user = await prisma.user.create({
    data: { email, password: hashed },
  });

  await sendOtp(email);
  return { message: 'Signup successful. OTP sent to email.', userId: user.id };
}

export async function login(data: { email: string; password: string, rememberMe?: boolean }) {
  const { email, password, rememberMe } = data;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error('Invalid credentials');

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error('Invalid credentials');

  const token = jwt.sign(
    { id: user.id, email: user.email },
    config.jwtSecret,
    {
      expiresIn: rememberMe ? 3600 * 24 * 30 : 3600 * 24 * 7, // 30 days or 7 days
    }
  );

  return { token, user: { id: user.id, email: user.email, isVerified: user.isVerified } };
}

export async function sendOtp(email: string) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error('User not found');

  const code = generateOtp();
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 min

  await prisma.oTP.upsert({
    where: { userId: user.id },
    update: { code, expiresAt },
    create: {
      userId: user.id,
      code,
      expiresAt,
    },
  });

  await sendOtpEmail(email, code);

  return { message: 'OTP sent to email' };
}

export async function verifyOtp(email: string, code: string) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error('User not found');

  const otp = await prisma.oTP.findUnique({ where: { userId: user.id } });
  if (!otp || otp.code !== code || otp.expiresAt < new Date()) {
    throw new Error('Invalid or expired OTP');
  }

  await prisma.user.update({ where: { id: user.id }, data: { isVerified: true } });
  await prisma.oTP.delete({ where: { userId: user.id } });

  return { message: 'Email verified successfully' };
}

export async function forgotPassword(email: string) {
  return await sendOtp(email); // Reuses OTP flow
}

export async function resetPassword(email: string, code: string, newPassword: string) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error('User not found');

  const otp = await prisma.oTP.findUnique({ where: { userId: user.id } });
  if (!otp || otp.code !== code || otp.expiresAt < new Date()) {
    throw new Error('Invalid or expired OTP');
  }

  const hashed = await bcrypt.hash(newPassword, SALT_ROUNDS);
  await prisma.user.update({ where: { id: user.id }, data: { password: hashed } });
  await prisma.oTP.delete({ where: { userId: user.id } });

  return { message: 'Password reset successful' };
}
