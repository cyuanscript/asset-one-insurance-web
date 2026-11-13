/**
 * Copy for /services/health-insurance/ (EN) and /zh/services/health-insurance/.
 *
 * Source: content-packs/services-health-insurance.md (v1). Edit the copy
 * here; the pack is the reviewed reference. Items still marked [CONFIRM]
 * in the pack (which plan types Asset One offers, Medicare and
 * marketplace certifications, the required Medicare disclaimer) are
 * flagged with a // CONFIRM comment.
 */
import type { Locale } from './content';
import type {
  BasicsCopy,
  CompareCopy,
  CtaCopy,
  DisclosuresCopy,
  FaqCopy,
  FeatureGridCopy,
  HeroCopy,
  ProcessCopy,
  ProcessDetail,
  TypesCopy,
} from './service-types';

export type CostSharingCopy = {
  title: string;
  takeaway: string;
  you: string;
  plan: string;
  phases: { label: string; text: string }[];
  note: string;
};

type HealthContent = {
  meta: { title: string; description: string };
  hero: HeroCopy;
  basics: BasicsCopy;
  types: TypesCopy;
  terms: FeatureGridCopy;
  costs: CostSharingCopy;
  compare: CompareCopy;
  enroll: FeatureGridCopy;
  process: ProcessCopy;
  processDetails: ProcessDetail[];
  faq: FaqCopy;
  related: { eyebrow: string; title: string; intro: string };
  cta: CtaCopy;
  disclosures: DisclosuresCopy;
};

