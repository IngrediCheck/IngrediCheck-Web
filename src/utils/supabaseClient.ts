import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Supabase client configuration
 * 
 * Environment variables required (set in Vercel dashboard):
 * - VITE_SUPABASE_URL: Your Supabase project URL
 * - VITE_SUPABASE_ANON_KEY: Your Supabase anonymous/public key
 * 
 * To configure in Vercel:
 * 1. Go to your project settings → Environment Variables
 * 2. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY
 * 3. Redeploy the application
 */
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

// Create a no-op client if env vars are missing so build doesn't fail.
// Runtime operations will still fail clearly if not configured.
export const supabase: SupabaseClient = createClient(
  supabaseUrl ?? "https://example.supabase.co",
  supabaseAnonKey ?? "ey_example_key"
);

export default supabase;

