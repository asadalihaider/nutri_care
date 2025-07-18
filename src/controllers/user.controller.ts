import { Request, Response } from 'express';
import * as userService from '../services/user.service';

export const uploadImage = async (req: Request, res: Response) => {
  const result = await userService.uploadImage(req.body.file);
  res.status(200).json(result);
};

export const submitProfile = async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const result = await userService.saveUserProfile(userId, req.body);
  res.status(200).json(result);
};

export const submitQuestionnaire = async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const result = await userService.saveQuestionnaire(userId, req.body);
  res.status(200).json(result);
};

export const getUserData = async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const result = await userService.getUserData(userId);
  res.status(200).json(result);
};
