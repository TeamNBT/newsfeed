import { createClient } from '@supabase/supabase-js';

const VITE_SUPABASE_URL = import.meta.env.VITE_APP_SUPABASE_URL;
const VITE_SUPABASE_KEY = import.meta.env.VITE_APP_SUPABASE_ANON_KEY;

const SUPABASE_PROJECT_URL = "https://koumymdwgqqnrmjtbync.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvdW15bWR3Z3FxbnJtanRieW5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTczODQwMTQsImV4cCI6MjAzMjk2MDAxNH0.ejphOl0VsgULWkzPvjBgdzLs6qAJEq6rH-piQurjZxg";

const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_KEY);

export default supabase;
