import chalk from "chalk";
import express from "express";
import { worldMonuments } from "../monuments/data.js";

const app = express();

app.listen(3000, () => {
  console.log(chalk.green("Listening on port 3000"));
});

app.get("/monuments", (_req, res) => {
  res.json({ worldMonuments });
});
