import type { NextFunction, Request, Response } from "express";

export interface MonumentsControllerStructure {
  getMonuments: (req: Request, res: Response, next: NextFunction) => void;
}
