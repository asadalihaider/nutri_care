import * as dotenv from 'dotenv';
dotenv.config();

function required(key: string): string {
  const val = process.env[key];
  if (!val) throw new Error(`Missing required env variable: ${key}`);
  return val;
}

export const config = {
  port: required('PORT'),

  jwtSecret: required('JWT_SECRET'),
  
  smtpHost: required('SMTP_HOST'),
  smtpPort: required('SMTP_PORT'),
  smtpSecure: required('SMTP_SECURE'),
  emailUser: required('EMAIL_USER'),
  emailPass: required('EMAIL_PASS'),

  openaiApiKey: required('OPENAI_API_KEY'),

  aws: {
    region: required('AWS_REGION'),
    bucket: required('AWS_BUCKET_NAME'),
    accessKeyId: required('AWS_ACCESS_KEY_ID'),
    secretAccessKey: required('AWS_SECRET_ACCESS_KEY'),
  },

};
