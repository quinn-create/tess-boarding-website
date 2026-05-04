import { ADDRESS, DIRECTIONS_URL, SITE_NAME } from '@/lib/site';

// Cartoon valley map: distant ridges, the Sequatchie River, a small road
// network with the property centered at the River Ridge Rd / main-road
// intersection, and a paw-pin marking the spot. Hand-drawn-feeling SVG
// in the site's cream/sage/terracotta palette. Sized to approximate the
// height of the contact form on desktop.
export default function MapPreview({ className = '' }: { className?: string }) {
  return (
    <a
      href={DIRECTIONS_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Get directions to ${SITE_NAME} on Google Maps`}
      className={`group relative block overflow-hidden rounded-2xl bg-cream shadow-sm transition-shadow hover:shadow-md ${className}`}
    >
      <svg
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
        className="h-96 w-full sm:h-[28rem] lg:h-[34rem]"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {/* Far mountain ridge */}
        <path
          d="M 0 130 Q 80 70, 160 100 T 320 90 T 480 110 T 600 95 L 600 230 L 0 230 Z"
          fill="#7A9B76"
          opacity="0.14"
        />
        {/* Mid mountain ridge */}
        <path
          d="M 0 175 Q 110 115, 220 155 T 420 140 T 600 165 L 600 250 L 0 250 Z"
          fill="#7A9B76"
          opacity="0.22"
        />
        {/* Near rolling hill */}
        <path
          d="M 0 220 Q 150 195, 300 215 T 600 220 L 600 280 L 0 280 Z"
          fill="#7A9B76"
          opacity="0.18"
        />

        {/* Sequatchie River — flows from upper-right to lower-left */}
        <path
          d="M 620 130 Q 540 175, 480 220 T 360 305 T 200 380 T -20 460"
          stroke="#B4CFAE"
          strokeWidth="20"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 620 130 Q 540 175, 480 220 T 360 305 T 200 380 T -20 460"
          stroke="#FAF6EE"
          strokeWidth="2"
          strokeDasharray="3 14"
          fill="none"
          strokeLinecap="round"
          opacity="0.7"
        />

        {/* Small creek branching off river toward bottom-right */}
        <path
          d="M 380 295 Q 430 330, 470 380 T 520 470"
          stroke="#B4CFAE"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          opacity="0.7"
        />

        {/* Main valley road — horizontal across, gentle curve */}
        <path
          d="M -10 410 Q 130 388, 250 398 T 480 405 T 615 408"
          stroke="#6B5235"
          strokeWidth="11"
          fill="none"
          strokeLinecap="round"
          opacity="0.42"
        />
        <path
          d="M -10 410 Q 130 388, 250 398 T 480 405 T 615 408"
          stroke="#FAF6EE"
          strokeWidth="1.5"
          strokeDasharray="7 11"
          fill="none"
          strokeLinecap="round"
        />

        {/* Bridge across the river where main road crosses (near x=200) */}
        <g stroke="#6B5235" strokeWidth="1.5" strokeLinecap="round" opacity="0.65">
          <line x1="190" y1="392" x2="198" y2="420" />
          <line x1="208" y1="388" x2="216" y2="416" />
        </g>

        {/* River Ridge Rd — branches off main road and runs up to property */}
        <path
          d="M 300 408 Q 296 380, 300 350 T 300 320"
          stroke="#6B5235"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          opacity="0.42"
        />
        <path
          d="M 300 408 Q 296 380, 300 350 T 300 320"
          stroke="#FAF6EE"
          strokeWidth="1.3"
          strokeDasharray="5 8"
          fill="none"
          strokeLinecap="round"
        />

        {/* Minor side road on the left */}
        <path
          d="M 90 408 Q 78 360, 70 320 T 60 250"
          stroke="#6B5235"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          opacity="0.3"
        />
        <path
          d="M 90 408 Q 78 360, 70 320 T 60 250"
          stroke="#FAF6EE"
          strokeWidth="1.1"
          strokeDasharray="4 6"
          fill="none"
          strokeLinecap="round"
          opacity="0.7"
        />

        {/* Minor side road on the right */}
        <path
          d="M 510 408 Q 530 380, 545 340 T 560 270"
          stroke="#6B5235"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          opacity="0.3"
        />
        <path
          d="M 510 408 Q 530 380, 545 340 T 560 270"
          stroke="#FAF6EE"
          strokeWidth="1.1"
          strokeDasharray="4 6"
          fill="none"
          strokeLinecap="round"
          opacity="0.7"
        />

        {/* Small pond on the lower-left */}
        <ellipse cx="115" cy="475" rx="35" ry="14" fill="#B4CFAE" opacity="0.7" />
        <ellipse
          cx="115"
          cy="473"
          rx="22"
          ry="6"
          fill="#FAF6EE"
          opacity="0.4"
        />

        {/* Forest scatter — sage tree clusters spread around */}
        <g fill="#5D7A5A">
          {/* upper-left grove */}
          <circle cx="35" cy="200" r="10" />
          <circle cx="50" cy="190" r="8" />
          <circle cx="65" cy="205" r="9" />
          <circle cx="42" cy="218" r="7" />
          {/* upper-mid grove */}
          <circle cx="180" cy="195" r="9" />
          <circle cx="200" cy="205" r="10" />
          <circle cx="218" cy="195" r="8" />
          <circle cx="195" cy="220" r="7" />
          {/* upper-right grove */}
          <circle cx="475" cy="200" r="10" />
          <circle cx="495" cy="190" r="8" />
          <circle cx="515" cy="205" r="9" />
          <circle cx="535" cy="195" r="7" />
          {/* property-side trees (sparse, near property) */}
          <circle cx="240" cy="320" r="7" />
          <circle cx="252" cy="332" r="5" />
          <circle cx="358" cy="318" r="7" />
          <circle cx="370" cy="332" r="5" />
          {/* lower-mid scatter */}
          <circle cx="160" cy="450" r="9" />
          <circle cx="180" cy="465" r="7" />
          <circle cx="195" cy="445" r="6" />
          {/* lower-right scatter */}
          <circle cx="430" cy="465" r="8" />
          <circle cx="455" cy="478" r="9" />
          <circle cx="475" cy="465" r="6" />
          {/* far lower-right grove */}
          <circle cx="540" cy="475" r="10" />
          <circle cx="560" cy="490" r="8" />
          <circle cx="572" cy="470" r="7" />
          {/* sparse mid valley */}
          <circle cx="345" cy="380" r="5" />
          <circle cx="265" cy="385" r="5" />
        </g>

        {/* Property cluster — fence, kennel runs, cabin (smaller, centered) */}
        <g transform="translate(300, 348)">
          {/* fence outline */}
          <rect
            x="-36"
            y="-19"
            width="72"
            height="42"
            rx="5"
            fill="#FAF6EE"
            stroke="#6B5235"
            strokeWidth="1.2"
            strokeDasharray="2.5 2.5"
            opacity="0.85"
          />
          {/* kennel runs along the bottom of the lot */}
          <g fill="#7A9B76">
            <rect x="-31" y="6" width="14" height="13" rx="1.5" />
            <rect x="-15" y="6" width="14" height="13" rx="1.5" />
            <rect x="1" y="6" width="14" height="13" rx="1.5" />
            <rect x="17" y="6" width="14" height="13" rx="1.5" />
          </g>
          {/* cabin */}
          <g>
            <rect x="-12" y="-11" width="24" height="13" fill="#D88C6A" rx="1.5" />
            <polygon points="-15,-11 0,-22 15,-11" fill="#6B5235" />
            <rect x="-1.5" y="-5" width="3" height="7" fill="#6B5235" />
            <rect x="-9" y="-7" width="3" height="3" fill="#FAF6EE" />
            <rect x="6" y="-7" width="3" height="3" fill="#FAF6EE" />
          </g>
        </g>

        {/* Pin (sits above the property) */}
        <g transform="translate(300, 312)">
          <ellipse cx="0" cy="16" rx="10" ry="3" fill="#2C2A26" opacity="0.2" />
          <path
            d="M 0 -19 C -11 -19, -16 -11, -16 -1 C -16 10, 0 21, 0 21 C 0 21, 16 10, 16 -1 C 16 -11, 11 -19, 0 -19 Z"
            fill="#D88C6A"
          />
          <circle cx="0" cy="-4" r="6" fill="#FAF6EE" />
          {/* paw print inside the pin head */}
          <g transform="translate(0, -5) scale(0.11)" fill="#7A9B76">
            <ellipse cx="-14" cy="2" rx="6" ry="8" />
            <ellipse cx="14" cy="2" rx="6" ry="8" />
            <ellipse cx="-6" cy="-10" rx="5" ry="7" />
            <ellipse cx="6" cy="-10" rx="5" ry="7" />
            <path d="M0 8c-9 0-16 7-16 15 0 6 5 10 10 10 3 0 4-2 6-2s3 2 6 2c5 0 10-4 10-10 0-8-7-15-16-15z" />
          </g>
        </g>

        {/* Address callout above the pin */}
        <g transform="translate(300, 268)">
          <rect
            x="-78"
            y="-14"
            width="156"
            height="22"
            rx="11"
            fill="#FAF6EE"
            stroke="#D88C6A"
            strokeWidth="1.5"
          />
          <text
            x="0"
            y="1"
            textAnchor="middle"
            fontFamily="var(--font-fraunces), serif"
            fontSize="11.5"
            fontWeight="700"
            fill="#2C2A26"
          >
            1315 River Ridge Rd
          </text>
        </g>

        {/* Compass rose — top-left */}
        <g transform="translate(75, 80)">
          <circle
            r="22"
            fill="#FAF6EE"
            stroke="#6B5235"
            strokeWidth="1.5"
            opacity="0.95"
          />
          <path d="M 0 -16 L 5 0 L 0 -3 L -5 0 Z" fill="#D88C6A" />
          <path d="M 0 16 L 5 0 L 0 3 L -5 0 Z" fill="#6B5235" opacity="0.6" />
          <text
            x="0"
            y="-25"
            textAnchor="middle"
            fontFamily="var(--font-fraunces), serif"
            fontSize="11"
            fontWeight="700"
            fill="#6B5235"
          >
            N
          </text>
        </g>

        {/* River label — angled along the river */}
        <text
          transform="translate(420 245) rotate(30)"
          fontFamily="var(--font-fraunces), serif"
          fontStyle="italic"
          fontSize="14"
          fill="#5D7A5A"
          opacity="0.85"
        >
          Sequatchie River
        </text>

        {/* River Ridge Rd label — vertical along the side road */}
        <text
          transform="translate(312 388) rotate(-90)"
          fontFamily="var(--font-fraunces), serif"
          fontSize="11"
          fill="#6B5235"
          opacity="0.85"
        >
          River Ridge Rd
        </text>
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
