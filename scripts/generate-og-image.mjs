// Generates the default Open Graph / Twitter card image from an inline SVG.
// Re-run with `node scripts/generate-og-image.mjs` if brand tokens change.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#262922" />
      <stop offset="100%" stop-color="#1B1D17" />
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)" />
  <rect x="80" y="120" width="48" height="2" fill="#B48A4C" />
  <text x="80" y="230" font-family="Georgia, serif" font-size="72" font-weight="700" fill="#F6F1E3">Second Line AI</text>
  <text x="80" y="290" font-family="Arial, sans-serif" font-size="22" letter-spacing="3" fill="#D8B679">LOUISIANA HVAC REVENUE RECOVERY</text>
  <text x="80" y="380" font-family="Georgia, serif" font-style="italic" font-size="34" fill="#E6DFC8">Recover More of the Revenue</text>
  <text x="80" y="424" font-family="Georgia, serif" font-style="italic" font-size="34" fill="#E6DFC8">You&#8217;re Already Paying to Generate.</text>
  <rect x="80" y="470" width="48" height="2" fill="#B48A4C" />
</svg>
`;

const outPath = fileURLToPath(new URL('../public/og/default.png', import.meta.url));
await sharp(Buffer.from(svg)).png().toFile(outPath);
console.log('Wrote', outPath);
