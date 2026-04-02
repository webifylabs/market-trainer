import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

export const supabase = supabaseUrl
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// ─── Helper: gracefully handle missing Supabase config ───────────────────────
export async function sbFetch(table, query = null) {
  if (!supabase) return { data: null, error: new Error('Supabase not configured') }
  let req = supabase.from(table).select('*')
  if (query) req = query(req)
  return req
}
