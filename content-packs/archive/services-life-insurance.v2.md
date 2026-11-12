# Content pack: Life Insurance

| | |
|---|---|
| **Route** | `/services/life-insurance/` (EN) · `/zh/services/life-insurance/` (中文) |
| **Status** | Draft v2.1, 2026-11-11. Built at `src/pages/services/life-insurance.astro` (copy lives in `src/i18n/life-insurance.ts`). Revised using the Global Sagacity product guides (Whole Life, IUL, Product Overview, Profile, Premium Services). English ready for client review; Chinese is a draft translation and needs a native review |
| **Voice** | Same as the homepage: plain language, calm, no pressure. "May fit" and "can help", never "best" or "guaranteed" without a qualifier |
| **Terminology** | Matches `src/i18n/content.ts`: 定期寿险, 终身寿险, 指数型万能寿险, 第二身故寿险, 保险公司, 现金价值. **Since v2:** 永久寿险 for "permanent" (approved 2026-11-11; homepage labels updated to match) |
| **v1** | Kept at `content-packs/archive/services-life-insurance.v1.md` |

Items marked **[CONFIRM]** still need an answer from Asset One before the copy goes live (all collected in [Open questions](#open-questions)).
Section keys (e.g. `hero.title`) are suggested names for a `lifeInsurance` object in `content.ts`.
Visuals are labelled **V0–V7** and specified in [Visual specs](#visual-specs).

---

## What changed in v2

**Added from the Global Sagacity material (paraphrased, not copied):**
- A **goal filter** on the coverage cards, so visitors start from what they want the policy to do (the GSC "Ideal for" lists, reorganised by goal).
- A new section, **How the cash value grows**, with whole life and IUL as two tabs: the three whole life guarantees, dividends and their four uses, how IUL premiums flow, caps, floors, participation rates, spreads, and level vs. increasing death benefit.
- A new compact section, **For business owners and larger estates** (key person, buy-sell, executive benefits, trust-owned policies, premium financing), drawn from the Premium Services deck and the whole life use cases.
- **Working with your CPA and attorney** (GSC Profile) in the process steps.
- New riders (no-lapse guarantee), three new FAQs (IUL vs. investing, policies for children, MECs folded into the cash value answer) and matching disclosures.
- **Eight visuals** (V0–V7): a goal filter, a coverage timeline, a dot-meter comparison, three "how it grows" schematics, a death benefit diagram and a life insurance vs. annuity explainer.

**Simplified:**
- The "Applying" section is now a "What to expect" expander inside step 4 of How we work (one section fewer).
- The at-a-glance table now compares **Term · Whole life · IUL** (the comparison visitors actually make), with dot meters instead of paragraphs.

**Deliberately left out:** see [What we didn't use, and why](#what-we-didnt-use-and-why).

### How the page stays thorough without overwhelming

Every section belongs to one of three depths. A visitor can stop at any depth and still leave with a correct picture.

| Depth | What the visitor gets | Sections |
|---|---|---|
| **1 · Scan** (≈ 60 seconds) | What life insurance is for, the four types in one line each, how long each lasts | Hero, Basics, Coverage types + V1 timeline |
| **2 · Compare** | The trade-offs in one table, and which type fits which goal | Goal filter, V2 at-a-glance |
| **3 · Go deeper** (opt-in) | How cash value actually grows, crediting terms, dividend options | How the cash value grows (tabs + "Go deeper" expanders), FAQ accordions |

Rules that keep it calm: one idea per card; no more than three key points per tab; definitions and examples live inside expanders (closed by default); every visual has a one-line takeaway above it so the picture is optional, not required. Anything deeper than depth 3 goes to **Insurance & You** guides (see [Saved for Insurance & You](#saved-for-insurance--you)).

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

## 3. The basics · depth 1

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

## 4. Coverage types (anchor `#types`) · depth 1–2

**`types.eyebrow`**
- EN: Coverage types
- 中文: 保障类型

**`types.title`**
- EN: Term and permanent, side by side
- 中文: 定期与永久，并排比较

**`types.intro`**
- EN: There are two broad families. Term covers you for a set number of years. Permanent is designed to last your whole life and builds cash value. Choose a goal to see which types are usually worth comparing, or read all four.
- 中文: 寿险大致分为两类。定期寿险在约定年限内提供保障；永久寿险旨在保障一生，并会累积现金价值。选择一个目标，看看通常值得比较哪几种；也可以四种都看看。

**`types.labels`**
- EN: `mayFit: 'May fit'`, `weigh: 'Worth weighing'`, `deeper: 'How it grows'`
- 中文: `mayFit: '可能适合'`, `weigh: '需要权衡'`, `deeper: '如何增长'`

### 4.0 Goal filter (V0, interactive) · `types.goals`

Chip row above the cards. Selecting a goal highlights the matching cards, softly dims the rest and shows the goal's note in one line under the chips. "All four" is selected by default. Spec in [V0](#v0-goal-filter).

**`types.goalsLabel`**
- EN: What should the policy do?
- 中文: 您希望保单发挥什么作用？

**`types.goalsAll`**
- EN: All four
- 中文: 全部四种

| key | EN chip | 中文 chip | Highlights | EN note | 中文 note |
|---|---|---|---|---|---|
| `income` | Protect my family's income | 守护家庭收入 | term | Term usually gives the most coverage for the premium during the years others rely on you. Some families pair it with a smaller permanent policy. | 在家人依靠您的那些年里，定期寿险通常能以同样的保费换来最高的保额。有些家庭会再搭配一份保额较小的永久寿险。 |
| `certain` | Lifelong coverage, predictable costs | 终身保障，费用可预期 | whole | Whole life sets the premium, a minimum cash value and the death benefit in the policy from the start. | 终身寿险从一开始就在保单中约定保费、最低现金价值和身故保险金。 |
| `flex` | Lifelong coverage with room to grow | 终身保障，兼顾增长 | iul | Indexed universal life trades some certainty for flexibility and growth potential, and needs regular reviews. | 指数型万能寿险以部分确定性换取灵活性和增长潜力，需要定期检视。 |
| `legacy` | Leave an inheritance | 留下传承 | whole, iul, survivorship | Couples planning an estate often compare one survivorship policy with a permanent policy on each person. | 规划遗产的夫妻常会比较：一份第二身故寿险，还是两人各一份永久寿险。 |
| `business` | Protect my business | 保障我的企业 | term, whole, iul | Key person and buy-sell plans can use term or permanent coverage. See [business owners](#business). | 关键人保险和股权买卖协议可以使用定期或永久保障。详见[企业主](#business)部分。 |
| `child` | A head start for a child or grandchild | 为子女或孙辈打基础 | whole, iul | A policy bought young is priced on a young age, and its cash value has decades to build. Worth comparing with a 529 plan. | 年幼时投保，保费按年轻的年龄计算，现金价值也有几十年的时间累积。值得与529教育储蓄计划一起比较。 |

### 4.1 Term life · 定期寿险 (`id: term`)

**summary**
- EN: Coverage for a set number of years, often 10, 20 or 30. If you pass away during the term, your beneficiaries receive the death benefit. If you outlive it, the coverage ends.
- 中文: 在约定年限内提供保障，常见为10年、20年或30年。若您在保障期内身故，受益人将获得身故保险金；若期满时您仍健在，保障即告结束。

**mayFit**
- EN: Covering the years your family relies on your income most, such as while children are young or the mortgage is outstanding.
- 中文: 覆盖家人最依赖您收入的那些年，例如孩子年幼或房贷尚未还清期间。

**weigh**
- EN: Usually the lowest premium for the most coverage, with no cash value. The premium stays level for the term but typically rises steeply if you renew after it ends, so many people choose a policy that can be converted to permanent coverage.
- 中文: 通常以最低的保费获得最高的保额，但没有现金价值。保障期内保费固定，但期满后续保时通常会大幅上涨，因此许多人会选择可转换为永久保障的保单。

### 4.2 Whole life · 终身寿险 (`id: whole`)

**summary**
- EN: Permanent coverage built on three guarantees: a premium that never goes up, cash value that grows on a schedule written into the policy, and a death benefit that stays in place as long as premiums are paid. Some policies may also pay dividends, which are not guaranteed.
- 中文: 以三项保证为基础的永久保障：保费永不上涨，现金价值按保单写明的时间表增长，只要按时缴费，身故保险金始终有效。部分保单还可能派发红利，但红利不保证。

**mayFit**
- EN: People who want lifelong coverage and predictable costs, and value certainty over flexibility.
- 中文: 希望获得终身保障和可预期费用、更看重确定性而非灵活性的人。

**weigh**
- EN: Premiums are much higher than term for the same death benefit. Cash value builds slowly in the early years, and surrendering early can mean getting back less than you paid.
- 中文: 相同保额下，保费远高于定期寿险。早期现金价值累积较慢，提前退保可能拿回的钱少于已缴保费。

**deeper** → `#how-it-grows` (opens the Whole life tab)

### 4.3 Indexed universal life · 指数型万能寿险 (`id: iul`)

**summary**
- EN: Permanent coverage with flexible premiums. Cash value earns interest linked to a market index such as the S&P 500, up to a cap, with a floor that protects against index losses. Your money is not invested in the market directly.
- 中文: 永久保障，保费灵活。现金价值的利息与标普500等市场指数挂钩，设有收益上限，并有保底机制防范指数下跌带来的损失。您的资金并不直接投资于股市。

**mayFit**
- EN: People who want lifelong coverage with some growth potential, and are comfortable reviewing the policy every year.
- 中文: 希望获得终身保障并兼顾一定增长潜力、也愿意每年检视保单的人。

**weigh**
- EN: Caps and rates can change, and charges still apply in years with no interest credited. Illustrations are projections, not promises. Underfunding or large loans can cause a policy to lapse, so it needs ongoing attention.
- 中文: 收益上限和各项费率可能调整；即使某年没有计入利息，相关费用仍会扣除。保单演示只是预测，并非承诺。保费不足或贷款过多可能导致保单失效，因此需要持续关注。

**deeper** → `#how-it-grows` (opens the IUL tab)

### 4.4 Survivorship life · 第二身故寿险 (`id: survivorship`)

**summary**
- EN: Permanent coverage on two people, usually spouses, that pays out after the second person passes away.
- 中文: 为两个人（通常是夫妻）提供的永久保障，在第二位被保险人身故后赔付。

**mayFit**
- EN: Estate and legacy planning, such as leaving an inheritance to children or a charitable gift, coordinated with your estate attorney or CPA.
- 中文: 遗产与传承规划，例如为子女留下遗产或进行慈善捐赠，并与您的遗产律师或会计师协同安排。

**weigh**
- EN: It doesn't provide money to the surviving spouse. Premiums are often lower than for two separate permanent policies.
- 中文: 在世的配偶无法从中获得赔付。保费通常低于分别购买两份永久寿险。

### 4.5 How long each one lasts (V1) · `types.timeline`

Sits directly under the four cards. Spec in [V1](#v1-coverage-timeline).

**`types.timeline.title`**
- EN: How long each one lasts
- 中文: 各类保障的期限

**`types.timeline.takeaway`** (one line above the visual)
- EN: Term covers the busy middle years. Permanent coverage is designed to last for life.
- 中文: 定期寿险覆盖责任最重的中间那些年；永久寿险旨在保障一生。

**`types.timeline.milestones`** (axis labels, left to right; no ages)

| EN | 中文 |
|---|---|
| Today | 现在 |
| Children grown, mortgage paid | 子女成年、房贷还清 |
| Retirement | 退休 |
| Later life | 晚年 |

**`types.timeline.lanes`**

| Lane | EN label | EN annotation | 中文标签 | 中文注释 |
|---|---|---|---|---|
| term | Term | Ends after the term. Can often convert to permanent before it does. | 定期寿险 | 期满即终止；在此之前通常可转换为永久保障。 |
| whole | Whole life | For life, as long as premiums are paid. | 终身寿险 | 只要按时缴费，保障终身。 |
| iul | Indexed universal life | For life, if the policy stays funded enough. | 指数型万能寿险 | 只要保单资金充足，保障终身。 |
| survivorship | Survivorship | Two lives, one policy. Pays after the second death. | 第二身故寿险 | 两人一份保单，第二位被保险人身故后赔付。 |

~~`types.note`~~ Removed in v2.1: guaranteed universal life and final expense aren't in the Global Sagacity line-up, and the "Protect my business" goal already links to §9.

---

## 5. At a glance (V2) · depth 2

Term, whole life and IUL only: they're the comparison most people are actually making. Survivorship gets a footnote. Spec in [V2](#v2-at-a-glance-meters).

**`compare.title`**
- EN: At a glance
- 中文: 一览对比

**`compare.takeaway`**
- EN: More certainty usually costs more. More flexibility usually needs more attention.
- 中文: 确定性越高，通常保费越高；灵活性越高，通常越需要用心打理。

**`compare.caption`** (visually hidden table caption)
- EN: Comparison of term, whole life and indexed universal life insurance
- 中文: 定期寿险、终身寿险与指数型万能寿险对比

**`compare.legend`**
- EN: Dots show general tendencies compared with the other two. Individual policies vary.
- 中文: 圆点表示与另外两种相比的大致倾向，具体保单可能不同。

Meter rows use a 0–3 scale (●●● = most). Every meter also carries its text label, which is what screen readers announce.

| Row · 项目 | Term · 定期寿险 | Whole life · 终身寿险 | IUL · 指数型万能寿险 |
|---|---|---|---|
| How long it lasts · 保障期限 *(text)* | A set period, often 10–30 years · 约定期限，常见10至30年 | For life, as long as premiums are paid · 终身，只要按时缴费 | For life, if the policy stays funded enough · 终身，只要保单资金充足 |
| Premium · 保费 *(meter)* | ●○○ Lowest to start · 起步最低 | ●●● Highest, and fixed for life · 最高，且终身固定 | ●●○ Flexible, within limits · 可在限额内灵活调整 |
| Cash value · 现金价值 *(text)* | None · 无 | Grows on a guaranteed schedule, plus possible dividends · 按保证的时间表增长，另有可能的红利 | Credited based on an index, within a cap and a floor · 依据指数计入利息，设有上限与保底 |
| Predictability · 可预期性 *(meter)* | ●●● High during the term · 保障期内很高 | ●●● High · 很高 | ●○○ Varies with index results and charges · 随指数表现和费用变化 |
| Growth potential · 增长潜力 *(meter)* | ○○○ None · 无 | ●○○ Steady, more modest · 稳定，幅度较小 | ●●○ Higher, limited by a cap · 较高，但受上限限制 |
| Flexibility · 灵活性 *(meter)* | ●○○ Can often convert · 通常可转换 | ●○○ Set premiums · 保费固定 | ●●● Adjust premiums and death benefit · 可调整保费和保额 |
| Attention needed · 需要打理的程度 *(meter)* | ●○○ Low · 低 | ●○○ Low · 低 | ●●● Review every year · 需每年检视 |
| Often used for · 常见用途 *(text)* | Income replacement, the mortgage, young families · 替代收入、房贷、年轻家庭 | Certainty, legacy, business planning · 确定性、传承、企业规划 | Lifelong coverage with growth potential, extra retirement flexibility · 兼顾增长潜力的终身保障、更灵活的退休资金 |

**`compare.footnote`**
- EN: Survivorship life is a permanent policy, built on whole life or universal life, that covers two people.
- 中文: 第二身故寿险属于永久寿险，以终身寿险或万能寿险为基础，同时为两个人提供保障。

---

## 6. How the cash value grows (anchor `#how-it-grows`) · depth 3

Two tabs. Each tab = a one-sentence lead, one or two visuals, three key points, and a closed "Go deeper" expander. Deep links from the cards open the right tab.

**`grows.eyebrow`**
- EN: Inside a permanent policy
- 中文: 永久寿险的内部运作

**`grows.title`**
- EN: How the cash value grows
- 中文: 现金价值如何增长

**`grows.intro`**
- EN: Whole life and indexed universal life both build cash value, in different ways. Here's the short version, with more detail if you want it.
- 中文: 终身寿险和指数型万能寿险都会累积现金价值，但方式不同。以下是简要说明，想了解更多可以展开细节。

**`grows.tabs`**
- EN: `['Whole life', 'Indexed universal life']`
- 中文: `['终身寿险', '指数型万能寿险']`

**`grows.deeperLabel`**
- EN: Go deeper
- 中文: 了解更多细节

### 6.1 Tab: Whole life

**`grows.whole.lead`**
- EN: Whole life is built for certainty. Your premium, a minimum cash value and the death benefit are all set out in the policy from day one.
- 中文: 终身寿险以确定性为核心。保费、最低现金价值和身故保险金，从第一天起就写在保单里。

**Visual V3:** Premiums paid vs. cash value over time. Spec in [V3](#v3-whole-life-value-over-time).

**`grows.whole.visualTakeaway`**
- EN: A slow start, then a steady build. Whole life rewards keeping the policy for the long term.
- 中文: 起步慢，之后稳步累积。终身寿险更适合长期持有。

**`grows.whole.points`**

| EN title | EN body | 中文标题 | 中文正文 |
|---|---|---|---|
| A slow start, then a steady build | In the early years most of each premium pays for the coverage and the insurer's costs, so cash value grows slowly. It builds more noticeably the longer you keep the policy. | 起步慢，稳步累积 | 在最初几年，每笔保费的大部分用于支付保障成本和保险公司的费用，因此现金价值增长较慢。持有时间越长，累积越明显。 |
| Market swings don't touch the guarantee | The guaranteed cash value doesn't depend on the stock market, so a downturn doesn't reduce it. | 市场波动不影响保证部分 | 保证现金价值与股市无关，市场下跌不会使其减少。 |
| Dividends are a possible extra | Participating policies may pay dividends when the insurer's results beat its assumptions. They aren't guaranteed, but when they're paid, you choose how to use them. | 红利是可能的额外收益 | 分红型保单在保险公司经营结果优于预期时可能派发红利。红利不保证，但一旦派发，用途由您选择。 |

**`grows.whole.deeper`** (closed by default)

*Four ways to use dividends* · `dividendOptions`

| EN | 中文 |
|---|---|
| **Buy more coverage.** Dividends buy small amounts of fully paid-up insurance, called paid-up additions, which add to both the death benefit and the cash value. | **增加保障。** 用红利购买少量已缴清的保险（称为"增额缴清保险"），同时增加身故保险金和现金价值。 |
| **Lower your premium.** Dividends pay part of this year's premium. | **抵减保费。** 用红利支付当年的部分保费。 |
| **Take cash.** Receive the dividend as a payment. | **领取现金。** 以现金形式领取红利。 |
| **Leave it to earn interest.** The insurer holds the dividend and credits interest on it. | **留存生息。** 红利留在保险公司，按其公布的利率计息。 |

*More details* · `wholeNotes`

| EN | 中文 |
|---|---|
| **Participating or not.** Participating policies may pay dividends. Non-participating policies don't, and often cost a little less. | **分红型与不分红型。** 分红型保单可能派发红利；不分红型保单没有红利，保费通常略低。 |
| **Starting younger.** The premium is set by your age and health when the policy is issued, so starting earlier usually means a lower premium for life. | **越早投保越有利。** 保费按投保时的年龄和健康状况确定，因此越早投保，终身保费通常越低。 |
| **Paid directly to your family.** The death benefit is generally paid straight to the beneficiaries you name, without going through probate. | **直接赔付给家人。** 身故保险金一般直接支付给您指定的受益人，无需经过遗嘱认证程序。 |
| **Built to last.** Guaranteed cash value is designed to reach the death benefit at a late age set in the policy. | **为长期而设计。** 保证现金价值的设计目标，是在保单约定的高龄时达到身故保险金的金额。 |

### 6.2 Tab: Indexed universal life

**`grows.iul.lead`**
- EN: Indexed universal life links your cash value to a market index, within limits that trim the biggest gains and screen out index losses. You can adjust premiums and the death benefit as life changes.
- 中文: 指数型万能寿险把现金价值与市场指数挂钩，并设有限制：削去最高的涨幅，也挡住指数的亏损。人生变化时，您还可以调整保费和保额。

**Visual V4:** Where each premium goes. Spec in [V4](#v4-where-each-iul-premium-goes).

**`grows.iul.flow`** (four steps)

| # | EN | 中文 |
|---|---|---|
| 1 | You pay a premium | 您缴纳保费 |
| 2 | Monthly charges come out: the cost of insurance and policy fees | 每月扣除费用：保险成本和保单管理费 |
| 3 | The rest goes to your cash value, split between index options and a fixed account | 其余部分进入现金价值，分配到各指数账户和固定账户 |
| 4 | Each year, interest is credited based on the index, between the floor and the cap | 每年依据指数表现计入利息，介于保底与上限之间 |

**Visual V5:** Cap and floor, year by year. Spec in [V5](#v5-cap-and-floor-year-by-year).

**`grows.iul.visualTakeaway`**
- EN: You give up the very best years in exchange for skipping the worst ones.
- 中文: 放弃最好年份的部分涨幅，换来避开最差年份的亏损。

**`grows.iul.points`**

| EN title | EN body | 中文标题 | 中文正文 |
|---|---|---|---|
| A ceiling and a floor | In a strong year, interest is credited up to the cap. In a down year, the floor (commonly 0%) means no index loss is credited. | 有上限，也有保底 | 指数表现强劲时，利息最多计入到上限；指数下跌时，保底机制（通常为0%）确保不会计入指数亏损。 |
| Charges come out every month | The cost of insurance rises with age and is deducted even in years with no interest credited. That's why how a policy is funded matters so much. | 费用每月扣除 | 保险成本随年龄上升，即使某年没有计入利息也照常扣除。所以保单的资金安排非常重要。 |
| It needs regular check-ups | Caps and rates can change. We review the policy with you regularly so it stays on track. | 需要定期检视 | 收益上限和费率可能调整。我们会定期与您一起检视保单，确保它按计划运行。 |

**`grows.iul.deeper`** (closed by default)

*Crediting terms, in plain language* · `creditingTerms`

| Term · 术语 | EN meaning | 中文说明 |
|---|---|---|
| Cap · 上限 | The most interest that can be credited in a year | 一年内可计入利息的最高比例 |
| Participation rate · 参与率 | The share of the index's gain that counts | 指数涨幅中可计入的比例 |
| Spread · 差额 | A set amount subtracted from the index's gain | 从指数涨幅中先扣除的固定比例 |
| Floor · 保底 | The least that can be credited in a year, commonly 0% | 一年内计入利息的最低比例，通常为0% |

*More details* · `iulNotes`

| EN | 中文 |
|---|---|
| **Index choices.** Many policies let you split cash value across options such as the S&P 500, the Nasdaq-100, a blend of indexes, or a fixed account that earns a declared rate. | **指数选择。** 许多保单允许把现金价值分配到不同选项，例如标普500、纳斯达克100、多指数组合，或按公布利率计息的固定账户。 |
| **Level or increasing death benefit** (V6). A level death benefit stays the same as cash value grows, which keeps costs lower. An increasing death benefit pays the face amount plus the cash value, for more coverage at a higher cost. | **保额固定或递增**（V6）。固定保额不随现金价值增长而改变，成本较低；递增保额赔付基本保额加现金价值，保障更高，成本也更高。 |
| **Lapse protection.** Some policies offer a no-lapse guarantee rider that keeps coverage in force for a period even if cash value runs low, as long as its conditions are met. | **防失效保障。** 部分保单提供不失效保证附加条款，只要满足条件，即使现金价值不足，保障也能在一定期限内持续有效。 |
| **Funding limits.** Paying in too much too quickly can turn a policy into a modified endowment contract (MEC), which changes how loans and withdrawals are taxed. We plan funding to avoid this when that's your goal. | **缴费上限。** 短期内缴入过多保费，可能使保单成为"修正型储蓄合同"（MEC），改变贷款和提取的税务处理。如果您希望避免这种情况，我们会据此规划缴费。 |

---

## 7. How much coverage · depth 2

**`amount.eyebrow`**
- EN: Coverage amount
- 中文: 保额

**`amount.title`**
- EN: How much coverage is enough?
- 中文: 保额多少才够？

**`amount.intro`**
- EN: There's no single right number. We work it out with you from a few questions.
- 中文: 没有放之四海皆准的数字。我们会通过几个问题和您一起算出来。

**`amount.questions`**

| EN | 中文 |
|---|---|
| How many years would your family need your income, and how much of it? | 家人需要您的收入多少年？需要多少？ |
| What would need paying off: the mortgage, loans, credit cards? | 有哪些需要还清：房贷、贷款、信用卡？ |
| What future costs do you want covered, such as college or care for a parent? | 您希望覆盖哪些未来开支，例如大学学费或照顾父母？ |
| What savings, investments and existing coverage do you already have? | 您已有多少储蓄、投资和现有保障？ |
| What premium fits comfortably now, and if your income changes? | 现在能轻松负担多少保费？收入变化时又如何？ |

**`amount.outro`**
- EN: We'll show you a few coverage amounts and what each would cost, then you decide.
- 中文: 我们会列出几种保额及对应的保费，由您来决定。

**Photo** `lifeProcess` alongside.

---

## 8. Optional riders · depth 2

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

## 9. For business owners and larger estates (anchor `#business`) · depth 2

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

## 10. How we work · depth 1

**`process.eyebrow`**
- EN: How we work
- 中文: 我们的流程

**`process.title`**
- EN: What working with us looks like
- 中文: 与我们合作的方式

**`process.intro`**
- EN: Clear steps, at your pace. You're welcome to pause at any point.
- 中文: 步骤清晰，按您的节奏进行。您随时可以暂停。

| # | EN title | EN body | 中文标题 | 中文正文 |
|---|---|---|---|---|
| 1 | A conversation | A relaxed first meeting in Bellevue, by phone or by video, in English or 中文. We learn about your family, goals and budget. **[CONFIRM]** spoken languages, meeting options | 初次交流 | 在贝尔维尤面谈，或通过电话、视频，中英文皆可。我们会了解您的家庭、目标和预算。 |
| 2 | Needs review | We estimate how much coverage may fit and which types are worth comparing, and bring in your CPA or attorney when it helps. | 需求分析 | 我们会估算可能适合的保额，以及值得比较的保障类型；必要时也会与您的会计师或律师沟通。 |
| 3 | Compare carriers | As an independent agency, we compare quotes and policy features from several insurers and explain the differences side by side. | 比较保险公司 | 作为独立保险代理机构，我们会比较多家保险公司的报价和保单条款，并逐项讲解差异。 |
| 4 | Apply and underwrite | We help you complete the application, prepare for underwriting and keep you updated until the insurer decides. | 投保与核保 | 我们协助您填写投保申请、准备核保，并随时告知进展，直到保险公司做出决定。 |
| 5 | Review over time | We check in as life changes, such as a new child, a new home or retirement, and review permanent policies regularly. | 定期检视 | 在您迎来新生儿、购置新居或退休等人生变化时，我们会主动联系，并定期检视永久保单。 |

**Step 4 expander** · `process.apply` (closed by default; replaces v1's separate "Applying" section)

**`process.apply.label`**
- EN: What to expect when you apply
- 中文: 投保时会经历什么

| EN | 中文 |
|---|---|
| The application asks about your health, family medical history, occupation, travel and lifestyle. | 投保申请会询问您的健康状况、家族病史、职业、出行和生活习惯。 |
| Depending on your age and the coverage amount, the insurer may ask for a short medical exam, lab work or records from your doctor. Some policies can be approved without an exam. | 视年龄和保额而定，保险公司可能要求简短体检、化验或调取病历。有些保单无需体检即可批准。 |
| Underwriting can take anywhere from a few days to several weeks. Your premium depends on the health rating the insurer assigns. | 核保可能需要几天到数周不等。保费取决于保险公司评定的健康等级。 |
| Coverage begins once the policy is approved and issued and the first premium is paid. | 保单获批并签发、且首期保费缴清后，保障即开始生效。 |

---

## 11. FAQ · depth 3

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

## 12. Where it fits (cross-links) · depth 1

### 12.1 Life insurance or an annuity? (new, visual V7)

A two-sided band that answers a question clients mix up often, and sends annuity visitors to the right page. Spec in [V7](#v7-two-risks).

**`fits.risks.title`**
- EN: Life insurance or an annuity?
- 中文: 寿险还是年金？

**`fits.risks.takeaway`**
- EN: They protect against opposite risks, and many plans use both.
- 中文: 两者防范的是相反的风险，许多规划会同时使用。

| Side | EN heading | EN body | 中文标题 | 中文正文 |
|---|---|---|---|---|
| left | If life is shorter than planned | Life insurance pays the people you leave behind. | 如果人生比预想的短 | 寿险为您留下的家人提供一笔保障。 |
| right | If life is longer than planned | An annuity can turn savings into income for a set period or for life. | 如果人生比预想的长 | 年金可以把储蓄转化为在一定期限内或终身领取的收入。 |

**`fits.risks.link`** → `/services/annuities/`
- EN: Explore annuities
- 中文: 了解年金

### 12.2 Life stages and related services

**`fits.eyebrow`**
- EN: Your plan
- 中文: 您的规划

**`fits.title`**
- EN: Where life insurance fits
- 中文: 寿险在规划中的位置

**`fits.intro`**
- EN: Life insurance often plays a part in these life stages.
- 中文: 寿险常在以下人生阶段发挥作用。

Links go to the homepage life-stage selector (`/#main`, section `id="main"` in `LifeStages.astro`). Reuse the homepage stage names and body copy; link labels:

| Stage · 阶段 | Link label EN | Link label 中文 |
|---|---|---|
| Family Protection · 家庭保障 | See family protection | 了解家庭保障 |
| Education Funding · 教育金规划 | See education funding | 了解教育金规划 |
| Legacy Planning · 传承规划 | See legacy planning | 了解传承规划 |

**`related.title`** (other services; reuse the homepage product cards for Health Insurance and Annuities)
- EN: Other ways we can help
- 中文: 我们还能帮您

---

## 13. Closing call to action

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

## 14. Disclosures (page footnote)

**[CONFIRM]** with Asset One's compliance contact before launch.

- EN:
  1. Asset One Insurance is an insurance agency licensed in Washington State ([PLACEHOLDER] License no.). Policies are issued by the insurance companies we represent, not by Asset One Insurance. Coverage, features, riders and costs vary by insurer and state and are subject to underwriting approval. Guarantees are based on the claims-paying ability of the issuing insurer.
  2. Whole life dividends are not guaranteed and may change or not be paid.
  3. Indexed universal life insurance is not an investment in the stock market or in any index. Index-linked interest is subject to caps, participation rates, spreads and other limits, which may change. Policy charges are deducted regardless of credited interest. Policy illustrations and the charts on this page are hypothetical and not guaranteed.
  4. Policy loans and withdrawals reduce cash value and the death benefit, may cause the policy to lapse and may have tax consequences. A policy classified as a modified endowment contract (MEC) is taxed differently.
  5. Business, trust and premium-financing strategies involve legal, tax and financial risks and should be set up with your own attorney and tax professional.
  6. This page is general information, not tax, legal or investment advice. Please consult a qualified tax or legal professional about your situation.
- 中文:
  1. Asset One Insurance 是在华盛顿州持牌的保险代理机构（[PLACEHOLDER] 执照号码）。保单由我们代理的保险公司签发，而非由 Asset One Insurance 签发。保障范围、功能、附加条款和费用因保险公司和州而异，并须经核保批准。各项保证以签发保险公司的理赔能力为基础。
  2. 终身寿险的红利不保证，可能调整或不予派发。
  3. 指数型万能寿险并非对股市或任何指数的投资。指数挂钩利息受收益上限、参与率、差额及其他限制的约束，且可能调整。无论是否计入利息，保单费用均会扣除。保单演示及本页图示均为假设情形，并不保证。
  4. 保单贷款和提取会减少现金价值和身故保险金，可能导致保单失效，并可能产生税务影响。被认定为修正型储蓄合同（MEC）的保单，税务处理有所不同。
  5. 企业、信托及保费融资等安排涉及法律、税务和财务风险，应与您自己的律师和税务专业人士共同设立。
  6. 本页内容仅为一般信息，不构成税务、法律或投资建议。请就您的具体情况咨询合格的税务或法律专业人士。

---

## Visual specs

All visuals: drawn as inline SVG or HTML/CSS (no chart library, no images), using the site tokens (`--sky`, `--deep-sky`, `--slate`, `--hairline`, `--pale-sky`, `--ink`). Scarlet is not used in charts, so it stays reserved for the primary button. Each one has:
- a one-line **takeaway** in text above it (so the visual is never the only way to get the point);
- `role="img"` with an `aria-label` that states the takeaway, or a real `<table>` underneath for data visuals;
- a **reveal** that reuses the site's `data-reveal` (rise 16px + fade) plus, where noted, a single draw-in. `prefers-reduced-motion` shows the final state with no motion;
- **no numbers on axes.** These are schematics that explain mechanics, not projections. Caption: "Simplified illustration, not to scale." / "简化示意图，未按比例绘制。"

A rough preview of V0–V7 in the site's colours and fonts is in `content-packs/services-life-insurance-visuals.html` (open it in a browser). It's a sketch for discussion, not production code.

### V0 · Goal filter

- **Layout:** chip row under the section heading (wraps to two or three lines on mobile; never scrolls sideways). The note line sits under the chips in `--slate`, 1 line on desktop.
- **Behaviour:** `<button aria-pressed>` chips. Selecting one sets matching cards to full opacity with a 2px `--sky` top rule, and non-matching cards to 55% opacity (still readable and clickable, never hidden). The note updates in an `aria-live="polite"` region. Selecting the active chip again returns to "All four".
- **Motion:** 200ms opacity and border transition. None under reduced motion.
- **Reusable pattern:** "Goal chips that highlight cards". Any page with 3–6 options (health plans, annuity types) can use the same component with a different `goals` array.

### V1 · Coverage timeline

- **Layout:** four horizontal lanes over a shared axis with the four milestones. Lane bars are 10px rounded:
  - Term: solid `--sky` from "Today" to "Children grown", ending in a soft fade; a small dashed arrow curls from its end down to the whole life lane, labelled "Convert".
  - Whole life: solid `--deep-sky` across the full width, ending in an open circle ("for life").
  - IUL: same length as whole life but `--sky` with a 45° hatch on the last third, annotated "if funded enough".
  - Survivorship: two thin parallel lines (one per person) that merge into one; a small marker labelled "Pays here" at the merge.
- **Mobile:** lanes stack vertically as rows with the milestone axis shown once at the top in small caps; annotations sit under each bar rather than beside it.
- **Motion:** bars draw left to right (600ms, `--ease-out`, 80ms stagger) when the visual enters the viewport.
- **Reusable pattern:** "Lifespan lanes", for comparing how long anything lasts (policy terms, annuity payout periods).

### V2 · At-a-glance meters

- **Desktop:** a real `<table>` with three type columns and sticky column headers. Meter rows show three 8px dots (`--deep-sky` filled, `--hairline` empty) followed by the text label; text rows are plain text.
- **Mobile (< 640px):** the same table restyled as row groups: each row label becomes a small heading, followed by three lines ("Term ●○○ Lowest to start"). No horizontal scrolling.
- **A11y:** dots are `aria-hidden`; the text label is the content. `<caption>` is visually hidden.
- **Motion:** dots fill one by one (60ms apart) on reveal. None under reduced motion.
- **Reusable pattern:** "Dot-meter comparison table", which responds to mobile without a sideways scroll.

### V3 · Whole life: premiums paid vs. cash value over time

- **Chart:** schematic line chart, no axis numbers. X axis: "Early years · Middle years · Later years". Lines:
  - Total premiums paid: straight dashed `--slate` diagonal.
  - Guaranteed cash value: solid `--deep-sky` curve, starting well below the premiums line, bending upward, crossing it in the middle years.
  - With dividends (not guaranteed): a light `--pale-sky` band above the guaranteed curve, bordered with a dotted `--sky` line, crossing the premiums line a little earlier.
  - Death benefit: a horizontal `--ink` line near the top, labelled.
- **Annotations:** a small marker at the first crossing: "Where cash value passes what you've paid. When this happens varies by policy, and on guaranteed values alone it comes later." A bracket over the early years: "Surrendering here may return less than you paid."
- **Why this visual:** it shows the honest trade-off of whole life (slow start, long-term value) without a single projected number.
- **Motion:** lines draw in left to right over 900ms; the band fades in after.

### V4 · Where each IUL premium goes

- **Layout:** four connected steps (from `grows.iul.flow`). Desktop: horizontal row of four rounded boxes with thin arrows; step 2 has a small downward arrow leaving the flow, labelled "Monthly charges". Mobile: the same as a vertical stack.
- **Why:** it makes "charges come out every month, even in zero years" visible, the point most often missed.
- **Motion:** steps fade up in sequence (100ms stagger).

### V5 · Cap and floor, year by year

- **Chart:** schematic paired-bar chart of eight hypothetical years, no axis numbers. For each year: a thin `--hairline`-outlined bar for the index's change (some tall up, some small up, two or three down below the baseline) and a solid `--sky` bar for what's credited. A dashed `--deep-sky` line across the top labelled "Cap"; the baseline labelled "Floor".
  - Big up years: the credited bar stops at the cap line, with the cut-off part of the index bar visible above it.
  - Small up years: credited bar matches the index bar (participation 100% in the schematic).
  - Down years: the index bar dips below the baseline; the credited bar is zero, with a tiny "0" tick.
- **Caption:** "Hypothetical pattern, not real index data or a projection. Caps, floors and participation rates vary by policy and can change."
- **Interaction (optional):** tapping or hovering a year shows a one-line explanation ("A strong year: credited up to the cap"). Keyboard reachable via a list of year buttons under the chart.
- **Motion:** index bars grow first, then credited bars (staggered 60ms).
- **Reusable pattern:** "Cap-and-floor chart". The Annuities page can reuse it for fixed indexed annuities.

### V6 · Level vs. increasing death benefit (inside the IUL "Go deeper")

- **Layout:** two small stacked-column diagrams side by side, each showing three moments in time.
  - Level: the total column height stays the same; the `--deep-sky` cash value segment grows inside it while the `--pale-sky` "insurance" segment shrinks.
  - Increasing: the `--pale-sky` face-amount segment stays the same and the cash value stacks on top, so the column grows.
- **Labels:** "Level: total stays the same" / "Increasing: face amount plus cash value".
- Small (max 280px each); no motion needed.

### V7 · Two risks

- **Layout:** one horizontal line representing a lifetime, with "Today" in the middle. Left end labelled "Shorter than planned" with a shield-style mark and the life insurance copy; right end labelled "Longer than planned" with a steady-stream mark and the annuity copy. Mobile: the two halves stack, with the line turned vertical between them.
- **Motion:** the line draws outward from the centre in both directions (500ms).

---

## Photo briefs

Same style as the homepage set: natural light, unposed, Pacific Northwest setting where possible. Add slots to `photoSlots` in `content.ts`.

| Slot | Brief (also the placeholder caption) | Fallback until shot |
|---|---|---|
| `lifeHero` | A parent and young child on the Lake Washington shoreline or a Bellevue park in late-afternoon light, seen from a little distance | `/images/family-beach-shoreline.jpg` (already used on the homepage Life Insurance card) |
| `lifeProcess` | An advisor and a couple at a kitchen or office table, reviewing printed policy pages together | `/images/advisor-office-lounge.jpg` |

Alt text (EN / 中文):
- `lifeHero`: Parent and child walking along the shoreline at Lake Washington / 父母与孩子沿华盛顿湖畔散步
- `lifeProcess`: Advisor reviewing a policy with a couple at a table / 顾问与一对夫妇在桌前一起查看保单

---

## Suggested page order

| # | Section | Depth | Visual |
|---|---|---|---|
| 1 | Hero (§2) | 1 | photo |
| 2 | The basics + checklist (§3) | 1 | |
| 3 | Coverage types: goal filter, four cards, timeline (§4) | 1–2 | V0, V1 |
| 4 | At a glance (§5) | 2 | V2 |
| 5 | How the cash value grows, two tabs (§6) | 3 | V3–V6 |
| 6 | How much coverage (§7), with `lifeProcess` photo | 2 | photo |
| 7 | Riders (§8) | 2 | |
| 8 | Business owners and larger estates (§9) | 2 | |
| 9 | How we work, five steps + apply expander (§10) | 1 | |
| 10 | FAQ, ten accordions (§11) | 3 | |
| 11 | Life insurance or an annuity? + where it fits + other services (§12) | 1 | V7 |
| 12 | Closing CTA (§13) | | |
| 13 | Disclosures (§14), then the site footer | | |

Sections 3, 4, 6, 7, 8, 9, 10 and 11 have eyebrow + title + intro, so they can use `SectionHeading.astro` as is. Visible length is about the same as v1: the new depth-3 material is mostly inside tabs and expanders, and one v1 section (Applying) was folded into How we work.

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

Good material from the PDFs that's too deep for a service page but suits the planned guides (doc 06):
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
6. **Asset One Wealth Management:** should this page mention coordinating with the sibling firm (e.g. in §9 or §12), and does that need its own affiliation disclosure?
7. **Carrier names:** can the site name the carriers Asset One is appointed with? A logo strip would help trust.
