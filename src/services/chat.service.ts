import prisma from '../../prisma/client';
import { getNutritionChatPrompt } from '../prompts/chatPrompt';
import { getOpenAIResponseFromMessages } from '../utils/openAi';

export async function fetchChatHistory(sessionId: string): Promise<
  { role: 'user' | 'assistant' | 'system'; content: string }[]
> {
  const messages = await prisma.chatMessage.findMany({
    where: { sessionId },
    orderBy: { createdAt: 'asc' },
  });

  return messages.map((msg) => ({
    role: msg.sender === 'user' ? 'user' : 'assistant',
    content: msg.content,
  }));
}

export async function handleMessageWithHistory(userId: string, sessionId: string, message: string) {
  const session = await prisma.chatSession.findUnique({
    where: { id: sessionId },
  });
  
  if (!session || session.userId !== userId) {
    throw new Error('Unauthorized access to chat session');
  }

  // Save user message
  await prisma.chatMessage.create({
    data: {
      sessionId,
      sender: 'user',
      content: message,
    },
  });

  const history = await fetchChatHistory(sessionId);

  const systemPrompt: { role: 'system'; content: string } = {
    role: 'system',
    content: getNutritionChatPrompt(message),
  };

  var response = await getOpenAIResponseFromMessages([
    systemPrompt,
    ...history,
    { role: 'user', content: message },
  ]);

  // Save assistant response
  await prisma.chatMessage.create({
    data: {
      sessionId,
      sender: 'assistant',
      content: response,
    },
  });

  if (response.includes('<<FOLLOW_UP>>')) {
    await prisma.chatFollowup.create({
      data: {
        userId,
        message,
        dateFor: new Date(Date.now() + 24 * 60 * 60 * 1000), 
      },
    });
    response = response.replace('<<FOLLOW_UP>>', '').trim();
  }


  return response;
}
