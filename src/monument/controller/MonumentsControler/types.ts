import type { Request, Response } from "express";

export interface MonumentsControllerStructure {
  getMonuments: (req: Request, res: Response) => void;
}
