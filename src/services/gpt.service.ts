import prisma from '../prisma/client';
import { getOpenAIResponse } from '../utils/openAi';
import { getBloodReportSummaryPrompt } from '../prompts/getBloodReportSummaryPrompt';

export async function generateWeeklyPlan(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { profile: true, questionnaire: true },
  });

  if (!user?.profile || !user?.questionnaire) {
    throw new Error('Incomplete onboarding or questionnaire');
  }

  const prompt = JSON.stringify({
    age: user.profile.age,
    gender: user.profile.gender,
    height: user.profile.height,
    weight: user.profile.weight,
    targetWeight: user.profile.targetWeight,
    medicalBackground: user.questionnaire.medicalBackground,
    lifestyleHabits: user.questionnaire.lifestyleHabits,
    dietPreferences: user.questionnaire.dietPreferences,
    physicalActivity: user.questionnaire.physicalActivity,
    healthGoals: user.questionnaire.healthGoals,
  });

  const plan = await getOpenAIResponse(prompt);

  return JSON.parse(plan);
}

export async function generateBloodSummary(reportText: string) {
  const prompt = getBloodReportSummaryPrompt(reportText);
  const summary = await getOpenAIResponse(prompt);
  
  return summary;
}