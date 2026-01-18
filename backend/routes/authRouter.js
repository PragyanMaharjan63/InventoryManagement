import { Router } from "express";
import { syncUserToMongo } from "../controllers/supabaseAuth.js";
const authRouter = Router();
authRouter.post("/mongo", syncUserToMongo);

export default authRouter;
