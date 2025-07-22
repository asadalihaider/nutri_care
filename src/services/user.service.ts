import prisma from '../prisma/client';
import { Prisma as PrismaClient } from '@prisma/client';
import { QuestionnaireInput } from '../types/questionnaire.types';
import { uploadToS3 } from '../utils/aws';
import { UserProfileInput } from '../types/user.types';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { config } from '../config/env';

export async function uploadImage(
  data: { file: Express.Multer.File }
) {
  const response = await uploadToS3(data.file.buffer, data.file.originalname, data.file.mimetype);

  return { ...response };
}

export async function saveUserProfile(userId: string, data: UserProfileInput) {
  const profile = await prisma.userProfile.upsert({
    where: { userId },
    update: data,
    create: {
      userId,
      ...data,
    },
  });

  return { message: 'Profile saved', profile };
}

export async function saveQuestionnaire(userId: string, data: QuestionnaireInput) {
  const toJson = (obj: unknown): PrismaClient.InputJsonValue => obj ?? {};

  const payload = {
    medicalBackground: toJson(data.medicalBackground),
    lifestyleHabits: toJson(data.lifestyleHabits),
    dietPreferences: toJson(data.dietPreferences),
    physicalActivity: toJson(data.physicalActivity),
    healthGoals: toJson(data.healthGoals),
  };

  const questionnaire = await prisma.questionnaire.upsert({
    where: { userId },
    update: payload,
    create: { userId, ...payload },
  });

  return { message: 'Questionnaire saved successfully', questionnaire };
}

export async function getUserData(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      profile: true,
      questionnaire: true,
    },
  });

  if (!user || !user.profile || !user.questionnaire) {
    throw new Error('Incomplete user data');
  }

  if (user.profile.image) {    
    const s3 = new S3Client({
      region: config.aws.region,
      credentials: {
        accessKeyId: config.aws.accessKeyId,
        secretAccessKey: config.aws.secretAccessKey,
      },
    });

    const getObjectCommand = new GetObjectCommand({
      Bucket: config.aws.bucket,
      Key: `profile-images/${user.profile.image}`,
    });

    const signedUrl = await getSignedUrl(s3, getObjectCommand, { expiresIn: 3600 });

    user.profile.image = signedUrl ?? 'placeholder.png';
  }

  return {
    email: user.email,
    profile: user.profile,
    questionnaire: user.questionnaire,
  };
}
