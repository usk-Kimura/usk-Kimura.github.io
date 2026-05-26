#!/usr/bin/env node
// Optimize the source portrait photo into web-friendly square crops.
//
// Source: ./PXL_20260224_091232131.jpg  (2268x4032 portrait)
// Output: public/portrait-{480,640,1280}.{avif,webp,jpg}
//
// We crop to a square focused on the upper third of the frame so the head and
// shoulders are well composed, then emit three widths and three formats so the
// Astro template can deliver AVIF → WebP → JPEG with a srcset for retina.
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import sharp from 'sharp';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');
const src = resolve(root, 'src/assets/portrait-source.jpg');
const outDir = resolve(root, 'public');

await mkdir(outDir, { recursive: true });

try {
  await access(src);
} catch {
  console.warn(`[images] source not found, skipping: ${src}`);
  process.exit(0);
}

const input = await readFile(src);
const meta = await sharp(input).metadata();
const { width = 0, height = 0 } = meta;

// Square crop, centered horizontally, biased toward the top so the face sits
// in the upper-middle of the resulting square instead of the dead center.
const side = Math.min(width, height);
const left = Math.round((width - side) / 2);
const top = Math.max(0, Math.round(height * 0.08));

const square = await sharp(input)
  .rotate() // honor EXIF orientation
  .extract({ left, top, width: side, height: side })
  .toBuffer();

const sizes = [480, 640, 1280];
const tasks = [];

for (const w of sizes) {
  const base = sharp(square).resize(w, w, { fit: 'cover' });
  tasks.push(
    base
      .clone()
      .avif({ quality: 60, effort: 4 })
      .toBuffer()
      .then((buf) => writeFile(resolve(outDir, `portrait-${w}.avif`), buf)),
    base
      .clone()
      .webp({ quality: 78 })
      .toBuffer()
      .then((buf) => writeFile(resolve(outDir, `portrait-${w}.webp`), buf)),
    base
      .clone()
      .jpeg({ quality: 82, mozjpeg: true })
      .toBuffer()
      .then((buf) => writeFile(resolve(outDir, `portrait-${w}.jpg`), buf)),
  );
}

await Promise.all(tasks);
console.log(`portrait images written to ${outDir} (${sizes.join(', ')}px in AVIF/WebP/JPEG)`);
