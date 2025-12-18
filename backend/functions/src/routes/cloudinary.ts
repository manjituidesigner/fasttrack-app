import crypto from "crypto";
import { Router } from "express";
import type { Request, Response } from "express";
import { env } from "../config/env";

export const cloudinaryRouter = Router();

cloudinaryRouter.post("/cloudinary/signature", (req: Request, res: Response) => {
  const timestamp = Math.floor(Date.now() / 1000);
  const folder = env.cloudinaryUploadFolder;

  const body = (req.body ?? {}) as { public_id?: string; eager?: string; overwrite?: boolean };

  const params: Record<string, string> = {
    folder,
    timestamp: String(timestamp)
  };

  if (body.public_id) params.public_id = body.public_id;
  if (body.eager) params.eager = body.eager;
  if (typeof body.overwrite === "boolean") params.overwrite = body.overwrite ? "true" : "false";

  const sorted = Object.keys(params)
    .sort()
    .map((k) => `${k}=${params[k]}`)
    .join("&");

  const signature = crypto
    .createHash("sha1")
    .update(sorted + env.cloudinaryApiSecret)
    .digest("hex");

  res.json({
    timestamp,
    folder,
    signature,
    apiKey: env.cloudinaryApiKey,
    cloudName: env.cloudinaryCloudName
  });
});
