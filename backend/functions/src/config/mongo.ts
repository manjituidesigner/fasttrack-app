import mongoose from "mongoose";
import { env } from "./env";

let isConnected = false;

export async function connectMongo(): Promise<void> {
  if (isConnected) return;

  if (!env.mongoUri) {
    throw new Error("MONGODB_URI is missing");
  }

  await mongoose.connect(env.mongoUri);
  isConnected = true;
}
