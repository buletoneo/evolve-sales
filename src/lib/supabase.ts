import { createClient } from '@supabase/supabase-js'

// These values are automatically available in Lovable when Supabase is connected
const supabaseUrl = 'https://your-project.supabase.co'
const supabaseAnonKey = 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type FreeTrialSubmission = {
  id?: string
  first_name: string
  last_name: string
  email: string
  company: string
  phone?: string
  business_type: string
  created_at?: string
}