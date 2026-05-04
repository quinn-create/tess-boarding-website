import {
  ADDRESS,
  GEO,
  HOURS,
  PHONE,
  SERVICE_AREAS,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from './site';
import { services } from './services';

const openingHoursSpecification = HOURS.flatMap((h) =>
  h.closed || !h.opens || !h.closes
    ? []
    : [
        {
          '@type': 'OpeningHoursSpecification' as const,
          dayOfWeek: h.schemaDays,
          opens: h.opens,
          closes: h.closes,
        },
      ]
);

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'PetStore',
  '@id': `${SITE_URL}/#business`,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  telephone: PHONE.display,
  image: `${SITE_URL}/images/hero.png`,
  priceRange: '$$',
  address: { '@type': 'PostalAddress', ...ADDRESS },
  geo: { '@type': 'GeoCoordinates', ...GEO },
  areaServed: SERVICE_AREAS,
  openingHoursSpecification,
  sameAs: [],
  makesOffer: services
    .filter((s) => s.slug !== 'playtime')
    .map((s) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: s.title,
        description: s.blurb,
        url: `${SITE_URL}${s.href}`,
      },
    })),
};
