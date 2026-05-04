import { ADDRESS, DIRECTIONS_URL, SITE_NAME } from '@/lib/site';

// Lightweight map preview: a styled "topographic" SVG over a sage tint
// with the address and a "Get directions" CTA. Clicks open Google Maps
// directions in a new tab. ~2 KB vs ~300 KB for the iframe embed,
// no third-party tracking, no API key, identical practical UX.
export default function MapPreview({ className = '' }: { className?: string }) {
  return (
    <a
      href={DIRECTIONS_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Get directions to ${SITE_NAME} on Google Maps`}
      className={`group relative block overflow-hidden rounded-2xl bg-sage/15 shadow-sm transition-shadow hover:shadow-md ${className}`}
    >
      <svg
        className="h-64 w-full text-sage/40 sm:h-72"
        viewBox="0 0 600 300"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="topo"
            x="0"
            y="0"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 30 Q 15 10, 30 30 T 60 30"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <path
              d="M0 50 Q 15 30, 30 50 T 60 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <path
              d="M0 10 Q 15 -10, 30 10 T 60 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </pattern>
        </defs>
        <rect width="600" height="300" fill="url(#topo)" />
        <path
          d="M -20 200 Q 100 180, 220 210 T 460 220 T 640 230"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeOpacity="0.5"
        />
        {/* Pin */}
        <g transform="translate(300, 130)">
          <ellipse cx="0" cy="36" rx="14" ry="4" fill="#2C2A26" opacity="0.25" />
          <path
            d="M 0 -28 C -16 -28 -24 -16 -24 -2 C -24 14 0 30 0 30 C 0 30 24 14 24 -2 C 24 -16 16 -28 0 -28 Z"
            fill="#D88C6A"
          />
          <circle cx="0" cy="-6" r="7" fill="#FAF6EE" />
        </g>
      </svg>

      <div className="absolute inset-x-0 bottom-0 bg-cream/95 p-4 backdrop-blur-sm sm:p-5">
        <p className="font-heading text-base font-bold text-ink sm:text-lg">
          {SITE_NAME}
        </p>
        <p className="text-sm text-ink/80">
          {ADDRESS.streetAddress} · {ADDRESS.addressLocality}, {ADDRESS.addressRegion}{' '}
          {ADDRESS.postalCode}
        </p>
        <p className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-sage-dark group-hover:underline">
          Get directions
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </p>
      </div>
    </a>
  );
}
