import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://lbduiafnkdbdiralxfaa.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxiZHVpYWZua2RiZGlyYWx4ZmFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwNDE0MjcsImV4cCI6MjA2MDYxNzQyN30.5Z5aHwVDXJJsNjuAA0ETdVvL3EzbMI-nH3NVgnuKyFU";

export const supabase = createClient(supabaseUrl, supabaseKey);
