// Rasterizes public/favicon.svg to PNG fallbacks for browsers/OSes that
// don't use SVG favicons. Re-run if favicon.svg changes.
import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const svgPath = fileURLToPath(new URL('../public/favicon.svg', import.meta.url));
const svg = readFileSync(svgPath);

const targets = [
  { size: 32, out: '../public/favicon-32.png' },
  { size: 180, out: '../public/apple-touch-icon.png' },
];

for (const { size, out } of targets) {
  const outPath = fileURLToPath(new URL(out, import.meta.url));
  await sharp(svg).resize(size, size).png().toFile(outPath);
  console.log('Wrote', outPath);
}