const en: HealthContent = {
  meta: {
    title: 'Health Insurance in Bellevue, WA · Asset One Insurance',
    description:
      'Individual and family plans, small business coverage and Medicare, compared side by side and explained in plain language. In English and 中文.',
  },

  hero: {
    eyebrow: 'Services · Health Insurance',
    title: ['Coverage that keeps care within reach.'],
    lead: 'Individual and family plans, small business coverage and Medicare, compared side by side and explained in plain language, so you can choose with confidence.',
    primary: 'Talk with us',
    secondary: 'Compare plan options',
  },

  basics: {
    eyebrow: 'The basics',
    title: 'What health insurance is for',
    body: [
      'Health insurance helps pay for doctor visits, hospital stays, prescriptions and preventive care, and puts a ceiling on how much a serious illness or injury can cost you in a year. It protects your health and your savings at the same time.',
      'The right plan depends on the doctors you want to keep, the prescriptions you take, how often you expect to need care, and whether you’d rather pay more each month or more when you use care. We start with those questions.',
    ],
    checklistTitle: 'It may be worth a look if…',
    checklist: [
      'You’re self-employed, retiring early or between jobs',
      'You’re turning 65, or helping a parent with Medicare',
      'Your household has changed: a marriage, a new baby, a move',
      'You run a small business and want to offer coverage to your team',
      'Your current plan’s costs or doctor network no longer fit',
    ],
  },

  // CONFIRM: which of these four Asset One offers (doc 05, open question 5)
  types: {
    eyebrow: 'Plan options',
    title: 'Coverage for each stage of life',
    intro:
      'Most people start from one of four places. Choose the one that describes you to see which options are usually worth comparing.',
    labels: { mayFit: 'May fit', weigh: 'Worth weighing' },
    goalsLabel: 'What describes you?',
    goalsAll: 'All four',
    allNote: 'Choose the one that describes you to see which options are usually worth comparing.',
    goals: [
      {
        key: 'self',
        label: 'Self-employed or between jobs',
        highlights: ['individual'],
        note: 'Individual and family plans are the usual starting point. Many households qualify for lower premiums through Washington Healthplanfinder.',
      },
      {
        key: 'family',
        label: 'Covering my family',
        highlights: ['individual', 'group'],
        note: 'Compare family coverage through work with an individual plan. The lower premium isn’t always the lower total cost.',
      },
      {
        key: 'business',
        label: 'I run a small business',
        highlights: ['group', 'individual'],
        note: 'A group plan is the traditional route. We’ll explain the participation and contribution rules insurers set.',
      },
      {
        key: 'sixtyfive',
        label: 'Turning 65',
        highlights: ['advantage', 'supplement'],
        note: 'Most people choose between Medicare Advantage and Original Medicare with a supplement. Your first window opens three months before the month you turn 65.',
      },
      {
        key: 'parent',
        label: 'Helping a parent with Medicare',
        highlights: ['advantage', 'supplement'],
        note: 'We can sit down with you and your parent, in English or 中文, and compare plans that fit their doctors and prescriptions.',
      },
    ],
    cards: [
      {
        id: 'individual',
        name: 'Individual and family',
        summary:
          'Plans you buy for yourself or your household, including through Washington Healthplanfinder, the state’s marketplace.',
        mayFit: 'The self-employed, early retirees and anyone without coverage through work.',
        weigh: 'You can enroll only during open enrollment or after a qualifying life event, and networks vary a lot between plans.',
      },
      {
        id: 'group',
        name: 'Small business group',
        summary: 'Coverage a business offers its team, with the cost usually shared between the employer and employees.',
        mayFit: 'Owners who want to attract and keep good people.',
        weigh: 'Insurers set minimum participation and contribution rules, and the business handles some paperwork each year.',
      },
      {
        id: 'advantage',
        name: 'Medicare Advantage',
        summary:
          'Also called Part C: an all-in-one alternative to Original Medicare from a private insurer, often with drug coverage and extras.',
        mayFit: 'People comfortable using a provider network who like set copays.',
        weigh: 'You’ll usually need in-network doctors, sometimes referrals, and benefits can change each year.',
      },
      {
        id: 'supplement',
        name: 'Medicare Supplement',
        summary:
          'Also called Medigap: works alongside Original Medicare to cover costs such as deductibles and coinsurance. Usually paired with a Part D drug plan.',
        mayFit: 'People who want to see any provider that accepts Medicare, with few surprise bills.',
        weigh: 'Monthly premiums are usually higher, and switching later may mean answering health questions.',
      },
    ],
  },

  terms: {
    eyebrow: 'Plain terms',
    title: 'The words that decide what you pay',
    intro: 'Every plan is built from the same pieces. Knowing them makes any two plans easier to compare.',
    items: [
      { name: 'Premium', body: 'What you pay each month to keep the plan, whether or not you use care.' },
      { name: 'Deductible', body: 'What you pay for covered care each year before the plan starts sharing the cost.' },
      { name: 'Copay', body: 'A set amount for a visit or prescription, such as a fixed fee to see your doctor.' },
      { name: 'Coinsurance', body: 'Your share of a bill as a percentage, once you’ve met the deductible.' },
      {
        name: 'Out-of-pocket maximum',
        body: 'The most you’ll pay for covered care in a year. After that, the plan pays 100% of covered costs.',
      },
      {
        name: 'Network',
        body: 'The doctors and hospitals that contract with the plan. Staying in network usually costs far less.',
      },
    ],
  },

  costs: {
    title: 'How costs are shared over a year',
    takeaway: 'You pay more of the early bills. The plan pays more as the year goes on, and all of it once you reach the limit.',
    you: 'You pay',
    plan: 'Your plan pays',
    phases: [
      { label: 'Until the deductible', text: 'You pay the bills for most covered care.' },
      { label: 'After the deductible', text: 'You and the plan share costs through copays and coinsurance.' },
      { label: 'After the out-of-pocket maximum', text: 'The plan pays 100% of covered care for the rest of the year.' },
    ],
    note: 'An illustration, not to scale. Premiums are separate and don’t count toward these limits. Many plans cover preventive care at no cost and charge set copays for some visits before the deductible.',
  },

  compare: {
    eyebrow: 'Turning 65',
    title: 'Medicare Advantage or a supplement?',
    takeaway: 'Lower monthly costs usually come with a network and copays. More freedom usually costs more each month.',
    caption: 'Comparison of Medicare Advantage and Original Medicare with a Medicare Supplement',
    columns: ['Medicare Advantage', 'Original Medicare + supplement'],
    levels: ['None', 'Low', 'Medium', 'High'],
    legend: 'Levels show general tendencies compared with the other option. Individual plans vary.',
    rows: [
      {
        label: 'Choice of doctors',
        cells: [
          { level: 1, text: 'Usually a network; referrals may be needed' },
          { level: 3, text: 'Any provider in the U.S. that accepts Medicare' },
        ],
      },
      {
        label: 'Monthly premium',
        cells: [
          { level: 1, text: 'Often low, plus your Part B premium' },
          { level: 3, text: 'Higher, plus Part B and a drug plan' },
        ],
      },
      {
        label: 'Costs when you get care',
        cells: [
          { level: 2, text: 'Copays and coinsurance, up to a yearly limit' },
          { level: 1, text: 'Low; most plans cover most of what Medicare doesn’t' },
        ],
      },
      {
        label: 'Drug coverage',
        cells: [{ text: 'Usually included' }, { text: 'A separate Part D plan' }],
      },
      {
        label: 'Extras',
        cells: [{ text: 'Often some dental, vision or hearing benefits' }, { text: 'Not included; can be bought separately' }],
      },
      {
        label: 'Changing later',
        cells: [
          { text: 'You can switch plans each fall' },
          { text: 'A new supplement may require health questions' },
        ],
      },
    ],
    footnote: 'Plans, premiums and benefits vary by county and change every year.',
  },

  enroll: {
    eyebrow: 'Timing',
    title: 'When you can enroll',
    intro: 'Health coverage runs on set windows. Missing one can mean waiting months, or a lasting penalty with Medicare.',
    items: [
      {
        name: 'Open enrollment',
        body: 'Once a year, starting November 1, for individual and family plans. Washington Healthplanfinder sets the closing date.',
      },
      {
        name: 'Special enrollment',
        body: 'Usually within 60 days of a qualifying life event, such as losing other coverage, marriage, a new baby or a move.',
      },
      {
        name: 'Employer plans',
        body: 'When you’re hired, at your employer’s yearly renewal, or after a qualifying life event.',
      },
      {
        name: 'Medicare at 65',
        body: 'A seven-month window: the three months before the month you turn 65, that month, and the three months after.',
      },
      {
        name: 'Medicare each fall',
        body: 'From October 15 to December 7, you can switch Medicare Advantage or Part D plans for the next year.',
      },
      {
        name: 'Medicare Advantage, early in the year',
        body: 'From January 1 to March 31, you can change Medicare Advantage plans once, or return to Original Medicare.',
      },
    ],
  },

  process: {
    eyebrow: 'How we work',
    title: 'What working with us looks like',
    intro: 'Clear steps, at your pace. You’re welcome to pause at any point.',
    stepLabel: 'Step {n}',
    steps: [
      {
        // CONFIRM: spoken languages and meeting options (same as Life Insurance)
        title: 'A conversation',
        body: 'A relaxed first meeting in Bellevue, by phone or by video, in English or 中文. We learn about your household, doctors, prescriptions and budget.',
      },
      {
        title: 'Check what fits',
        body: 'We check eligibility for marketplace savings, employer coverage or Medicare, and list what a plan must cover for you.',
      },
      {
        title: 'Compare plans',
        body: 'We compare premiums, deductibles, networks and drug coverage across insurers, side by side.',
      },
      {
        title: 'Enroll',
        body: 'We help you enroll in the plan you choose, in the right window, and confirm when your coverage starts.',
      },
      {
        // CONFIRM: ongoing service (help with bills and claims questions)
        title: 'Help through the year',
        body: 'We’re here for questions about coverage or bills, and we review your plan with you before the next enrollment period.',
      },
    ],
  },

  processDetails: [
    {
      step: 2,
      title: 'What to bring to our first meeting',
      intro: 'A few details make the comparison accurate from the start:',
      items: [
        'Your current insurance cards, if you have coverage now',
        'The doctors, clinics and hospitals you want to keep',
        'Your prescriptions, with doses',
        'An estimate of this year’s household income, to check for marketplace savings',
        'Your Medicare card and start dates, if you’re turning 65 or already enrolled',
      ],
    },
    {
      step: 4,
      title: 'Good to know when you enroll',
      items: [
        'Coverage usually starts on the first of a month, depending on the plan and when you enroll.',
        'Keep your current coverage until the new plan is confirmed, so there’s no gap.',
        'Marketplace savings are based on your estimated income. Report changes during the year so they stay accurate.',
        'Enrolling in Medicare late can bring a penalty that lasts as long as you have coverage. We’ll help you keep track of the dates.',
      ],
    },
  ],

  faq: {
    eyebrow: 'Questions',
    title: 'Common questions',
    intro: 'Short answers to what people ask us most. We’re happy to go further in person.',
    items: [
      {
        // CONFIRM: broker certification with Washington Healthplanfinder
        q: 'Can you help me find out if I qualify for lower premiums?',
        a: 'Yes. Many individuals and families who buy through Washington Healthplanfinder qualify for tax credits that lower their monthly premium, based on household income and size. We’ll help you check and apply.',
      },
      {
        q: 'Does it cost more to use an agent?',
        a: 'Generally, no. The premium for the same plan is the same whether you enroll on your own or with us. Insurers pay agents a commission.',
      },
      {
        q: 'Can I keep my doctors?',
        a: 'Often, yes, if they’re in the plan’s network. We check your doctors, clinics and hospitals against each plan before you choose.',
      },
      {
        q: 'What’s the difference between an HMO and a PPO?',
        a: 'An HMO usually asks you to use doctors in its network and get referrals to see specialists, in return for lower costs. A PPO lets you see providers outside the network, at a higher cost. An EPO sits in between: no referrals, but generally no coverage outside the network except emergencies.',
      },
      {
        q: 'I’m turning 65 but still working. Do I need Medicare?',
        a: 'It depends on the size of your employer and your coverage there. Some people can delay Part B without a penalty while covered by an employer plan based on current work; others need to enroll. We’ll help you check before your window closes.',
      },
      {
        q: 'What if I miss open enrollment?',
        a: 'You may still qualify for a special enrollment period after a life event, such as losing other coverage, marriage, a new baby or a move. Otherwise, you’ll usually wait for the next open enrollment.',
      },
      {
        // CONFIRM: compensation model and any fees
        q: 'How are you paid?',
        a: 'Like most insurance agencies, we’re typically paid a commission by the insurer whose plan you choose. We’re happy to explain how compensation works for any plan we recommend.',
      },
    ],
  },

  related: {
    eyebrow: 'Other services',
    title: 'Other ways we can help',
    intro: 'Life insurance and annuities, compared and explained the same way.',
  },

  cta: {
    title: 'Start with a conversation',
    body: 'Tell us who needs coverage and which doctors matter to you. We’ll compare the plans that may fit, with no pressure to decide.',
    primary: 'Talk with us',
    phone: 'Call',
  },

  // CONFIRM: compliance sign-off; the Medicare statements follow CMS rules for agents
  disclosures: {
    title: 'Important information',
    items: [
      'Asset One Insurance is an insurance agency licensed in Washington State ([PLACEHOLDER] License no.). Plans are issued by the insurance companies we represent, not by Asset One Insurance. Benefits, networks, premiums and availability vary by insurer, county and year.',
      'We do not offer every plan available in your area. Any information we provide is limited to those plans we do offer in your area. Please contact Medicare.gov or 1-800-MEDICARE to get information on all of your options.',
      'Asset One Insurance is not connected with or endorsed by the U.S. government or the federal Medicare program.',
      'Eligibility for premium tax credits is determined by Washington Healthplanfinder and depends on household income and other factors.',
      'Enrollment dates and rules described on this page are general and may change. This page is general information, not legal or tax advice.',
    ],
  },
};

