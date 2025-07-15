import { z } from 'zod';

export const signUpSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

export const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(1, { message: 'Password is required' }),
  rememberMe: z.boolean().optional(),
});

export const sendOtpSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
});

export const verifyOtpSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  code: z.string().length(6, { message: 'OTP must be 6 digits' }),
});

export const forgotPasswordSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
});

export const resetPasswordSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  code: z.string().length(6, { message: 'OTP must be 6 digits' }),
  newPassword: z.string().min(6, { message: 'New password must be at least 6 characters' }),
});

