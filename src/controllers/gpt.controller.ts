import { Request, Response } from 'express';
import * as gptService from '../services/gpt.service';

export const getWeeklyNutritionPlan = async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const result = await gptService.generateWeeklyPlan(userId);
  res.status(200).json(result);
};

export const generateBloodTestSummary = async (req: Request, res: Response) => {
  const { reportText } = req.body;

  if (!reportText || typeof reportText !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid "reportText" in request body.' });
  }

  const summary = await gptService.generateBloodSummary(reportText);
  const parsedSummary = JSON.parse(summary);

  res.status(200).json(parsedSummary);
};