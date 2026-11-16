/**
 * Copy for /about/ (EN) and /zh/about/.
 *
 * Structure follows assetone.com/about: band hero, a photo + "who we are"
 * intro, the team grid, the Let's talk band, then the Asset One family section.
 *
 * Team: add a person by filling in an entry below. Portraits go in
 * public/images/team/<first-last>.jpg with a matching `team-<first-last>`
 * slot in `photos` (src/i18n/content.ts). An entry without `photo` shows a
 * blank portrait; an entry without `name` is an open seat.
 *
 * An entry with a `profile` gets its own page at /about/<id>/ (built by
 * src/pages/about/[member].astro) and its card links there. Keep the same
 * ids in EN and ZH.
 */
import type { Locale, PhotoKey } from './content';
import type { CtaCopy } from './service-types';

export type TeamMember = {
  id: string;
  name?: string;
  role?: string;
  photo?: PhotoKey;
  /** Profile page content. No profile, no page and no link. */
  profile?: MemberProfile;
};

export type MemberProfile = {
  /** One line under the name in the page header */
  tagline?: string;
  philosophy: string[];
  why: string[];
  background: string[];
  languages?: string;
  license?: string;
};

const en = {
  meta: {
    title: 'About Us · Asset One Insurance',
    description:
      'Meet the team at Asset One Insurance in Bellevue, WA: independent guidance on life insurance, health insurance and annuities, in English and 中文.',
  },
  hero: {
    eyebrow: 'Asset One Insurance',
    title: 'About Us',
    lead: 'We built Asset One Insurance so families and business owners could have one advisor they trust for the long run, not just a policy and a phone number.',
  },
  intro: {
    eyebrow: 'About us',
    title: 'Meet the team behind your coverage',
    subtitle: 'Grounded in relationships. Built to serve generations.',
    body: [
      'Insurance decisions are personal, so we start by getting to know you: what matters to you and what you want to protect.',
      'As a small, independent team in Bellevue, we’re easy to reach, in English or 中文. We guide rather than push, and we stay with you for the reviews and life changes that follow.',
    ],
    primary: 'Get started',
    phone: 'Call',
  },
  team: {
    eyebrow: 'Our team',
    title: 'Meet our team',
    more: 'Learn more',
    blankName: 'Team member',
    blankRole: 'Coming soon',
    members: [
      {
        id: 'duncan-li',
        name: 'Duncan Li',
        role: 'Managing Partner',
        photo: 'team-duncan-li',
        profile: {
          philosophy: [
            '[PLACEHOLDER] Insurance works best when it is part of a bigger plan. I start by understanding what a family or business is building and what would put it at risk, then look for coverage that fits that picture, not the other way around.',
            '[PLACEHOLDER] I believe in plain language, honest trade-offs and giving people time to decide. A good recommendation should still make sense to you years from now.',
          ],
          why: [
            '[PLACEHOLDER] What I value most is the moment a client feels the uncertainty lift: when they know their family, their business or their retirement is protected, and they understand exactly how.',
            '[PLACEHOLDER] Add a personal note here: what brought Duncan to this work and what keeps him in it.',
          ],
          background: [
            '[PLACEHOLDER] Years of experience in insurance and financial services',
            '[PLACEHOLDER] Licenses: Life, Disability and Health (Washington)',
            '[PLACEHOLDER] Education: degree, school',
            '[PLACEHOLDER] Professional designations',
          ],
          languages: '[PLACEHOLDER] English, 中文',
          license: '[PLACEHOLDER] WA license no.',
        },
      },
      { id: 'member-2' },
      { id: 'member-3' },
      { id: 'member-4' },
    ] as TeamMember[],
  },
  member: {
    eyebrow: 'Our team',
    back: 'Back to our team',
    philosophy: 'Philosophy',
    why: 'Why I do this work',
    background: 'Licenses & background',
    languages: 'Languages',
    license: 'License',
    primary: 'Schedule a call',
    phone: 'Call',
  },
  family: {
    eyebrow: 'The Asset One family',
    title: 'Part of a bigger picture',
    body: 'Insurance is one piece of a complete plan. Our sister companies help with the rest, so your coverage, investments and taxes can work together.',
    visit: 'Visit site',
    disclosure:
      '[PLACEHOLDER] Asset One Insurance, Asset One Wealth Management and Asset One Tax are separate companies. Confirm this wording with compliance.',
  },
  cta: {
    eyebrow: 'Let’s talk',
    title: 'Let’s talk about what you’re planning for',
    body: 'Whether you’re starting a family, growing a business, nearing retirement or just want a second opinion on the coverage you have, it starts with a complimentary, no-pressure conversation.',
    primary: 'Schedule a call',
    phone: 'Call',
  } satisfies CtaCopy,
};

