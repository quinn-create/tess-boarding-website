// Generate the Venmo QR code as a static PNG. Run via `npm run qr:venmo`.
// The PNG is committed to public/images/ and served as a static asset —
// no runtime generation, no third-party APIs.

import QRCode from 'qrcode';
import { mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';

const URL = 'https://venmo.com/u/tess_boring7';
const OUT = 'public/images/venmo-qr.png';

await mkdir(dirname(OUT), { recursive: true });

await QRCode.toFile(OUT, URL, {
  type: 'png',
  width: 600,
  margin: 2,
  errorCorrectionLevel: 'M',
  color: {
    dark: '#2C2A26', // ink
    light: '#FAF6EE', // cream
  },
});

console.log(`Wrote ${OUT} (encodes ${URL})`);
