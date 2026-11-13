/**
 * Interface copy for /news/ and /news/<slug>/ (EN + 中文).
 * The articles themselves live in src/content/news/{en,zh}/.
 * Source and review notes: content-packs/news.md
 */
import type { Locale } from './content';
import type { CtaCopy } from './service-types';

const en = {
  meta: {
    title: 'News · Asset One Insurance',
    description:
      'Short, plain-language articles on insurance, retirement and cross-border planning for families in Bellevue and beyond. In English and 中文.',
  },
  hero: {
    eyebrow: 'News',
    title: 'Notes for planning with clarity',
    lead: 'Short, plain-language articles on the questions families bring to us, starting with U.S. tax basics for those with ties to China and Hong Kong.',
  },
  /** Homepage preview section (under Our products) */
  home: {
    eyebrow: 'News',
    title: 'Notes for planning with clarity',
    intro: 'Short, plain-language articles on the questions families bring to us, starting with U.S. tax basics for those with ties to China and Hong Kong.',
  },
  listLabel: 'All articles',
  latest: 'Start here',
  readArticle: 'Read article',
  minRead: (n: number) => `${n} min read`,
  categories: {
    'us-tax-basics': 'U.S. Tax Basics',
  } as Record<string, string>,
  breadcrumb: 'News',
  allArticles: 'All articles',
  moreTitle: 'More articles',
  noteTitle: 'Please note',
  general:
    'Asset One Insurance articles are for general education only and do not constitute tax, legal, investment or insurance advice. Insurance and annuity products are offered through licensed professionals; availability varies by state.',
  cta: {
    title: 'Planning across two countries?',
    body: 'Insurance is one part of a cross-border plan. We work alongside your CPA and attorney so each piece fits, and we’re happy to talk it through in English or 中文.',
    primary: 'Talk with us',
    phone: 'Call',
  } satisfies CtaCopy,
};

export type NewsCopy = typeof en;

const zh: NewsCopy = {
  meta: {
    title: '新闻 · Asset One Insurance',
    description: '用浅显的语言，解答家庭在保险、退休与跨境规划中的常见问题。中英文提供。',
  },
  hero: {
    eyebrow: '新闻',
    title: '把规划想清楚',
    lead: '用浅显的语言，解答家庭常向我们提出的问题。首个系列：为与中国内地和香港有联系的家庭讲解美国税务基础。',
  },
  home: {
    eyebrow: '新闻',
    title: '把规划想清楚',
    intro: '用浅显的语言，解答家庭常向我们提出的问题。首个系列：为与中国内地和香港有联系的家庭讲解美国税务基础。',
  },
  listLabel: '全部文章',
  latest: '从这里开始',
  readArticle: '阅读全文',
  minRead: (n: number) => `约${n}分钟`,
  categories: {
    'us-tax-basics': '美国税务基础',
  },
  breadcrumb: '新闻',
  allArticles: '全部文章',
  moreTitle: '更多文章',
  noteTitle: '温馨提示',
  general:
    'Asset One Insurance 的文章仅供一般性科普教育用途，不构成税务、法律、投资或保险建议。保险及年金产品经持牌专业人士提供，具体供应情况因州而异。',
  cta: {
    title: '在两个国家之间做规划？',
    body: '保险只是跨境规划中的一环。我们会与您的会计师和律师协同合作，让各个部分相互配合。欢迎用中文或英文与我们聊聊。',
    primary: '联系我们',
    phone: '致电',
  },
};

export const newsCopy: Record<Locale, NewsCopy> = { en, zh };

/** Reading time: ~230 English words or ~400 Chinese characters a minute */
export function readingMinutes(body: string, locale: Locale): number {
  const text = body.replace(/^>\s?/gm, '');
  const units =
    locale === 'zh'
      ? (text.match(/[㐀-鿿]/g) ?? []).length / 400 + (text.match(/[A-Za-z]+/g) ?? []).length / 230
      : (text.match(/\S+/g) ?? []).length / 230;
  return Math.max(1, Math.ceil(units));
}
