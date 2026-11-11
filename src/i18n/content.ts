/**
 * All homepage copy, English and Simplified Chinese.
 *
 * The hero headline and subhead are final. Everything else is draft copy
 * and will be replaced by the content packs. The Chinese beyond what the
 * design file supplied is a draft translation and needs a native review.
 */

export type Locale = 'en' | 'zh';

export const locales: Locale[] = ['en', 'zh'];

/** Prefix a site path with the locale ("/about/" -> "/zh/about/"). */
export function localePath(locale: Locale, path: string): string {
  return locale === 'zh' ? `/zh${path}` : path;
}

/** The same page in the other language. */
export function alternatePath(pathname: string, target: Locale): string {
  const bare = pathname.replace(/^\/zh(?=\/|$)/, '') || '/';
  return localePath(target, bare);
}

export const contact = {
  street: '10900 NE 4th St, Suite 2240',
  city: 'Bellevue, WA 98004',
  phone: '(425) 736-9665',
  phoneHref: 'tel:+14257369665',
  license: '[PLACEHOLDER] License no.',
};

/** Photo slots. Drop files into /public/images and set `src` to use them. */
export const photos = {
  hero: { src: '', caption: 'Bellevue skyline across Lake Washington, golden hour' },
  stageFamily: { src: '', caption: 'Family at home, natural light' },
  stageEducation: { src: '', caption: 'Parent and child, Eastside park' },
  stageRetirement: { src: '', caption: 'Couple walking the lakeshore' },
  stageGrowth: { src: '', caption: 'Advisor conversation at a table' },
  stageLegacy: { src: '', caption: 'Three generations, evergreen shoreline' },
  productLife: { src: '', caption: 'Family on the shoreline' },
  productHealth: { src: '', caption: 'Couple on an evergreen trail' },
  productAnnuities: { src: '', caption: 'Advisor conversation, natural light' },
} as const;

export type PhotoKey = keyof typeof photos;

