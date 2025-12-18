import express from "express";
import cors from "cors";
import { env } from "./config/env";
import { healthRouter } from "./routes/health";
import { cloudinaryRouter } from "./routes/cloudinary";

export function createApp() {
  const app = express();

  app.use(cors({ origin: true }));
  app.use(express.json({ limit: "2mb" }));

  app.use(env.apiBasePath, healthRouter);
  app.use(env.apiBasePath, cloudinaryRouter);

  return app;
}
