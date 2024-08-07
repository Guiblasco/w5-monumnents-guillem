import chalk from "chalk";
import express from "express";

const port = 3000;

const app = express();

app.listen(port, () => {
  console.log(chalk.green("Listening on port 3000"));
});
