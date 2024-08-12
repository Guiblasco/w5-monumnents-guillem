import express from "express";
import { monuments } from "../data.js";
import MonumentsController from "../controller/MonumentsControler/MonumentsController.js";

const monumentsRouter = express.Router();
const monumentController = new MonumentsController(monuments);

monumentsRouter.use("/", monumentController.getMonuments);

export default monumentsRouter;
