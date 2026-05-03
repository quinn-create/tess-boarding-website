# River Ridge Pet Retreat — SEO Audit Report

**Audit date:** 2026-05-03
**Site:** River Ridge Pet Retreat (riverridgepetretreat.com — pre-launch)
**Audited from:** Static export at `out/` (live URL not yet deployed)
**Pages audited:** 3 (`/`, `/about/`, `/contact/`)
**Business type:** Local Service — brick-and-mortar / hybrid (dog boarding & grooming, single location, Dunlap TN)

---

## Executive Summary

### Overall SEO Health Score: **48 / 100** — *Needs Work (pre-launch)*

This is a freshly scaffolded marketing site with solid bones (clean static export, semantic HTML, Tailwind, sensible metadata) but **several launch-blocking issues**. The most severe is that the entire **/contact/ page renders as empty HTML in the static export** because of a `Suspense fallback={null}` wrapping `useSearchParams`. Search engines and AI crawlers will see a blank page where the NAP, phone, and form should be — and for a local business, the contact page is the single most important page to be crawlable.

| Category | Weight | Score | Notes |
| --- | --- | --- | --- |
| Technical SEO | 22% | 55 / 100 | Sitemap & robots good; canonicals missing; contact page empty in static HTML |
| Content Quality | 23% | 50 / 100 | Bio is strong; home is borderline thin (178 words); contact is empty |
| On-Page SEO | 20% | 60 / 100 | Titles & H1s good on home/about; contact missing H1 in static HTML; OG title is the same on every page |
| Schema / Structured Data | 10% | 0 / 100 | No JSON-LD anywhere — biggest single miss for a local business |
| Performance (CWV) | 10% | 60 / 100 | Field data blocked (not deployed); JS bundle ~630 KB is heavy for a 3-page brochure |
| AI Search Readiness | 10% | 35 / 100 | No `llms.txt`, no FAQ block, no LocalBusiness signals to cite |
| Images | 5% | 50 / 100 | Placeholders only; alt text wired correctly; og:image references file that doesn't exist yet |

### Top 5 Critical Issues

1. **`/contact/` renders as empty HTML in the static export.** `<Suspense fallback={null}>` around the page's only client component means the static HTML for `/contact/` has zero words inside `<main>`. For a local-service site, this kills the most important page for crawl & cite.
2. **No structured data anywhere.** Zero JSON-LD blocks. Missing `LocalBusiness` schema with NAP, geo, hours, and `sameAs` is the single biggest local-SEO miss.
3. **`[PHONE NUMBER]` placeholder is in production-ready HTML.** Both the visible text and the `tel:` href are placeholders. Will ship as-is if not replaced.
4. **`og:image` points to `/images/hero.png` which doesn't exist yet.** Every social share will 404 until the image is dropped in.
5. **No canonical tags on any page.** Next.js doesn't emit them automatically; needs `metadataBase` + `alternates.canonical` per page.

### Top 5 Quick Wins

