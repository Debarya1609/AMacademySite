import { createClient } from "@supabase/supabase-js"

import type { Database } from "@/lib/supabase/types"
import { getSupabaseServiceRoleKey, getSupabaseUrl } from "@/lib/supabase/shared"

export function createSupabaseAdminClient() {
  return createClient<Database>(getSupabaseUrl(), getSupabaseServiceRoleKey(), {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })
}

