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

/**
 * Photo slots. Drop files into /public/images and set `src` to use them.
 * `position` (optional) sets the crop focal point, e.g. '50% 40%'.
 */
type PhotoSlot = { src: string; caption: string; position?: string };

const photoSlots = {
  hero: { src: '/images/hero-lake-washington.jpg', caption: 'The I-90 floating bridge across Lake Washington, with Bellevue on the horizon' },
  stageFamily: { src: '/images/family-drawing-living-room.jpg', caption: 'Parents and their young son drawing together on the living room floor' },
  stageEducation: { src: '/images/mother-daughter-reading-park.jpg', caption: 'Mother and daughter reading a botany book together in a park' },
  stageRetirement: { src: '/images/retired-couple-beach-picnic.jpg', caption: 'Retired couple sharing a tablet during a beach picnic', position: '50% 40%' },
  stageGrowth: { src: '/images/advisor-office-lounge.jpg', caption: 'Advisor reviewing notes with a client in a bright office lounge' },
  stageLegacy: { src: '/images/grandparents-grandchildren-music.jpg', caption: 'Grandparents playing ukulele and toys with their grandchildren at home', position: '50% 45%' },
  productLife: { src: '/images/family-beach-shoreline.jpg', caption: 'Family standing arm in arm on the beach, looking out at the water', position: '50% 15%' },
  productHealth: { src: '/images/couple-park-meditation.jpg', caption: 'Older couple doing a calm breathing exercise outdoors in a park', position: '50% 30%' },
  productAnnuities: { src: '/images/advisor-client-financial-review.jpg', caption: 'Advisor walking a client through financial charts at a table', position: '50% 35%' },
  // Life Insurance page hero. Fallback until the briefed shot exists (content-packs/services-life-insurance.md, Photo briefs)
  lifeHero: { src: '/images/family-beach-shoreline.jpg', caption: 'Family standing arm in arm on the beach, looking out at the water', position: '50% 20%' },
  // Life Insurance page, How We Work band (tinted background)
  processConsult: { src: '/images/advisor-client-tablet-consultation.jpg', caption: 'Advisor smiling as he walks a client through a plan on a tablet at a bright office table', position: '60% 35%' },
  // Health Insurance and Annuities pages: reuse homepage photos until briefed shots exist
  // (content-packs/services-health-insurance.md and services-annuities.md, Photo briefs)
  healthHero: { src: '/images/couple-park-meditation.jpg', caption: 'Older couple doing a calm breathing exercise outdoors in a park', position: '50% 12%' },
  processHealth: { src: '/images/advisor-office-lounge.jpg', caption: 'Advisor reviewing notes with a client in a bright office lounge', position: '50% 40%' },
  annuitiesHero: { src: '/images/retired-couple-beach-picnic.jpg', caption: 'Retired couple sharing a tablet during a beach picnic', position: '50% 40%' },
  processAnnuities: { src: '/images/advisor-client-financial-review.jpg', caption: 'Advisor walking a client through financial charts at a table', position: '50% 35%' },
  // Our Process page: header background. Wide crop of the homepage Annuities photo
  // (photo-originals/pexels-shkrabaanthony-5816285.jpg); the portrait web copy is too narrow for a full-width band
  processHero: { src: '/images/advisor-client-financial-review-wide.jpg', caption: 'Advisor walking a client through financial charts at a table', position: '50% 35%' },
  // Our Process page: photo beside the "Get started" intro
  processIntro: { src: '/images/advisor-senior-couple-home-consultation.jpg', caption: 'Advisor smiling as he walks an older couple through paperwork at their dining table', position: '50% 40%' },

  // About page: photo beside the intro, and team portraits (public/images/team/<first-last>.jpg)
  aboutIntro: { src: '/images/business-handshake.jpg', caption: 'Close-up of two people in suits shaking hands', position: '45% 50%' },
  'team-duncan-li': { src: '/images/team/duncan-li.jpg', caption: 'Portrait of Duncan Li, Managing Partner', position: '50% 20%' },

  // Coverage cards on the Services pages: one image per coverage type.
  // The key is `coverage-<card id>` (card ids live in the page's i18n file).
  // Web copies live in public/images/coverage/<card id>.jpg (originals in photo-originals/coverage/).
  'coverage-term': { src: '/images/coverage/term.jpg', caption: 'Young parents hugging their smiling toddler daughter in an autumn park', position: '50% 35%' },
  'coverage-whole': { src: '/images/coverage/whole.jpg', caption: 'Smiling older couple standing close together against a plain wall', position: '50% 35%' },
  'coverage-iul': { src: '/images/coverage/iul.jpg', caption: 'Two people pointing at a printed bar chart of market activity', position: '50% 50%' },
  'coverage-survivorship': { src: '/images/coverage/survivorship.jpg', caption: 'Three generations of a family gathered around a girl holding a camera', position: '50% 55%' },
  'coverage-individual': { src: '/images/coverage/individual.jpg', caption: 'Smiling older woman in a cardigan standing in a backyard set for a garden party', position: '40% 35%' },
  'coverage-group': { src: '/images/coverage/group.jpg', caption: 'Two café coworkers in aprons chatting over coffee during a break', position: '50% 40%' },
  'coverage-advantage': { src: '/images/coverage/advantage.jpg', caption: 'Woman talking with a healthcare worker in scrubs in a bright waiting area', position: '50% 40%' },
  'coverage-supplement': { src: '/images/coverage/supplement.jpg', caption: 'Woman in a pink sweater holding a red felt heart and a stethoscope', position: '50% 50%' },
  'coverage-myga': { src: '/images/coverage/myga.jpg', caption: 'Older couple reviewing something together on a laptop at a desk', position: '50% 40%' },
  'coverage-spia': { src: '/images/coverage/spia.jpg', caption: 'Retired couple on their sofa checking a phone and a laptop together', position: '50% 45%' },
  'coverage-fia': { src: '/images/coverage/fia.jpg', caption: 'Woman on a phone call watching a market chart on her tablet by a window', position: '50% 50%' },
} satisfies Record<string, PhotoSlot>;

