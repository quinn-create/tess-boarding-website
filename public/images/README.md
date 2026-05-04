# Image assets

Drop the following PNG files into this directory. Until they're present the site renders cream "Image coming soon" placeholders at the correct aspect ratio.

| File | Dimensions | Subject |
| --- | --- | --- |
| `hero.png` | 1200×1200 | Cartoon scene of happy dogs at the retreat |
| `service-boarding.png` | 600×600 | Dog relaxing in a kennel run |
| `service-grooming.png` | 600×600 | Dog being bathed/groomed |
| `service-playtime.png` | 600×600 | Dog playing fetch with a person |
| `tess-portrait.png` | 800×1000 | Cartoon portrait of Tess with a dog |

After dropping the files in, replace the `SiteImage` placeholder component (`components/SiteImage.tsx`) with `next/image` references, or just swap that component to render `next/image` directly.

## Pre-optimize before shipping

Because `next.config.js` sets `images: { unoptimized: true }` (required for static export), `next/image` will **not** convert formats or resize. Pre-optimize at the source:

- Ship **AVIF** as the primary format (50–80% smaller than PNG, ~95% browser support as of 2026). Keep PNG as a fallback only if you're targeting very old browsers.
- For the 1200×1200 hero, also ship a 600×600 variant for mobile and use `<picture>`/`srcSet` if you go beyond a single `<img>`.
- A simple offline pipeline: `npx @squoosh/cli --avif '{quality:60}' public/images/*.png` (one-shot conversion), or use [squoosh.app](https://squoosh.app/) by hand.

Target sizes: hero ≤ 100 KB, service cards ≤ 40 KB each, portrait ≤ 80 KB.

