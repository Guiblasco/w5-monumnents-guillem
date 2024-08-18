import type { NextFunction, Request, Response } from "express";
import ServerError from "../error/ServerError/ServerError.js";

export const unknownPath = (
  _req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const error = new ServerError("Path not found", 404);

  next(error);
};
