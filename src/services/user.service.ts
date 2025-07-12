import prisma from '../../prisma/client';
import { Prisma as PrismaClient } from '@prisma/client';
import { QuestionnaireInput } from '../types/questionnaire.types';

export async function saveUserProfile(
  userId: string,
  data: { age: number; gender: string; height: number; weight: number; targetWeight: number }
) {
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

  return {
    email: user.email,
    profile: user.profile,
    questionnaire: user.questionnaire,
  };
}
