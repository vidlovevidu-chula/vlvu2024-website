import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nratvbrsbqhnqhsyzrqo.supabase.co";
const supabaseKey = import.meta.env.SUPABASE_KEY
export const supabase = createClient(supabaseUrl, supabaseKey as string);
