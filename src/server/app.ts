import express from "express";
import morgan from "morgan";
import { generalError } from "./error/generalError.js";
import monumentsRouter from "../monument/router/monumentsRouter.js";

const app = express();

app.use(morgan("dev"));

app.use((_req, res, next) => {
  res.header(
    "Acces-Control-Allow-Origin",
    "https://w5-monuments-guillem.onrender.com/",
  );

  next();
});

app.get("/monuments", monumentsRouter);

app.use(generalError);

export default app;
