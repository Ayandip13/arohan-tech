import { Metadata } from 'next'

export default function sitemap() {
  const baseUrl = 'https://aarohantechsolutions.in'

  const routes = [
    '',
    '/about',
    '/services',
    '/work',
    '/careers',
    '/contact',
    '/blog',
    '/faq',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))

  return [...routes]
}
