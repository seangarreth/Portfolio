# Garreth Portfolio

A personal portfolio website for Adewale Sunday Garreth — Civil Site Engineer & Full Stack Web Developer.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite (artifact: `garreth-portfolio`)
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/garreth-portfolio/` — frontend portfolio app (React + Vite, served at `/`)
  - `src/App.tsx` — main portfolio component (all sections in one file)
  - `src/portfolio.css` — all custom CSS (dark navy/sky blue theme)
  - `src/assets/` — engineering project images
  - `public/` — profile photo, project images, CV PDF
- `artifacts/api-server/` — Express API server (served at `/api`)
- `lib/api-spec/openapi.yaml` — API contract (source of truth)
- `lib/db/src/schema/` — Drizzle ORM schema

## Architecture decisions

- Portfolio is purely frontend (no backend needed) — all data is static in `App.tsx`
- Custom CSS in `portfolio.css` instead of Tailwind for the portfolio sections, to match the original Vercel design exactly
- Images imported via Vite asset pipeline for engineering projects; public folder for profile/CV

## Product

A single-page portfolio showcasing:
- Engineering Projects gallery (photo cards)
- Hero section with profile photo and CTA buttons
- Certifications, Skills bars, Stats highlights
- Experience Timeline
- Featured web projects
- Contact section with grid of contact cards
- Floating social media buttons
- Light/Dark mode toggle

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- `renovation- stage-1.jpg` in the original backup had a space in its name — copied to `renovation-stage-1.jpg` in assets
- Some asset files from the Vercel export were gitkeep placeholders (2 bytes) — only real images were present in the backup
- Do NOT run `pnpm dev` or `pnpm run dev` at the workspace root. Use `restart_workflow` instead.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
