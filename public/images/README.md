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
