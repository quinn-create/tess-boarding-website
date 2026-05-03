import type { Metadata } from 'next';
import { Fraunces, Nunito } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-fraunces',
  display: 'swap',
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-nunito',
  display: 'swap',
});

const SITE_URL = 'https://riverridgepetretreat.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'River Ridge Pet Retreat | Dog Boarding & Grooming in Dunlap, TN',
    template: '%s | River Ridge Pet Retreat',
  },
  description:
    'Dog boarding, grooming, and playtime in Dunlap, Tennessee. Serving the Sequatchie Valley and surrounding areas. Run by lifelong dog person Tess Boring.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'River Ridge Pet Retreat',
    url: SITE_URL,
    description:
      'Dog boarding, grooming, and playtime in Dunlap, Tennessee. Serving the Sequatchie Valley and surrounding areas. Run by lifelong dog person Tess Boring.',
    images: [
      {
        url: '/images/hero.png',
        width: 1200,
        height: 1200,
        alt: 'River Ridge Pet Retreat',
      },
    ],
  },
};

// LocalBusiness schema renders on every page so AI assistants and search
// engines can ground entity facts (NAP, geo, hours, services). Replace the
// telephone, geo coordinates, and openingHoursSpecification with real values.
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'PetStore',
  '@id': `${SITE_URL}/#business`,
  name: 'River Ridge Pet Retreat',
  description:
    'Dog boarding, grooming, and playtime in Dunlap, Tennessee. Serving the Sequatchie Valley.',
  url: SITE_URL,
  telephone: '[PHONE NUMBER]',
  image: `${SITE_URL}/images/hero.png`,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1315 River Ridge Rd',
    addressLocality: 'Dunlap',
    addressRegion: 'TN',
    postalCode: '37327',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 35.3722,
    longitude: -85.3886,
  },
  areaServed: [
    'Dunlap, TN',
    'Sequatchie Valley',
    'Pikeville, TN',
    'Whitwell, TN',
    'Jasper, TN',
  ],
  openingHoursSpecification: [],
  sameAs: [],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Dog boarding',
        description:
          'Cozy indoor/outdoor kennel runs with plenty of attention. Dogs from the same household can share a run at a reduced rate.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Dog grooming',
        description:
          'Bath, de-shedding treatment, and nail trimming.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Playtime add-on',
        description:
          'One-on-one play sessions with a dog tech during a boarding stay.',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${nunito.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </body>
    </html>
  );
}
