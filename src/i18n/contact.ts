/**
 * Copy for /contact/ (EN) and /zh/contact/.
 *
 * Layout: band hero, then a two-column section with the ways to reach us
 * (office, phone, email, hours) beside the consultation request form, then
 * a short "what happens next" strip and the FAQ.
 *
 * Address and phone come from `contact` in src/i18n/content.ts. The email
 * below is a placeholder until confirmed.
 *
 * The form has no backend yet: see the TODO in ContactPage.astro.
 */
import type { Locale } from './content';

export type ContactField = { label: string; placeholder?: string; error?: string };

const en = {
  meta: {
    title: 'Contact · Asset One Insurance',
    description:
      'Contact Asset One Insurance in Bellevue, WA. Call, visit or request a complimentary, no-pressure consultation on life insurance, health insurance or annuities, in English or 中文.',
  },
  hero: {
    eyebrow: 'Contact',
    title: 'Let’s start the conversation',
    lead: 'Tell us a little about what you’re planning for. We’ll reach out within one business day to set up a complimentary, no-pressure consultation, in English or 中文.',
  },
  reach: {
    title: 'We’re ready when you are',
    office: 'Address',
    directions: 'Get directions',
    phone: 'Phone',
    email: 'Email',
    emailAddress: '[PLACEHOLDER] hello@assetoneinsurance.com',
    hours: 'Office hours',
    hoursLines: ['Mon–Fri: 10:00 AM – 6:00 PM', 'Sat–Sun: Closed'],
    languages: 'Languages',
    languagesValue: 'English · 中文',
  },
  form: {
    eyebrow: 'Request a consultation',
    title: 'Send us a note',
    name: { label: 'Full name', error: 'Please enter your name.' },
    email: { label: 'Email', error: 'Please enter a valid email address.' },
    phone: { label: 'Phone', placeholder: 'Optional' },
    interest: {
      label: 'What can we help with?',
      options: ['Life insurance', 'Health insurance or Medicare', 'Annuities and retirement income', 'Business planning', 'A review of my current coverage', 'Not sure yet'],
    },
    contactBy: {
      label: 'Best way to reach you',
      options: ['Phone', 'Email', 'Either'],
    },
    language: {
      label: 'Preferred language',
      options: ['English', '中文'],
    },
    message: {
      label: 'Anything you’d like us to know?',
      placeholder: 'A sentence or two is plenty: what’s changed, what you’re weighing, or a good time to call.',
    },
    required: 'required',
    submit: 'Send message',
    sending: 'Sending…',
    successTitle: 'Thank you. We’ve got your note.',
    successBody: 'Someone from our team will reach out within one business day. If it’s urgent, call us at',
    errorSummary: 'Please check the highlighted fields.',
  },
  next: {
    eyebrow: 'What happens next',
    title: 'No pressure, no obligation',
    steps: [
      { title: 'We reach out', body: 'Within one business day, by phone or email, whichever you prefer.' },
      { title: 'A first conversation', body: 'About 30 minutes to understand your goals. No products, no paperwork.' },
      { title: 'Options in plain language', body: 'If it makes sense, we come back with clear choices and the trade-offs of each.' },
    ],
    more: { label: 'See our full process', href: '/our-process/' },
  },
  faq: {
    eyebrow: 'Questions',
    title: 'Before you reach out',
    intro: 'A few things people often ask before their first call.',
    items: [
      {
        q: 'Is the first consultation really free?',
        a: 'Yes. The first conversation is complimentary and there’s no obligation to buy anything. Many people simply want a second opinion on the coverage they already have.',
      },
      {
        q: 'Do I need to come to the office?',
        a: 'No. We meet in person in Bellevue, by video or by phone, whatever is easiest for you.',
      },
      {
        q: 'What should I have ready?',
        a: 'Nothing is required for a first call. If you have existing policies or a recent benefits summary, it helps to have them nearby, but we can go through those later.',
      },
      {
        q: 'Can you work with me if I’m new to the U.S.?',
        a: 'Yes. We regularly help families who have recently moved to the U.S., in English or 中文, and can walk through how coverage here differs from what you may be used to.',
      },
    ],
  },
};

