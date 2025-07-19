import { z } from 'zod';

export const createSessionSchema = z.object({
  title: z.string().min(1, { message: 'Chat title is required' }).max(100),
});

export const sendMessageSchema = z.object({
  message: z.string().min(1, { message: 'Message is required' }),
});