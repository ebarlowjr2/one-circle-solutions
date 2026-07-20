# SEO Launch Checklist — onecs.net

Production base URL: `https://www.onecs.net` (single source of truth: `src/content/site.ts` → `site.url`).

## Pre-launch (verify in the codebase / preview deployment)

- [x] `robots.txt` served at `/robots.txt` (via `src/app/robots.ts`) — allows public pages, disallows `/api/`, `/preview/`, `/internal/`, references sitemap
- [x] `sitemap.xml` served at `/sitemap.xml` (via `src/app/sitemap.ts`) — all public pages, production URLs only
- [x] Every public page has a unique title, meta description, and self-referencing canonical (`pageMetadata` helper in `src/lib/seo.tsx`)
- [x] Canonicals point to `https://www.onecs.net`, never a `*.vercel.app` preview URL
- [x] Open Graph title/description/url/image on every public page
- [x] JSON-LD: Organization (homepage), BreadcrumbList (service/industry/about/trust/resource pages), Article (resource articles)
- [x] 301 redirects for old Squarespace paths (`next.config.ts` — `statusCode: 301`, not 308)
- [x] No `noindex` on any public page
- [x] Footer includes Services, Company, Trust, Certifications, Resources, Contact, Privacy, Terms, Sitemap
- [x] Privacy (`/legal/privacy`) and Terms (`/legal/terms`) pages published
- [x] Vercel Web Analytics + Speed Insights mounted in root layout
- [ ] Run Lighthouse (mobile + desktop) on `/`, `/services`, one service page, one article — target 90+ performance/SEO/accessibility
- [ ] Crawl for broken links (e.g. Screaming Frog or `wget --spider -r`) on the preview deployment

## Domain cutover (day of launch)

- [ ] Add `www.onecs.net` (and apex `onecs.net`) as domains on the Vercel project
- [ ] Point DNS: apex `onecs.net` → redirect to `www.onecs.net` (configure redirect in Vercel domain settings)
- [ ] Confirm TLS certificates issued for both hosts
- [ ] Verify old Squarespace paths 301 to the new pages **on the live domain** (spot-check `/mssp`, `/blog`, `/healthcare`, `/contact-us`)
- [ ] Confirm `https://www.onecs.net/robots.txt` and `/sitemap.xml` load
- [ ] Confirm canonical tags on the live site show `www.onecs.net`

## Post-launch (first week)

- [ ] Google Search Console: verify `www.onecs.net` (add token to `verification.google` in `src/app/layout.tsx`, or DNS verification)
- [ ] Submit `https://www.onecs.net/sitemap.xml` in Search Console
- [ ] Bing Webmaster Tools: verify + submit sitemap
- [ ] Check Search Console coverage report for unexpected 404s from old Squarespace URLs; add redirects for any missed paths
- [ ] Confirm Vercel Analytics is receiving traffic
- [ ] (Optional) Add GA4 via `@next/third-parties` and update `/legal/privacy` to disclose it
- [ ] Re-run Lighthouse on the production domain
- [ ] Set a calendar reminder to review rankings/coverage at 30 days

## Content follow-ups

- [ ] Replace placeholder stats in `src/content/home.ts` with real metrics
- [ ] Verify certifications list (`src/content/certifications.ts`) matches credentials actually held
- [ ] Verify ecosystem/platform strip claims (`src/content/home.ts`)
- [ ] Wire `/api/contact` to email/CRM before driving paid traffic
- [ ] Consider a dedicated `/services/managed-it` page if Managed IT joins the catalog (then update the `/manageditservices` redirect)
