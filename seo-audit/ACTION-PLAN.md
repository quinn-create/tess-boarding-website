# River Ridge Pet Retreat — SEO Action Plan

Prioritized fix list. Critical items block launch; everything else can be sequenced post-launch.

| Priority | Effort | Impact |
| --- | --- | --- |
| 🔴 Critical | Fix immediately — blocks indexing or breaks content |
| 🟠 High | Within 1 week — significantly impacts rankings |
| 🟡 Medium | Within 1 month — optimization opportunities |
| 🟢 Low | Backlog — nice to have |

---

## 🔴 CRITICAL (must fix before launch)

### 1. Restore `/contact/` page content in static HTML

**Problem:** [app/contact/page.tsx](../app/contact/page.tsx) wraps the whole page in `<Suspense fallback={null}>` because `useSearchParams` is used inside. Next.js then emits the fallback (= nothing) into the static HTML, so `out/contact/index.html` has an empty `<main>`. No H1, no NAP, no form, no map for crawlers or no-JS visitors.

**Fix:** Move only the `useSearchParams`-using piece (the success banner) inside the Suspense boundary. The rest of the page should render server-side normally.

**Effort:** 5 minutes

**Implementation sketch:**
- Refactor [app/contact/ContactPageClient.tsx](../app/contact/ContactPageClient.tsx) so the file no longer calls `useSearchParams` at the top level.
- Extract a tiny `<SuccessBanner />` client component that calls `useSearchParams` and renders the banner.
- In `ContactPageClient.tsx`, render `<Suspense fallback={null}><SuccessBanner /></Suspense>` above the form. The rest of the page (H1, NAP, map, form) renders normally as part of the page's static output.
- Drop the outer Suspense in [app/contact/page.tsx](../app/contact/page.tsx).

After the change, re-run `npm run build` and verify `out/contact/index.html` contains "Get in touch", "1315 River Ridge Rd", and the `<form action="…web3forms…">` in the `<main>`.

---

### 2. Replace `[PHONE NUMBER]` placeholders

**Problem:** Both visible text and `tel:` href are placeholders. The site is otherwise launch-ready.

**Fix:** Search-and-replace `[PHONE NUMBER]` across the codebase. The visible text can be `(423) 555-0123` style; the `tel:` href should be digits-only with `+1` country code, e.g. `tel:+14235550123`.

Files: [components/Footer.tsx](../components/Footer.tsx), [app/contact/ContactPageClient.tsx](../app/contact/ContactPageClient.tsx).

**Effort:** 1 minute

---

### 3. Replace `[WEB3FORMS_ACCESS_KEY]` placeholder

**Problem:** Form submissions will fail until a real Web3Forms access key is added.

