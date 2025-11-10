import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

// Create a no-op client if env vars are missing so build doesn't fail.
// Runtime operations will still fail clearly if not configured.
export const supabase: SupabaseClient = createClient(
  supabaseUrl ?? "https://example.supabase.co",
  supabaseAnonKey ?? "ey_example_key"
);

export default supabase;

