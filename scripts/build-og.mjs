#!/usr/bin/env node
// Generate /public/og-image.png from /public/og-image.svg.
// Social crawlers (Twitter, Facebook, LinkedIn) often skip SVG og:images,
// so we ship a PNG as the primary card and keep the SVG as a fallback.
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import sharp from 'sharp';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');
const svgPath = resolve(root, 'public/og-image.svg');
const pngPath = resolve(root, 'public/og-image.png');

const svg = await readFile(svgPath);
const png = await sharp(svg, { density: 192 })
  .resize(1200, 630, { fit: 'cover' })
  .png({ compressionLevel: 9 })
  .toBuffer();

await writeFile(pngPath, png);
console.log(`og-image.png written (${png.length} bytes)`);
