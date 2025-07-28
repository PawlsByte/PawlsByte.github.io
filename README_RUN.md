# ASCS Mastery – Prototype v0.1

## Local Quick Start
1) Install Node 20+ and pnpm 9+  
2) Start Postgres with Docker:
```bash
docker compose up -d
```
3) Copy `.env.example` to `.env.local` and adjust values if needed
4) Install deps and init DB:
```bash
pnpm install
pnpm prisma migrate dev --name init
pnpm ts-node scripts/seed.ts
pnpm dev
```
Visit http://localhost:3000

## Notes
- This is a scaffold with API stubs and minimal UI. Replace placeholder logic with production implementations.
- Practice items and flashcards are original and exam-blueprint aligned. No real exam items are included.

Generated: 2025-07-28T23:19:53.270925
