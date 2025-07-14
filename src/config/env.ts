import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET ?? (() => { throw new Error('JWT_SECRET not set'); })(),

  emailUser: process.env.EMAIL_USER ?? (() => { throw new Error('EMAIL_USER not set'); })(),
  emailPass: process.env.EMAIL_PASS ?? (() => { throw new Error('EMAIL_PASS not set'); })(),

  smtpHost: process.env.SMTP_HOST ?? (() => { throw new Error('SMTP_HOST not set'); })(),
  smtpPort: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : (() => { throw new Error('SMTP_PORT not set'); })(),
  smtpSecure: process.env.SMTP_SECURE === 'true',

  openaiApiKey: process.env.OPENAI_API_KEY ?? (() => { throw new Error('OPENAI_API_KEY not set'); })(),
};
