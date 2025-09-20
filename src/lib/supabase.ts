import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Profile {
  id: string
  email: string
  full_name: string | null
  username: string | null
  avatar_url: string | null
  bio: string | null
  expertise_level: 'beginner' | 'intermediate' | 'expert'
  is_verified: boolean
  created_at: string
  updated_at: string
}

export interface Idea {
  id: string
  title: string
  description: string
  category: 'saas_automation' | 'film_plot' | 'business_concept' | 'company_rights' | 'software_idea' | 'marketing_strategy'
  price: number
  is_negotiable: boolean
  complexity_level: 'beginner' | 'intermediate' | 'expert'
  tags: string[]
  images: string[]
  files: string[]
  status: 'draft' | 'published' | 'sold' | 'removed'
  seller_id: string
  buyer_id: string | null
  views: number
  featured: boolean
  created_at: string
  updated_at: string
  profiles: Profile
}

export interface Message {
  id: string
  content: string
  sender_id: string
  receiver_id: string
  idea_id: string | null
  read: boolean
  created_at: string
  sender_profile: Profile
  receiver_profile: Profile
}

export interface Conversation {
  id: string
  participant_1: string
  participant_2: string
  idea_id: string | null
  last_message: string | null
  last_message_at: string | null
  created_at: string
  idea: Idea | null
  participant_1_profile: Profile
  participant_2_profile: Profile
}