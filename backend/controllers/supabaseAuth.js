import supabase from "../lib/supabase.js";
import { userModel } from "../models/userModel.js";

export const loginSupabase = async (req, res) => {
  try {
    const { access_token } = req.body;
    if (!access_token) {
      return res.status(400).json({ error: "No token provided" });
    }
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser(access_token);
    if (error || !user) {
      console.error("Supabase auth Error:", error);
      return res.status(401).json({ error: "Invalid token" });
    }
    console.log("User authenticated:", user.email);
    const result = await userModel.updateOne(
      { supabaseId: user.id },
      {
        $set: {
          supabaseId: user.id,
          email: user.email,
          name: user.user_metadata?.full_name || user.user_metadata?.name,
          avatar: user.user_metadata?.avatar_url,
          lastLogin: new Date(),
        },
      },
      { upsert: true },
    );
    console.log("MongoDB update result:", result);
    res.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.user_metadata?.full_name,
      },
    });
  } catch (err) {
    console.error("Error in supabaseAuth", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
