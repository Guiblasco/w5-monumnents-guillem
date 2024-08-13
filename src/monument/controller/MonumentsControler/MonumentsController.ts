import type { NextFunction, Request, Response } from "express";
import type { MonumentsControllerStructure } from "./types";
import type { Monument } from "../../types";

class MonumentsController implements MonumentsControllerStructure {
  constructor(readonly monuments: Monument[]) {}

  getMonuments = (_req: Request, res: Response, next: NextFunction): void => {
    try {
      if (!this.monuments) {
        const error = new Error("Can't found monuments");
        throw error;
      }

      res.status(200).json({ monuments: this.monuments });
    } catch (error) {
      next(error);
    }
  };
}

export default MonumentsController;
