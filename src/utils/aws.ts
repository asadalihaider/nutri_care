import { S3Client, PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { v4 as uuidv4 } from 'uuid';
import { config } from '../config/env';

const s3 = new S3Client({
  region: config.aws.region,
  credentials: {
    accessKeyId: config.aws.accessKeyId,
    secretAccessKey: config.aws.secretAccessKey,
  },
});

export async function uploadToS3(fileBuffer: Buffer, fileName: string, mimetype: string): Promise<{ imageName: string; publicUrl: string }> {
  const newfileName = `${uuidv4()}-${fileName}`;

  const command = new PutObjectCommand({
    Bucket: config.aws.bucket,
    Key: `profile-images/${newfileName}`,
    Body: fileBuffer,
    ContentType: mimetype,
  });

  await s3.send(command);

  const getObjectCommand = new GetObjectCommand({
    Bucket: config.aws.bucket,
    Key: `profile-images/${newfileName}`,
  });

  const signedUrl = await getSignedUrl(s3, getObjectCommand, { expiresIn: 3600 });

  return { imageName: newfileName, publicUrl: signedUrl };
}
