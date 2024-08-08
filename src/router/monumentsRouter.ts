import express from "express";
import MonumentsController from "../monument/controller/MonumentsControler/MonumentsController.js";

const monumentsRouter = express.Router();
const monumentController = new MonumentsController();

monumentsRouter.use("/", monumentController.getMonuments);

export default monumentsRouter;
