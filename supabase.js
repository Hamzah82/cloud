// supabase.js
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = 'https://lbduiafnkdbdiralxfaa.supabase.co'; // Ganti dengan URL Supabase-mu
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxiZHVpYWZua2RiZGlyYWx4ZmFhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NTA0MTQyNywiZXhwIjoyMDYwNjE3NDI3fQ.4avtfBPYF2xQzoPNU6wKceceM2ssYPW1SwUThbzV1PE'; // Ganti dengan anon key Supabase-mu
export const supabase = createClient(supabaseUrl, supabaseKey);
