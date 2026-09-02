import type { MetadataRoute } from 'next';

/* Required under `output: export`; the route is generated once at build time. */
export const dynamic = 'force-static';

const BASE = 'https://www.ghanithan.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['/', '/resume/', '/reading/', '/about/'].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
  }));
}
