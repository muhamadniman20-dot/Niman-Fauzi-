import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://iyrwtyuvnhpnzzrrdxaf.supabase.co";

const supabaseAnonKey =
  "sb_publishable_hzIwKs9TVPDR7tQGh4JWtA_6DTdA_Gt";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);