const en = {
  htmlLang: 'en',
  meta: {
    title: 'Asset One Insurance · Life, health and annuities in Bellevue, WA',
    description:
      'Life insurance, health insurance and annuities, chosen with care and explained in plain language. Serving Bellevue and the Eastside in English and 中文.',
  },
  skip: 'Skip to content',
  brandTagline: 'Insurance',
  nav: {
    services: 'Services',
    servicesMenu: [
      { label: 'Life Insurance', href: '/services/life-insurance/', note: 'Term and permanent coverage' },
      { label: 'Health Insurance', href: '/services/health-insurance/', note: 'Individual, family and Medicare' },
      { label: 'Annuities', href: '/services/annuities/', note: 'Steady retirement income' },
    ],
    links: [
      { label: 'Insurance & You', href: '/insurance-and-you/' },
      { label: 'About', href: '/about/' },
      { label: 'News', href: '/news/' },
    ],
    contact: 'Contact',
    contactHref: '/contact/',
    menu: 'Menu',
    close: 'Close menu',
    langLabel: 'Language',
  },
  hero: {
    eyebrowLong: 'Lake Washington · Bellevue, WA',
    eyebrowShort: 'Bellevue, WA',
    title: ['Protect what matters, steadily.'],
    lead: 'Life insurance, health insurance and annuities, chosen with care and explained in plain language.',
    primary: 'Talk with us',
    secondary: 'Explore Insurance & You',
    scroll: 'Scroll',
  },
  stages: {
    eyebrow: 'How we help',
    title: 'Start with where you are in life',
    intro:
      "Most people come to us with a moment in mind, not a product. Pick yours and we'll explain the options that may fit.",
    tablistLabel: 'Life stages',
    mayFit: 'May fit',
    approach: 'How we approach this',
    items: [
      {
        name: 'Family Protection',
        body: 'If others depend on your income, life insurance can help them keep the home, the routines and the plans you made together.',
        fits: ['Term life', 'Permanent life'],
        photo: 'stageFamily',
      },
      {
        name: 'Education Funding',
        body: "Some policies build cash value over time that may help with a child's education costs. We explain the trade-offs next to other ways to save.",
        fits: ['Permanent life', 'Indexed universal life'],
        photo: 'stageEducation',
      },
      {
        name: 'Retirement Income',
        body: 'Annuities can help turn part of your savings into income that continues for a set period or for life.',
        fits: ['Fixed annuities', 'Indexed annuities'],
        photo: 'stageRetirement',
      },
      {
        name: 'Investment Growth',
        body: 'Some insurance products offer growth potential with a degree of protection from loss. We walk through the costs, caps and limits in plain language.',
        fits: ['Indexed annuities', 'Indexed universal life'],
        photo: 'stageGrowth',
      },
      {
        name: 'Legacy Planning',
        body: "Life insurance can help pass on what you've built to the people and causes you care about, in coordination with your CPA or estate attorney.",
        fits: ['Permanent life', 'Survivorship life'],
        photo: 'stageLegacy',
      },
    ],
  },
  products: {
    eyebrow: 'Our products',
    title: 'Three ways to plan ahead',
    intro:
      'We compare plans across carriers and explain each one in plain terms, so you can decide at your own pace.',
    more: 'Learn more',
    items: [
      {
        name: 'Life Insurance',
        body: 'Term and permanent coverage that can help protect the people who depend on you.',
        href: '/services/life-insurance/',
        photo: 'productLife',
      },
      {
        name: 'Health Insurance',
        body: 'Individual, family and Medicare plans, compared side by side.',
        href: '/services/health-insurance/',
        photo: 'productHealth',
      },
      {
        name: 'Annuities',
        body: 'Options that can help turn retirement savings into steady income.',
        href: '/services/annuities/',
        photo: 'productAnnuities',
      },
    ],
  },
  footer: {
    ctaBefore: 'Questions are welcome, in English or ',
    ctaAccent: '中文',
    ctaAfter: '.',
    cta: 'Talk with us',
    brand: 'Asset One Insurance',
    servicesHeading: 'Services',
    companyHeading: 'Company',
    company: [
      { label: 'Insurance & You', href: '/insurance-and-you/' },
      { label: 'About', href: '/about/' },
      { label: 'News', href: '/news/' },
      { label: 'Contact', href: '/contact/' },
    ],
    newsletterHeading: 'Newsletter',
    newsletterLabel: 'Email address',
    newsletterPlaceholder: 'Your email',
    subscribe: 'Subscribe',
    subscribing: 'Subscribing…',
    success: "Thanks! You're on the list.",
    error: 'Please enter a valid email address.',
    sibling: 'A sibling of Asset One Wealth Management',
    legal: [
      { label: 'Disclosures', href: '/disclosures/' },
      { label: 'Privacy', href: '/privacy/' },
      { label: 'Terms', href: '/terms/' },
    ],
  },
};

