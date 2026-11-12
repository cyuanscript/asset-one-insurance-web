/**
 * Copy for a future Insurance & You guide: "How cash value grows"
 * (whole life vs indexed universal life). Moved off the Life Insurance
 * service page on 2026-11-12 to keep that page short. The charts in
 * src/components/viz/ and src/components/guides/CashValueGrowth.astro
 * read from here.
 */
import type { Locale } from '../content';

const en = {
  eyebrow: 'Inside a permanent policy',
  title: 'How the cash value grows',
  intro:
    'Whole life and indexed universal life both build cash value, in different ways. Here’s the short version, with more detail if you want it.',
  tabsLabel: 'Policy type',
  tabs: { whole: 'Whole life', iul: 'Indexed universal life' },
  deeperLabel: 'Go deeper',
  caption: 'Simplified illustration, not to scale and not an illustration of any policy.',
  whole: {
    lead: 'Whole life is built for certainty. Your premium, a minimum cash value and the death benefit are all set out in the policy from day one.',
    chart: {
      title: 'Premiums paid vs. cash value over time',
      takeaway: 'A slow start, then a steady build. Whole life rewards keeping the policy for the long term.',
      aria: 'Schematic chart. Total premiums paid rise in a straight line. Guaranteed cash value starts well below, curves upward and passes the premiums paid in the middle years. With dividends, which are not guaranteed, it may pass them earlier. Both are designed to reach the death benefit late in life.',
      deathBenefit: 'Death benefit',
      premiums: 'Total premiums paid',
      premiumsShort: 'Premiums paid',
      guaranteed: 'Guaranteed cash value',
      guaranteedShort: 'Guaranteed value',
      dividends: 'With dividends (not guaranteed)',
      dividendsShort: 'With dividends',
      crossing: ['Cash value passes what you’ve paid.', 'Timing varies by policy.'],
      early: 'Surrendering here may return less than you paid.',
      phases: ['Early years', 'Middle years', 'Later years'],
      note: 'Dividends are not guaranteed.',
    },
    points: [
      {
        title: 'A slow start, then a steady build',
        body: 'In the early years most of each premium pays for the coverage and the insurer’s costs, so cash value grows slowly. It builds more noticeably the longer you keep the policy.',
      },
      {
        title: 'Market swings don’t touch the guarantee',
        body: 'The guaranteed cash value doesn’t depend on the stock market, so a downturn doesn’t reduce it.',
      },
      {
        title: 'Dividends are a possible extra',
        body: 'Participating policies may pay dividends when the insurer’s results beat its assumptions. They aren’t guaranteed, but when they’re paid, you choose how to use them.',
      },
    ],
    dividendTitle: 'Four ways to use dividends',
    dividendOptions: [
      {
        title: 'Buy more coverage.',
        body: 'Dividends buy small amounts of fully paid-up insurance, called paid-up additions, which add to both the death benefit and the cash value.',
      },
      { title: 'Lower your premium.', body: 'Dividends pay part of this year’s premium.' },
      { title: 'Take cash.', body: 'Receive the dividend as a payment.' },
      { title: 'Leave it to earn interest.', body: 'The insurer holds the dividend and credits interest on it.' },
    ],
    notesTitle: 'More details',
    notes: [
      {
        title: 'Participating or not.',
        body: 'Participating policies may pay dividends. Non-participating policies don’t, and often cost a little less.',
      },
      {
        title: 'Starting younger.',
        body: 'The premium is set by your age and health when the policy is issued, so starting earlier usually means a lower premium for life.',
      },
      {
        title: 'Paid directly to your family.',
        body: 'The death benefit is generally paid straight to the beneficiaries you name, without going through probate.',
      },
      {
        title: 'Built to last.',
        body: 'Guaranteed cash value is designed to reach the death benefit at a late age set in the policy.',
      },
    ],
  },
  iul: {
    lead: 'Indexed universal life links your cash value to a market index, within limits that trim the biggest gains and screen out index losses. You can adjust premiums and the death benefit as life changes.',
    flow: {
      title: 'Where each premium goes',
      takeaway: 'Charges come out every month, even in years when no interest is credited.',
      steps: [
        'You pay a premium',
        'Monthly charges come out: the cost of insurance and policy fees',
        'The rest goes to your cash value, split between index options and a fixed account',
        'Each year, interest is credited based on the index, between the floor and the cap',
      ],
      leaves: 'Leaves every month',
    },
    chart: {
      title: 'Cap and floor, year by year',
      takeaway: 'You give up the very best years in exchange for skipping the worst ones.',
      aria: 'Schematic of eight hypothetical years. In strong years the credited interest stops at the cap. In modest years it follows the index. In down years the index falls below zero but no loss is credited.',
      index: 'Index change',
      credited: 'Credited to the policy',
      cap: 'Cap',
      floor: 'Floor',
      year: 'Year {n}',
      prompt: 'Tap or focus a year to see what happened.',
      strong: 'a strong year. Interest is credited up to the cap, not the full gain.',
      modest: 'a modest year. Interest follows the index.',
      down: 'the index fell. The floor means no loss is credited, though charges still apply.',
      caption:
        'Hypothetical pattern, not real index data or a projection. Caps, floors and participation rates vary by policy and can change. Policy charges still apply every year.',
    },
    points: [
      {
        title: 'A ceiling and a floor',
        body: 'In a strong year, interest is credited up to the cap. In a down year, the floor (commonly 0%) means no index loss is credited.',
      },
      {
        title: 'Charges come out every month',
        body: 'The cost of insurance rises with age and is deducted even in years with no interest credited. That’s why how a policy is funded matters so much.',
      },
      {
        title: 'It needs regular check-ups',
        body: 'Caps and rates can change. We review the policy with you regularly so it stays on track.',
      },
    ],
    termsTitle: 'Crediting terms, in plain language',
    terms: [
      { term: 'Cap', meaning: 'The most interest that can be credited in a year.' },
      { term: 'Participation rate', meaning: 'The share of the index’s gain that counts.' },
      { term: 'Spread', meaning: 'A set amount subtracted from the index’s gain.' },
      { term: 'Floor', meaning: 'The least that can be credited in a year, commonly 0%.' },
    ],
    notesTitle: 'More details',
    notes: [
      {
        title: 'Index choices.',
        body: 'Many policies let you split cash value across options such as the S&P 500, the Nasdaq-100, a blend of indexes, or a fixed account that earns a declared rate.',
      },
      {
        title: 'Level or increasing death benefit.',
        body: 'A level death benefit stays the same as cash value grows, which keeps costs lower. An increasing death benefit pays the face amount plus the cash value, for more coverage at a higher cost.',
      },
      {
        title: 'Lapse protection.',
        body: 'Some policies offer a no-lapse guarantee rider that keeps coverage in force for a period even if cash value runs low, as long as its conditions are met.',
      },
      {
        title: 'Funding limits.',
        body: 'Paying in too much too quickly can turn a policy into a modified endowment contract (MEC), which changes how loans and withdrawals are taxed. We plan funding to avoid this when that’s your goal.',
      },
    ],
    dbOptions: {
      title: 'Level or increasing death benefit',
      aria: 'Level death benefit: the total stays the same while cash value grows inside it. Increasing death benefit: the face amount stays the same and cash value is added on top, so the total grows.',
      level: { title: 'Level', sub: 'Total stays the same; cash value grows inside it' },
      increasing: { title: 'Increasing', sub: 'Face amount plus cash value' },
      phases: ['Early', 'Middle', 'Later'],
      insurance: 'Insurance amount',
      cashValue: 'Cash value',
    },
  },
};

