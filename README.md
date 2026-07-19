# One Circle Solutions — MSSP Marketing Site

Marketing website for One Circle Solutions, a managed security services provider (MSSP). Built with Next.js (App Router), TypeScript, and Tailwind CSS v4. Vercel-ready.

## Stack

- **Next.js 16** (App Router, React Server Components, static generation)
- **TypeScript**
- **Tailwind CSS v4**

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Deploying to Vercel

No special configuration required — import the repo in Vercel and deploy. All pages are statically generated except the `/api/contact` route handler.

## Project structure

```
src/
  app/                    # Routes (App Router)
    page.tsx              # Home
    services/             # Services index + /services/[slug] detail pages
    about/  trust/  resources/  contact/
    api/contact/route.ts  # Contact form intake (stub — see TODO below)
  components/
    layout/               # Header, footer, logo
    sections/             # Homepage/shared page sections (hero, CTA, grids…)
    ui/                   # Primitives: Container, buttons, headings, icons
  content/                # All site copy and data, structured and typed
    site.ts               # Brand, nav, contact details
    services.ts           # Service definitions (drives grid + detail pages)
    home.ts               # Stats, differentiators, buyer paths, engagement model
    resources.ts          # Resource library entries
```

**Editing content:** nearly all copy lives in `src/content/`. Adding a service to `services.ts` automatically creates its detail page, grid card, and footer link.

**Publishing a downloadable tool:** drop the file in `public/downloads/` and add an entry to `src/content/downloads.ts`. Size and SHA-256 checksum are computed from the real file at build time and shown on the Resources page.

## Before launch (TODOs)

- **Stats** in `src/content/home.ts` are placeholders — replace with real operational metrics.
- **Ecosystem strip** names platforms as placeholders — confirm or replace with actual partner logos/agreements.
- **Contact form** (`/api/contact`) only logs submissions — wire to email (Resend/SendGrid) or a CRM.
- **Resources** are "coming soon" placeholders — publish real content and add detail pages.
- Brand contact details in `src/content/site.ts` are taken from onecs.net — verify before launch.
- Official logos live in `/public` (`logo.png`, `logo-white.png`, `icon.jpg`); the favicon is an icon-only SVG recreation of the dotted-C mark (`src/app/icon.svg`).
