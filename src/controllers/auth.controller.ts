import { Request, Response } from 'express';
import * as authService from '../services/auth.service';

export const signup = async (req: Request, res: Response) => {
  const result = await authService.signup(req.body);
  res.status(201).json(result);
};

export const login = async (req: Request, res: Response) => {
  const result = await authService.login(req.body);
  res.status(200).json(result);
};

export const sendOtp = async (req: Request, res: Response) => {
  const { email } = req.body;
  const result = await authService.sendOtp(email);
  res.status(200).json(result);
};

export const verifyOtp = async (req: Request, res: Response) => {
  const { email, code } = req.body;
  const result = await authService.verifyOtp(email, code);
  res.status(200).json(result);
};

export const forgotPassword = async (req: Request, res: Response) => {
  const { email } = req.body;
  const result = await authService.forgotPassword(email);
  res.status(200).json(result);
};

export const resetPassword = async (req: Request, res: Response) => {
  const { email, code, newPassword } = req.body;
  const result = await authService.resetPassword(email, code, newPassword);
  res.status(200).json(result);
};