const zh: HealthContent = {
  meta: {
    title: '健康险 · 华盛顿州贝尔维尤 | Asset One Insurance',
    description: '个人与家庭计划、小企业团体保险及联邦医疗保险（Medicare），并排比较，用浅显的语言讲清楚。中英文服务。',
  },

  hero: {
    eyebrow: '服务 · 健康险',
    title: ['让医疗照护，', '始终触手可及。'],
    lead: '个人与家庭计划、小企业团体保险及联邦医疗保险（Medicare），并排比较，用浅显的语言讲清楚，让您安心选择。',
    primary: '联系我们',
    secondary: '比较计划类型',
  },

  basics: {
    eyebrow: '基础知识',
    title: '健康险的作用',
    body: [
      '健康险帮助支付看诊、住院、处方药和预防保健的费用，并为一年内重大疾病或意外可能带来的花费设定上限。它守护的既是您的健康，也是您的积蓄。',
      '适合的计划取决于您想继续看哪些医生、正在服用哪些药物、预计多久需要一次医疗服务，以及您更愿意每月多付保费，还是在看病时多付费用。我们从这些问题开始。',
    ],
    checklistTitle: '如果符合以下情况，不妨了解一下……',
    checklist: [
      '您是自雇人士、提前退休，或正处于换工作期间',
      '您即将年满65岁，或正在帮父母了解联邦医疗保险',
      '家庭情况有变化：结婚、添了宝宝、搬家',
      '您经营小企业，希望为员工提供保险',
      '目前计划的费用或医生网络已不再适合您',
    ],
  },

  types: {
    eyebrow: '计划类型',
    title: '每个人生阶段的保障',
    intro: '大多数人都从以下四种情况之一开始。选择最符合您的一项，看看通常值得比较哪些方案。',
    labels: { mayFit: '可能适合', weigh: '需要权衡' },
    goalsLabel: '哪一项最符合您？',
    goalsAll: '全部四种',
    allNote: '选择最符合您的一项，看看通常值得比较哪些方案。',
    goals: [
      {
        key: 'self',
        label: '自雇或正在换工作',
        highlights: ['individual'],
        note: '通常从个人与家庭计划开始。许多家庭可通过 Washington Healthplanfinder 获得保费补贴。',
      },
      {
        key: 'family',
        label: '为全家投保',
        highlights: ['individual', 'group'],
        note: '把公司提供的家庭保险与个人计划做个比较。保费较低的，总花费不一定较低。',
      },
      {
        key: 'business',
        label: '我经营小企业',
        highlights: ['group', 'individual'],
        note: '团体计划是传统做法。我们会说明保险公司对参保比例和雇主分担比例的要求。',
      },
      {
        key: 'sixtyfive',
        label: '即将年满65岁',
        highlights: ['advantage', 'supplement'],
        note: '大多数人会在 Medicare Advantage 与“传统 Medicare + 补充保险”之间选择。首次投保窗口从您满65岁当月的前三个月开始。',
      },
      {
        key: 'parent',
        label: '帮父母了解 Medicare',
        highlights: ['advantage', 'supplement'],
        note: '我们可以与您和父母一起坐下来，用中文或英文比较适合他们医生和用药的计划。',
      },
    ],
    cards: [
      {
        id: 'individual',
        name: '个人与家庭计划',
        summary: '为自己或家人购买的计划，包括通过华盛顿州的保险交易平台 Washington Healthplanfinder 购买。',
        mayFit: '自雇人士、提前退休者，以及没有雇主保险的人。',
        weigh: '只能在开放投保期或发生符合条件的人生事件后投保，不同计划的医生网络差别很大。',
      },
      {
        id: 'group',
        name: '小企业团体保险',
        summary: '企业为员工提供的保险，费用通常由雇主和员工共同分担。',
        mayFit: '希望吸引并留住优秀员工的企业主。',
        weigh: '保险公司对最低参保比例和雇主分担比例有要求，企业每年也需要处理一些行政手续。',
      },
      {
        id: 'advantage',
        name: 'Medicare Advantage',
        summary: '又称 Part C：由私营保险公司提供、可替代传统 Medicare 的一体化计划，通常包含药品保障和额外福利。',
        mayFit: '习惯在医疗网络内就医、喜欢固定自付额的人。',
        weigh: '通常需要看网络内的医生，有时需要转诊，福利每年都可能调整。',
      },
      {
        id: 'supplement',
        name: 'Medicare 补充保险',
        summary: '又称 Medigap：与传统 Medicare 搭配，支付自付额、共同保险等费用，通常再搭配一份 Part D 药品计划。',
        mayFit: '希望可以看任何接受 Medicare 的医生、少有意外账单的人。',
        weigh: '月保费通常较高；日后更换时可能需要回答健康问题。',
      },
    ],
  },

  terms: {
    eyebrow: '名词解释',
    title: '决定您花费多少的几个词',
    intro: '每个计划都由同样的几个部分组成。了解它们，比较任何两个计划都会容易得多。',
    items: [
      { name: '保费', body: '为维持计划每月支付的费用，无论是否就医都要缴纳。' },
      { name: '自付额（Deductible）', body: '每年在计划开始分担费用之前，您需要先自行支付的承保医疗费用。' },
      { name: '共付额（Copay）', body: '每次看诊或取药时支付的固定金额，例如看家庭医生的固定费用。' },
      { name: '共同保险（Coinsurance）', body: '达到自付额之后，您按比例分担的那部分费用。' },
      { name: '自付上限', body: '一年内您为承保医疗服务支付的最高金额。超过之后，计划支付全部承保费用。' },
      { name: '医疗网络', body: '与计划签约的医生和医院。在网络内就医，费用通常低得多。' },
    ],
  },

  costs: {
    title: '一年之中，费用如何分担',
    takeaway: '年初的账单您付得多；随着时间推移，计划分担得越来越多，达到上限后则全部由计划支付。',
    you: '您支付',
    plan: '计划支付',
    phases: [
      { label: '达到自付额之前', text: '大部分承保医疗费用由您支付。' },
      { label: '达到自付额之后', text: '通过共付额和共同保险，由您和计划共同分担。' },
      { label: '达到自付上限之后', text: '当年余下时间，承保医疗费用全部由计划支付。' },
    ],
    note: '示意图，未按比例绘制。保费另计，不计入上述限额。许多计划免费提供预防保健，部分看诊在达到自付额之前也只需支付固定共付额。',
  },

  compare: {
    eyebrow: '年满65岁',
    title: 'Medicare Advantage 还是补充保险？',
    takeaway: '月费较低，通常意味着有医疗网络和共付额；自由度越高，每月花费通常越多。',
    caption: 'Medicare Advantage 与“传统 Medicare + 补充保险”的比较',
    columns: ['Medicare Advantage', '传统 Medicare + 补充保险'],
    levels: ['无', '低', '中', '高'],
    legend: '等级表示与另一选项相比的大致倾向，具体计划可能不同。',
    rows: [
      {
        label: '医生选择',
        cells: [
          { level: 1, text: '通常限于网络内，可能需要转诊' },
          { level: 3, text: '全美任何接受 Medicare 的医疗机构' },
        ],
      },
      {
        label: '月保费',
        cells: [
          { level: 1, text: '通常较低，另加 Part B 保费' },
          { level: 3, text: '较高，另加 Part B 保费和药品计划' },
        ],
      },
      {
        label: '就医时的花费',
        cells: [
          { level: 2, text: '共付额和共同保险，每年设有上限' },
          { level: 1, text: '较低；多数计划承担 Medicare 未支付的大部分费用' },
        ],
      },
      {
        label: '药品保障',
        cells: [{ text: '通常已包含' }, { text: '需另购 Part D 计划' }],
      },
      {
        label: '额外福利',
        cells: [{ text: '常含部分牙科、视力或听力福利' }, { text: '不包含，可另行购买' }],
      },
      {
        label: '日后更换',
        cells: [{ text: '每年秋季可以更换计划' }, { text: '更换补充保险可能需要回答健康问题' }],
      },
    ],
    footnote: '计划、保费和福利因县而异，并且每年都会调整。',
  },

  enroll: {
    eyebrow: '时间安排',
    title: '什么时候可以投保',
    intro: '健康险按固定的时间窗口办理。错过窗口，可能要等上几个月；如果是 Medicare，还可能面临长期的罚金。',
    items: [
      {
        name: '开放投保期',
        body: '个人与家庭计划每年一次，从11月1日开始，截止日期由 Washington Healthplanfinder 公布。',
      },
      {
        name: '特殊投保期',
        body: '通常在符合条件的人生事件发生后60天内，例如失去其他保险、结婚、添了宝宝或搬家。',
      },
      {
        name: '雇主计划',
        body: '入职时、雇主每年续保时，或发生符合条件的人生事件之后。',
      },
      {
        name: '年满65岁时的 Medicare',
        body: '共七个月：满65岁当月的前三个月、当月，以及之后的三个月。',
      },
      {
        name: '每年秋季的 Medicare',
        body: '每年10月15日至12月7日，可以为下一年更换 Medicare Advantage 或 Part D 计划。',
      },
      {
        name: '年初的 Medicare Advantage',
        body: '每年1月1日至3月31日，可以更换一次 Medicare Advantage 计划，或回到传统 Medicare。',
      },
    ],
  },

  process: {
    eyebrow: '我们的做法',
    title: '与我们合作的流程',
    intro: '步骤清晰，按您的节奏进行。您随时可以暂停。',
    stepLabel: '第{n}步',
    steps: [
      {
        title: '初次交流',
        body: '在贝尔维尤面谈，或通过电话、视频进行轻松的初次交流，中英文皆可。我们会了解您的家庭成员、医生、用药和预算。',
      },
      {
        title: '确认适合的方向',
        body: '我们会确认您是否符合交易平台补贴、雇主保险或 Medicare 的资格，并列出计划必须涵盖的内容。',
      },
      {
        title: '比较计划',
        body: '我们把多家保险公司的保费、自付额、医疗网络和药品保障并排比较。',
      },
      {
        title: '办理投保',
        body: '我们协助您在正确的窗口期内投保所选计划，并确认保障何时生效。',
      },
      {
        title: '全年协助',
        body: '有关保障或账单的问题，随时可以找我们；下一个投保期之前，我们也会和您一起重新检视计划。',
      },
    ],
  },

  processDetails: [
    {
      step: 2,
      title: '初次见面时请带上',
      intro: '有了这些资料，比较从一开始就会更准确：',
      items: [
        '目前的保险卡（如有）',
        '您希望继续看的医生、诊所和医院',
        '您的处方药及剂量',
        '今年家庭收入的估算，用于确认交易平台补贴',
        '如即将年满65岁或已参加 Medicare，请带上 Medicare 卡和生效日期',
      ],
    },
    {
      step: 4,
      title: '投保时值得留意',
      items: [
        '保障通常在某月1日生效，具体取决于计划和投保时间。',
        '在新计划确认之前，请保留现有保险，避免出现保障空档。',
        '交易平台的补贴根据您估算的收入计算。年内收入有变化时请及时申报，以免补贴不准确。',
        '延迟参加 Medicare 可能产生罚金，并在您参保期间一直适用。我们会帮您留意各个时间点。',
      ],
    },
  ],

  faq: {
    eyebrow: '常见问题',
    title: '常见问题',
    intro: '简要解答大家最常问的问题。欢迎当面详谈。',
    items: [
      {
        q: '你们能帮我确认是否符合保费补贴的资格吗？',
        a: '可以。许多通过 Washington Healthplanfinder 投保的个人和家庭，可以根据家庭收入和人数获得税收抵免，降低每月保费。我们会协助您确认并申请。',
      },
      {
        q: '通过代理人投保会更贵吗？',
        a: '一般不会。同一计划的保费，无论您自行投保还是通过我们投保都是一样的。代理人的佣金由保险公司支付。',
      },
      {
        q: '我可以继续看原来的医生吗？',
        a: '如果他们在计划的医疗网络内，通常可以。在您做决定之前，我们会逐一核对您的医生、诊所和医院是否在各个计划的网络中。',
      },
      {
        q: 'HMO 和 PPO 有什么区别？',
        a: 'HMO 通常要求您在网络内就医，看专科医生需要转诊，换来的是较低的费用。PPO 允许您在网络外就医，但费用较高。EPO 介于两者之间：无需转诊，但除急诊外，网络外一般不予承保。',
      },
      {
        q: '我快65岁了，但还在工作，需要参加 Medicare 吗？',
        a: '这取决于雇主的规模以及您在公司的保险。有些人在享有基于在职身份的雇主保险期间，可以推迟参加 Part B 而不受罚；有些人则需要按时参加。我们会在窗口关闭之前帮您确认。',
      },
      {
        q: '错过了开放投保期怎么办？',
        a: '如果发生了失去其他保险、结婚、添了宝宝或搬家等人生事件，您可能仍符合特殊投保期的条件。否则，通常需要等到下一个开放投保期。',
      },
      {
        q: '你们如何获得报酬？',
        a: '和大多数保险代理机构一样，我们通常由您所选计划的保险公司支付佣金。对于我们推荐的任何计划，我们都乐意说明报酬是如何计算的。',
      },
    ],
  },

  related: {
    eyebrow: '其他服务',
    title: '我们还能为您做什么',
    intro: '寿险与年金，同样为您比较、讲清楚。',
  },

  cta: {
    title: '从一次交流开始',
    body: '告诉我们谁需要保险、哪些医生对您很重要。我们会为您比较可能适合的计划，绝不催促您做决定。',
    primary: '联系我们',
    phone: '致电',
  },

  disclosures: {
    title: '重要信息',
    items: [
      'Asset One Insurance 是在华盛顿州持牌的保险代理机构（[PLACEHOLDER] 执照编号）。计划由我们代理的保险公司签发，而非 Asset One Insurance。福利、医疗网络、保费和供应情况因保险公司、县和年份而异。',
      '我们并未提供您所在地区的所有计划。我们提供的任何信息仅限于我们在您所在地区提供的计划。如需了解您的全部选择，请访问 Medicare.gov 或致电 1-800-MEDICARE。',
      'Asset One Insurance 与美国政府或联邦 Medicare 计划没有关联，亦未获其认可。',
      '保费税收抵免的资格由 Washington Healthplanfinder 认定，取决于家庭收入及其他因素。',
      '本页所述的投保日期和规则仅为一般性说明，可能发生变化。本页为一般性信息，不构成法律或税务建议。',
    ],
  },
};

export const healthInsurance: Record<Locale, HealthContent> = { en, zh };
