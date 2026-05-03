# River Ridge Pet Retreat

Marketing website for River Ridge Pet Retreat — a dog boarding and grooming facility in Dunlap, TN. Static-exported Next.js site that deploys to Cloudflare Pages with no adapter.

## Stack

- Next.js (App Router) + TypeScript
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

Two options:

**Option A — Direct upload**
1. Run `npm run build`
2. In the Cloudflare Pages dashboard, create a new project and upload the `out/` directory

**Option B — Git integration**
1. Push this repo to GitHub/GitLab
2. In Cloudflare Pages, connect the repo with these settings:
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Node version:** 20

No Cloudflare Pages adapter is needed — `output: 'export'` produces a plain static bundle.

## Placeholders to replace before launch

Search the codebase for these tokens and replace them.

| Token | Where | Replace with |
| --- | --- | --- |
| `[PHONE NUMBER]` | `components/Footer.tsx`, `app/contact/ContactPageClient.tsx` | The real phone number. The `tel:` href versions need digits only (e.g. `tel:+14235550123`); the visible text can be formatted however you like. |
| `[WEB3FORMS_ACCESS_KEY]` | `app/contact/ContactPageClient.tsx` | Your free access key from [web3forms.com](https://web3forms.com) |
| `https://riverridgepetretreat.com/contact?success=1` | `app/contact/ContactPageClient.tsx` (the `redirect` hidden input) | Same URL but on the production domain if it differs |
| `SITE_URL` constant | `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts` | Production domain if different from `https://riverridgepetretreat.com` |

## Image files

Drop these PNG files into `public/images/`. Dimensions and subjects are listed in [`public/images/README.md`](public/images/README.md).

- `hero.png` (1200×1200)
- `service-boarding.png` (600×600)
- `service-grooming.png` (600×600)
- `service-playtime.png` (600×600)
- `tess-portrait.png` (800×1000)

Until they're present the site renders cream "Image coming soon" placeholders at the correct aspect ratios so the layout is preserved. Once the real images are in place, switch `components/SiteImage.tsx` over to `next/image` (it currently renders a placeholder div).

## Project structure

```
app/
  layout.tsx              shared header/footer + fonts + metadata
  page.tsx                home
  about/page.tsx          about Tess
  contact/page.tsx        contact (server wrapper for metadata)
  contact/ContactPageClient.tsx  contact form (client component)
  globals.css             Tailwind directives + base styles
  sitemap.ts              /sitemap.xml
  robots.ts               /robots.txt
components/
  Header.tsx              sticky nav + mobile menu
  Footer.tsx              address + phone + copyright
  PawIcon.tsx             inline SVG used in header/footer
  SiteImage.tsx           swap-in for next/image once real PNGs exist
  PlaceholderImage.tsx    cream placeholder div
public/
  images/                 drop PNGs here (see README in that folder)
```
