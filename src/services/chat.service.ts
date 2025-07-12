import { getOpenAIResponse } from '../utils/openAi';
import { getNutritionChatPrompt } from '../prompts/chatPrompt';
import prisma from '../../prisma/client';
import { addDays } from 'date-fns';

export async function chatWithNutritionAgent(userId: string, message: string) {
  const prompt = getNutritionChatPrompt(message);
  const response = await getOpenAIResponse(prompt);

  // Check for marker
  if (response.includes('<<FOLLOW_UP>>')) {
    await prisma.chatFollowup.create({
      data: {
        userId,
        message,
        dateFor: addDays(new Date(), 1),
      },
    });
  }

  return response.replace('<<FOLLOW_UP>>', '').trim();
}
