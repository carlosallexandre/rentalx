import "dotenv/config";
import "reflect-metadata";
import express from "express";
import swaggerUi from "swagger-ui-express";

import "./shared/container";
import db from "./database";
import { routes } from "./routes";
import swaggerDocument from "./swagger.json";

const app = express();

db.initialize();

app.use(express.json());
app.use(routes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3333, () => console.log("Server is running!"));

process.on("exit", async () => {
  await db.destroy();
});
