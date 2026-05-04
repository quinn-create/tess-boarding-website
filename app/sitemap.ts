import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const paths = [
    '/',
    '/about/',
    '/services/boarding/',
    '/services/grooming/',
    '/contact/',
  ];
  return paths.map((p) => ({ url: `${SITE_URL}${p}`, lastModified }));
}
