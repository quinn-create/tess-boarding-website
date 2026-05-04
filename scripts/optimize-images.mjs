#!/usr/bin/env node
// Pre-generates responsive AVIF variants and a JPG fallback for OG/social.
// Run after dropping a new source image into public/images/.
//
//   npm run images
//
// Skips files whose mtime is older than the existing variant.

import { mkdir, stat, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const imagesDir = path.join(root, 'public', 'images');

// One entry per source image. Variants are emitted as <basename>-<width>.<ext>.
// `og` produces a JPG of the given width for social-share crawlers (which
// don't reliably support AVIF as of 2026).
const sources = [
  { file: 'hero.avif',              widths: [400, 800],      og: 1200 },
  { file: 'service-boarding.avif',  widths: [400, 800] },
  { file: 'service-grooming.avif',  widths: [400, 800] },
  { file: 'service-playtime.avif',  widths: [400, 800] },
  { file: 'tess-portrait.avif',     widths: [400, 800] },
];

async function isStale(srcPath, outPath) {
  if (!existsSync(outPath)) return true;
  const [src, out] = await Promise.all([stat(srcPath), stat(outPath)]);
  return src.mtimeMs > out.mtimeMs;
}

async function emitAvif(srcPath, outPath, width) {
  await sharp(srcPath)
    .resize({ width, withoutEnlargement: true })
    .avif({ quality: 60, effort: 6 })
    .toFile(outPath);
}

async function emitOgJpg(srcPath, outPath, width) {
  await sharp(srcPath)
    .resize({ width, withoutEnlargement: true })
    .flatten({ background: '#FAF6EE' }) // cream — matches site bg if AVIF has alpha
    .jpeg({ quality: 82, progressive: true, mozjpeg: true })
    .toFile(outPath);
}

async function run() {
  await mkdir(imagesDir, { recursive: true });
  const present = new Set(await readdir(imagesDir));
  let built = 0;
  let skipped = 0;

  for (const { file, widths, og } of sources) {
    if (!present.has(file)) {
      console.warn(`! missing source: ${file} — skipping`);
      continue;
    }
    const srcPath = path.join(imagesDir, file);
    const { name } = path.parse(file);

    for (const width of widths) {
      const outPath = path.join(imagesDir, `${name}-${width}.avif`);
      if (await isStale(srcPath, outPath)) {
        await emitAvif(srcPath, outPath, width);
        console.log(`  ${name}-${width}.avif`);
        built++;
      } else {
        skipped++;
      }
    }

    if (og) {
      const outPath = path.join(imagesDir, `${name}-og.jpg`);
      if (await isStale(srcPath, outPath)) {
        await emitOgJpg(srcPath, outPath, og);
        console.log(`  ${name}-og.jpg`);
        built++;
      } else {
        skipped++;
      }
    }
  }

  console.log(`\nbuilt ${built}, skipped ${skipped} (already up to date)`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
