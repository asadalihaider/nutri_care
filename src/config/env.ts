import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET ?? (() => { throw new Error('JWT_SECRET not set'); })(),
  jwtExpiresIn: '7d',
  emailUser: process.env.EMAIL_USER ?? (() => { throw new Error('EMAIL_USER not set'); })(),
  emailPass: process.env.EMAIL_PASS ?? (() => { throw new Error('EMAIL_PASS not set'); })(),
  openaiApiKey: process.env.OPENAI_API_KEY ?? (() => { throw new Error('OPENAI_API_KEY not set'); })(),
};
