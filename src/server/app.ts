import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";
import morgan from "morgan";
import monumentsRouter from "../router/monumentsRouter.js";
import { generalError } from "./error/error.js";

const app = express();

app.use(morgan("dev"));

app.get("/monuments", monumentsRouter);

app.use(generalError);

export default app;
