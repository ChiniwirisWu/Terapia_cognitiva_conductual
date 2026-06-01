import express, { json } from "express";
import { createBlueprintRouter } from "./routes/blueprint.js";
import { corsMiddleware } from "./middlewares/cors.js";

export const createApp = ({ blueprintModel }) => {
  const app = express();
  app.use(json());
  app.use(corsMiddleware());
  app.disable('x-powered-by');

  app.use('/blueprint', createBlueprintRouter({ blueprintModel }))

  const PORT = process.env.PORT ?? 1234;

  app.listen(PORT, () => {
    console.log("server listening on port http://localhost:" + PORT);
  })
}

