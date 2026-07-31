import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/employee/'],
    },
    sitemap: 'https://aarohantech.com/sitemap.xml',
  }
}
