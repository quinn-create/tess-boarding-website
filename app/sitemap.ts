import type { MetadataRoute } from 'next';

const SITE_URL = 'https://riverridgepetretreat.com';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: 'monthly' },
    { url: `${SITE_URL}/about/`, lastModified, changeFrequency: 'yearly' },
    { url: `${SITE_URL}/contact/`, lastModified, changeFrequency: 'yearly' },
  ];
}
