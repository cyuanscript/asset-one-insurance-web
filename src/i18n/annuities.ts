/**
 * Copy for /services/annuities/ (EN) and /zh/services/annuities/.
 *
 * Source: content-packs/services-annuities.md (v1). Edit the copy here;
 * the pack is the reviewed reference. Product facts come from the Annuity
 * Product Guide and GSC Product Overview / Profile. Items still marked
 * [CONFIRM] in the pack are flagged with a // CONFIRM comment.
 */
import type { Locale } from './content';
import type {
  BasicsCopy,
  CompareCopy,
  CtaCopy,
  DisclosuresCopy,
  FaqCopy,
  FeatureGridCopy,
  FitsCopy,
  HeroCopy,
  ProcessCopy,
  ProcessDetail,
  TypesCopy,
} from './service-types';

type AnnuitiesContent = {
  meta: { title: string; description: string };
  hero: HeroCopy;
  basics: BasicsCopy;
  types: TypesCopy;
  compare: CompareCopy;
  features: FeatureGridCopy;
  process: ProcessCopy;
  processDetails: ProcessDetail[];
  faq: FaqCopy;
  fits: FitsCopy;
  cta: CtaCopy;
  disclosures: DisclosuresCopy;
};

const en: AnnuitiesContent = {
  meta: {
    title: 'Annuities in Bellevue, WA · Asset One Insurance',
    description:
      'Fixed, fixed indexed and immediate annuities, compared across carriers and explained in plain language. Retirement income planning in English and 中文.',
  },

  hero: {
    eyebrow: 'Services · Annuities',
    title: ['Savings that become income you can plan around.'],
    lead: 'Fixed, fixed indexed and immediate annuities, compared across carriers and explained in plain language, so part of your savings can work as steady retirement income.',
    primary: 'Talk with us',
    secondary: 'Compare annuity types',
  },

  basics: {
    eyebrow: 'The basics',
    title: 'What an annuity is for',
    body: [
      'An annuity is a contract with an insurance company. You pay in a lump sum or over time, and the insurer agrees to grow that money, pay it back as income, or both, on the terms set in the contract. Many people use one to turn part of their savings into income that lasts as long as they do.',
      'An annuity is an insurance contract, not a bank deposit. It suits money you won’t need for several years, and works best alongside Social Security, a 401(k) or IRA and other savings, not in place of them.',
    ],
    checklistTitle: 'It may be worth a look if…',
    checklist: [
      'You’re nearing retirement, or already retired',
      'You’d like part of your income to arrive on a schedule, like a pension',
      'You worry about outliving your savings',
      'You’ve maxed out your 401(k) or IRA and want more tax-deferred savings',
      'You want growth potential without putting that money directly in the stock market',
    ],
  },

  types: {
    eyebrow: 'Annuity types',
    title: 'Three ways to use an annuity',
    intro:
      'Each one does a different job: grow savings at a set rate, start income now, or balance growth with income later. Choose a goal to see which are usually worth comparing.',
    labels: { mayFit: 'May fit', weigh: 'Worth weighing' },
    goalsLabel: 'What should the annuity do?',
    goalsAll: 'All three',
    allNote: 'Choose a goal to see which types are usually worth comparing.',
    goals: [
      {
        key: 'now',
        label: 'Start income now',
        highlights: ['spia'],
        note: 'An immediate annuity turns a lump sum into payments that usually begin within a year.',
      },
      {
        key: 'steady',
        label: 'Grow savings at a set rate',
        highlights: ['myga'],
        note: 'A multi-year guaranteed annuity locks in a rate for a set term. It’s often compared with a CD, but it isn’t a bank deposit.',
      },
      {
        key: 'later',
        label: 'Growth now, income later',
        highlights: ['fia'],
        note: 'A fixed indexed annuity can grow with an index, within limits, and can add a lifetime income rider for later.',
      },
      {
        key: 'longevity',
        label: 'Income I can’t outlive',
        highlights: ['spia', 'fia'],
        note: 'Both can pay income for life: an immediate annuity starts now, an indexed annuity with an income rider starts when you choose.',
      },
      {
        key: 'legacy',
        label: 'Leave money to family',
        highlights: ['myga', 'fia'],
        note: 'Before income starts, the remaining value usually passes to the beneficiaries you name.',
      },
    ],
    cards: [
      {
        id: 'myga',
        name: 'Multi-year guaranteed (MYGA)',
        summary:
          'A fixed rate, locked in for a set term of several years. At the end you can renew, move to another annuity or take the money.',
        mayFit: 'Conservative savers who won’t need the money before the term ends and want a predictable result.',
        weigh: 'Surrender charges apply if you take out more than the free amount early, and the rate won’t rise if market rates do.',
      },
      {
        id: 'spia',
        name: 'Immediate annuity (SPIA)',
        summary:
          'One lump sum in, and income starts right away, typically within a year. Payments can last for life or for a set period.',
        mayFit: 'Retirees who want pension-like income to cover everyday costs.',
        weigh: 'You generally give up access to the lump sum in exchange for the income. Payments depend on your age, the payout option and rates when you buy.',
      },
      {
        id: 'fia',
        name: 'Fixed indexed (FIA)',
        summary:
          'Interest linked to a market index, within a cap and other limits, with a floor so index losses aren’t credited. An optional rider can add lifetime income.',
        mayFit: 'People some years from retirement who want growth potential with protection from index losses.',
        weigh: 'Caps and rates can change, rider fees reduce the account value, and surrender charges apply in the early years.',
      },
    ],
  },

  compare: {
    eyebrow: 'Compare',
    title: 'At a glance',
    takeaway: 'More certainty usually means less growth. More income now usually means less access later.',
    caption: 'Comparison of multi-year guaranteed, immediate and fixed indexed annuities',
    columns: ['MYGA', 'Immediate', 'Fixed indexed'],
    levels: ['None', 'Low', 'Medium', 'High'],
    legend: 'Levels show general tendencies compared with the other two. Individual contracts vary.',
    rows: [
      {
        label: 'Main job',
        cells: [
          { text: 'Steady, tax-deferred growth' },
          { text: 'Income starting now' },
          { text: 'Growth now, income later' },
        ],
      },
      {
        label: 'When income starts',
        cells: [
          { text: 'When you choose, usually after the term' },
          { text: 'Right away, typically within a year' },
          { text: 'When you choose; for life with an income rider' },
        ],
      },
      {
        label: 'How it grows',
        cells: [
          { text: 'A fixed rate set for the whole term' },
          { text: 'It doesn’t; the lump sum becomes income' },
          { text: 'Interest linked to an index, within a cap and a floor' },
        ],
      },
      {
        label: 'Predictability',
        cells: [
          { level: 3, text: 'Rate set for the whole term' },
          { level: 3, text: 'Payments set when you buy' },
          { level: 2, text: 'Credits vary year to year; index losses aren’t credited' },
        ],
      },
      {
        label: 'Growth potential',
        cells: [
          { level: 1, text: 'Steady, set in advance' },
          { level: 0, text: 'Not its purpose' },
          { level: 2, text: 'Higher, limited by a cap' },
        ],
      },
      {
        label: 'Access to your money',
        cells: [
          { level: 1, text: 'A free withdrawal each year; surrender charges beyond it' },
          { level: 0, text: 'The lump sum is converted to income' },
          { level: 1, text: 'A free withdrawal each year; surrender charges beyond it' },
        ],
      },
      {
        label: 'Often used for',
        cells: [
          { text: 'Money set aside for a known date; compared with CDs' },
          { text: 'Covering essential costs in retirement' },
          { text: 'Savings before retirement that will later pay income' },
        ],
      },
    ],
    footnote: 'Rates, caps, terms and surrender periods vary by insurer and change over time.',
  },

  features: {
    eyebrow: 'Good to know',
    title: 'Features worth understanding',
    intro:
      'These come up in almost every annuity conversation. Availability and terms vary by insurer and state.',
    items: [
      {
        name: 'Lifetime income rider',
        body: 'An optional rider on many indexed annuities that pays income for life once withdrawals begin, even if the account value later runs out. It has an annual fee.',
      },
      {
        name: 'Payout options',
        body: 'Income can be paid for your life only, for life with a guaranteed minimum period, for two lives (joint and survivor) or for a set number of years.',
      },
      {
        name: 'Free withdrawals',
        body: 'Many contracts let you take out part of the value each year, often up to 10%, without a surrender charge.',
      },
      {
        name: 'Surrender charges',
        body: 'Taking out more than the free amount in the early years costs a charge that steps down each year, usually to zero by the end of the surrender period.',
      },
      {
        name: 'Death benefit',
        body: 'If you pass away before income begins, the remaining value generally goes to the beneficiaries you name.',
      },
      {
        name: '1035 exchange',
        body: 'An existing annuity or life policy can often be moved into a new annuity without current tax. A new surrender period usually starts, so we compare carefully first.',
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
        body: 'A relaxed first meeting in Bellevue, by phone or by video, in English or 中文. We learn when you plan to retire and what you’ll need.',
      },
      {
        title: 'Map your income',
        body: 'We line up the income you expect from Social Security, pensions and savings, and see whether there’s a gap an annuity could help fill.',
      },
      {
        title: 'Compare carriers',
        body: 'As an independent agency, we compare rates, caps, riders and surrender terms from several insurers side by side.',
      },
      {
        title: 'Apply and fund',
        body: 'We help you complete the application and move the money, including a rollover or 1035 exchange when that fits.',
      },
      {
        title: 'Review over time',
        body: 'We review the contract with you, including your choices at the end of a term and when to start income.',
      },
    ],
  },

  processDetails: [
    {
      step: 2,
      title: 'How much should go into an annuity?',
      intro: 'Usually only part of your savings. We work it out with you from a few questions:',
      numbered: true,
      items: [
        'What will your essential monthly costs be in retirement?',
        'How much of that will Social Security and any pension cover?',
        'How much do you want to keep easy to reach for emergencies and big plans?',
        'When would you like income to start, and should it continue for a spouse?',
        'How comfortable are you with surrender periods, caps and changing rates?',
      ],
      outro: 'We’ll show you a few options and what each would pay or credit, then you decide.',
    },
    {
      step: 4,
      title: 'Before you sign',
      items: [
        'You’ll see the contract’s rates, caps, fees and surrender charges in writing. We go through them with you line by line.',
        'After the contract is delivered, a free-look period lets you review it and cancel for a refund.',
        'If the money comes from an IRA or 401(k), we arrange a direct rollover or transfer so it isn’t treated as a withdrawal.',
        'We explain how withdrawals will be taxed, including the federal additional tax that may apply before age 59½.',
      ],
    },
  ],

  faq: {
    eyebrow: 'Questions',
    title: 'Common questions',
    intro: 'Short answers to what people ask us most. We’re happy to go further in person.',
    items: [
      {
        q: 'Should all of my savings go into an annuity?',
        a: 'Usually not. Most people use an annuity for part of their savings and keep the rest easier to reach. We’ll help you find a balance that fits your income needs and your plans.',
      },
      {
        q: 'Is my money safe in an annuity?',
        a: 'Annuity guarantees are backed by the financial strength and claims-paying ability of the insurer. Annuities aren’t bank deposits and aren’t FDIC-insured. State guaranty associations may offer limited protection if an insurer fails, but that shouldn’t be a reason to buy. We’ll show you each insurer’s ratings from independent agencies.',
      },
      {
        q: 'Can I lose money in a fixed indexed annuity?',
        a: 'Index losses aren’t credited to your account, so a down year typically credits zero rather than a loss. But surrender charges, rider fees, market value adjustments and early withdrawals can still reduce what you receive, especially in the first years.',
      },
      {
        q: 'How is a MYGA different from a CD?',
        a: 'Both can pay a set rate for a set term. A CD is a bank deposit with FDIC insurance, and its interest is taxed each year. A MYGA is an insurance contract: not FDIC-insured, with tax deferred until you withdraw, and surrender charges for early access. Rates on both change, so we compare them side by side.',
      },
      {
        q: 'How are annuities taxed?',
        a: 'Growth inside an annuity is generally tax-deferred, then taxed as ordinary income when withdrawn. Taxable withdrawals before age 59½ may also face a 10% federal additional tax, with some exceptions. With an immediate annuity bought with after-tax money, part of each payment is usually a tax-free return of what you paid in. Please confirm your situation with a tax professional.',
      },
      {
        q: 'Can I move my 401(k) or IRA into an annuity?',
        a: 'Often, yes, through a direct rollover or transfer that keeps the money tax-deferred. An annuity inside an IRA follows IRA rules, including required minimum distributions. We’ll check whether it makes sense compared with leaving the money where it is.',
      },
      {
        q: 'What happens to my annuity when I die?',
        a: 'Before income starts, the remaining value generally goes to your named beneficiaries. After income starts, it depends on the payout option you chose: life-only payments stop, while period-certain and joint payouts can continue to a beneficiary or spouse.',
      },
      {
        // CONFIRM: compensation model and any fees
        q: 'How are you paid?',
        a: 'Like most insurance agencies, we’re typically paid a commission by the insurer whose annuity you choose. We’re happy to explain how compensation works for any annuity we recommend.',
      },
    ],
  },

  fits: {
    eyebrow: 'Your plan',
    title: 'Where annuities fit',
    intro: 'Annuities often play a part in these life stages.',
    stageLinks: [
      { stage: 2, label: 'See retirement income' },
      { stage: 3, label: 'See investment growth' },
      { stage: 4, label: 'See legacy planning' },
    ],
    relatedEyebrow: 'Other services',
    relatedTitle: 'Other ways we can help',
    relatedIntro: 'Life insurance and health insurance, compared and explained the same way.',
  },

  cta: {
    title: 'Start with a conversation',
    body: 'Tell us when you’d like to retire and what you want your savings to do. We’ll explain the options that may fit, with no pressure to decide.',
    primary: 'Talk with us',
    phone: 'Call',
  },

  // CONFIRM: compliance sign-off before launch
  disclosures: {
    title: 'Important information',
    items: [
      'Asset One Insurance is an insurance agency licensed in Washington State ([PLACEHOLDER] License no.). Annuities are issued by the insurance companies we represent, not by Asset One Insurance. Features, riders, rates and costs vary by insurer and state.',
      'Annuities are long-term insurance contracts intended for retirement. They are not bank deposits, are not FDIC-insured and are not guaranteed by any bank or government agency. Guarantees are based on the claims-paying ability of the issuing insurer.',
      'Fixed indexed annuities are not an investment in the stock market or in any index. Index-linked interest is subject to caps, participation rates, spreads and other limits, which may change.',
      'Withdrawals above the free amount may be subject to surrender charges and market value adjustments. Taxable withdrawals are taxed as ordinary income and, before age 59½, may be subject to a 10% federal additional tax.',
      'Optional riders carry additional fees and their own terms. The income base used by a lifetime income rider is not a cash value and cannot be withdrawn as a lump sum.',
      'This page is general information, not tax, legal or investment advice. Please consult a qualified tax or legal professional about your situation.',
    ],
  },
};