const zh: typeof en = {
  htmlLang: 'zh-Hans',
  meta: {
    title: 'Asset One Insurance · 华盛顿州贝尔维尤的寿险、健康险与年金',
    description: '寿险、健康险与年金，用心挑选，清楚讲解。以中文和英文服务贝尔维尤及东区。',
  },
  skip: '跳至正文',
  brandTagline: 'Insurance',
  nav: {
    services: '服务',
    servicesMenu: [
      { label: '寿险', href: '/services/life-insurance/', note: '定期与终身保障' },
      { label: '健康险', href: '/services/health-insurance/', note: '个人、家庭与联邦医疗保险' },
      { label: '年金', href: '/services/annuities/', note: '稳定的退休收入' },
    ],
    links: [
      { label: '保险与您', href: '/insurance-and-you/' },
      { label: '关于我们', href: '/about/' },
      { label: '新闻', href: '/news/' },
    ],
    contact: '联系我们',
    contactHref: '/contact/',
    menu: '菜单',
    close: '关闭菜单',
    langLabel: '语言',
  },
  hero: {
    eyebrowLong: '华盛顿湖 · 华盛顿州贝尔维尤',
    eyebrowShort: '华盛顿州贝尔维尤',
    title: ['稳健守护您所', '珍视的一切。'],
    lead: '寿险、健康险与年金，用心挑选，清楚讲解。',
    primary: '联系我们',
    secondary: '了解保险与您',
    scroll: '向下',
  },
  stages: {
    eyebrow: '我们如何帮助您',
    title: '从您当下的人生阶段开始',
    intro: '大多数人来找我们时，心里想的是人生中的某个时刻，而不是某个产品。选择您所处的阶段，我们会为您讲解可能适合的方案。',
    tablistLabel: '人生阶段',
    mayFit: '可能适合',
    approach: '了解我们的做法',
    items: [
      {
        name: '家庭保障',
        body: '如果家人依靠您的收入生活，寿险可以帮助他们守住家园、日常生活和你们共同的规划。',
        fits: ['定期寿险', '终身寿险'],
        photo: 'stageFamily',
      },
      {
        name: '教育金规划',
        body: '有些保单会随时间累积现金价值，可能有助于支付孩子的教育费用。我们会把它与其他储蓄方式放在一起比较，讲清利弊。',
        fits: ['终身寿险', '指数型万能寿险'],
        photo: 'stageEducation',
      },
      {
        name: '退休收入',
        body: '年金可以帮助您把部分储蓄转化为在一定期限内或终身持续领取的收入。',
        fits: ['固定年金', '指数型年金'],
        photo: 'stageRetirement',
      },
      {
        name: '投资增长',
        body: '有些保险产品在提供增长潜力的同时，也能在一定程度上防范亏损。我们会用浅显的语言讲清费用、收益上限和各项限制。',
        fits: ['指数型年金', '指数型万能寿险'],
        photo: 'stageGrowth',
      },
      {
        name: '传承规划',
        body: '寿险可以帮助您把一生的积累传给您关心的人和公益事业，并与您的会计师或遗产律师协同规划。',
        fits: ['终身寿险', '第二身故寿险'],
        photo: 'stageLegacy',
      },
    ],
  },
  products: {
    eyebrow: '我们的产品',
    title: '三种方式，提前规划',
    intro: '我们比较多家保险公司的方案，并用简单明了的语言逐一讲解，让您按自己的节奏做决定。',
    more: '了解更多',
    items: [
      {
        name: '寿险',
        body: '定期与终身保障，帮助守护依靠您的家人。',
        href: '/services/life-insurance/',
        photo: 'productLife',
      },
      {
        name: '健康险',
        body: '个人、家庭及联邦医疗保险（Medicare）方案，并排比较。',
        href: '/services/health-insurance/',
        photo: 'productHealth',
      },
      {
        name: '年金',
        body: '帮助把退休储蓄转化为稳定收入的多种选择。',
        href: '/services/annuities/',
        photo: 'productAnnuities',
      },
    ],
  },
  footer: {
    ctaBefore: '欢迎提问，英文或',
    ctaAccent: '中文',
    ctaAfter: '皆可。',
    cta: '联系我们',
    brand: 'Asset One Insurance',
    servicesHeading: '服务',
    companyHeading: '公司',
    company: [
      { label: '保险与您', href: '/insurance-and-you/' },
      { label: '关于我们', href: '/about/' },
      { label: '新闻', href: '/news/' },
      { label: '联系我们', href: '/contact/' },
    ],
    newsletterHeading: '订阅通讯',
    newsletterLabel: '电子邮箱',
    newsletterPlaceholder: '您的电子邮箱',
    subscribe: '订阅',
    subscribing: '正在订阅…',
    success: '感谢订阅！',
    error: '请输入有效的电子邮箱地址。',
    sibling: 'Asset One Wealth Management 旗下姊妹公司',
    legal: [
      { label: '披露信息', href: '/disclosures/' },
      { label: '隐私', href: '/privacy/' },
      { label: '条款', href: '/terms/' },
    ],
  },
};

export const content = { en, zh };
export type Content = typeof en;
