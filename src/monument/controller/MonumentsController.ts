import type { Request, Response } from "express";
import type { MonumentsControllerStructure } from "./types";
import { monuments } from "../data.js";

class MonumentsController implements MonumentsControllerStructure {
  getMonuments(_req: Request, res: Response) {
    res.json({ worldMonuments: monuments });
  }
}

export default MonumentsController;
