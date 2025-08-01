import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/auth/reset-password/'],
    },
    sitemap: 'https://clami.app/sitemap.xml',
  };
}