export type PhotoKey = keyof typeof photoSlots;
export const photos: Record<PhotoKey, PhotoSlot> = photoSlots;

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
      { label: 'Our Process', href: '/our-process/' },
      { label: 'About', href: '/about/' },
      { label: 'Insights', href: '/insights/' },
    ],
    contact: 'Contact',
    contactHref: '/contact/',
    menu: 'Menu',
    close: 'Close menu',
    langLabel: 'Language',
  },
  hero: {
    eyebrowLong: 'Bellevue, WA',
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
        fits: [{ label: 'Term life', href: '/services/life-insurance/#term' }, { label: 'Permanent life', href: '/services/life-insurance/#whole' }],
        photo: 'stageFamily',
      },
      {
        name: 'Education Funding',
        body: "Some policies build cash value over time that may help with a child's education costs. We explain the trade-offs next to other ways to save.",
        fits: [{ label: 'Permanent life', href: '/services/life-insurance/#whole' }, { label: 'Indexed universal life', href: '/services/life-insurance/#iul' }],
        photo: 'stageEducation',
      },
      {
        name: 'Retirement Income',
        body: 'Annuities can help turn part of your savings into income that continues for a set period or for life.',
        fits: [{ label: 'Fixed annuities', href: '/services/annuities/#myga' }, { label: 'Indexed annuities', href: '/services/annuities/#fia' }],
        photo: 'stageRetirement',
      },
      {
        name: 'Investment Growth',
        body: 'Some insurance products offer growth potential with a degree of protection from loss. We walk through the costs, caps and limits in plain language.',
        fits: [{ label: 'Indexed annuities', href: '/services/annuities/#fia' }, { label: 'Indexed universal life', href: '/services/life-insurance/#iul' }],
        photo: 'stageGrowth',
      },
      {
        name: 'Legacy Planning',
        body: "Life insurance can help pass on what you've built to the people and causes you care about, in coordination with your CPA or estate attorney.",
        fits: [{ label: 'Permanent life', href: '/services/life-insurance/#whole' }, { label: 'Survivorship life', href: '/services/life-insurance/#survivorship' }],
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
      { label: 'Our Process', href: '/our-process/' },
      { label: 'About', href: '/about/' },
      { label: 'Insights', href: '/insights/' },
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
      { label: '寿险', href: '/services/life-insurance/', note: '定期与永久保障' },
      { label: '健康险', href: '/services/health-insurance/', note: '个人、家庭与联邦医疗保险' },
      { label: '年金', href: '/services/annuities/', note: '稳定的退休收入' },
    ],
    links: [
      { label: '我们的流程', href: '/our-process/' },
      { label: '关于我们', href: '/about/' },
      { label: '洞察', href: '/insights/' },
    ],
    contact: '联系我们',
    contactHref: '/contact/',
    menu: '菜单',
    close: '关闭菜单',
    langLabel: '语言',
  },
  hero: {
    eyebrowLong: '华盛顿州贝尔维尤',
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
        fits: [{ label: '定期寿险', href: '/services/life-insurance/#term' }, { label: '永久寿险', href: '/services/life-insurance/#whole' }],
        photo: 'stageFamily',
      },
      {
        name: '教育金规划',
        body: '有些保单会随时间累积现金价值，可能有助于支付孩子的教育费用。我们会把它与其他储蓄方式放在一起比较，讲清利弊。',
        fits: [{ label: '永久寿险', href: '/services/life-insurance/#whole' }, { label: '指数型万能寿险', href: '/services/life-insurance/#iul' }],
        photo: 'stageEducation',
      },
      {
        name: '退休收入',
        body: '年金可以帮助您把部分储蓄转化为在一定期限内或终身持续领取的收入。',
        fits: [{ label: '固定年金', href: '/services/annuities/#myga' }, { label: '指数型年金', href: '/services/annuities/#fia' }],
        photo: 'stageRetirement',
      },
      {
        name: '投资增长',
        body: '有些保险产品在提供增长潜力的同时，也能在一定程度上防范亏损。我们会用浅显的语言讲清费用、收益上限和各项限制。',
        fits: [{ label: '指数型年金', href: '/services/annuities/#fia' }, { label: '指数型万能寿险', href: '/services/life-insurance/#iul' }],
        photo: 'stageGrowth',
      },
      {
        name: '传承规划',
        body: '寿险可以帮助您把一生的积累传给您关心的人和公益事业，并与您的会计师或遗产律师协同规划。',
        fits: [{ label: '永久寿险', href: '/services/life-insurance/#whole' }, { label: '第二身故寿险', href: '/services/life-insurance/#survivorship' }],
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
        body: '定期与永久保障，帮助守护依靠您的家人。',
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
      { label: '我们的流程', href: '/our-process/' },
      { label: '关于我们', href: '/about/' },
      { label: '洞察', href: '/insights/' },
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
