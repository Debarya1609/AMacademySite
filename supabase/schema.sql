create extension if not exists pgcrypto;

create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.inquiries enable row level security;

drop policy if exists "inquiries_read_authenticated" on public.inquiries;
create policy "inquiries_read_authenticated"
on public.inquiries
for select
to authenticated
using (true);

drop policy if exists "inquiries_insert_anon" on public.inquiries;
create policy "inquiries_insert_anon"
on public.inquiries
for insert
to anon, authenticated
with check (true);

