// supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-project.supabase.co'; // Ganti dengan URL Supabase-mu
const supabaseKey = 'your-anon-key'; // Ganti dengan anon key Supabase-mu
export const supabase = createClient(supabaseUrl, supabaseKey);
