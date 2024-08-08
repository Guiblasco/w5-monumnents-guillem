import express from "express";
import monumentsRouter from "../router/monumentsRouter.js";

const app = express();

app.get("/monuments", monumentsRouter);

export default app;