1. **Restructure the Contact Suspense boundary** (5-min fix — see Action Plan #1). Lets the static HTML include the H1, NAP, form, and map.
2. **Add a `LocalBusiness` (or `AnimalShelter` / `PetStore`) JSON-LD block** in `app/layout.tsx`. NAP, geo coordinates, hours, telephone, area served. Massive lift for local pack, AI Overviews, and Maps.
3. **Add per-page `alternates.canonical`** in each page's `metadata` export.
4. **Add `openGraph.title` + `openGraph.description` to each page's metadata** so social shares of `/about/` and `/contact/` aren't titled "Dog Boarding & Grooming in Dunlap, TN".
5. **Drop a `public/llms.txt`** with a short site description, contact info, and the three URLs. Cheap, helps ChatGPT / Perplexity citation.

---

## Technical SEO — 55 / 100

### What's working
- `robots.txt` allows all, references the sitemap correctly.
- `sitemap.xml` lists all 3 pages with `lastmod`, `changefreq`, `priority`.
- `viewport` meta is correct on all pages (`width=device-width, initial-scale=1`).
- Static export has trailing-slash URLs consistently (`/about/`, `/contact/`).
- HTTPS will be automatic on Cloudflare Pages deploy.
- 404 page is generated.

### Issues
| Severity | Issue |
| --- | --- |
| 🔴 Critical | `/contact/index.html` `<main>` is empty (0 words). Caused by `<Suspense fallback={null}>` wrapping the only client component. Fix in [app/contact/page.tsx](../app/contact/page.tsx). |
| 🟠 High | No `<link rel="canonical">` on any page. Needs `alternates.canonical` per page metadata. |
| 🟡 Medium | No `lang` declaration issue (✓ `<html lang="en">` is set), but no `hreflang` — only relevant if you ever publish in another language; not blocking. |
| 🟡 Medium | Sitemap `priority` of `0.7` for About vs `1.0` home is fine, but Google ignores `priority`. Consider dropping. |
| 🟢 Low | No security headers configurable from a static-export Next site. Cloudflare Pages defaults handle most (`Strict-Transport-Security` automatic on HTTPS); add `Content-Security-Policy` and `Permissions-Policy` via Cloudflare Pages `_headers` if you want a stricter posture. |

### Field-data items blocked (not deployed)
- Core Web Vitals (CrUX) — needs live URL with traffic
- GSC indexation / clicks / impressions — needs live URL + GSC property
- GA4 organic traffic — needs analytics installed

---

## Content Quality — 50 / 100

### Word counts (body `<main>` only)
- Home: **178 words** — borderline thin. Search engines tolerate short copy on a strong brand, but AI search (Perplexity, ChatGPT) prefers ~250+ words to cite confidently.
- About: **191 words** — acceptable, well-structured bio.
- Contact: **0 words** — empty due to the Suspense issue.

### E-E-A-T assessment
- **Experience**: Strong. The bio establishes a lifelong-with-dogs narrative grounded in place (Sequatchie Valley) and personal story (vet-school pivot). This is exactly the kind of first-person experience Google and AI search reward.
- **Expertise**: Implied (vet-school background) but not surfaced as credentials. Consider one-liner like "with X years caring for dogs" if true.
- **Authoritativeness**: Not yet — no reviews, testimonials, citations, or third-party mentions. Once GBP is live, embed testimonials.
- **Trust**: NAP exists in footer + contact, but the phone is a placeholder. License/insurance language could help.

### Recommendations
- Add a short "Why families choose River Ridge" section on home (3 bullets) — also doubles as FAQ schema fodder.
- After launch, add a "Reviews" or "What our families say" section pulling from GBP testimonials.
- Add an "Hours of operation" block somewhere — drop-off windows are common questions for boarding.

---

## On-Page SEO — 60 / 100

### Titles
| Page | Title | Length |
| --- | --- | --- |
| Home | River Ridge Pet Retreat \| Dog Boarding & Grooming in Dunlap, TN | 65 chars ✓ |
| About | About Tess \| River Ridge Pet Retreat | 38 chars ✓ |
| Contact | Contact \| River Ridge Pet Retreat | 35 chars ✓ |

All titles are unique, descriptive, and within Google's display limit. ✓

### Meta descriptions
All three are unique and within 160 chars. ✓

### Headings
| Page | H1 | H2 | H3 |
| --- | --- | --- | --- |
| Home | "A home away from home for your dog" | "What we offer", "Ready to book a stay?" | Service names + footer |
| About | "Meet Tess" | (none) | (footer only) |
| Contact | **(none in static HTML)** | (none in static HTML) | (footer only) |

- **Home**: clean hierarchy ✓
- **About**: jumps H1 → H3 (footer). Consider adding an H2 like "From the valley, for the valley" or "Why she built River Ridge" to break up the bio.
- **Contact**: H1 "Get in touch" exists in code but is missing from static HTML. Critical.

### Open Graph
- All three pages emit the **same** `og:title` ("River Ridge Pet Retreat | Dog Boarding & Grooming in Dunlap, TN") because [app/layout.tsx](../app/layout.tsx) hard-codes `openGraph.title`. Per-page `metadata` exports don't override it.
- `og:image` is set, but the file doesn't exist yet — every share preview will 404 until `public/images/hero.png` is added.

### Internal linking
- Each page links to the other two via header + body CTAs. Good interlinking density for a 3-page site.
- All internal links use absolute paths (`/about/`, `/contact/`) ✓.

---

## Schema & Structured Data — 0 / 100

**No JSON-LD blocks were detected on any page.** This is the biggest single opportunity in the audit.

### Recommended schema (in priority order)

1. **`LocalBusiness`** (or more specifically `PetStore` — `AnimalShelter` is a poor fit for a paid boarding facility). Add to `app/layout.tsx` so it appears on every page.
   ```jsonc
   {
     "@context": "https://schema.org",
     "@type": "PetStore",
     "name": "River Ridge Pet Retreat",
     "description": "Dog boarding, grooming, and playtime in Dunlap, Tennessee.",
     "url": "https://riverridgepetretreat.com",
     "telephone": "[PHONE NUMBER]",
     "address": {
       "@type": "PostalAddress",
       "streetAddress": "1315 River Ridge Rd",
       "addressLocality": "Dunlap",
       "addressRegion": "TN",
       "postalCode": "37327",
       "addressCountry": "US"
     },
     "geo": {
       "@type": "GeoCoordinates",
       "latitude": 35.3722,    // approximate — verify
       "longitude": -85.3886
     },
     "areaServed": ["Dunlap, TN", "Sequatchie Valley", "Pikeville, TN", "Whitwell, TN"],
     "openingHoursSpecification": [
       // fill in once known
     ],
     "image": "https://riverridgepetretreat.com/images/hero.png",
     "priceRange": "$$",
     "sameAs": [
       // GBP URL, Facebook, etc. once available
     ]
   }
   ```

2. **`Person`** for Tess on the About page (subOrganization owner).
3. **`Service`** entries for Boarding, Grooming, Playtime — can nest under `LocalBusiness.makesOffer`.
4. **`FAQPage`** if/when an FAQ section is added (great for AI Overviews citations).
5. **`BreadcrumbList`** — minor benefit on a 3-page site, skip until the site grows.

---

## Performance (Core Web Vitals) — 60 / 100

Lab-only / static analysis. Field data (CrUX) requires deployment + traffic.

### Bundle sizes
| Asset | Size |
| --- | --- |
| Total JS | **630 KB** (uncompressed) |
| Largest single JS chunk | 222 KB |
| Total CSS | 17 KB |
| Total HTML | 116 KB |

For a 3-page brochure site, **630 KB of JS is heavy**. Most of this is the Next.js / React 19 runtime, not application code. You can't shed Next, but you can:

- Consider rendering [components/Header.tsx](../components/Header.tsx) without `'use client'` if the mobile menu can be CSS-only (e.g. with a checkbox + sibling-selector pattern). That would let the header live in the server bundle.
- Lazy-load the Google Maps `<iframe>` (already `loading="lazy"` ✓ — no change needed).
- Add `width` / `height` props on the iframe via inline style is already present but it relies on a fixed `300` height which is fine; CLS shouldn't suffer.

### LCP / INP / CLS predictions (lab-only)
- **LCP**: with a 1200×1200 hero PNG (once dropped in), expect 2.0–3.5s on slow 4G unmodified. Action: **convert to AVIF + WebP**, set explicit width/height, and use `priority` (already in spec). Target < 2.5s.
- **INP**: minimal interactivity (mobile menu toggle, conditional form fields). Should be < 100ms easily.
- **CLS**: placeholders use `aspect-ratio` so layout is reserved. Once real images go in with explicit `width`/`height`, CLS should be near 0.

---

## Images — 50 / 100

### Current state
- Zero `<img>` tags on any page (placeholders rendered as styled `<div role="img" aria-label="…">`).
- The five expected PNGs are not yet present in `public/images/`.
- `components/SiteImage.tsx` currently aliases to `PlaceholderImage`. Needs a one-line swap to `next/image` once real images land.

### Issues
| Severity | Issue |
| --- | --- |
| 🟠 High | `og:image` references `/images/hero.png` which doesn't exist. Will 404 on every social share preview if the site launches before the image is added. |
| 🟡 Medium | When real images go in, ship **both AVIF and WebP** with PNG fallback for older browsers. With `images: { unoptimized: true }` (required for static export) `next/image` won't transform them — pre-optimize at build/source. |
| 🟡 Medium | Add `width` and `height` attributes when real images replace placeholders to lock in CLS. |
| 🟢 Low | Consider an `apple-touch-icon` and a small `favicon.ico` (none currently in `public/`). |

### Alt text plan (already wired correctly in source — verify post-swap)
| Image | Current alt prop |
| --- | --- |
| `hero.png` | "Cartoon illustration of happy dogs at River Ridge Pet Retreat" ✓ |
| `service-boarding.png` | "Dog relaxing in a kennel run" ✓ |
| `service-grooming.png` | "Dog being bathed and groomed" ✓ |
| `service-playtime.png` | "Dog playing fetch with a person" ✓ |
| `tess-portrait.png` | "Cartoon portrait of Tess Boring, owner of River Ridge Pet Retreat" ✓ |

---

## AI Search Readiness — 35 / 100

### Current state
- No `public/llms.txt` (skipped citation hint for ChatGPT / Perplexity / Claude).
- No FAQ block — AI search loves Q&A passages it can quote.
- No structured data — AI assistants increasingly read schema for entity grounding.
- Brand mentions in body copy are good (name, location, owner all stated explicitly and consistently).
- Single H1 on home is well-formed for passage extraction.

### Recommendations
1. Add `public/llms.txt` (see Action Plan).
2. Add a 4–6 question FAQ to the home page or a new `/faq/` page, with `FAQPage` schema. Sample Qs: "Do dogs from the same household share a kennel?" / "What grooming services do you offer?" / "What's included in playtime?" / "How far in advance should I book?"
3. Add `LocalBusiness` schema (overlaps with #2 in Schema section).
4. Once GBP is live, add `sameAs` link in schema and surface GBP review snippets.

### Crawler accessibility
- robots.txt allows all UAs ✓
- No JS-only content (the contact page emptiness is a *separate* issue — those crawlers that don't run JS will see nothing on `/contact/`)
- `/contact/` Suspense issue actively *blocks* AI crawlers (most don't execute JS) from seeing the NAP and form. Fix #1 fixes this too.

---

## Local SEO — supplementary (Local Service detected)

The site is for a single brick-and-mortar location. The Local SEO posture pre-launch:

| Signal | Status |
| --- | --- |
| NAP in footer | ✓ visible on every page (but phone is `[PHONE NUMBER]`) |
| NAP on contact page | Should be — currently empty in static HTML |
| `LocalBusiness` schema | ❌ Missing |
| `tel:` link | ✓ present (placeholder) |
| Embedded map on contact | ✓ (lazy-loaded) |
| Address consistency | ✓ exact same across footer + contact + sitemap source |
| Service-area mentions in copy | Mentioned (Sequatchie Valley) — could be expanded with named towns: Pikeville, Whitwell, Jasper, Tracy City, South Pittsburg |

### Off-site (post-launch checklist)
- [ ] Claim Google Business Profile — primary category "Pet boarding service", secondary "Dog day care center" / "Pet groomer"
- [ ] Bing Places listing
- [ ] Apple Business Connect
- [ ] Yelp, Nextdoor, Facebook page
- [ ] BringFido, DogTrekker, Rover (only if Tess wants to take Rover bookings)
- [ ] Local citations: Sequatchie County Chamber of Commerce, Tennessee tourism listings

---

## Items blocked until deployment

These can only be measured against a live URL. Run the audit again after launch:

- CrUX field data (LCP, INP, CLS percentiles)
- Lighthouse score against production
- GSC URL Inspection / coverage / clicks / impressions
- GA4 organic traffic & engagement
- Backlink profile (Moz / Bing Webmaster / Common Crawl)
- AI visibility checks (ChatGPT scraper, Perplexity citation, Bing Copilot mentions)
- Real-world social share preview rendering
- HTTPS / HSTS / certificate validation
- TTFB and CDN behavior on Cloudflare Pages

---

*See [ACTION-PLAN.md](ACTION-PLAN.md) for the prioritized fix list with code-ready snippets.*
