import type { NextFunction, Request, Response } from "express";
import type { MonumentsControllerStructure } from "./types";
import type { Monument } from "../../types";

class MonumentsController implements MonumentsControllerStructure {
  constructor(readonly monuments: Monument[]) {}

  getMonuments = (_req: Request, res: Response, _next: NextFunction): void => {
    res.status(200).json({ monuments: this.monuments });
  };
}

export default MonumentsController;
