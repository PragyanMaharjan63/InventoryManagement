import { Router } from "express";
import { loginSupabase } from "../controllers/supabaseAuth.js";
const authRouter = Router();
// authRouter.post("/signin", signin);
// authRouter.post("/login", login);
// authRouter.post("/logout", logout);
authRouter.post("/supabase", loginSupabase);

export default authRouter;
