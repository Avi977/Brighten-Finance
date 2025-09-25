/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://bytonfinance.com',
  generateRobotsTxt: true,
  exclude: ['/api/*'],
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    additionalSitemaps: [
      'https://bytonfinance.com/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: path === '/' ? 'daily' : 'weekly',
      priority: path === '/' ? 1.0 : path === '/apply' ? 0.9 : 0.7,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
}