import { Request, Response } from 'express';
import * as planService from '../services/plan.service';

export const getWeeklyNutritionPlan = async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const result = await planService.generateWeeklyPlan(userId);
  res.status(200).json(result);
};
