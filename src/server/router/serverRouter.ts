import express from "express";
import HealthyCheckController from "../HealthyCheckController/HealthyCheckController.js";

const serverRouter = express.Router();
const healthyCheckController = new HealthyCheckController();

serverRouter.use("/", healthyCheckController.getPing);

export default serverRouter;
