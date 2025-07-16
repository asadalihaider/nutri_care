import { Request, Response } from 'express';
import prisma from '../prisma/client';
import { handleMessageWithHistory } from '../services/chat.service';

export const createChatSession = async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const session = await prisma.chatSession.create({ data: { userId } });
  res.status(201).json({ session });
};

export const getUserChatSessions = async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const sessions = await prisma.chatSession.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
  });
  res.status(200).json({ sessions });
};

export const getChatSessionMessages = async (req: Request, res: Response) => {
  const sessionId = req.params.sessionId;
  const messages = await prisma.chatMessage.findMany({
    where: { sessionId },
    orderBy: { createdAt: 'asc' },
  });
  res.status(200).json({ messages });
};

export const sendMessageToSession = async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const sessionId = req.params.sessionId;
  const { message } = req.body;

  if (!message) return res.status(400).json({ error: 'Message is required' });

  const reply = await handleMessageWithHistory(userId, sessionId, message);
  res.status(200).json({ reply });
};
