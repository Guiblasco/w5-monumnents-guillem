import express from "express";
import morgan from "morgan";
import { generalError } from "./error/generalError.js";
import monumentsRouter from "../monument/router/monumentsRouter.js";
import cors from "cors";

const app = express();

app.use(cors());

app.use(morgan("dev"));

app.get("/monuments", monumentsRouter);

app.use(generalError);

export default app;
