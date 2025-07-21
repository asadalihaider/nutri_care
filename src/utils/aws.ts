import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';
import { config } from '../config/env';

const s3 = new S3Client({
  region: config.aws.region,
  credentials: {
    accessKeyId: config.aws.accessKeyId,
    secretAccessKey: config.aws.secretAccessKey,
  },
});

export async function uploadToS3(fileBuffer: Buffer, fileName: string, mimetype: string): Promise<{ imageName: string; }> {
  const newfileName = `${uuidv4()}-${fileName}`;

  const command = new PutObjectCommand({
    Bucket: config.aws.bucket,
    Key: `profile-images/${newfileName}`,
    Body: fileBuffer,
    ContentType: mimetype,
  });

  await s3.send(command);

  return { imageName: newfileName };
}
