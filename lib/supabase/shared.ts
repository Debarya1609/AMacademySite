function mustGetEnv(name: "NEXT_PUBLIC_SUPABASE_URL" | "NEXT_PUBLIC_SUPABASE_ANON_KEY" | "SUPABASE_SERVICE_ROLE_KEY") {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing required env var: ${name}`)
  }
  return value
}

export function getSupabaseUrl() {
  return mustGetEnv("NEXT_PUBLIC_SUPABASE_URL")
}

export function getSupabaseAnonKey() {
  return mustGetEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY")
}

export function getSupabaseServiceRoleKey() {
  return mustGetEnv("SUPABASE_SERVICE_ROLE_KEY")
}

