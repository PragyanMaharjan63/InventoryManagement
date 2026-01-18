import supabase from "../lib/supabase.js";
import userModel from "../models/userModel.js";

export const syncUserToMongo = async (req, res) => {
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
      return res.status(401).json({ error: "Invalid token" });
    }

    const mongoUser = await userModel.findOneAndUpdate(
      { supabaseId: user.id },
      {
        supabaseId: user.id,
        email: user.email,
        name: user.user_metadata?.full_name || user.user_metadata?.name,
        avatar: user.user_metadata?.avatar_url,
        authProvider: user.app_metadata?.provider || "email",
        emailVerified: user.email_confirmed_at ? true : false,
        lastLogin: new Date(),
      },
      {
        new: true,
        upsert: true,
      },
    );

    res.json({
      success: true,
      user: {
        id: mongoUser.supabaseId,
        email: mongoUser.email,
        name: mongoUser.name,
      },
    });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Server error" });
  }
};
