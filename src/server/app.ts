import express from "express";
import morgan from "morgan";
import monumentsRouter from "../router/monumentsRouter.js";

const app = express();

app.use(morgan("dev"));

app.get("/monuments", monumentsRouter);

export default app;
