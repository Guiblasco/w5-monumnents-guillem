import type { NextFunction, Request, Response } from "express";

export const generalError = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  res
    .status(res.statusCode || 500)
    .json({ error: true, message: error.message });
};
