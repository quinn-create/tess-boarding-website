# River Ridge Pet Retreat

Marketing website for River Ridge Pet Retreat — a dog boarding and grooming facility in Dunlap, TN. Static-exported Next.js site that deploys to Cloudflare Pages with no adapter.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS
- Static export (`output: 'export'`) — no SSR, no API routes, no middleware
- Contact form posts directly to [Web3Forms](https://web3forms.com)
- Node 20 (see `.nvmrc`)

## Setup

```bash
nvm use            # picks up Node 20 from .nvmrc
npm install
npm run dev        # http://localhost:3000
```

## Build

```bash
npm run build
```

Produces a fully static site in `out/`.

## Deploy to Cloudflare Pages

**Option A — Direct upload**
1. Run `npm run build`
2. Upload the `out/` directory via the Cloudflare Pages dashboard

**Option B — Git integration**
1. Push this repo to GitHub/GitLab
2. In Cloudflare Pages, connect the repo with these settings:
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Node version:** 20

No Cloudflare Pages adapter is needed.

## Pre-launch checklist

### 1. Replace text placeholders

All site identity, NAP, hours, pricing, and customer-service copy live in **[`lib/site.ts`](lib/site.ts)**. Edit one file to update everywhere:

| Placeholder | What to replace with |
| --- | --- |
| `[PHONE NUMBER]` | The real phone number. The `tel:` href version uses the same string — when you replace, set `display: '(423) 555-0123'` and `href: 'tel:+14235550123'` (digits-only with country code). |
| `[EMAIL ADDRESS]` | The real email — same pattern: `display: 'tess@…'` and `href: 'mailto:tess@…'`. |
| `[HOURS_WEEKDAY]` / `[HOURS_SAT]` | Display strings like `'8:00 AM – 6:00 PM'`. Also set the `opens` / `closes` 24h fields if they differ from the defaults — those feed the schema. |

Other placeholders to find and replace:

| Placeholder | Where |
| --- | --- |
| `[WEB3FORMS_ACCESS_KEY]` | `app/contact/ContactPageClient.tsx`. Get a free key from [web3forms.com](https://web3forms.com). |
| `[TESTIMONIAL_*]` | `app/page.tsx` — three quote slots in the testimonials section. Use `[TESTIMONIAL_*]` exact match to find them. Author + location too. |
| `https://riverridgepetretreat.com/contact?success=1` | `app/contact/ContactPageClient.tsx` (Web3Forms `redirect` hidden input). Update if the production domain differs. |

### 2. Drop in real images

PNGs go in `public/images/`. See [`public/images/README.md`](public/images/README.md) for filenames, dimensions, and pre-optimization guidance (AVIF preferred — `images: { unoptimized: true }` is required for static export, so `next/image` won't transform formats).

Each `<SiteImage>` call site currently passes `placeholder` — drop the prop on a per-image basis as real files arrive.

### 3. Verify the LocalBusiness schema

In [`lib/schema.ts`](lib/schema.ts) and via [`lib/site.ts`](lib/site.ts), confirm:
- `geo.latitude` / `geo.longitude` — currently a rough Dunlap, TN approximation (35.3722, -85.3886). Verify with the actual lot using Google Maps right-click → "What's here?" and update.
- `sameAs` — add Google Business Profile, Facebook, Instagram URLs once available.

## Project structure

```
app/
  layout.tsx                     shared header/footer + fonts + metadata + LocalBusiness schema + skip link
  page.tsx                       home (services, why, testimonials, FAQ, closing CTA)
  about/page.tsx                 about Tess
  contact/page.tsx               contact (server wrapper for metadata)
  contact/ContactPageClient.tsx  contact form (client)
  contact/SuccessBanner.tsx      submission-success banner (client, isolated for Suspense)
  services/boarding/page.tsx     dog boarding detail page
  services/grooming/page.tsx     dog grooming detail page
  globals.css                    Tailwind directives + base styles
  sitemap.ts                     /sitemap.xml
  robots.ts                      /robots.txt
  icon.tsx                       /icon (32×32 favicon, generated at build time)
  apple-icon.tsx                 /apple-icon (180×180, generated at build time)
components/
  Header.tsx                     sticky nav, server component, <details>-based mobile menu
  Footer.tsx                     NAP, hours, license line, copyright
  NavLink.tsx                    client wrapper handling active-link state
  PawIcon.tsx                    inline SVG used in header/footer/favicon
  SiteImage.tsx                  next/image when ready, placeholder div until then
  PlaceholderImage.tsx           cream "Image coming soon" div
  MapPreview.tsx                 lightweight static map preview (replaces Google Maps iframe)
lib/
  site.ts                        single source of truth: NAP, hours, pricing, copy, geo
  services.ts                    canonical service definitions (used by home + detail pages + schema)
  schema.ts                      LocalBusiness JSON-LD generation
public/
  images/                        drop PNGs here (see README in that folder)
  llms.txt                       site description for AI assistants
  _headers                       Cloudflare Pages security/cache headers
```