const zh: AnnuitiesContent = {
  meta: {
    title: '年金 · 华盛顿州贝尔维尤 | Asset One Insurance',
    description:
      '多年期保证年金、固定指数型年金与即期年金，跨多家保险公司比较，用浅显的语言讲清楚。中英文退休收入规划服务。',
  },

  hero: {
    eyebrow: '服务 · 年金',
    title: ['让储蓄成为', '可以规划的收入。'],
    lead: '多年期保证年金、固定指数型年金与即期年金，跨多家保险公司比较，用浅显的语言讲清楚，让您的一部分储蓄化为稳定的退休收入。',
    primary: '联系我们',
    secondary: '比较年金类型',
  },

  basics: {
    eyebrow: '基础知识',
    title: '年金的作用',
    body: [
      '年金是您与保险公司签订的一份合同。您一次性或分期存入资金，保险公司按照合同约定让这笔钱增值、以收入的形式返还给您，或两者兼有。许多人用年金把一部分储蓄转化为与寿命一样长久的收入。',
      '年金是保险合同，不是银行存款。它适合放置几年内用不到的资金，最好与社会安全福利（Social Security）、401(k)或IRA以及其他储蓄搭配使用，而不是取而代之。',
    ],
    checklistTitle: '如果符合以下情况，不妨了解一下……',
    checklist: [
      '您即将退休，或已经退休',
      '您希望一部分收入像退休金一样按时到账',
      '您担心储蓄不够用一辈子',
      '您的401(k)或IRA已存满，希望再多一个税收递延的储蓄渠道',
      '您希望获得增长潜力，但不想把这笔钱直接投入股市',
    ],
  },

  types: {
    eyebrow: '年金类型',
    title: '年金的三种用法',
    intro: '每一种都有不同的作用：以固定利率增值、立即开始领取收入，或在增长与日后收入之间取得平衡。选择一个目标，看看通常值得比较哪几种。',
    labels: { mayFit: '可能适合', weigh: '需要权衡' },
    goalsLabel: '您希望年金发挥什么作用？',
    goalsAll: '全部三种',
    allNote: '选择一个目标，看看通常值得比较哪几种。',
    goals: [
      {
        key: 'now',
        label: '现在就开始领取收入',
        highlights: ['spia'],
        note: '即期年金把一笔款项转化为定期给付，通常在一年内开始领取。',
      },
      {
        key: 'steady',
        label: '以固定利率增值',
        highlights: ['myga'],
        note: '多年期保证年金在约定期限内锁定利率，常被拿来与定期存单（CD）比较，但它并不是银行存款。',
      },
      {
        key: 'later',
        label: '现在增值，日后领取',
        highlights: ['fia'],
        note: '固定指数型年金可在一定限制内随指数增长，并可附加终身收入条款，供日后领取。',
      },
      {
        key: 'longevity',
        label: '活多久，领多久',
        highlights: ['spia', 'fia'],
        note: '两者都可以提供终身收入：即期年金现在开始领取，附加收入条款的指数型年金则由您决定何时开始。',
      },
      {
        key: 'legacy',
        label: '为家人留下资产',
        highlights: ['myga', 'fia'],
        note: '在开始领取收入之前，剩余价值通常会给付给您指定的受益人。',
      },
    ],
    cards: [
      {
        id: 'myga',
        name: '多年期保证年金（MYGA）',
        summary: '在约定的数年期限内锁定固定利率。到期后可以续约、转入其他年金，或取出资金。',
        mayFit: '期满前用不到这笔钱、希望结果可预期的稳健型储蓄者。',
        weigh: '提前取出超过免费额度的部分需支付退保费用；即使市场利率上升，合同利率也不会随之提高。',
      },
      {
        id: 'spia',
        name: '即期年金（SPIA）',
        summary: '一次性存入一笔款项，收入随即开始，通常在一年内领取。给付可以终身，也可以按约定期限。',
        mayFit: '希望拥有类似退休金的收入、用来支付日常开支的退休人士。',
        weigh: '通常需要放弃对这笔本金的支配权来换取收入。给付金额取决于投保年龄、给付方式以及购买时的利率。',
      },
      {
        id: 'fia',
        name: '固定指数型年金（FIA）',
        summary: '利息与市场指数挂钩，设有上限和其他限制，同时设有保底，指数下跌时不计入亏损。可选择附加终身收入条款。',
        mayFit: '距离退休还有几年、希望在防范指数下跌的同时获得增长潜力的人士。',
        weigh: '上限和利率可能调整，附加条款的费用会减少账户价值，前几年提取需支付退保费用。',
      },
    ],
  },

  compare: {
    eyebrow: '比较',
    title: '一览比较',
    takeaway: '越确定，增长通常越有限；现在领取的越多，日后能动用的资金通常越少。',
    caption: '多年期保证年金、即期年金与固定指数型年金的比较',
    columns: ['多年期保证年金', '即期年金', '固定指数型年金'],
    levels: ['无', '低', '中', '高'],
    legend: '等级表示与另外两种相比的大致倾向，具体合同可能不同。',
    rows: [
      {
        label: '主要作用',
        cells: [{ text: '稳定、税收递延的增值' }, { text: '立即开始领取收入' }, { text: '现在增值，日后领取' }],
      },
      {
        label: '何时开始领取',
        cells: [
          { text: '由您决定，通常在期满后' },
          { text: '立即开始，通常在一年内' },
          { text: '由您决定；附加收入条款可终身领取' },
        ],
      },
      {
        label: '如何增值',
        cells: [
          { text: '整个期限内利率固定' },
          { text: '不以增值为目的，本金转化为收入' },
          { text: '利息与指数挂钩，设有上限和保底' },
        ],
      },
      {
        label: '可预期性',
        cells: [
          { level: 3, text: '整个期限内利率固定' },
          { level: 3, text: '购买时即确定给付金额' },
          { level: 2, text: '每年计入的利息不同；指数下跌不计入亏损' },
        ],
      },
      {
        label: '增长潜力',
        cells: [
          { level: 1, text: '稳定，事先确定' },
          { level: 0, text: '不以增值为目的' },
          { level: 2, text: '较高，但受上限限制' },
        ],
      },
      {
        label: '资金灵活度',
        cells: [
          { level: 1, text: '每年有免费提取额度，超出部分需付退保费用' },
          { level: 0, text: '本金已转化为收入' },
          { level: 1, text: '每年有免费提取额度，超出部分需付退保费用' },
        ],
      },
      {
        label: '常见用途',
        cells: [
          { text: '为某个确定日期预留的资金；常与定期存单比较' },
          { text: '支付退休后的基本开支' },
          { text: '退休前的储蓄，日后转为收入' },
        ],
      },
    ],
    footnote: '利率、上限、期限及退保期因保险公司而异，并会随时间调整。',
  },

  features: {
    eyebrow: '值得了解',
    title: '需要了解的几项功能',
    intro: '几乎每一次关于年金的讨论都会谈到这些。是否提供及具体条款因保险公司和州而异。',
    items: [
      {
        name: '终身收入附加条款',
        body: '许多指数型年金可选的附加条款：开始提取后可终身领取收入，即使账户价值日后用尽也不受影响。每年需支付费用。',
      },
      {
        name: '给付方式',
        body: '收入可以仅按您的寿命给付、终身给付并保证最低期限、按两人寿命给付（夫妻联合给付），或按约定年数给付。',
      },
      {
        name: '免费提取',
        body: '许多合同允许每年提取一部分价值（通常最多10%），无需支付退保费用。',
      },
      {
        name: '退保费用',
        body: '前几年提取超过免费额度的部分需支付退保费用，费率逐年递减，通常在退保期结束时降为零。',
      },
      {
        name: '身故给付',
        body: '若您在开始领取收入前身故，剩余价值一般会给付给您指定的受益人。',
      },
      {
        name: '1035免税交换',
        body: '现有的年金或寿险保单通常可以转入新的年金，而无需当期缴税。新合同通常会重新开始计算退保期，因此我们会先仔细比较。',
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
        body: '在贝尔维尤面谈，或通过电话、视频进行轻松的初次交流，中英文皆可。我们会了解您计划何时退休、需要多少收入。',
      },
      {
        title: '梳理收入来源',
        body: '我们把您预计从社会安全福利、退休金和储蓄中获得的收入逐项列出，看看是否存在年金可以帮忙填补的缺口。',
      },
      {
        title: '比较保险公司',
        body: '作为独立代理机构，我们会把多家保险公司的利率、上限、附加条款和退保条件并排比较。',
      },
      {
        title: '投保与注资',
        body: '我们协助您填写投保申请并完成资金转入，必要时包括账户转存（rollover）或1035免税交换。',
      },
      {
        title: '定期检视',
        body: '我们会和您一起检视合同，包括期满时的选择，以及何时开始领取收入。',
      },
    ],
  },

  processDetails: [
    {
      step: 2,
      title: '应该拿多少钱买年金？',
      intro: '通常只是储蓄的一部分。我们会通过以下几个问题和您一起算出来：',
      numbered: true,
      items: [
        '退休后每月的基本开支大约是多少？',
        '其中有多少可以由社会安全福利和退休金支付？',
        '您希望保留多少随时可用的资金，以备急需和重要计划？',
        '您希望何时开始领取收入？是否需要在配偶身上延续？',
        '您对退保期、收益上限和利率变动的接受程度如何？',
      ],
      outro: '我们会列出几种方案以及各自的给付或计息方式，由您来决定。',
    },
    {
      step: 4,
      title: '签约之前',
      items: [
        '合同的利率、上限、费用和退保费用都会以书面形式列明，我们会和您逐条过一遍。',
        '合同送达后有一段冷静期，您可以审阅合同，并在期内取消、获得退款。',
        '如果资金来自IRA或401(k)，我们会安排直接转存或转账，避免被视为提取。',
        '我们会说明提取时如何纳税，包括59½岁前提取可能适用的联邦附加税。',
      ],
    },
  ],

  faq: {
    eyebrow: '常见问题',
    title: '常见问题',
    intro: '简要解答大家最常问的问题。欢迎当面详谈。',
    items: [
      {
        q: '应该把全部储蓄都放进年金吗？',
        a: '通常不建议。大多数人只用一部分储蓄购买年金，其余部分保持较高的灵活度。我们会根据您的收入需求和规划，帮您找到合适的比例。',
      },
      {
        q: '钱放在年金里安全吗？',
        a: '年金的各项保证取决于保险公司的财务实力和理赔能力。年金不是银行存款，不受FDIC保障。若保险公司破产，各州的保险保障协会可能提供有限的保障，但这不应成为购买的理由。我们会为您展示各家保险公司由独立评级机构给出的评级。',
      },
      {
        q: '固定指数型年金会亏钱吗？',
        a: '指数下跌不会计入您的账户，因此行情不好的年份通常计入零，而不是亏损。但退保费用、附加条款费用、市值调整以及提前提取，仍可能减少您实际拿到的金额，尤其是在最初几年。',
      },
      {
        q: '多年期保证年金和定期存单（CD）有什么不同？',
        a: '两者都可以在约定期限内提供固定利率。定期存单是银行存款，受FDIC保障，利息每年都要缴税。多年期保证年金是保险合同，不受FDIC保障，税款递延至提取时缴纳，提前动用需支付退保费用。两者的利率都会变动，所以我们会并排比较。',
      },
      {
        q: '年金如何纳税？',
        a: '年金内的增值一般可以税收递延，提取时按普通收入纳税。59½岁前提取应税部分，可能还需额外缴纳10%的联邦附加税，但有一些例外。用税后资金购买的即期年金，每笔给付中通常有一部分属于免税的本金返还。具体情况请向税务专业人士确认。',
      },
      {
        q: '可以把401(k)或IRA转入年金吗？',
        a: '通常可以，通过直接转存或转账，资金仍可保持税收递延。IRA中的年金需遵守IRA的规定，包括最低强制提取额。我们会帮您比较，看看转入是否比维持现状更合适。',
      },
      {
        q: '我身故后年金怎么处理？',
        a: '在开始领取收入之前，剩余价值一般给付给您指定的受益人。开始领取之后，则取决于您选择的给付方式：仅按寿命给付的在身故后停止；保证期限给付和夫妻联合给付则可以继续支付给受益人或配偶。',
      },
      {
        q: '你们如何获得报酬？',
        a: '和大多数保险代理机构一样，我们通常由您所选年金的保险公司支付佣金。对于我们推荐的任何年金，我们都乐意说明报酬是如何计算的。',
      },
    ],
  },

  fits: {
    eyebrow: '您的规划',
    title: '年金在规划中的位置',
    intro: '年金常在以下人生阶段发挥作用。',
    stageLinks: [
      { stage: 2, label: '了解退休收入' },
      { stage: 3, label: '了解投资增长' },
      { stage: 4, label: '了解传承规划' },
    ],
    relatedEyebrow: '其他服务',
    relatedTitle: '我们还能为您做什么',
    relatedIntro: '寿险与健康险，同样为您比较、讲清楚。',
  },

  cta: {
    title: '从一次交流开始',
    body: '告诉我们您希望何时退休，以及希望这笔储蓄发挥什么作用。我们会为您讲解可能适合的方案，绝不催促您做决定。',
    primary: '联系我们',
    phone: '致电',
  },

  disclosures: {
    title: '重要信息',
    items: [
      'Asset One Insurance 是在华盛顿州持牌的保险代理机构（[PLACEHOLDER] 执照编号）。年金由我们代理的保险公司签发，而非 Asset One Insurance。功能、附加条款、利率和费用因保险公司和州而异。',
      '年金是为退休设计的长期保险合同，不是银行存款，不受FDIC保障，也不由任何银行或政府机构担保。各项保证取决于签发保险公司的理赔能力。',
      '固定指数型年金并非投资于股市或任何指数。与指数挂钩的利息受上限、参与率、利差及其他限制约束，这些条件可能调整。',
      '提取超过免费额度的部分，可能需支付退保费用并适用市值调整。应税提取按普通收入纳税；59½岁前提取，可能需额外缴纳10%的联邦附加税。',
      '可选附加条款需另付费用，并有各自的条款。终身收入附加条款所用的收入基数并非现金价值，不能一次性提取。',
      '本页为一般性信息，不构成税务、法律或投资建议。请就您的具体情况咨询合格的税务或法律专业人士。',
    ],
  },
};

export const annuities: Record<Locale, AnnuitiesContent> = { en, zh };
