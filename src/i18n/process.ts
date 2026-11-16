/**
 * Copy for /our-process/ (EN) and /zh/our-process/.
 *
 * The steps themselves are not here: each track reuses the `process` and
 * `processDetails` copy from its Services page file (life-insurance.ts,
 * health-insurance.ts, annuities.ts), so there is one place to edit them.
 */
import type { Locale } from './content';
import type { CtaCopy } from './service-types';

const en = {
  meta: {
    title: 'Our Process · Asset One Insurance',
    description:
      'How we help with life insurance, health insurance and annuities, from a first conversation to reviews over the years. In English and 中文.',
  },
  hero: {
    eyebrow: 'How we work',
    title: 'Our Process',
    lead: 'Choosing coverage should feel like a conversation, not a sales pitch.',
  },
  intro: {
    eyebrow: 'Get started',
    title: 'It begins with a short conversation',
    body: [
      'Tell us what you’d like to protect or plan for. We listen first, explain the options that may fit in plain language, and give you room to decide.',
      'Below, choose a service to see each step, from the first meeting to reviews over the years.',
    ],
    primary: 'Get started',
    phone: 'Call',
  },
  steps: {
    eyebrow: 'Step by step',
    title: 'What working with us looks like',
    intro: 'Clear steps, at your pace. You’re welcome to pause at any point. Choose a service to see how it works.',
  },
  switchLabel: 'Choose a service',
  tracks: {
    life: { label: 'Life Insurance', link: 'Explore life insurance' },
    health: { label: 'Health Insurance', link: 'Explore health insurance' },
    annuities: { label: 'Annuities', link: 'Explore annuities' },
  },
  cta: {
    eyebrow: 'Let’s talk',
    title: 'Questions about how we work?',
    body: 'We’re happy to walk you through it in English or 中文, with no pressure to decide.',
    primary: 'Talk with us',
    phone: 'Call',
  } satisfies CtaCopy,
};

export type ProcessPageCopy = typeof en;

const zh: ProcessPageCopy = {
  meta: {
    title: '我们的流程 · Asset One Insurance',
    description: '从第一次交流到多年的定期回顾，了解我们如何协助您处理寿险、健康险与年金。中英文服务。',
  },
  hero: {
    eyebrow: '我们的做法',
    title: '我们的流程',
    lead: '选择保险，应该是一次交流，而不是一场推销。',
  },
  intro: {
    eyebrow: '开始咨询',
    title: '从一次简短的交流开始',
    body: [
      '告诉我们您希望保障或规划什么。我们会先倾听，再用浅显的语言讲解可能适合的方案，并给您充分的时间考虑。',
      '在下方选择一项服务，查看从第一次见面到多年回顾的每个步骤。',
    ],
    primary: '开始咨询',
    phone: '致电',
  },
  steps: {
    eyebrow: '逐步了解',
    title: '与我们合作的方式',
    intro: '步骤清晰，按您的节奏进行。您随时可以暂停。选择一项服务，查看具体流程。',
  },
  switchLabel: '选择服务',
  tracks: {
    life: { label: '寿险', link: '了解寿险' },
    health: { label: '健康险', link: '了解健康险' },
    annuities: { label: '年金', link: '了解年金' },
  },
  cta: {
    eyebrow: '聊一聊',
    title: '对我们的流程有疑问？',
    body: '欢迎用中文或英文与我们聊聊，我们会为您详细讲解，绝不催促您做决定。',
    primary: '联系我们',
    phone: '致电',
  },
};

export const processCopy: Record<Locale, ProcessPageCopy> = { en, zh };
