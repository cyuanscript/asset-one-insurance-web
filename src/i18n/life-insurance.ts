/**
 * Copy for /services/life-insurance/ (EN) and /zh/services/life-insurance/.
 *
 * Source: content-packs/services-life-insurance.md (v3). Edit the copy
 * here; the pack is the reviewed reference. Items still marked [CONFIRM]
 * in the pack are flagged with a // CONFIRM comment.
 */
import type { Locale } from './content';

export type CoverageId = 'term' | 'whole' | 'iul' | 'survivorship';

type Link = { label: string; href: string };

const en = {
  meta: {
    title: 'Life Insurance in Bellevue, WA · Asset One Insurance',
    description:
      'Term, whole, indexed universal and survivorship life insurance, compared across carriers and explained in plain language. In English and 中文.',
  },

  hero: {
    eyebrow: 'Services · Life Insurance',
    title: ['A steady plan for the people who count on you.'],
    lead: 'Term and permanent life insurance, compared across carriers and explained in plain language, so you can choose coverage that fits your family and your budget.',
    primary: 'Talk with us',
    secondary: 'Compare coverage types',
  },

  basics: {
    eyebrow: 'The basics',
    title: 'What life insurance is for',
    body: [
      'Life insurance pays a sum of money, called the death benefit, to the people you name when you pass away. Families use it to keep up with the mortgage, cover everyday costs, pay off debts, fund a child’s education or pass on an inheritance. Permanent policies also build cash value you can use while you’re living.',
      'The right policy depends on how long others will rely on you, what you want the money to do, and what fits comfortably in your budget now and later. We start there, not with a product.',
    ],
    checklistTitle: 'It may be worth a look if…',
    checklist: [
      'A partner, children or parents rely on your income',
      'You have a mortgage or other debts you wouldn’t want to leave behind',
      'You own a business, or partners rely on you to keep it running',
      'You’d like to leave an inheritance, or a gift to a cause you care about',
      'Your coverage through work would end if you changed jobs, or may not be enough on its own',
    ],
  },

  types: {
    eyebrow: 'Coverage types',
    title: 'Term and permanent, side by side',
    intro:
      'There are two broad families. Term covers you for a set number of years. Permanent is designed to last your whole life and builds cash value. Choose a goal to see which types are usually worth comparing, or read all four.',
    labels: { mayFit: 'May fit', weigh: 'Worth weighing' },
    goalsLabel: 'What should the policy do?',
    goalsAll: 'All four',
    allNote: 'Choose a goal to see which types are usually worth comparing.',
    goals: [
      {
        key: 'income',
        label: 'Protect my family’s income',
        highlights: ['term'],
        note: 'Term usually gives the most coverage for the premium during the years others rely on you. Some families pair it with a smaller permanent policy.',
      },
      {
        key: 'certain',
        label: 'Lifelong coverage, predictable costs',
        highlights: ['whole'],
        note: 'Whole life sets the premium, a minimum cash value and the death benefit in the policy from the start.',
      },
      {
        key: 'flex',
        label: 'Lifelong coverage with room to grow',
        highlights: ['iul'],
        note: 'Indexed universal life trades some certainty for flexibility and growth potential, and needs regular reviews.',
      },
      {
        key: 'legacy',
        label: 'Leave an inheritance',
        highlights: ['whole', 'iul', 'survivorship'],
        note: 'Couples planning an estate often compare one survivorship policy with a permanent policy on each person.',
      },
      {
        key: 'business',
        label: 'Protect my business',
        highlights: ['term', 'whole', 'iul'],
        note: 'Key person and buy-sell plans can use term or permanent coverage.',
        link: { label: 'See planning for business owners', href: '#business' },
      },
      {
        key: 'child',
        label: 'A head start for a child or grandchild',
        highlights: ['whole', 'iul'],
        note: 'A policy bought young is priced on a young age, and its cash value has decades to build. Worth comparing with a 529 plan.',
      },
    ] as { key: string; label: string; highlights: CoverageId[]; note: string; link?: Link }[],
    cards: [
      {
        id: 'term',
        name: 'Term life',
        summary: 'Coverage for a set number of years, often 10, 20 or 30. If you outlive the term, the coverage ends.',
        mayFit: 'The years your family relies on your income most, like while children are young or the mortgage is outstanding.',
        weigh: 'The lowest premium for the most coverage, but no cash value. Many people choose a policy they can later convert to permanent.',
      },
      {
        id: 'whole',
        name: 'Whole life',
        summary: 'Lifelong coverage built on three guarantees:',
        bullets: [
          'A premium that never goes up',
          'Cash value that grows on a set schedule',
          'A death benefit that stays in place while premiums are paid',
        ],
        note: 'Some policies also pay dividends, which aren’t guaranteed.',
        mayFit: 'People who value certainty and predictable costs over flexibility.',
        weigh: 'Costs much more than term for the same coverage, and cash value builds slowly at first.',
      },
      {
        id: 'iul',
        name: 'Indexed universal life',
        summary:
          'Lifelong coverage with flexible premiums. Cash value earns interest linked to a market index, with a cap on gains and a floor against index losses.',
        mayFit: 'People who want some growth potential and are comfortable reviewing the policy regularly.',
        weigh: 'Caps and charges can change, and results aren’t guaranteed. It needs ongoing attention so it doesn’t lapse.',
      },
      {
        id: 'survivorship',
        name: 'Survivorship life',
        summary: 'One permanent policy on two people, usually spouses. It pays out after the second person passes away.',
        mayFit: 'Estate and legacy planning, coordinated with your attorney or CPA.',
        weigh: 'Nothing is paid to the surviving spouse, but premiums are often lower than for two separate policies.',
      },
    ] as {
      id: CoverageId;
      name: string;
      summary: string;
      bullets?: string[];
      note?: string;
      mayFit: string;
      weigh: string;
    }[],
  },

  compare: {
    eyebrow: 'Compare',
    title: 'At a glance',
    takeaway: 'More certainty usually costs more. More flexibility usually needs more attention.',
    caption: 'Comparison of term, whole life and indexed universal life insurance',
    columns: ['Term', 'Whole life', 'Indexed UL'],
    levels: ['None', 'Low', 'Medium', 'High'],
    legend: 'Levels show general tendencies compared with the other two. Individual policies vary.',
    rows: [
      {
        label: 'How long it lasts',
        cells: [
          { text: 'A set period, often 10–30 years' },
          { text: 'For life, as long as premiums are paid' },
          { text: 'For life, if the policy stays funded enough' },
        ],
      },
      {
        label: 'Premium',
        cells: [
          { level: 1, text: 'Lowest to start' },
          { level: 3, text: 'Highest, and fixed for life' },
          { level: 2, text: 'Flexible, within limits' },
        ],
      },
      {
        label: 'Cash value',
        cells: [
          { text: 'None' },
          { text: 'Grows on a guaranteed schedule, plus possible dividends' },
          { text: 'Credited based on an index, within a cap and a floor' },
        ],
      },
      {
        label: 'Predictability',
        cells: [
          { level: 3, text: 'Steady during the term' },
          { level: 3, text: 'Guarantees set at the start' },
          { level: 1, text: 'Varies with index results and charges' },
        ],
      },
      {
        label: 'Growth potential',
        cells: [
          { level: 0, text: 'No cash value to grow' },
          { level: 1, text: 'Steady, more modest' },
          { level: 2, text: 'Higher, limited by a cap' },
        ],
      },
      {
        label: 'Flexibility',
        cells: [
          { level: 1, text: 'Can often convert to permanent' },
          { level: 1, text: 'Set premiums' },
          { level: 3, text: 'Adjust premiums and death benefit' },
        ],
      },
      {
        label: 'Attention needed',
        cells: [
          { level: 1, text: 'Set it and review with life changes' },
          { level: 1, text: 'Set it and review with life changes' },
          { level: 3, text: 'Review regularly' },
        ],
      },
      {
        label: 'Often used for',
        cells: [
          { text: 'Income replacement, the mortgage, young families' },
          { text: 'Certainty, legacy, business planning' },
          { text: 'Lifelong coverage with growth potential, extra retirement flexibility' },
        ],
      },
    ] as { label: string; cells: { level?: number; text: string }[] }[],
    footnote:
      'Survivorship life is a permanent policy, built on whole life or universal life, that covers two people.',
  },

  riders: {
    eyebrow: 'Riders',
    title: 'Features you can add',
    intro:
      'Riders add features to a policy, sometimes at an extra cost. Availability and terms vary by carrier and state.',
    items: [
      {
        name: 'Accelerated death benefit',
        body: 'Lets you receive part of the death benefit early if you’re diagnosed with a qualifying terminal, chronic or critical illness.',
      },
      { name: 'Long-term care', body: 'Lets you use part of the death benefit to pay for qualifying long-term care.' },
      {
        name: 'Waiver of premium',
        body: 'Keeps the policy in force without premiums if you become disabled and can’t work, as defined in the rider.',
      },
      {
        name: 'Conversion',
        body: 'Lets you change term coverage to permanent without new health questions, within the deadlines set in the policy.',
      },
      {
        name: 'No-lapse guarantee',
        body: 'For universal life policies: keeps coverage in force for a set period even if cash value runs low, as long as the rider’s premium requirements are met.',
      },
      { name: 'Child term', body: 'Adds a small amount of term coverage for your children to your own policy.' },
    ],
  },

  business: {
    eyebrow: 'Advanced planning',
    title: 'For business owners and larger estates',
    intro:
      'Some plans involve a business, a trust or a sizeable estate. We work alongside your CPA and attorney so the insurance, tax and legal pieces fit together.',
    items: [
      {
        title: 'Key person coverage',
        body: 'Helps a business stay steady if it loses an owner or essential employee, with money for lost revenue, recruiting or debts.',
      },
      {
        title: 'Buy-sell funding',
        body: 'Gives surviving owners the money to buy a partner’s share at an agreed price, so the family is paid fairly and the business carries on.',
      },
      {
        title: 'Executive benefits',
        body: 'Permanent policies can fund extra retirement or survivor benefits that help keep key leaders.',
      },
      {
        title: 'Trust-owned policies',
        body: 'For larger estates, a policy can be owned by an irrevocable life insurance trust that your attorney sets up, which may help keep the proceeds out of your taxable estate.',
      },
    ],
    financingTitle: 'Premium financing.',
    financing:
      'For some high-net-worth clients, a bank loan pays the premiums on a large policy. It carries interest-rate, collateral and policy-performance risks and suits only specific situations. If it comes up, we’ll explain the downsides as clearly as the benefits.',
  },

  process: {
    eyebrow: 'How we work',
    title: 'What working with us looks like',
    intro: 'Clear steps, at your pace. You’re welcome to pause at any point.',
    stepLabel: 'Step {n}',
    steps: [
      {
        // CONFIRM: spoken languages and meeting options
        title: 'A conversation',
        body: 'A relaxed first meeting in Bellevue, by phone or by video, in English or 中文. We learn about your family, goals and budget.',
      },
      {
        title: 'Needs review',
        body: 'We work out how much coverage may fit and which types are worth comparing, and bring in your CPA or attorney when it helps.',
      },
      {
        title: 'Compare carriers',
        body: 'As an independent agency, we compare quotes and policy features from several insurers and explain the differences side by side.',
      },
      {
        title: 'Apply and underwrite',
        body: 'We help you complete the application, prepare for underwriting and keep you updated until the insurer decides.',
      },
      {
        title: 'Review over time',
        body: 'We check in as life changes, such as a new child, a new home or retirement, and review permanent policies regularly.',
      },
    ],
    amount: {
      step: 2,
      title: 'How much coverage is enough?',
      intro: 'There’s no single right number. We work it out with you from a few questions:',
      questions: [
        'How many years would your family need your income, and how much of it?',
        'What would need paying off: the mortgage, loans, credit cards?',
        'What future costs do you want covered, such as college or care for a parent?',
        'What savings, investments and existing coverage do you already have?',
        'What premium fits comfortably now, and if your income changes?',
      ],
      outro: 'We’ll show you a few coverage amounts and what each would cost, then you decide.',
    },
    apply: {
      step: 4,
      title: 'What to expect when you apply',
      items: [
        'The application asks about your health, family medical history, occupation, travel and lifestyle.',
        'Depending on your age and the coverage amount, the insurer may ask for a short medical exam, lab work or records from your doctor. Some policies can be approved without an exam.',
        'Underwriting can take anywhere from a few days to several weeks. Your premium depends on the health rating the insurer assigns.',
        'Coverage begins once the policy is approved and issued and the first premium is paid.',
      ],
    },
  },

  faq: {
    eyebrow: 'Questions',
    title: 'Common questions',
    intro: 'Short answers to what people ask us most. We’re happy to go further in person.',
    items: [
      {
        q: 'I have life insurance through work. Is that enough?',
        a: 'It’s a good start. But group coverage is often a set multiple of salary that may not cover your family’s full needs, and it usually ends or changes if you leave the job. Many people keep it and add an individual policy they own.',
      },
      {
        q: 'Can I get coverage if I have a health condition?',
        a: 'Often, yes. Conditions such as high blood pressure, diabetes or a past cancer diagnosis are reviewed case by case, and insurers view them differently. That’s one reason comparing several carriers helps.',
      },
      {
        q: 'Is indexed universal life the same as investing in the stock market?',
        a: 'No. Your cash value isn’t invested in the market. The insurer credits interest based on how an index performs, within a cap and a floor, so you won’t receive all of a strong year’s gain and won’t be credited an index loss in a weak one. Policy charges still apply every year, and illustrations are projections, not promises.',
      },
      {
        q: 'I’m not a US citizen. Can I still apply?',
        a: 'Many insurers offer coverage to permanent residents and to many visa holders living in the US. Requirements vary by carrier, visa type and how long you’ve lived here, so we’ll check which options fit your situation.',
      },
      {
        q: 'Is the death benefit taxed?',
        a: 'Under current federal law, beneficiaries generally receive life insurance death benefits free of income tax, though there are exceptions, and estate tax may be a factor for larger estates. Please confirm your situation with a tax professional.',
      },
      {
        q: 'Can I use the cash value while I’m alive?',
        a: 'With permanent policies you can usually borrow against or withdraw from the cash value, for anything from college costs to retirement income. Loans accrue interest, and both loans and withdrawals reduce the cash value and death benefit. Tax treatment depends on how the policy is set up: a policy funded too quickly can become a modified endowment contract, and a policy that lapses with a loan outstanding can create a tax bill. We’ll walk through this before you rely on it.',
      },
      {
        q: 'Can I buy a policy for my child or grandchild?',
        a: 'Yes, usually with a parent’s or guardian’s consent. A permanent policy bought young is priced on a young age, and its cash value has decades to build. It’s worth comparing with other ways to save for a child, such as a 529 plan, and we’ll lay out the trade-offs honestly.',
      },
      {
        // CONFIRM: compensation model and any fees
        q: 'How are you paid?',
        a: 'Like most insurance agencies, we’re typically paid a commission by the insurer whose policy you choose. We’re happy to explain how compensation works for any policy we recommend.',
      },
      {
        q: 'What happens if I miss a premium payment?',
        a: 'Most policies have a grace period, often 30 or 31 days. Permanent policies with cash value may draw on it to cover premiums for a time. We’ll help you understand your options before your coverage is at risk.',
      },
      {
        q: 'Can I change my policy later?',
        a: 'Often, yes. Depending on the policy, you may be able to convert term coverage, adjust premiums or the death benefit on a universal life policy, update beneficiaries or add coverage. We’ll review what’s possible with you as life changes.',
      },
    ],
  },

  fits: {
    eyebrow: 'Your plan',
    title: 'Where life insurance fits',
    intro: 'Life insurance often plays a part in these life stages.',
    stageLinks: [
      { stage: 0, label: 'See family protection' },
      { stage: 1, label: 'See education funding' },
      { stage: 4, label: 'See legacy planning' },
    ],
    relatedEyebrow: 'Other services',
    relatedTitle: 'Other ways we can help',
    relatedIntro: 'Health insurance and annuities, compared and explained the same way.',
  },

  cta: {
    title: 'Start with a conversation',
    body: 'Tell us a little about your family and what you’d like your coverage to do. We’ll explain the options that may fit, with no pressure to decide.',
    primary: 'Talk with us',
    phone: 'Call',
  },

  // CONFIRM: compliance sign-off before launch
  disclosures: {
    title: 'Important information',
    items: [
      'Asset One Insurance is an insurance agency licensed in Washington State ([PLACEHOLDER] License no.). Policies are issued by the insurance companies we represent, not by Asset One Insurance. Coverage, features, riders and costs vary by insurer and state and are subject to underwriting approval. Guarantees are based on the claims-paying ability of the issuing insurer.',
      'Whole life dividends are not guaranteed and may change or not be paid.',
      'Indexed universal life insurance is not an investment in the stock market or in any index. Index-linked interest is subject to caps, participation rates, spreads and other limits, which may change. Policy charges are deducted regardless of credited interest. Policy illustrations are hypothetical and not guaranteed.',
      'Policy loans and withdrawals reduce cash value and the death benefit, may cause the policy to lapse and may have tax consequences. A policy classified as a modified endowment contract (MEC) is taxed differently.',
      'Business, trust and premium-financing strategies involve legal, tax and financial risks and should be set up with your own attorney and tax professional.',
      'This page is general information, not tax, legal or investment advice. Please consult a qualified tax or legal professional about your situation.',
    ],
  },
};

