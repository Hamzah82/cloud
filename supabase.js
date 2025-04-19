// supabase.js
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = 'https://lbduiafnkdbdiralxfaa.supabase.co'; // Ganti dengan URL Supabase-mu
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY; // Ganti dengan anon key Supabase-mu
export const supabase = createClient(supabaseUrl, supabaseKey);
