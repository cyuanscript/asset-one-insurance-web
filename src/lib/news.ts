import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../i18n/content';

export type Article = CollectionEntry<'news'> & { urlSlug: string };

/** Published articles in one language, in reading order (`order` 1 first). */
export async function getArticles(locale: Locale): Promise<Article[]> {
  const entries = await getCollection('news', (e) => e.slug.startsWith(`${locale}/`) && !e.data.draft);
  return entries
    .map((e) => ({ ...e, urlSlug: e.slug.slice(locale.length + 1) }))
    .sort((a, b) => a.data.order - b.data.order);
}
