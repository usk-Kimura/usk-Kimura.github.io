#!/usr/bin/env node
// Rasterise public/favicon.svg into the PNG fallbacks browsers still need.
//
// An SVG favicon covers modern desktop browsers, but not everything reads it:
// iOS home screens, Android "add to home screen", and several link-preview
// crawlers want a PNG. Generating them from the one SVG keeps them in sync —
// edit favicon.svg and every size follows.
//
// Output: public/favicon-{32,192}.png, public/apple-touch-icon.png
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import sharp from 'sharp';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');
const outDir = resolve(root, 'public');
const svg = await readFile(resolve(outDir, 'favicon.svg'));

/** Must match `.plate` in favicon.svg — used to fill the corners on iOS. */
const PLATE = '#0c666e';

// Render from a high density so the diagonals stay clean when downscaled.
const render = (size) => sharp(svg, { density: 1024 }).resize(size, size);

await Promise.all([
  // Rounded corners stay transparent: the tile has to sit on whatever colour
  // the browser chrome happens to be.
  render(32)
    .png({ compressionLevel: 9 })
    .toBuffer()
    .then((b) => writeFile(resolve(outDir, 'favicon-32.png'), b)),

  render(192)
    .png({ compressionLevel: 9 })
    .toBuffer()
    .then((b) => writeFile(resolve(outDir, 'favicon-192.png'), b)),

  // iOS applies its own corner radius and composites over black, so this one
  // is flattened edge to edge — otherwise the rounded corners show up twice,
  // with black wedges between them.
  render(180)
    .flatten({ background: PLATE })
    .png({ compressionLevel: 9 })
    .toBuffer()
    .then((b) => writeFile(resolve(outDir, 'apple-touch-icon.png'), b)),
]);

console.log('icons written: favicon-32.png, favicon-192.png, apple-touch-icon.png');