export type ContactPageCopy = typeof en;

const zh: ContactPageCopy = {
  meta: {
    title: '联系我们 · Asset One Insurance',
    description: '联系位于华盛顿州贝尔维尤的 Asset One Insurance。致电、到访，或预约一次免费、无压力的寿险、健康险或年金咨询，中英文服务。',
  },
  hero: {
    eyebrow: '联系我们',
    title: '从一次对话开始',
    lead: '简单告诉我们您在规划什么。我们会在一个工作日内与您联系，安排一次免费、无压力的咨询，中英文皆可。',
  },
  reach: {
    title: '随时恭候您的联系',
    office: '地址',
    directions: '查看路线',
    phone: '电话',
    email: '电子邮件',
    emailAddress: '[PLACEHOLDER] hello@assetoneinsurance.com',
    hours: '办公时间',
    hoursLines: ['周一至周五：上午 10:00 – 下午 6:00', '周六、周日：休息'],
    languages: '服务语言',
    languagesValue: 'English · 中文',
  },
  form: {
    eyebrow: '预约咨询',
    title: '给我们留言',
    name: { label: '姓名', error: '请填写您的姓名。' },
    email: { label: '电子邮件', error: '请输入有效的电子邮件地址。' },
    phone: { label: '电话', placeholder: '选填' },
    interest: {
      label: '我们可以帮您什么？',
      options: ['寿险', '健康险或联邦医疗保险', '年金与退休收入', '企业规划', '检视我现有的保障', '还不确定'],
    },
    contactBy: {
      label: '最方便的联系方式',
      options: ['电话', '电子邮件', '皆可'],
    },
    language: {
      label: '偏好语言',
      options: ['English', '中文'],
    },
    message: {
      label: '还有什么想让我们知道的？',
      placeholder: '一两句话就够了：最近有什么变化、正在考虑什么，或方便来电的时间。',
    },
    required: '必填',
    submit: '发送留言',
    sending: '正在提交…',
    successTitle: '谢谢，我们已收到您的留言。',
    successBody: '我们的团队会在一个工作日内与您联系。如有急事，请致电',
    errorSummary: '请检查标出的字段。',
  },
  next: {
    eyebrow: '接下来',
    title: '没有压力，没有义务',
    steps: [
      { title: '我们与您联系', body: '一个工作日内，通过您偏好的电话或电子邮件。' },
      { title: '初次交流', body: '约 30 分钟，了解您的目标。不谈产品，不填文件。' },
      { title: '清楚易懂的方案', body: '如果合适，我们会提供清晰的选项，并说明各自的利弊。' },
    ],
    more: { label: '了解完整流程', href: '/our-process/' },
  },
  faq: {
    eyebrow: '常见问题',
    title: '联系之前',
    intro: '初次通话前，大家常问的几个问题。',
    items: [
      {
        q: '初次咨询真的免费吗？',
        a: '是的。初次交流完全免费，没有任何购买义务。很多人只是想对现有保障听听第二意见。',
      },
      {
        q: '我需要到办公室吗？',
        a: '不需要。我们可以在贝尔维尤见面，也可以通过视频或电话交流，以您方便为准。',
      },
      {
        q: '我需要准备什么？',
        a: '初次通话不需要准备任何东西。如果您有现有保单或近期的福利摘要，放在手边会有帮助，但也可以之后再看。',
      },
      {
        q: '我刚来美国，你们也能帮我吗？',
        a: '可以。我们经常为刚移居美国的家庭提供中英文服务，并会说明这里的保障与您熟悉的有何不同。',
      },
    ],
  },
};

export const contactCopy: Record<Locale, ContactPageCopy> = { en, zh };
