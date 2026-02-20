"use client"

import { createBrowserClient } from "@supabase/ssr"

import type { Database } from "@/lib/supabase/types"
import { getSupabaseAnonKey, getSupabaseUrl } from "@/lib/supabase/shared"

export function createSupabaseBrowserClient() {
  return createBrowserClient<Database>(getSupabaseUrl(), getSupabaseAnonKey())
}

