import sharp from "sharp";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = __dirname + "/..";

// Read and base64-encode the logo
const logoBuffer = readFileSync(root + "/public/logo_transparent.png");
const logoB64 = logoBuffer.toString("base64");
const logoSrc = `data:image/png;base64,${logoB64}`;

// Canvas dimensions
const W = 1200;
const H = 630;

// Logo placement: 180×180 centered horizontally, top area
const LOGO_SIZE = 180;
const LOGO_X = (W - LOGO_SIZE) / 2;
const LOGO_Y = 85;

const svg = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <!-- Cyan glow top-left -->
    <radialGradient id="g1" cx="15%" cy="15%" r="55%">
      <stop offset="0%" stop-color="#0891b2" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="#0d1a2e" stop-opacity="0"/>
    </radialGradient>
    <!-- Blue glow bottom-right -->
    <radialGradient id="g2" cx="88%" cy="85%" r="48%">
      <stop offset="0%" stop-color="#1e40af" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="#0d1a2e" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="#0d1a2e"/>
  <rect width="${W}" height="${H}" fill="url(#g1)"/>
  <rect width="${W}" height="${H}" fill="url(#g2)"/>

  <!-- Thin top accent line -->
  <rect x="0" y="0" width="${W}" height="4" fill="#0891b2" opacity="0.8"/>

  <!-- Logo -->
  <image href="${logoSrc}" x="${LOGO_X}" y="${LOGO_Y}" width="${LOGO_SIZE}" height="${LOGO_SIZE}"/>

  <!-- Main headline -->
  <text
    x="${W / 2}" y="345"
    font-family="ui-sans-serif, system-ui, -apple-system, Helvetica Neue, Arial, sans-serif"
    font-size="70"
    font-weight="800"
    fill="#ffffff"
    text-anchor="middle"
    letter-spacing="-1">Swim Lessons in Miami</text>

  <!-- Accent subheading -->
  <text
    x="${W / 2}" y="420"
    font-family="ui-sans-serif, system-ui, -apple-system, Helvetica Neue, Arial, sans-serif"
    font-size="40"
    font-weight="600"
    fill="#22d3ee"
    text-anchor="middle">First lesson 50% off</text>

  <!-- Location line -->
  <text
    x="${W / 2}" y="492"
    font-family="ui-sans-serif, system-ui, -apple-system, Helvetica Neue, Arial, sans-serif"
    font-size="24"
    font-weight="400"
    fill="rgba(255,255,255,0.45)"
    text-anchor="middle">Hallandale Beach · Hollywood · Sunny Isles · Aventura, FL</text>

  <!-- Divider line -->
  <line x1="480" y1="533" x2="720" y2="533" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>

  <!-- Domain -->
  <text
    x="${W / 2}" y="565"
    font-family="ui-sans-serif, system-ui, -apple-system, Helvetica Neue, Arial, sans-serif"
    font-size="22"
    font-weight="400"
    fill="rgba(255,255,255,0.30)"
    text-anchor="middle">like-swim.com</text>
</svg>`.trim();

const outPath = root + "/public/og-image.png";
mkdirSync(dirname(outPath), { recursive: true });

await sharp(Buffer.from(svg))
  .png({ compressionLevel: 9, quality: 90 })
  .toFile(outPath);

console.log(`Generated ${outPath}`);
const stat = readFileSync(outPath);
console.log(`Size: ${(stat.length / 1024).toFixed(1)} KB`);
