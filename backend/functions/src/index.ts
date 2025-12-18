import { onRequest } from "firebase-functions/v2/https";
import type { Request, Response } from "express";
import { createApp } from "./app";
import { connectMongo } from "./config/mongo";
import { initCloudinary } from "./config/cloudinary";

const app = createApp();

export const api = onRequest(async (req: Request, res: Response) => {
  try {
    initCloudinary();
    await connectMongo();
    return app(req, res);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ ok: false, error: message });
  }
});
