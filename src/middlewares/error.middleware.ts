import { NextFunction, Request, Response } from 'express';
import { Prisma } from '@prisma/client';

export function errorHandler(
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (
    err instanceof Prisma.PrismaClientKnownRequestError &&
    err.code === 'P2002'
  ) {
    const target = Array.isArray(err.meta?.target)
      ? err.meta?.target.join(', ')
      : 'field(s)';

    return res.status(409).json({
      error: `A record with that ${target} already exists.`,
    });
  }

  if (
    err instanceof Prisma.PrismaClientKnownRequestError &&
    err.code === 'P2025'
  ) {
    return res.status(404).json({
      error: 'Record not found.',
    });
  }

  if (err.isAxiosError || err.response?.status) {
    return res.status(502).json({
      error: 'External service error. Please try again later.',
    });
  }

  if (err.status === 400 || err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message });
  }

  return res.status(500).json({
    error: err.message || 'Internal server error. Please try again later.',
  });
}
