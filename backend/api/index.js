import express from "express";
import cors from "cors";

import { configDotenv } from "dotenv";
import connectDB from "../config/connnectDB.js";
import authRouter from "../routes/authRouter.js";

configDotenv();

const app = express();
app.use(cors());
app.use(express.json());

try {
  await connectDB();
  console.log("Connected to MongoDB");

  app.use("/api/auth", authRouter);

  app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });
} catch (error) {
  console.error("Failed to start server:", error);
  process.exit(1);
}
