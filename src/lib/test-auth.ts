import { supabase } from './supabase'

async function testAuth() {
  const { data, error } = await supabase.auth.getSession()
  console.log('Session:', data)
  if (error) console.error('Error:', error)
}

testAuth()
