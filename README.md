# AMacademy website

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/debarya-banerjees-projects/v0-am-academy-website)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/k57yGrPN4eE)

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## Deployment

Your project is live at:

**[https://vercel.com/debarya-banerjees-projects/v0-am-academy-website](https://vercel.com/debarya-banerjees-projects/v0-am-academy-website)**

## Build your app

Continue building your app on:

**[https://v0.app/chat/k57yGrPN4eE](https://v0.app/chat/k57yGrPN4eE)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

## Supabase Setup

This project now includes a Supabase starter integration with:

- Typed Supabase clients for browser/server/admin usage
- A ready API endpoint at `POST /api/inquiries`
- SQL schema at `supabase/schema.sql`

### 1) Add environment variables

Copy `.env.example` to `.env.local` and set:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

### 2) Run SQL in Supabase

Open Supabase SQL Editor and run:

- `supabase/schema.sql`

This creates `public.inquiries` with RLS policies.

### 3) Start app

```bash
npm run dev
```

### 4) Test inquiry API

```bash
curl -X POST http://localhost:3000/api/inquiries \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Test User\",\"email\":\"test@example.com\",\"phone\":\"1234567890\",\"message\":\"Interested in piano classes.\"}"
```
