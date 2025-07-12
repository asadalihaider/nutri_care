import { Request, Response } from 'express';
import { chatWithNutritionAgent } from '../services/chat.service';

export const chat = async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const { message } = req.body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message is required.' });
  }

  const reply = await chatWithNutritionAgent(userId, message);
  res.status(200).json({ reply });
};
