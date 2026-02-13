import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://jnarxzqodjgtltgqizot.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_YN72K5mqsQ176RNsAGyO7g_HEeYWh26'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
