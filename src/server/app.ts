import express from "express";
import morgan from "morgan";
import monumentsRouter from "../monument/router/monumentsRouter.js";
import cors from "cors";
import serverRouter from "./router/serverRouter.js";
import { generalError } from "./error/generalError/generalError.js";
import { unknownPath } from "./unknownPath/unknownPath.js";

const app = express();

app.use(cors());

app.use(morgan("dev"));
app.get("/ping", serverRouter);

app.get("/monuments", monumentsRouter);

app.use(unknownPath);

app.use(generalError);

export default app;
