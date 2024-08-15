import { type NextFunction, type Request, type Response } from "express";

export interface HealthyCheckControllerStructure {
  getPing: (req: Request, res: Response, next: NextFunction) => void;
}
