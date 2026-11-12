# Content pack: Life Insurance

| | |
|---|---|
| **Route** | `/services/life-insurance/` (EN) · `/zh/services/life-insurance/` (中文) |
| **Status** | Draft v3, 2026-11-12. Trimmed after review: the page is now about a quarter shorter. Built at `src/pages/services/life-insurance.astro` (copy lives in `src/i18n/life-insurance.ts`). Revised using the Global Sagacity product guides (Whole Life, IUL, Product Overview, Profile, Premium Services). English ready for client review; Chinese is a draft translation and needs a native review |
| **Voice** | Same as the homepage: plain language, calm, no pressure. "May fit" and "can help", never "best" or "guaranteed" without a qualifier |
| **Terminology** | Matches `src/i18n/content.ts`: 定期寿险, 终身寿险, 指数型万能寿险, 第二身故寿险, 保险公司, 现金价值. **Since v2:** 永久寿险 for "permanent" (approved 2026-11-11; homepage labels updated to match) |
| **Earlier versions** | `content-packs/archive/services-life-insurance.v1.md`, `…v2.md` |
| **Parked material** | Cash value deep-dive (whole life vs. IUL) and its charts: `content-packs/insurance-and-you-how-cash-value-grows.md` |

Items marked **[CONFIRM]** still need an answer from Asset One before the copy goes live (all collected in [Open questions](#open-questions)).
Section keys (e.g. `hero.title`) are suggested names for a `lifeInsurance` object in `content.ts`.
Visuals are labelled **V0** and **V2** (numbering kept from v2) and specified in [Visual specs](#visual-specs).

---

## What changed in v3 (2026-11-12)

From the client review: thorough, but too much on one page.

| Change | Why |
|---|---|
| **Cut:** How the cash value grows (whole life / IUL tabs and four charts) | Too niche for a service page. Parked as an Insurance & You guide, copy and charts intact |
| **Cut:** How long each one lasts timeline (V1) | Not visually strong enough to earn its space |
| **Cut:** Life insurance or an annuity? (V7) | Parked with the guide; may suit the Annuities page |
| **Coverage types:** four trimmed cards in one row under the goal buttons | All four stay in view while someone tries the goals. Below 1100px, matching cards move to the front |
| **Whole life card:** three guarantees as bullets | Easier to scan |
| **At a glance:** dots replaced by a Low / Medium / High word with a 3-step bar, on its own line above the text | Keeps the levels scannable without misaligning the text. Stars were rejected: they read as a rating, and "High" premium isn't a good thing |
| **Coverage amount** merged into **How we work**, next to "What to expect when you apply" | Two zoom-in panels for steps 2 and 4; one section fewer. The `lifeProcess` photo is no longer used |
| **New order:** Riders right after At a glance; Advanced planning right before the FAQ | Client priority |

### Page depth, v3

| Depth | Sections |
|---|---|
| **1 · Scan** | Hero, Basics, Coverage types |
| **2 · Compare** | At a glance, Riders, How we work |
| **3 · If it applies to you** | Advanced planning, FAQ (closed accordions) |

---

## 1. Page meta

**`meta.title`**
- EN: Life Insurance in Bellevue, WA · Asset One Insurance
- 中文: 寿险 · 华盛顿州贝尔维尤 | Asset One Insurance

**`meta.description`** (≤160 characters)
- EN: Term, whole, indexed universal and survivorship life insurance, compared across carriers and explained in plain language. In English and 中文.
- 中文: 定期寿险、终身寿险、指数型万能寿险与第二身故寿险，跨多家保险公司比较，用浅显的语言讲清楚。中英文服务。

---

## 2. Hero

**`hero.eyebrow`**
- EN: Services · Life Insurance
- 中文: 服务 · 寿险

**`hero.title`** (array = line breaks, as on the homepage)
- EN: `['A steady plan for the people who count on you.']`
- 中文: `['为依靠您的家人，', '做一份稳妥的安排。']`

**`hero.lead`**
- EN: Term and permanent life insurance, compared across carriers and explained in plain language, so you can choose coverage that fits your family and your budget.
- 中文: 定期与永久寿险，跨多家保险公司比较，用浅显的语言讲清楚，帮助您选择适合家庭和预算的保障。

**`hero.primary`** → `/contact/`
- EN: Talk with us
- 中文: 联系我们

**`hero.secondary`** → `#types`
- EN: Compare coverage types
- 中文: 比较保障类型

**Photo** `lifeHero`: see [Photo briefs](#photo-briefs).

---

## 3. The basics

**`basics.eyebrow`**
- EN: The basics
- 中文: 基础知识

**`basics.title`**
- EN: What life insurance is for
- 中文: 寿险的作用

**`basics.body`** (two paragraphs)
- EN:
  1. Life insurance pays a sum of money, called the death benefit, to the people you name when you pass away. Families use it to keep up with the mortgage, cover everyday costs, pay off debts, fund a child's education or pass on an inheritance. Permanent policies also build cash value you can use while you're living.
  2. The right policy depends on how long others will rely on you, what you want the money to do, and what fits comfortably in your budget now and later. We start there, not with a product.
- 中文:
  1. 寿险会在您身故后，向您指定的受益人支付一笔钱，称为身故保险金。许多家庭用它继续偿还房贷、支付日常开支、还清债务、资助孩子的教育，或留下一笔遗产。永久寿险还会累积现金价值，您在世时也可以使用。
  2. 适合的保单取决于家人需要依靠您多久、您希望这笔钱发挥什么作用，以及现在和将来都能轻松负担的预算。我们从这些问题开始，而不是从产品开始。

**`basics.checklistTitle`**
- EN: It may be worth a look if…
- 中文: 如果符合以下情况，不妨了解一下……

**`basics.checklist`**

| EN | 中文 |
|---|---|
| A partner, children or parents rely on your income | 伴侣、孩子或父母依靠您的收入生活 |
| You have a mortgage or other debts you wouldn't want to leave behind | 您有房贷或其他不希望留给家人的债务 |
| You own a business, or partners rely on you to keep it running | 您拥有企业，或合伙人依靠您维持经营 |
| You'd like to leave an inheritance, or a gift to a cause you care about | 您希望留下遗产，或向关心的公益事业捐赠 |
| Your coverage through work would end if you changed jobs, or may not be enough on its own | 公司提供的保障会在换工作时终止，或单靠它可能不够 |

---

## 4. Coverage types (anchor `#types`)

**`types.eyebrow` / `title` / `intro` / `goalsLabel` / `goalsAll` / `goals`:** unchanged from v2 (see archive). The "Protect my business" goal links to `#business`.

**`types.labels`**
- EN: `mayFit: 'May fit'`, `weigh: 'Worth weighing'`
- 中文: `mayFit: '可能适合'`, `weigh: '需要权衡'`

**Layout:** goal buttons, a one-line note, then four cards in a single row (two per row below 1100px, one on phones). Labels line up across the row (CSS subgrid). When a goal is chosen, matching cards get a Sky top rule and the others fade to 45%; below 1100px the matches move to the front. Spec in [V0](#v0-goal-filter).

### 4.1 Term life · 定期寿险
- **summary** EN: Coverage for a set number of years, often 10, 20 or 30. If you outlive the term, the coverage ends.
  中文: 在约定年限内提供保障，常见为10年、20年或30年。期满时您仍健在，保障即告结束。
- **mayFit** EN: The years your family relies on your income most, like while children are young or the mortgage is outstanding.
  中文: 家人最依赖您收入的那些年，例如孩子年幼或房贷尚未还清期间。
- **weigh** EN: The lowest premium for the most coverage, but no cash value. Many people choose a policy they can later convert to permanent.
  中文: 以最低的保费获得最高的保额，但没有现金价值。许多人会选择日后可转换为永久寿险的保单。

### 4.2 Whole life · 终身寿险
- **summary** EN: Lifelong coverage built on three guarantees:
  中文: 以三项保证为基础的终身保障：
- **bullets**

  | EN | 中文 |
  |---|---|
  | A premium that never goes up | 保费永不上涨 |
  | Cash value that grows on a set schedule | 现金价值按约定的时间表增长 |
  | A death benefit that stays in place while premiums are paid | 只要按时缴费，身故保险金始终有效 |

- **note** (small) EN: Some policies also pay dividends, which aren't guaranteed.
  中文: 部分保单还可能派发红利，但红利不保证。
- **mayFit** EN: People who value certainty and predictable costs over flexibility.
  中文: 更看重确定性和可预期费用、而非灵活性的人。
- **weigh** EN: Costs much more than term for the same coverage, and cash value builds slowly at first.
  中文: 相同保额下保费远高于定期寿险，早期现金价值累积较慢。

### 4.3 Indexed universal life · 指数型万能寿险
- **summary** EN: Lifelong coverage with flexible premiums. Cash value earns interest linked to a market index, with a cap on gains and a floor against index losses.
  中文: 终身保障，保费灵活。现金价值的利息与市场指数挂钩，涨幅设有上限，并有保底机制防范指数下跌。
- **mayFit** EN: People who want some growth potential and are comfortable reviewing the policy regularly.
  中文: 希望兼顾一定增长潜力、也愿意定期检视保单的人。
- **weigh** EN: Caps and charges can change, and results aren't guaranteed. It needs ongoing attention so it doesn't lapse.
  中文: 收益上限和费用可能调整，结果并不保证。需要持续关注，以免保单失效。

### 4.4 Survivorship life · 第二身故寿险
- **summary** EN: One permanent policy on two people, usually spouses. It pays out after the second person passes away.
  中文: 一份永久保单保障两个人（通常是夫妻），在第二位被保险人身故后赔付。
- **mayFit** EN: Estate and legacy planning, coordinated with your attorney or CPA.
  中文: 遗产与传承规划，并与您的律师或会计师协同安排。
- **weigh** EN: Nothing is paid to the surviving spouse, but premiums are often lower than for two separate policies.
  中文: 在世的配偶无法从中获得赔付，但保费通常低于分别购买两份保单。

---

## 5. At a glance (V2)

**`compare.eyebrow` / `title` / `takeaway` / `caption` / `footnote`:** unchanged from v2.

**`compare.levels`**
- EN: `['None', 'Low', 'Medium', 'High']`
- 中文: `['无', '低', '中', '高']`

**`compare.legend`**
- EN: Levels show general tendencies compared with the other two. Individual policies vary.
- 中文: 等级表示与另外两种相比的大致倾向，具体保单可能不同。

Rows with a level show the bar and word on their own line, then the text. "Predictability" and "Attention needed" text was reworded so it no longer repeats the level word.

| Row · 项目 | Term · 定期寿险 | Whole life · 终身寿险 | IUL · 指数型万能寿险 |
|---|---|---|---|
| How long it lasts · 保障期限 | A set period, often 10–30 years · 约定期限，常见10至30年 | For life, as long as premiums are paid · 终身，只要按时缴费 | For life, if the policy stays funded enough · 终身，只要保单资金充足 |
| Premium · 保费 | **Low** Lowest to start · 起步最低 | **High** Highest, and fixed for life · 最高，且终身固定 | **Medium** Flexible, within limits · 可在限额内灵活调整 |
| Cash value · 现金价值 | None · 无 | Grows on a guaranteed schedule, plus possible dividends · 按保证的时间表增长，另有可能的红利 | Credited based on an index, within a cap and a floor · 依据指数计入利息，设有上限与保底 |
| Predictability · 可预期性 | **High** Steady during the term · 保障期内保持稳定 | **High** Guarantees set at the start · 各项保证在投保时确定 | **Low** Varies with index results and charges · 随指数表现和费用变化 |
| Growth potential · 增长潜力 | **None** No cash value to grow · 没有现金价值 | **Low** Steady, more modest · 稳定，幅度较小 | **Medium** Higher, limited by a cap · 较高，但受上限限制 |
| Flexibility · 灵活性 | **Low** Can often convert to permanent · 通常可转换为永久寿险 | **Low** Set premiums · 保费固定 | **High** Adjust premiums and death benefit · 可调整保费和保额 |
| Attention needed · 需要打理的程度 | **Low** Set it and review with life changes · 投保后随人生变化检视即可 | **Low** Set it and review with life changes · 投保后随人生变化检视即可 | **High** Review regularly · 需定期检视 |
| Often used for · 常见用途 | Income replacement, the mortgage, young families · 替代收入、房贷、年轻家庭 | Certainty, legacy, business planning · 确定性、传承、企业规划 | Lifelong coverage with growth potential, extra retirement flexibility · 兼顾增长潜力的终身保障、更灵活的退休资金 |

---

## 6. Optional riders

**`riders.eyebrow`**
- EN: Riders
- 中文: 附加条款

**`riders.title`**
- EN: Features you can add
- 中文: 可附加的保障

**`riders.intro`**
- EN: Riders add features to a policy, sometimes at an extra cost. Availability and terms vary by carrier and state.
- 中文: 附加条款可以为保单增加功能，有些需要额外付费。是否提供及具体条款因保险公司和州而异。

Six items: a 3 × 2 grid on desktop, a single column on mobile.

| Name · 名称 | EN | 中文 |
|---|---|---|
| Accelerated death benefit · 提前给付身故保险金 | Lets you receive part of the death benefit early if you're diagnosed with a qualifying terminal, chronic or critical illness. | 若确诊符合条件的末期、慢性或重大疾病，可提前领取部分身故保险金。 |
| Long-term care · 长期护理 | Lets you use part of the death benefit to pay for qualifying long-term care. | 可动用部分身故保险金支付符合条件的长期护理费用。 |
| Waiver of premium · 豁免保费 | Keeps the policy in force without premiums if you become disabled and can't work, as defined in the rider. | 若您因残疾无法工作（以条款定义为准），无需缴纳保费，保单继续有效。 |
| Conversion · 转换权 | Lets you change term coverage to permanent without new health questions, within the deadlines set in the policy. | 在保单规定的期限内，无需重新回答健康问题即可将定期保障转换为永久保障。 |
| No-lapse guarantee · 不失效保证 | For universal life policies: keeps coverage in force for a set period even if cash value runs low, as long as the rider's premium requirements are met. | 适用于万能寿险：只要满足条款的缴费要求，即使现金价值不足，保障也能在约定期限内持续有效。 |
| Child term · 子女定期保障 | Adds a small amount of term coverage for your children to your own policy. | 在您的保单上为子女附加少量定期保障。 |

---

## 7. How we work (now includes coverage amount)

**`process.eyebrow` / `title` / `intro` / `steps`:** unchanged from v2.1, except step 2 now reads "We work out how much coverage may fit…" (中文: 我们会算出可能适合的保额…).

**`process.stepLabel`**
- EN: `Step {n}`
- 中文: `第{n}步`

Under the five steps, two panels side by side (stacked below 900px). Steps 2 and 4 get a filled number so the link to the panels is visible.

### 7.1 Panel for step 2 · `process.amount`

**title** EN: How much coverage is enough? · 中文: 保额多少才够？

**intro** EN: There's no single right number. We work it out with you from a few questions: · 中文: 没有放之四海皆准的数字。我们会通过以下几个问题和您一起算出来：

**questions:** the five questions from v2 §7, unchanged.

**outro** EN: We'll show you a few coverage amounts and what each would cost, then you decide. · 中文: 我们会列出几种保额及对应的保费，由您来决定。

### 7.2 Panel for step 4 · `process.apply`

**title** EN: What to expect when you apply · 中文: 投保时会经历什么

**items:** the four items from v2, unchanged. Now always visible (no longer an expander).

---

## 8. For business owners and larger estates (anchor `#business`)

A compact band on a Pale Sky ground, so it reads as a side door for the visitors it applies to and is easy for everyone else to scroll past.

**`business.eyebrow`**
- EN: Advanced planning
- 中文: 进阶规划

**`business.title`**
- EN: For business owners and larger estates
- 中文: 企业主与较大规模遗产的规划

**`business.intro`**
- EN: Some plans involve a business, a trust or a sizeable estate. We work alongside your CPA and attorney so the insurance, tax and legal pieces fit together.
- 中文: 有些规划涉及企业、信托或规模较大的遗产。我们会与您的会计师和律师合作，让保险、税务和法律安排相互配合。

**`business.items`** (four tiles)

| EN title | EN body | 中文标题 | 中文正文 |
|---|---|---|---|
| Key person coverage | Helps a business stay steady if it loses an owner or essential employee, with money for lost revenue, recruiting or debts. | 关键人保险 | 若企业失去所有者或核心员工，这笔保险金可用于弥补收入损失、招聘或偿还债务，帮助企业平稳运营。 |
| Buy-sell funding | Gives surviving owners the money to buy a partner's share at an agreed price, so the family is paid fairly and the business carries on. | 股权买卖资金 | 让在世的股东有资金按约定价格购买已故合伙人的股份：家属获得公平的对价，企业也能继续经营。 |
| Executive benefits | Permanent policies can fund extra retirement or survivor benefits that help keep key leaders. | 高管福利 | 永久寿险可以为核心管理人员提供额外的退休或遗属福利，帮助留住人才。 |
| Trust-owned policies | For larger estates, a policy can be owned by an irrevocable life insurance trust that your attorney sets up, which may help keep the proceeds out of your taxable estate. | 信托持有的保单 | 对于规模较大的遗产，可由您的律师设立不可撤销人寿保险信托来持有保单，可能有助于将保险金排除在应税遗产之外。 |

**`business.financing`** (small print under the tiles)
- EN: **Premium financing.** For some high-net-worth clients, a bank loan pays the premiums on a large policy. It carries interest-rate, collateral and policy-performance risks and suits only specific situations. If it comes up, we'll explain the downsides as clearly as the benefits.
- 中文: **保费融资。** 对部分高净值客户，可通过银行贷款支付大额保单的保费。这种安排存在利率、抵押品和保单表现等风险，只适合特定情况。如有需要，我们会把风险和好处讲得同样清楚。

---

## 9. FAQ

**`faq.eyebrow`**
- EN: Questions
- 中文: 常见问题

**`faq.title`**
- EN: Common questions
- 中文: 大家常问的问题

Ten accordions, all closed. Order = how often each is asked, most common first.

**Q1**
- EN: I have life insurance through work. Is that enough?
- A: It's a good start. But group coverage is often a set multiple of salary that may not cover your family's full needs, and it usually ends or changes if you leave the job. Many people keep it and add an individual policy they own.
- 中文: 我已经有公司提供的寿险，够吗？
- 答: 这是很好的起点。但团体寿险通常只是薪资的固定倍数，未必能满足家庭的全部需求，而且离职后通常会终止或变更。许多人会保留团体寿险，再另外购买一份自己持有的个人保单。

**Q2**
- EN: Can I get coverage if I have a health condition?
- A: Often, yes. Conditions such as high blood pressure, diabetes or a past cancer diagnosis are reviewed case by case, and insurers view them differently. That's one reason comparing several carriers helps.
- 中文: 有健康问题还能投保吗？
- 答: 很多情况下可以。高血压、糖尿病或癌症病史等情况会逐案评估，而且不同保险公司的标准不同。这也是比较多家保险公司的意义之一。

**Q3** (new)
- EN: Is indexed universal life the same as investing in the stock market?
- A: No. Your cash value isn't invested in the market. The insurer credits interest based on how an index performs, within a cap and a floor, so you won't receive all of a strong year's gain and won't be credited an index loss in a weak one. Policy charges still apply every year, and illustrations are projections, not promises.
- 中文: 指数型万能寿险等于投资股市吗？
- 答: 不是。您的现金价值并没有投入股市。保险公司参照指数的表现计入利息，并设有上限和保底：表现好的年份，您拿不到全部涨幅；表现差的年份，也不会计入指数亏损。保单费用每年照常扣除，保单演示只是预测，并非承诺。

**Q4**
- EN: I'm not a US citizen. Can I still apply?
- A: Many insurers offer coverage to permanent residents and to many visa holders living in the US. Requirements vary by carrier, visa type and how long you've lived here, so we'll check which options fit your situation.
- 中文: 我不是美国公民，也能投保吗？
- 答: 许多保险公司为永久居民和不少在美持签证居住的人士提供保障。具体要求因保险公司、签证类型和在美居住时间而异，我们会帮您确认适合的选择。

**Q5**
- EN: Is the death benefit taxed?
- A: Under current federal law, beneficiaries generally receive life insurance death benefits free of income tax, though there are exceptions, and estate tax may be a factor for larger estates. Please confirm your situation with a tax professional.
- 中文: 身故保险金需要缴税吗？
- 答: 根据现行联邦法律，受益人领取的寿险身故保险金一般无需缴纳所得税，但也有例外；对于较大的遗产，遗产税可能需要考虑。请向税务专业人士确认您的具体情况。

**Q6**
- EN: Can I use the cash value while I'm alive?
- A: With permanent policies you can usually borrow against or withdraw from the cash value, for anything from college costs to retirement income. Loans accrue interest, and both loans and withdrawals reduce the cash value and death benefit. Tax treatment depends on how the policy is set up: a policy funded too quickly can become a modified endowment contract, and a policy that lapses with a loan outstanding can create a tax bill. We'll walk through this before you rely on it.
- 中文: 在世时可以使用现金价值吗？
- 答: 永久保单通常可以用现金价值贷款或部分提取，可用于从大学学费到退休收入等各种用途。贷款会产生利息，贷款和提取都会减少现金价值和身故保险金。税务处理取决于保单的设计：缴费过快的保单可能成为修正型储蓄合同（MEC）；保单在贷款未还清时失效，也可能产生税款。在您依赖这笔钱之前，我们会和您一起把这些讲清楚。

**Q7** (new)
- EN: Can I buy a policy for my child or grandchild?
- A: Yes, usually with a parent's or guardian's consent. A permanent policy bought young is priced on a young age, and its cash value has decades to build. It's worth comparing with other ways to save for a child, such as a 529 plan, and we'll lay out the trade-offs honestly.
- 中文: 可以为子女或孙辈投保吗？
- 答: 可以，通常需要父母或监护人同意。年幼时购买永久保单，保费按年轻的年龄计算，现金价值也有几十年的时间累积。这值得与529教育储蓄计划等其他为孩子储蓄的方式一起比较，我们会如实说明各自的利弊。

**Q8** **[CONFIRM]** compensation model and any fees
- EN: How are you paid?
- A: Like most insurance agencies, we're typically paid a commission by the insurer whose policy you choose. We're happy to explain how compensation works for any policy we recommend.
- 中文: 你们如何收费？
- 答: 和大多数保险代理机构一样，我们通常由您所选保单的保险公司支付佣金。对于我们推荐的任何保单，我们都乐意说明报酬是如何计算的。

**Q9**
- EN: What happens if I miss a premium payment?
- A: Most policies have a grace period, often 30 or 31 days. Permanent policies with cash value may draw on it to cover premiums for a time. We'll help you understand your options before your coverage is at risk.
- 中文: 如果错过缴费会怎样？
- 答: 大多数保单设有宽限期，通常为30或31天。有现金价值的永久保单可能会在一段时间内用现金价值支付保费。在保障面临风险之前，我们会帮您了解可选的做法。

**Q10**
- EN: Can I change my policy later?
- A: Often, yes. Depending on the policy, you may be able to convert term coverage, adjust premiums or the death benefit on a universal life policy, update beneficiaries or add coverage. We'll review what's possible with you as life changes.
- 中文: 以后可以调整保单吗？
- 答: 很多情况下可以。视保单而定，您可能可以转换定期保障、调整万能寿险的保费或保额、更新受益人或增加保额。人生发生变化时，我们会和您一起检视可行的调整。

---

## 10. Where it fits (cross-links)

**`fits.eyebrow`**
- EN: Your plan
- 中文: 您的规划

**`fits.title`**
- EN: Where life insurance fits
- 中文: 寿险在规划中的位置

**`fits.intro`**
- EN: Life insurance often plays a part in these life stages.
- 中文: 寿险常在以下人生阶段发挥作用。

Links go to the homepage life-stage selector and open that stage (`/#stage-tab-0`, `-1`, `-4`). Reuse the homepage stage names and body copy; link labels:

| Stage · 阶段 | Link label EN | Link label 中文 |
|---|---|---|
| Family Protection · 家庭保障 | See family protection | 了解家庭保障 |
| Education Funding · 教育金规划 | See education funding | 了解教育金规划 |
| Legacy Planning · 传承规划 | See legacy planning | 了解传承规划 |

**`related.title`** (other services; reuse the homepage product cards for Health Insurance and Annuities)
- EN: Other ways we can help
- 中文: 我们还能帮您

---

## 11. Closing call to action

Sits above the footer, which already carries "Questions are welcome, in English or 中文."

**`cta.title`**
- EN: Start with a conversation
- 中文: 从一次交流开始

**`cta.body`**
- EN: Tell us a little about your family and what you'd like your coverage to do. We'll explain the options that may fit, with no pressure to decide.
- 中文: 简单告诉我们您的家庭情况，以及您希望保障发挥什么作用。我们会讲解可能适合的方案，绝不催促您做决定。

**`cta.primary`** → `/contact/`
- EN: Talk with us
- 中文: 联系我们

**`cta.phone`** → `contact.phoneHref`
- EN: Call (425) 736-9665
- 中文: 致电 (425) 736-9665

---

## 12. Disclosures (page footnote)

**[CONFIRM]** with Asset One's compliance contact before launch.

- EN:
  1. Asset One Insurance is an insurance agency licensed in Washington State ([PLACEHOLDER] License no.). Policies are issued by the insurance companies we represent, not by Asset One Insurance. Coverage, features, riders and costs vary by insurer and state and are subject to underwriting approval. Guarantees are based on the claims-paying ability of the issuing insurer.
  2. Whole life dividends are not guaranteed and may change or not be paid.
  3. Indexed universal life insurance is not an investment in the stock market or in any index. Index-linked interest is subject to caps, participation rates, spreads and other limits, which may change. Policy charges are deducted regardless of credited interest. Policy illustrations are hypothetical and not guaranteed.
  4. Policy loans and withdrawals reduce cash value and the death benefit, may cause the policy to lapse and may have tax consequences. A policy classified as a modified endowment contract (MEC) is taxed differently.
  5. Business, trust and premium-financing strategies involve legal, tax and financial risks and should be set up with your own attorney and tax professional.
  6. This page is general information, not tax, legal or investment advice. Please consult a qualified tax or legal professional about your situation.
- 中文:
  1. Asset One Insurance 是在华盛顿州持牌的保险代理机构（[PLACEHOLDER] 执照号码）。保单由我们代理的保险公司签发，而非由 Asset One Insurance 签发。保障范围、功能、附加条款和费用因保险公司和州而异，并须经核保批准。各项保证以签发保险公司的理赔能力为基础。
  2. 终身寿险的红利不保证，可能调整或不予派发。
  3. 指数型万能寿险并非对股市或任何指数的投资。指数挂钩利息受收益上限、参与率、差额及其他限制的约束，且可能调整。无论是否计入利息，保单费用均会扣除。保单演示均为假设情形，并不保证。
  4. 保单贷款和提取会减少现金价值和身故保险金，可能导致保单失效，并可能产生税务影响。被认定为修正型储蓄合同（MEC）的保单，税务处理有所不同。
  5. 企业、信托及保费融资等安排涉及法律、税务和财务风险，应与您自己的律师和税务专业人士共同设立。
  6. 本页内容仅为一般信息，不构成税务、法律或投资建议。请就您的具体情况咨询合格的税务或法律专业人士。

---

## Visual specs

The cash value charts (V3–V6) and the two-risks band (V7) moved to `insurance-and-you-how-cash-value-grows.md`. V1 (timeline) was cut.

### V0 · Goal filter

- **Layout:** goal buttons, then a one-line note (two lines below 1100px; the space is reserved so cards don't jump), then the four cards in one row.
- **Behaviour:** `<button aria-pressed>`. Matching cards get a 3px Sky top rule; the rest fade to 45% opacity (still readable and clickable). Below 1100px, matches move to the front with CSS `order`. Pressing the active goal again returns to "All four". The note is an `aria-live="polite"` region.
- **Cards:** CSS subgrid, so the name, intro, "May fit" and "Worth weighing" rows line up across all four cards.
- **Check:** at 1280 × 800, the goal buttons and all four cards fit on screen together.
- **Reusable pattern:** "Goal chips that highlight cards".

### V2 · At a glance

- **Desktop:** a real `<table>` with sticky column headers. Level rows: a 3-segment bar (16 × 5px segments, Deep Sky filled, Hairline empty) and an uppercase level word, on one line above the cell text.
- **Phones (< 640px):** row groups. Each row label becomes a small heading, then three lines: type name in a 112px column, level and text stacked beside it. No sideways scrolling.
- **A11y:** the bar is `aria-hidden`; the level word and text are read in order ("Low: Lowest to start").
- **Motion:** segments fill one by one when the table scrolls into view; none under reduced motion.
- **Reusable pattern:** "Level comparison table".

---

## Photo briefs

Same style as the homepage set: natural light, unposed, Pacific Northwest setting where possible. Add slots to `photoSlots` in `content.ts`.

| Slot | Brief (also the placeholder caption) | Fallback until shot |
|---|---|---|
| `lifeHero` | A parent and young child on the Lake Washington shoreline or a Bellevue park in late-afternoon light, seen from a little distance | `/images/family-beach-shoreline.jpg` (already used on the homepage Life Insurance card) |

Alt text (EN / 中文):
- `lifeHero`: Parent and child walking along the shoreline at Lake Washington / 父母与孩子沿华盛顿湖畔散步

---

## Suggested page order (as built)

| # | Section | Ground |
|---|---|---|
| 1 | Hero (§2) | photo |
| 2 | The basics + checklist (§3) | Cloud |
| 3 | Coverage types: goal filter + four cards (§4) | Cloud |
| 4 | At a glance (§5) | White |
| 5 | Riders (§6) | Cloud |
| 6 | How we work + coverage amount + applying (§7) | White |
| 7 | Advanced planning (§8, `#business`) | Pale Sky |
| 8 | FAQ, ten accordions (§9) | Cloud |
| 9 | Where it fits (§10) | White |
| 10 | Other services (homepage product cards: Health, Annuities) | Cloud |
| 11 | Closing CTA (§11) | White |
| 12 | Disclosures (§12), then the site footer | Cloud |

---

## What we didn't use, and why

The Global Sagacity guides are sales brochures; this page is an educational service page with compliance review ahead of it. So:

| From the GSC material | Why it's out (or softened) |
|---|---|
| Absolute claims: "no market volatility risk whatsoever", "completely shielding against crashes", "never outlive your money", "optimal", "the most reliable" | Can't be guaranteed and invite compliance trouble. Replaced with qualified wording ("the guaranteed cash value doesn't depend on the market"). |
| "Tax-free" used without qualifiers (loans, withdrawals, "triple tax protection") | Depends on policy design, MEC status and the policy staying in force. Kept as "generally" with a tax-professional referral, plus a MEC note. |
| Historical index returns, cap ranges by market, age-based premium differences | Specific performance and pricing figures (and illegible in the PDFs anyway). The project rule is no invented or unverified figures. |
| Cash value not counting on the FAFSA | Financial aid rules change and depend on the family. Too risky as a marketing line. |
| "U.S. IUL vs. other Asian markets" comparison | A cross-border sales angle that needs specialist review; not a fit for a general service page. Could become a reviewed Insurance & You guide. |
| Creditor protection of cash value | Varies widely by state and creditor type; legal advice. |
| Cross-border tax architecture, offshore entities, family office model (Premium Services) | Too specialised for a service page. Reduced to the CPA/attorney coordination line and the business band. |
| "Thousands of families", "leading carriers", "top-tier underwriting terms" | Unverified claims about the firm. Belong on About only if confirmed. |
| Annuity product detail (MYGA, SPIA, FIA, GLWB) | Belongs on `/services/annuities/`. This page only links there (V7). Good source material for the Annuities content pack. |

## Saved for Insurance & You

Good material from the PDFs that's too deep for a service page but suits the planned guides (doc 06). The first one already has its own pack and working charts: `insurance-and-you-how-cash-value-grows.md`.
- **How whole life dividends work**: participating policies, the four dividend options in depth, paid-up additions.
- **How IUL crediting works**: cap, participation rate, spread, floor, index choices, fixed account, with worked examples once compliance has reviewed them.
- **Reading a policy illustration**: guaranteed vs. non-guaranteed columns, the MEC limit, lapse risk.
- **Life insurance for business owners**: key person, buy-sell, executive benefits.
- **Using life insurance in estate planning**: ILITs, survivorship, probate, working with an attorney.
- **Glossary** entries: cost of insurance, cash surrender value, paid-up additions, participation rate, spread, MEC, no-lapse guarantee.

---

## Open questions

Decided 2026-11-11: (a) 永久寿险 for "permanent", homepage labels updated; (b) the hypothetical crediting examples are dropped; (c) **whatever Global Sagacity offers, Asset One offers**. That settles carrier comparison across several insurers, CPA/attorney coordination, and everything in §9 (key person, buy-sell, executive benefits, trust-owned policies, premium financing). Two items GSC's materials don't cover were changed rather than assumed: guaranteed universal life and final expense were removed, and "every year" reviews became "regularly".

Still open:

1. **Spoken languages:** Mandarin, Cantonese or both? The process step currently says "in English or 中文".
2. **Meetings:** in person at the Bellevue office, by phone and by video, all available?
3. **Compensation:** commission only, or are there planning fees? FAQ Q8 assumes commission only.
4. **Licence number** for the disclosure (same open item as `contact.license`).
5. **Compliance review:** who signs off on the disclosures and the IUL wording? Any carrier marketing rules to follow?
6. **Asset One Wealth Management:** should this page mention coordinating with the sibling firm (e.g. in §8 or §10), and does that need its own affiliation disclosure?
7. **Carrier names:** can the site name the carriers Asset One is appointed with? A logo strip would help trust.