export type AboutPageCopy = typeof en;

const zh: AboutPageCopy = {
  meta: {
    title: '关于我们 · Asset One Insurance',
    description: '认识位于华盛顿州贝尔维尤的 Asset One Insurance 团队：在寿险、健康险与年金方面提供独立的专业建议，中英文服务。',
  },
  hero: {
    eyebrow: 'Asset One Insurance',
    title: '关于我们',
    lead: '我们创立 Asset One Insurance，是希望每个家庭和企业主都能拥有一位值得长期信赖的顾问，而不只是一份保单和一个电话号码。',
  },
  intro: {
    eyebrow: '关于我们',
    title: '认识为您规划保障的团队',
    subtitle: '以关系为本，为世代服务。',
    body: [
      '保险决定是很个人的事，所以我们会先了解您：您在意什么，希望保障什么。',
      '作为贝尔维尤一支小而独立的团队，我们随时可以联系，并提供中英文服务。我们引导而不推销，并在之后的定期回顾和人生变化中一直陪伴您。',
    ],
    primary: '开始咨询',
    phone: '致电',
  },
  team: {
    eyebrow: '我们的团队',
    title: '认识我们的团队',
    more: '了解更多',
    blankName: '团队成员',
    blankRole: '即将公布',
    members: [
      {
        id: 'duncan-li',
        name: 'Duncan Li',
        role: '管理合伙人',
        photo: 'team-duncan-li',
        profile: {
          philosophy: [
            '[待补充] 保险最好作为整体规划的一部分。我会先了解一个家庭或企业正在建立什么、可能面临哪些风险，再寻找与之相符的保障，而不是反过来。',
            '[待补充] 我相信用浅显的语言、坦诚说明利弊，并给客户充分的时间考虑。一个好的建议，在多年之后也应该依然合理。',
          ],
          why: [
            '[待补充] 我最珍惜的，是客户心中不确定感消散的那一刻：他们知道家人、事业或退休生活已有保障，并清楚地明白其中的原理。',
            '[待补充] 请在此补充 Duncan 的个人经历：是什么让他投身这份工作，又是什么让他坚持至今。',
          ],
          background: [
            '[待补充] 保险及金融服务从业年限',
            '[待补充] 执照：寿险、伤残险及健康险（华盛顿州）',
            '[待补充] 学历：学位、学校',
            '[待补充] 专业资格认证',
          ],
          languages: '[待补充] 英文、中文',
          license: '[待补充] 华盛顿州执照号码',
        },
      },
      { id: 'member-2' },
      { id: 'member-3' },
      { id: 'member-4' },
    ],
  },
  member: {
    eyebrow: '我们的团队',
    back: '返回团队介绍',
    philosophy: '理念',
    why: '我为何做这份工作',
    background: '执照与背景',
    languages: '语言',
    license: '执照',
    primary: '预约通话',
    phone: '致电',
  },
  family: {
    eyebrow: 'Asset One 家族',
    title: '整体规划中的一环',
    body: '保险只是完整规划的一部分。我们的姊妹公司负责其余部分，让您的保障、投资与税务协同运作。',
    visit: '访问网站',
    disclosure: '[待补充] Asset One Insurance、Asset One Wealth Management 与 Asset One Tax 为各自独立的公司。请与合规部门确认此措辞。',
  },
  cta: {
    eyebrow: '聊一聊',
    title: '聊聊您正在规划的事',
    body: '无论您是刚组建家庭、正在发展事业、即将退休，还是想听听对现有保障的第二意见，我们都从一次免费、没有压力的交流开始。',
    primary: '预约通话',
    phone: '致电',
  },
};

export const aboutCopy: Record<Locale, AboutPageCopy> = { en, zh };
