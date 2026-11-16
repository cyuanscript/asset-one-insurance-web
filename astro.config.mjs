import { defineConfig } from 'astro/config';

export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: { prefixDefaultLocale: false },
  },
  // News was renamed Insights: keep old links working
  redirects: {
    '/news': '/insights',
    '/news/[slug]': '/insights/[slug]',
    '/zh/news': '/zh/insights',
    '/zh/news/[slug]': '/zh/insights/[slug]',
  },
});
