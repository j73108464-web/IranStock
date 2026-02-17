import { supabase } from './src/lib/supabase'

async function test() {
  const { data, error } = await supabase.auth.getSession()

  if (error) {
    console.error('❌ Supabase error:', error.message)
  } else {
    console.log('✅ Supabase connected')
    console.log('Session:', data.session)
  }
}

test()
