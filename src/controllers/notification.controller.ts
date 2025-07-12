import { Request, Response } from 'express';
import prisma from '../../prisma/client';

export const getUserNotifications = async (req: Request, res: Response) => {
  const userId = (req as any).user.id;

  const notifications = await prisma.notification.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
  });

  res.json({ notifications });
};

export const markNotificationRead = async (req: Request, res: Response) => {
  const id = req.params.id;

  await prisma.notification.update({
    where: { id },
    data: { isRead: true },
  });

  res.json({ message: 'Marked as read' });
};
