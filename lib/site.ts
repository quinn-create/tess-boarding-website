// Single source of truth for site identity, NAP, hours, geo, pricing,
// service areas, and customer-service copy. Anywhere the values appear in
// markup, schema, or copy should import from here so updates land in one place.

export const SITE_NAME = 'River Ridge Pet Retreat';
export const SITE_URL = 'https://riverridgepetretreat.com';
export const SITE_TAGLINE = 'A home away from home in the Sequatchie Valley';
export const SITE_DESCRIPTION =
  'Dog boarding, grooming, and playtime in Dunlap, Tennessee. Serving the Sequatchie Valley and surrounding areas. Run by lifelong dog person Tess Boring.';

export const ADDRESS = {
  streetAddress: '1315 River Ridge Rd',
  addressLocality: 'Dunlap',
  addressRegion: 'TN',
  postalCode: '37327',
  addressCountry: 'US',
} as const;

export const PHONE = {
  display: '[PHONE NUMBER]',
  href: 'tel:[PHONE NUMBER]',
} as const;

export const EMAIL = {
  display: '[EMAIL ADDRESS]',
  href: 'mailto:[EMAIL ADDRESS]',
} as const;

export const GEO = { latitude: 35.3722, longitude: -85.3886 } as const;

// Hours of operation. Replace placeholders with real values, or set
// `closed: true` for closed days. Schema generation in lib/schema.ts reads this.
type Hours = {
  label: string;
  display: string;
  schemaDays: string[];
  opens?: string; // 24h "HH:MM"
  closes?: string;
  closed?: boolean;
};

export const HOURS: Hours[] = [
  {
    label: 'Mon–Fri',
    display: '[HOURS_WEEKDAY]',
    schemaDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '18:00',
  },
  {
    label: 'Saturday',
    display: '[HOURS_SAT]',
    schemaDays: ['Saturday'],
    opens: '09:00',
    closes: '15:00',
  },
  {
    label: 'Sunday',
    display: 'Closed (pickup by appointment)',
    schemaDays: ['Sunday'],
    closed: true,
  },
];

export const SERVICE_AREAS = [
  'Dunlap, TN',
  'Sequatchie Valley',
  'Pikeville, TN',
  'Whitwell, TN',
  'Jasper, TN',
];

export const SLA_RESPONSE = 'We reply within 24 hours on weekdays.';
export const LICENSE_LINE = 'Licensed and insured.';

// Direct Google Maps directions URL (no API key, no embed JS).
export const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `${ADDRESS.streetAddress}, ${ADDRESS.addressLocality}, ${ADDRESS.addressRegion} ${ADDRESS.postalCode}`
)}`;
