import { type Request, type Response, type NextFunction } from "express";
import type { HealthyCheckControllerStructure } from "./types";

class HealthyCheckController implements HealthyCheckControllerStructure {
  getPing = (req: Request, res: Response, next: NextFunction): void => {
    res.status(200).json({ message: "Pong" });
  };
}

export default HealthyCheckController;