export type CashValueGuideContent = typeof en;

const zh: CashValueGuideContent = {
  eyebrow: '永久寿险的内部运作',
  title: '现金价值如何增长',
  intro: '终身寿险和指数型万能寿险都会累积现金价值，但方式不同。以下是简要说明，想了解更多可以展开细节。',
  tabsLabel: '保单类型',
  tabs: { whole: '终身寿险', iul: '指数型万能寿险' },
  deeperLabel: '了解更多细节',
  caption: '简化示意图，未按比例绘制，并非任何保单的演示。',
  whole: {
    lead: '终身寿险以确定性为核心。保费、最低现金价值和身故保险金，从第一天起就写在保单里。',
    chart: {
      title: '已缴保费与现金价值',
      takeaway: '起步慢，之后稳步累积。终身寿险更适合长期持有。',
      aria: '示意图：累计已缴保费呈直线上升。保证现金价值起点远低于已缴保费，随后加速上升，并在中期超过已缴保费。若计入不保证的红利，可能更早超过。两者的设计目标都是在晚年达到身故保险金。',
      deathBenefit: '身故保险金',
      premiums: '累计已缴保费',
      premiumsShort: '已缴保费',
      guaranteed: '保证现金价值',
      guaranteedShort: '保证现金价值',
      dividends: '含红利（不保证）',
      dividendsShort: '含红利',
      crossing: ['现金价值超过已缴保费。', '具体时间因保单而异。'],
      early: '在此阶段退保，拿回的钱可能少于已缴保费。',
      phases: ['早期', '中期', '后期'],
      note: '红利不保证。',
    },
    points: [
      {
        title: '起步慢，稳步累积',
        body: '在最初几年，每笔保费的大部分用于支付保障成本和保险公司的费用，因此现金价值增长较慢。持有时间越长，累积越明显。',
      },
      { title: '市场波动不影响保证部分', body: '保证现金价值与股市无关，市场下跌不会使其减少。' },
      {
        title: '红利是可能的额外收益',
        body: '分红型保单在保险公司经营结果优于预期时可能派发红利。红利不保证，但一旦派发，用途由您选择。',
      },
    ],
    dividendTitle: '红利的四种用途',
    dividendOptions: [
      {
        title: '增加保障。',
        body: '用红利购买少量已缴清的保险（称为“增额缴清保险”），同时增加身故保险金和现金价值。',
      },
      { title: '抵减保费。', body: '用红利支付当年的部分保费。' },
      { title: '领取现金。', body: '以现金形式领取红利。' },
      { title: '留存生息。', body: '红利留在保险公司，按其公布的利率计息。' },
    ],
    notesTitle: '更多细节',
    notes: [
      { title: '分红型与不分红型。', body: '分红型保单可能派发红利；不分红型保单没有红利，保费通常略低。' },
      { title: '越早投保越有利。', body: '保费按投保时的年龄和健康状况确定，因此越早投保，终身保费通常越低。' },
      { title: '直接赔付给家人。', body: '身故保险金一般直接支付给您指定的受益人，无需经过遗嘱认证程序。' },
      { title: '为长期而设计。', body: '保证现金价值的设计目标，是在保单约定的高龄时达到身故保险金的金额。' },
    ],
  },
  iul: {
    lead: '指数型万能寿险把现金价值与市场指数挂钩，并设有限制：削去最高的涨幅，也挡住指数的亏损。人生变化时，您还可以调整保费和保额。',
    flow: {
      title: '每笔保费的去向',
      takeaway: '费用每月扣除，即使某年没有计入利息也一样。',
      steps: [
        '您缴纳保费',
        '每月扣除费用：保险成本和保单管理费',
        '其余部分进入现金价值，分配到各指数账户和固定账户',
        '每年依据指数表现计入利息，介于保底与上限之间',
      ],
      leaves: '每月扣除',
    },
    chart: {
      title: '逐年看上限与保底',
      takeaway: '放弃最好年份的部分涨幅，换来避开最差年份的亏损。',
      aria: '八个假设年份的示意图：表现强劲的年份，计入的利息止于上限；涨幅一般的年份，利息随指数变化；指数下跌的年份，不会计入亏损。',
      index: '指数涨跌',
      credited: '计入保单的利息',
      cap: '上限',
      floor: '保底',
      year: '第{n}年',
      prompt: '点按或聚焦某一年，查看当年的情况。',
      strong: '表现强劲。利息最多计入到上限，而非全部涨幅。',
      modest: '涨幅一般。利息随指数变化。',
      down: '指数下跌。保底机制确保不计入亏损，但费用照常扣除。',
      caption: '假设情形，并非真实指数数据或预测。收益上限、保底和参与率因保单而异，且可能调整。保单费用每年照常扣除。',
    },
    points: [
      {
        title: '有上限，也有保底',
        body: '指数表现强劲时，利息最多计入到上限；指数下跌时，保底机制（通常为0%）确保不会计入指数亏损。',
      },
      {
        title: '费用每月扣除',
        body: '保险成本随年龄上升，即使某年没有计入利息也照常扣除。所以保单的资金安排非常重要。',
      },
      { title: '需要定期检视', body: '收益上限和费率可能调整。我们会定期与您一起检视保单，确保它按计划运行。' },
    ],
    termsTitle: '计息术语，简单说明',
    terms: [
      { term: '上限', meaning: '一年内可计入利息的最高比例。' },
      { term: '参与率', meaning: '指数涨幅中可计入的比例。' },
      { term: '差额', meaning: '从指数涨幅中先扣除的固定比例。' },
      { term: '保底', meaning: '一年内计入利息的最低比例，通常为0%。' },
    ],
    notesTitle: '更多细节',
    notes: [
      {
        title: '指数选择。',
        body: '许多保单允许把现金价值分配到不同选项，例如标普500、纳斯达克100、多指数组合，或按公布利率计息的固定账户。',
      },
      {
        title: '保额固定或递增。',
        body: '固定保额不随现金价值增长而改变，成本较低；递增保额赔付基本保额加现金价值，保障更高，成本也更高。',
      },
      {
        title: '防失效保障。',
        body: '部分保单提供不失效保证附加条款，只要满足条件，即使现金价值不足，保障也能在一定期限内持续有效。',
      },
      {
        title: '缴费上限。',
        body: '短期内缴入过多保费，可能使保单成为“修正型储蓄合同”（MEC），改变贷款和提取的税务处理。如果您希望避免这种情况，我们会据此规划缴费。',
      },
    ],
    dbOptions: {
      title: '保额固定或递增',
      aria: '固定保额：总额不变，现金价值在其中增长。递增保额：基本保额不变，现金价值叠加在上面，总额随之增长。',
      level: { title: '固定保额', sub: '总额不变，现金价值在其中增长' },
      increasing: { title: '递增保额', sub: '基本保额加现金价值' },
      phases: ['早期', '中期', '后期'],
      insurance: '保险金额',
      cashValue: '现金价值',
    },
  },
};

export const cashValueGuide: Record<Locale, CashValueGuideContent> = { en, zh };