**Fix:** Get a free key from [web3forms.com](https://web3forms.com) and replace in [app/contact/ContactPageClient.tsx](../app/contact/ContactPageClient.tsx).

**Effort:** 5 minutes (sign-up + paste)

---

## 🟠 HIGH (within 1 week)

### 4. Add `LocalBusiness` JSON-LD to the layout

**Problem:** Zero structured data. Single biggest miss for a local business.

**Fix:** Add a JSON-LD `<script>` in [app/layout.tsx](../app/layout.tsx) inside the `<body>` (or at the page level if you prefer per-page tweaks).

```tsx
const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'PetStore',
  name: 'River Ridge Pet Retreat',
  description: 'Dog boarding, grooming, and playtime in Dunlap, Tennessee.',
  url: 'https://riverridgepetretreat.com',
  telephone: '+1-423-555-0123',          // real number
  image: 'https://riverridgepetretreat.com/images/hero.png',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1315 River Ridge Rd',
    addressLocality: 'Dunlap',
    addressRegion: 'TN',
    postalCode: '37327',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 35.3722,                    // verify exact coords once GBP is set
    longitude: -85.3886,
  },
  areaServed: ['Dunlap', 'Sequatchie Valley', 'Pikeville', 'Whitwell', 'Jasper'],
  openingHoursSpecification: [
    // fill in when known, e.g.:
    // { '@type': 'OpeningHoursSpecification',
    //   dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'],
    //   opens: '08:00', closes: '18:00' }
  ],
  sameAs: [
    // GBP URL, Facebook URL, etc. once available
  ],
};

// In RootLayout's <body>:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
/>
```

Validate with [Schema.org Validator](https://validator.schema.org/) and [Rich Results Test](https://search.google.com/test/rich-results) once deployed.

**Effort:** 20 minutes (writing + filling in real values)

---

### 5. Add canonical URLs

**Problem:** No `<link rel="canonical">` on any page.

**Fix:** In each page's `metadata` export, set `alternates.canonical`:

```tsx
// app/page.tsx
export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

// app/about/page.tsx
export const metadata: Metadata = {
  title: 'About Tess',
  description: '…',
  alternates: { canonical: '/about' },
};

// app/contact/page.tsx
export const metadata: Metadata = {
  title: 'Contact',
  description: '…',
  alternates: { canonical: '/contact' },
};
```

`metadataBase` is already set in the root layout, so relative paths resolve correctly.

**Effort:** 5 minutes

---

### 6. Fix per-page Open Graph titles

**Problem:** [app/layout.tsx](../app/layout.tsx) hard-codes `openGraph.title`, so every page emits the same OG title regardless of per-page metadata.

**Fix:** Either remove `openGraph.title` from the layout (Next.js will auto-derive from each page's `title`) or add per-page `openGraph` overrides:

```tsx
// app/about/page.tsx
export const metadata: Metadata = {
  title: 'About Tess',
  description: 'Meet Tess Boring, the lifelong dog person behind River Ridge Pet Retreat.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Tess',
    description: 'Meet Tess Boring, the lifelong dog person behind River Ridge Pet Retreat.',
  },
};
```

Same for `/contact/`.

**Effort:** 10 minutes

---

### 7. Drop the five real images into `public/images/`

**Problem:** `og:image` references a file that doesn't exist; placeholders are nice for layout but useless for users, social shares, and search.

**Fix:** Generate / source the five PNGs (see [public/images/README.md](../public/images/README.md)) and:

1. Place files in `public/images/`.
2. Edit [components/SiteImage.tsx](../components/SiteImage.tsx) to render `next/image` (currently aliases to placeholder). One-line swap.
3. Pre-optimize: ship AVIF + WebP fallbacks. Since `images: { unoptimized: true }` is required for static export, do this at build time (or just ship a single AVIF and accept slight compatibility loss on very old browsers).

**Effort:** Variable (depends on image creation) — 15 min once files exist.

---

## 🟡 MEDIUM (within 1 month)

### 8. Add `public/llms.txt`

**Why:** Boosts citation likelihood by ChatGPT, Perplexity, and Claude.

**File:** `public/llms.txt`

```
# River Ridge Pet Retreat

> Dog boarding, grooming, and playtime in Dunlap, Tennessee. Run by Tess Boring,
> who has spent a lifetime caring for dogs. Serves the Sequatchie Valley.

## Location
1315 River Ridge Rd, Dunlap, TN 37327
Phone: (xxx) xxx-xxxx

## Pages
- [Home](https://riverridgepetretreat.com/) — services overview
- [About Tess](https://riverridgepetretreat.com/about/) — owner bio
- [Contact](https://riverridgepetretreat.com/contact/) — booking inquiry form
```

**Effort:** 5 minutes

---

### 9. Add an FAQ section + `FAQPage` schema

**Why:** AI Overviews / Perplexity / ChatGPT love to cite Q&A passages. Also fills out the home page (currently 178 words, borderline thin).

**Suggested questions:**
1. Do dogs from the same household share a kennel?
2. What grooming services do you offer?
3. What's included in the playtime add-on?
4. How far in advance should I book?
5. What vaccinations do you require?
6. What should I bring when dropping off my dog?

Add to home page below "What we offer" with a `FAQPage` JSON-LD block.

**Effort:** 30–60 minutes (writing) + 15 min (schema)

---

### 10. Add an H2 on the About page

**Problem:** About goes H1 → H3 (footer), which is structurally weak and gives AI search nothing mid-page to grab onto.

**Fix:** Insert one H2 in the bio, e.g. "From the valley, for the valley" between paragraphs 1 and 2, or "Why she built River Ridge" before paragraph 3.

**Effort:** 2 minutes

---

### 11. Expand home page copy past 250 words

**Why:** Current 178-word body is borderline thin. Adding a "Why families choose River Ridge" section (3 short paragraphs or 4 bullets) lifts both content score and AI citation likelihood.

**Effort:** 20–30 minutes (writing)

---

### 12. Add `Service` and `Person` schema

After `LocalBusiness` is in place, layer:
- A `Person` block on `/about/` for Tess (`@type: Person`, `name`, `description`, `worksFor` → the LocalBusiness).
- `makesOffer` on the LocalBusiness with `Service` entries for Boarding, Grooming, Playtime.

**Effort:** 30 minutes

---

### 13. Bundle-size review

**Problem:** 630 KB JS for a 3-page brochure site is more than needed.

**Fix candidates:**
- Try replacing the `'use client'` mobile menu in [components/Header.tsx](../components/Header.tsx) with a CSS-only checkbox-hack (`<input type="checkbox">` + `:checked` sibling selectors). Removes one client component.
- Audit whether `Header` actually needs `usePathname` for the active link — could be done with `pathname` from a server component if Next exposes it (it doesn't reliably; CSS-only sibling targeting is the cleanest path).
- Skip if performance lab scores look fine post-launch.

**Effort:** 1–2 hours, optional.

---

## 🟢 LOW (backlog)

### 14. Add favicon and apple-touch-icon

Drop a `favicon.ico` (32×32) and `apple-touch-icon.png` (180×180) in `public/`. Next.js picks them up automatically.

**Effort:** 10 minutes (once a brand mark / paw icon at higher res exists).

---

### 15. Cloudflare Pages `_headers` file

For a stricter security posture once deployed, add `public/_headers`:

```
/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
```

Skip CSP unless you're prepared to maintain it (Web3Forms post + Google Maps iframe make a tight CSP fiddly).

**Effort:** 10 minutes

---

### 16. Drop sitemap `priority` field

Google ignores it; modern guidance is to omit it. Trim from [app/sitemap.ts](../app/sitemap.ts) for cleanliness.

**Effort:** 1 minute

---

### 17. Add a `sameAs` array once social profiles exist

Once GBP, Facebook, Instagram, etc. are live, add their URLs to the `sameAs` field of the `LocalBusiness` schema. Strengthens entity disambiguation.

**Effort:** 5 minutes (later)

---

## Implementation roadmap

**Day 0 — pre-launch sprint (~2 hours):**
1. Fix the Suspense / contact page issue (#1).
2. Replace `[PHONE NUMBER]` (#2).
3. Get Web3Forms key + replace placeholder (#3).
4. Add real images, switch `SiteImage` to `next/image` (#7).
5. Add `LocalBusiness` schema (#4).
6. Add canonicals (#5).
7. Fix OG titles (#6).

**Week 1 (post-launch, after GBP claim):**
8. Add `llms.txt` (#8).
9. Add FAQ section + `FAQPage` schema (#9).
10. Add H2 on About (#10).
11. Expand home copy (#11).
12. Verify on PageSpeed Insights, Rich Results Test, Schema Validator.
13. Submit sitemap to GSC.

**Month 1:**
14. Layer `Service` + `Person` schema (#12).
15. Watch CrUX field data; bundle-size optimization if INP/LCP are poor (#13).
16. Polish: favicon, headers, sitemap cleanup (#14–16).
17. As citations roll in, populate `sameAs` (#17).

---

## Re-audit triggers

Run `/seo-audit` again after:
- Launch (live URL → can fetch CrUX field data, GSC, etc.)
- Adding the `LocalBusiness` schema (validate)
- Any major content additions (FAQ, services pages)
- 3 months post-launch (track field-data trend)
