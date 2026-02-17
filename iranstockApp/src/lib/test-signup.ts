import { supabase } from './supabase'

async function testSignup() {
  const { data, error } = await supabase.auth.signUp({
    email: 'testuser@example.com',
    password: 'IranStock2026'
  })
  console.log('Signup data:', data)
  if (error) console.error('Error:', error)
}

testSignup()