export type LifeInsuranceContent = typeof en;

const zh: LifeInsuranceContent = {
  meta: {
    title: '寿险 · 华盛顿州贝尔维尤 | Asset One Insurance',
    description:
      '定期寿险、终身寿险、指数型万能寿险与第二身故寿险，跨多家保险公司比较，用浅显的语言讲清楚。中英文服务。',
  },

  hero: {
    eyebrow: '服务 · 寿险',
    title: ['为依靠您的家人，', '做一份稳妥的安排。'],
    lead: '定期与永久寿险，跨多家保险公司比较，用浅显的语言讲清楚，帮助您选择适合家庭和预算的保障。',
    primary: '联系我们',
    secondary: '比较保障类型',
  },

  basics: {
    eyebrow: '基础知识',
    title: '寿险的作用',
    body: [
      '寿险会在您身故后，向您指定的受益人支付一笔钱，称为身故保险金。许多家庭用它继续偿还房贷、支付日常开支、还清债务、资助孩子的教育，或留下一笔遗产。永久寿险还会累积现金价值，您在世时也可以使用。',
      '适合的保单取决于家人需要依靠您多久、您希望这笔钱发挥什么作用，以及现在和将来都能轻松负担的预算。我们从这些问题开始，而不是从产品开始。',
    ],
    checklistTitle: '如果符合以下情况，不妨了解一下……',
    checklist: [
      '伴侣、孩子或父母依靠您的收入生活',
      '您有房贷或其他不希望留给家人的债务',
      '您拥有企业，或合伙人依靠您维持经营',
      '您希望留下遗产，或向关心的公益事业捐赠',
      '公司提供的保障会在换工作时终止，或单靠它可能不够',
    ],
  },

  types: {
    eyebrow: '保障类型',
    title: '定期与永久，并排比较',
    intro:
      '寿险大致分为两类。定期寿险在约定年限内提供保障；永久寿险旨在保障一生，并会累积现金价值。选择一个目标，看看通常值得比较哪几种；也可以四种都看看。',
    labels: { mayFit: '可能适合', weigh: '需要权衡' },
    goalsLabel: '您希望保单发挥什么作用？',
    goalsAll: '全部四种',
    allNote: '选择一个目标，看看通常值得比较哪几种。',
    goals: [
      {
        key: 'income',
        label: '守护家庭收入',
        highlights: ['term'],
        note: '在家人依靠您的那些年里，定期寿险通常能以同样的保费换来最高的保额。有些家庭会再搭配一份保额较小的永久寿险。',
      },
      {
        key: 'certain',
        label: '终身保障，费用可预期',
        highlights: ['whole'],
        note: '终身寿险从一开始就在保单中约定保费、最低现金价值和身故保险金。',
      },
      {
        key: 'flex',
        label: '终身保障，兼顾增长',
        highlights: ['iul'],
        note: '指数型万能寿险以部分确定性换取灵活性和增长潜力，需要定期检视。',
      },
      {
        key: 'legacy',
        label: '留下传承',
        highlights: ['whole', 'iul', 'survivorship'],
        note: '规划遗产的夫妻常会比较：一份第二身故寿险，还是两人各一份永久寿险。',
      },
      {
        key: 'business',
        label: '保障我的企业',
        highlights: ['term', 'whole', 'iul'],
        note: '关键人保险和股权买卖协议可以使用定期或永久保障。',
        link: { label: '了解企业主规划', href: '#business' },
      },
      {
        key: 'child',
        label: '为子女或孙辈打基础',
        highlights: ['whole', 'iul'],
        note: '年幼时投保，保费按年轻的年龄计算，现金价值也有几十年的时间累积。值得与529教育储蓄计划一起比较。',
      },
    ],
    cards: [
      {
        id: 'term',
        name: '定期寿险',
        summary: '在约定年限内提供保障，常见为10年、20年或30年。期满时您仍健在，保障即告结束。',
        mayFit: '家人最依赖您收入的那些年，例如孩子年幼或房贷尚未还清期间。',
        weigh: '以最低的保费获得最高的保额，但没有现金价值。许多人会选择日后可转换为永久寿险的保单。',
      },
      {
        id: 'whole',
        name: '终身寿险',
        summary: '以三项保证为基础的终身保障：',
        bullets: ['保费永不上涨', '现金价值按约定的时间表增长', '只要按时缴费，身故保险金始终有效'],
        note: '部分保单还可能派发红利，但红利不保证。',
        mayFit: '更看重确定性和可预期费用、而非灵活性的人。',
        weigh: '相同保额下保费远高于定期寿险，早期现金价值累积较慢。',
      },
      {
        id: 'iul',
        name: '指数型万能寿险',
        summary: '终身保障，保费灵活。现金价值的利息与市场指数挂钩，涨幅设有上限，并有保底机制防范指数下跌。',
        mayFit: '希望兼顾一定增长潜力、也愿意定期检视保单的人。',
        weigh: '收益上限和费用可能调整，结果并不保证。需要持续关注，以免保单失效。',
      },
      {
        id: 'survivorship',
        name: '第二身故寿险',
        summary: '一份永久保单保障两个人（通常是夫妻），在第二位被保险人身故后赔付。',
        mayFit: '遗产与传承规划，并与您的律师或会计师协同安排。',
        weigh: '在世的配偶无法从中获得赔付，但保费通常低于分别购买两份保单。',
      },
    ],
  },

  compare: {
    eyebrow: '比较',
    title: '一览对比',
    takeaway: '确定性越高，通常保费越高；灵活性越高，通常越需要用心打理。',
    caption: '定期寿险、终身寿险与指数型万能寿险对比',
    columns: ['定期寿险', '终身寿险', '指数型万能寿险'],
    levels: ['无', '低', '中', '高'],
    legend: '等级表示与另外两种相比的大致倾向，具体保单可能不同。',
    rows: [
      {
        label: '保障期限',
        cells: [{ text: '约定期限，常见10至30年' }, { text: '终身，只要按时缴费' }, { text: '终身，只要保单资金充足' }],
      },
      {
        label: '保费',
        cells: [
          { level: 1, text: '起步最低' },
          { level: 3, text: '最高，且终身固定' },
          { level: 2, text: '可在限额内灵活调整' },
        ],
      },
      {
        label: '现金价值',
        cells: [{ text: '无' }, { text: '按保证的时间表增长，另有可能的红利' }, { text: '依据指数计入利息，设有上限与保底' }],
      },
      {
        label: '可预期性',
        cells: [
          { level: 3, text: '保障期内保持稳定' },
          { level: 3, text: '各项保证在投保时确定' },
          { level: 1, text: '随指数表现和费用变化' },
        ],
      },
      {
        label: '增长潜力',
        cells: [
          { level: 0, text: '没有现金价值' },
          { level: 1, text: '稳定，幅度较小' },
          { level: 2, text: '较高，但受上限限制' },
        ],
      },
      {
        label: '灵活性',
        cells: [
          { level: 1, text: '通常可转换为永久寿险' },
          { level: 1, text: '保费固定' },
          { level: 3, text: '可调整保费和保额' },
        ],
      },
      {
        label: '需要打理的程度',
        cells: [
          { level: 1, text: '投保后随人生变化检视即可' },
          { level: 1, text: '投保后随人生变化检视即可' },
          { level: 3, text: '需定期检视' },
        ],
      },
      {
        label: '常见用途',
        cells: [
          { text: '替代收入、房贷、年轻家庭' },
          { text: '确定性、传承、企业规划' },
          { text: '兼顾增长潜力的终身保障、更灵活的退休资金' },
        ],
      },
    ],
    footnote: '第二身故寿险属于永久寿险，以终身寿险或万能寿险为基础，同时为两个人提供保障。',
  },

  riders: {
    eyebrow: '附加条款',
    title: '可附加的保障',
    intro: '附加条款可以为保单增加功能，有些需要额外付费。是否提供及具体条款因保险公司和州而异。',
    items: [
      { name: '提前给付身故保险金', body: '若确诊符合条件的末期、慢性或重大疾病，可提前领取部分身故保险金。' },
      { name: '长期护理', body: '可动用部分身故保险金支付符合条件的长期护理费用。' },
      { name: '豁免保费', body: '若您因残疾无法工作（以条款定义为准），无需缴纳保费，保单继续有效。' },
      { name: '转换权', body: '在保单规定的期限内，无需重新回答健康问题即可将定期保障转换为永久保障。' },
      {
        name: '不失效保证',
        body: '适用于万能寿险：只要满足条款的缴费要求，即使现金价值不足，保障也能在约定期限内持续有效。',
      },
      { name: '子女定期保障', body: '在您的保单上为子女附加少量定期保障。' },
    ],
  },

  business: {
    eyebrow: '进阶规划',
    title: '企业主与较大规模遗产的规划',
    intro: '有些规划涉及企业、信托或规模较大的遗产。我们会与您的会计师和律师合作，让保险、税务和法律安排相互配合。',
    items: [
      {
        title: '关键人保险',
        body: '若企业失去所有者或核心员工，这笔保险金可用于弥补收入损失、招聘或偿还债务，帮助企业平稳运营。',
      },
      {
        title: '股权买卖资金',
        body: '让在世的股东有资金按约定价格购买已故合伙人的股份：家属获得公平的对价，企业也能继续经营。',
      },
      { title: '高管福利', body: '永久寿险可以为核心管理人员提供额外的退休或遗属福利，帮助留住人才。' },
      {
        title: '信托持有的保单',
        body: '对于规模较大的遗产，可由您的律师设立不可撤销人寿保险信托来持有保单，可能有助于将保险金排除在应税遗产之外。',
      },
    ],
    financingTitle: '保费融资。',
    financing:
      '对部分高净值客户，可通过银行贷款支付大额保单的保费。这种安排存在利率、抵押品和保单表现等风险，只适合特定情况。如有需要，我们会把风险和好处讲得同样清楚。',
  },

  process: {
    eyebrow: '我们的流程',
    title: '与我们合作的方式',
    intro: '步骤清晰，按您的节奏进行。您随时可以暂停。',
    stepLabel: '第{n}步',
    steps: [
      { title: '初次交流', body: '在贝尔维尤面谈，或通过电话、视频，中英文皆可。我们会了解您的家庭、目标和预算。' },
      { title: '需求分析', body: '我们会算出可能适合的保额，以及值得比较的保障类型；必要时也会与您的会计师或律师沟通。' },
      {
        title: '比较保险公司',
        body: '作为独立保险代理机构，我们会比较多家保险公司的报价和保单条款，并逐项讲解差异。',
      },
      { title: '投保与核保', body: '我们协助您填写投保申请、准备核保，并随时告知进展，直到保险公司做出决定。' },
      {
        title: '定期检视',
        body: '在您迎来新生儿、购置新居或退休等人生变化时，我们会主动联系，并定期检视永久保单。',
      },
    ],
    amount: {
      step: 2,
      title: '保额多少才够？',
      intro: '没有放之四海皆准的数字。我们会通过以下几个问题和您一起算出来：',
      questions: [
        '家人需要您的收入多少年？需要多少？',
        '有哪些需要还清：房贷、贷款、信用卡？',
        '您希望覆盖哪些未来开支，例如大学学费或照顾父母？',
        '您已有多少储蓄、投资和现有保障？',
        '现在能轻松负担多少保费？收入变化时又如何？',
      ],
      outro: '我们会列出几种保额及对应的保费，由您来决定。',
    },
    apply: {
      step: 4,
      title: '投保时会经历什么',
      items: [
        '投保申请会询问您的健康状况、家族病史、职业、出行和生活习惯。',
        '视年龄和保额而定，保险公司可能要求简短体检、化验或调取病历。有些保单无需体检即可批准。',
        '核保可能需要几天到数周不等。保费取决于保险公司评定的健康等级。',
        '保单获批并签发、且首期保费缴清后，保障即开始生效。',
      ],
    },
  },

  faq: {
    eyebrow: '常见问题',
    title: '大家常问的问题',
    intro: '以下是大家最常问的问题的简要回答。欢迎当面进一步交流。',
    items: [
      {
        q: '我已经有公司提供的寿险，够吗？',
        a: '这是很好的起点。但团体寿险通常只是薪资的固定倍数，未必能满足家庭的全部需求，而且离职后通常会终止或变更。许多人会保留团体寿险，再另外购买一份自己持有的个人保单。',
      },
      {
        q: '有健康问题还能投保吗？',
        a: '很多情况下可以。高血压、糖尿病或癌症病史等情况会逐案评估，而且不同保险公司的标准不同。这也是比较多家保险公司的意义之一。',
      },
      {
        q: '指数型万能寿险等于投资股市吗？',
        a: '不是。您的现金价值并没有投入股市。保险公司参照指数的表现计入利息，并设有上限和保底：表现好的年份，您拿不到全部涨幅；表现差的年份，也不会计入指数亏损。保单费用每年照常扣除，保单演示只是预测，并非承诺。',
      },
      {
        q: '我不是美国公民，也能投保吗？',
        a: '许多保险公司为永久居民和不少在美持签证居住的人士提供保障。具体要求因保险公司、签证类型和在美居住时间而异，我们会帮您确认适合的选择。',
      },
      {
        q: '身故保险金需要缴税吗？',
        a: '根据现行联邦法律，受益人领取的寿险身故保险金一般无需缴纳所得税，但也有例外；对于较大的遗产，遗产税可能需要考虑。请向税务专业人士确认您的具体情况。',
      },
      {
        q: '在世时可以使用现金价值吗？',
        a: '永久保单通常可以用现金价值贷款或部分提取，可用于从大学学费到退休收入等各种用途。贷款会产生利息，贷款和提取都会减少现金价值和身故保险金。税务处理取决于保单的设计：缴费过快的保单可能成为修正型储蓄合同（MEC）；保单在贷款未还清时失效，也可能产生税款。在您依赖这笔钱之前，我们会和您一起把这些讲清楚。',
      },
      {
        q: '可以为子女或孙辈投保吗？',
        a: '可以，通常需要父母或监护人同意。年幼时购买永久保单，保费按年轻的年龄计算，现金价值也有几十年的时间累积。这值得与529教育储蓄计划等其他为孩子储蓄的方式一起比较，我们会如实说明各自的利弊。',
      },
      {
        q: '你们如何收费？',
        a: '和大多数保险代理机构一样，我们通常由您所选保单的保险公司支付佣金。对于我们推荐的任何保单，我们都乐意说明报酬是如何计算的。',
      },
      {
        q: '如果错过缴费会怎样？',
        a: '大多数保单设有宽限期，通常为30或31天。有现金价值的永久保单可能会在一段时间内用现金价值支付保费。在保障面临风险之前，我们会帮您了解可选的做法。',
      },
      {
        q: '以后可以调整保单吗？',
        a: '很多情况下可以。视保单而定，您可能可以转换定期保障、调整万能寿险的保费或保额、更新受益人或增加保额。人生发生变化时，我们会和您一起检视可行的调整。',
      },
    ],
  },

  fits: {
    eyebrow: '您的规划',
    title: '寿险在规划中的位置',
    intro: '寿险常在以下人生阶段发挥作用。',
    stageLinks: [
      { stage: 0, label: '了解家庭保障' },
      { stage: 1, label: '了解教育金规划' },
      { stage: 4, label: '了解传承规划' },
    ],
    relatedEyebrow: '其他服务',
    relatedTitle: '我们还能帮您',
    relatedIntro: '健康险与年金，同样跨公司比较、清楚讲解。',
  },

  cta: {
    title: '从一次交流开始',
    body: '简单告诉我们您的家庭情况，以及您希望保障发挥什么作用。我们会讲解可能适合的方案，绝不催促您做决定。',
    primary: '联系我们',
    phone: '致电',
  },

  disclosures: {
    title: '重要信息',
    items: [
      'Asset One Insurance 是在华盛顿州持牌的保险代理机构（[PLACEHOLDER] 执照号码）。保单由我们代理的保险公司签发，而非由 Asset One Insurance 签发。保障范围、功能、附加条款和费用因保险公司和州而异，并须经核保批准。各项保证以签发保险公司的理赔能力为基础。',
      '终身寿险的红利不保证，可能调整或不予派发。',
      '指数型万能寿险并非对股市或任何指数的投资。指数挂钩利息受收益上限、参与率、差额及其他限制的约束，且可能调整。无论是否计入利息，保单费用均会扣除。保单演示均为假设情形，并不保证。',
      '保单贷款和提取会减少现金价值和身故保险金，可能导致保单失效，并可能产生税务影响。被认定为修正型储蓄合同（MEC）的保单，税务处理有所不同。',
      '企业、信托及保费融资等安排涉及法律、税务和财务风险，应与您自己的律师和税务专业人士共同设立。',
      '本页内容仅为一般信息，不构成税务、法律或投资建议。请就您的具体情况咨询合格的税务或法律专业人士。',
    ],
  },
};

export const lifeInsurance: Record<Locale, LifeInsuranceContent> = { en, zh };
