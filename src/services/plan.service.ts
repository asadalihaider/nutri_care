import prisma from '../../prisma/client';
import { getOpenAIResponse } from '../utils/openAi';
import { getNutritionPlanPrompt } from '../prompts/nutritionPrompts';

export async function generateWeeklyPlan(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { profile: true, questionnaire: true },
  });

  if (!user?.profile || !user?.questionnaire) {
    throw new Error('Incomplete onboarding or questionnaire');
  }

  const prompt = getNutritionPlanPrompt({
    profile: user.profile,
    questionnaire: user.questionnaire,
  });


  const plan = await getOpenAIResponse(prompt);

  return JSON.parse(plan);
}
