import "dotenv/config";
import { createClient } from "@supabase/supabase-js";

// Supabase setup (service role key)
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY,
);
export default supabase;
