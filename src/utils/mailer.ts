import * as nodemailer from 'nodemailer';
import { config } from '../config/env';

export async function sendOtpEmail(email: string, otp: string) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.emailUser,
      pass: config.emailPass,
    },
  });

  const mailOptions = {
    from: `"Nutrition App" <${config.emailUser}>`,
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP is: ${otp}. It is valid for 10 minutes.`,
  };

  await transporter.sendMail(mailOptions);
}
