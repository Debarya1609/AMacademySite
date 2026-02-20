import { NextResponse } from "next/server"
import { z } from "zod"

import { createSupabaseAdminClient } from "@/lib/supabase/admin"

const inquirySchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(320),
  phone: z.string().trim().max(30).optional(),
  message: z.string().trim().min(10).max(3000),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = inquirySchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Invalid payload",
          details: parsed.error.flatten(),
        },
        { status: 400 },
      )
    }

    const supabase = createSupabaseAdminClient()
    const { error } = await supabase.from("inquiries").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone ?? null,
      message: parsed.data.message,
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ ok: true }, { status: 201 })
  } catch {
    return NextResponse.json({ error: "Failed to submit inquiry" }, { status: 500 })
  }
}

