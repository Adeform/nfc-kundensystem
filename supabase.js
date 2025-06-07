import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'https://furrwoehvkntsuahaddi.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' // dein echter Key hier

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
