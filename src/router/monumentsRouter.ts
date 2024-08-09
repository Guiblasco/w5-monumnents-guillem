import express from "express";
import MonumentsController from "../monument/controller/MonumentsControler/MonumentsController.js";
import { monuments } from "../monument/data.js";

const monumentsRouter = express.Router();
const monumentController = new MonumentsController(monuments);

monumentsRouter.use("/", monumentController.getMonuments);

export default monumentsRouter;
