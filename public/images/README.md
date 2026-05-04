# Image assets

Source images for the site. Drop a new image in here, then run:

```
npm run images
```

This generates responsive AVIF variants (`-400.avif`, `-800.avif`) plus a JPG
fallback for the OG/social hero. The script (`scripts/optimize-images.mjs`)
skips files whose variants are already up to date, so re-running is cheap.

## Source files

| File | Dimensions | Subject |
| --- | --- | --- |
| `hero.avif` | 1200×1200 | Cartoon scene of happy dogs at the retreat |
| `service-boarding.avif` | 600×600 | Dog relaxing in a kennel run |
| `service-grooming.avif` | 600×600 | Dog being bathed/groomed |
| `service-playtime.avif` | 600×600 | Dog playing fetch with a person |
| `tess-portrait.avif` | 800×1000 | Cartoon portrait of Tess with a dog |

## Generated variants (do not edit by hand — re-run `npm run images`)

For each source: `<name>-400.avif` and `<name>-800.avif`. The `<picture>`
emitted by `<SiteImage>` uses these via `srcSet`/`sizes` so mobile users
fetch the smallest variant that fits.

`hero-og.jpg` is a 1200×1200 JPG used by `og:image` and the LocalBusiness
schema, since social-share crawlers (Facebook, LinkedIn, Twitter) don't
reliably support AVIF as of 2026.

## Adding a new image

1. Drop the AVIF source into this directory.
2. Add an entry to the `sources` array in `scripts/optimize-images.mjs`.
3. Run `npm run images`.
4. Reference it via `<SiteImage src="/images/foo.avif" sizes="..." />`.
