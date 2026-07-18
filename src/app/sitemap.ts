import { Metadata } from 'next'

export default function sitemap() {
  const baseUrl = 'https://arohantech.com'

  const routes = [
    '',
    '/about',
    '/services',
    '/work',
    '/team',
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
