# Content pack: Annuities

| | |
|---|---|
| **Route** | `/services/annuities/` (EN) · `/zh/services/annuities/` (中文) |
| **Status** | Draft v1, 2026-11-12. Built at `src/pages/services/annuities.astro`; copy lives in `src/i18n/annuities.ts`. English ready for client review; Chinese is a draft translation and needs a native review |
| **Sources** | Annuity Product Guide (MYGA · SPIA · FIA), GSC Product Overview, GSC Profile; doc 05 draft copy. Decision 2026-11-11: whatever Global Sagacity offers, Asset One offers |
| **Voice** | Same as Life Insurance: plain, calm, no pressure. "May fit" and "can help"; "guaranteed" only with what backs it |
| **Terminology** | 多年期保证年金 (MYGA) · 即期年金 (SPIA) · 固定指数型年金 (FIA) · 终身收入附加条款 (lifetime income rider / GLWB) · 退保费用 (surrender charge) · 冷静期 (free look) · 1035免税交换. The homepage's shorter 固定年金 / 指数型年金 chips still read correctly |
| **Template** | Same sections and components as Life Insurance (`src/components/service/`), minus Advanced planning |

Items marked **[CONFIRM]** still need an answer from Asset One before the copy goes live (collected in [Open questions](#open-questions)).
Section keys (e.g. `hero.title`) match `src/i18n/annuities.ts`. Sections 1–12 below are generated from that file, so they always match what's built.

---

## Page depth

| Depth | Sections |
|---|---|
| **1 · Scan** | Hero, Basics, Annuity types |
| **2 · Compare** | At a glance, Features worth understanding, How we work |
| **3 · If it applies to you** | FAQ (closed accordions), Where it fits |

## Choices made in v1, and why

| Choice | Why |
|---|---|
| **Three types: MYGA, SPIA, FIA** | These are the three the Annuity Product Guide covers in depth. They map cleanly onto three jobs: steady growth, income now, growth now and income later |
| **Variable annuities left out** | GSC's overview and profile mention them, but they're securities: selling them needs a securities registration and a prospectus. Added back only if Asset One confirms (open question 1) |
| **No worked numbers** | Follows the 2026-11-11 decision. The guide's FIA + GLWB income example and its rate/cap examples are not used. The only figures are rules of law (age 59½, the 10% federal additional tax) and the guide's "often up to 10%" free withdrawal |
| **"Guaranteed" always qualified** | Every guarantee is tied to "the claims-paying ability of the insurer" in the disclosures; FAQ explains FDIC and guaranty associations plainly |
| **At a glance uses the Low / Medium / High bars** | Reuses the decision from 2026-11-12. "Access to your money" replaces the guide's "liquidity risk" wording |
| **Goal chips** | From the guide's "How do you choose" table: start income now → SPIA; set rate → MYGA; growth then income → FIA; outliving savings → SPIA or FIA; leave money to family → MYGA or FIA |

---

## 1. Page meta

**`meta.title`**
- EN: Annuities in Bellevue, WA · Asset One Insurance
- 中文: 年金 · 华盛顿州贝尔维尤 | Asset One Insurance

**`meta.description`**
- EN: Fixed, fixed indexed and immediate annuities, compared across carriers and explained in plain language. Retirement income planning in English and 中文.
- 中文: 多年期保证年金、固定指数型年金与即期年金，跨多家保险公司比较，用浅显的语言讲清楚。中英文退休收入规划服务。

---

## 2. Hero

**`hero.eyebrow`**
- EN: Services · Annuities
- 中文: 服务 · 年金

**`hero.title`** (array = line breaks)
- EN: `["Savings that become income you can plan around."]`
- 中文: `["让储蓄成为","可以规划的收入。"]`

**`hero.lead`**
- EN: Fixed, fixed indexed and immediate annuities, compared across carriers and explained in plain language, so part of your savings can work as steady retirement income.
- 中文: 多年期保证年金、固定指数型年金与即期年金，跨多家保险公司比较，用浅显的语言讲清楚，让您的一部分储蓄化为稳定的退休收入。

**`hero.primary`**
- EN: Talk with us
- 中文: 联系我们

**`hero.secondary`**
- EN: Compare annuity types
- 中文: 比较年金类型

---

## 3. The basics

**`basics.eyebrow`**
- EN: The basics
- 中文: 基础知识

**`basics.title`**
- EN: What an annuity is for
- 中文: 年金的作用

**`basics.body`**

| EN | 中文 |
|---|---|
| An annuity is a contract with an insurance company. You pay in a lump sum or over time, and the insurer agrees to grow that money, pay it back as income, or both, on the terms set in the contract. Many people use one to turn part of their savings into income that lasts as long as they do. | 年金是您与保险公司签订的一份合同。您一次性或分期存入资金，保险公司按照合同约定让这笔钱增值、以收入的形式返还给您，或两者兼有。许多人用年金把一部分储蓄转化为与寿命一样长久的收入。 |
| An annuity is an insurance contract, not a bank deposit. It suits money you won’t need for several years, and works best alongside Social Security, a 401(k) or IRA and other savings, not in place of them. | 年金是保险合同，不是银行存款。它适合放置几年内用不到的资金，最好与社会安全福利（Social Security）、401(k)或IRA以及其他储蓄搭配使用，而不是取而代之。 |

**`basics.checklistTitle`**
- EN: It may be worth a look if…
- 中文: 如果符合以下情况，不妨了解一下……

**`basics.checklist`**

| EN | 中文 |
|---|---|
| You’re nearing retirement, or already retired | 您即将退休，或已经退休 |
| You’d like part of your income to arrive on a schedule, like a pension | 您希望一部分收入像退休金一样按时到账 |
| You worry about outliving your savings | 您担心储蓄不够用一辈子 |
| You’ve maxed out your 401(k) or IRA and want more tax-deferred savings | 您的401(k)或IRA已存满，希望再多一个税收递延的储蓄渠道 |
| You want growth potential without putting that money directly in the stock market | 您希望获得增长潜力，但不想把这笔钱直接投入股市 |

---

## 4. Annuity types (anchor `#types`)

**`types.eyebrow`**
- EN: Annuity types
- 中文: 年金类型

**`types.title`**
- EN: Three ways to use an annuity
- 中文: 年金的三种用法

**`types.intro`**
- EN: Each one does a different job: grow savings at a set rate, start income now, or balance growth with income later. Choose a goal to see which are usually worth comparing.
- 中文: 每一种都有不同的作用：以固定利率增值、立即开始领取收入，或在增长与日后收入之间取得平衡。选择一个目标，看看通常值得比较哪几种。

**`types.labels.mayFit`**
- EN: May fit
- 中文: 可能适合

**`types.labels.weigh`**
- EN: Worth weighing
- 中文: 需要权衡

**`types.goalsLabel`**
- EN: What should the annuity do?
- 中文: 您希望年金发挥什么作用？

**`types.goalsAll`**
- EN: All three
- 中文: 全部三种

**`types.allNote`**
- EN: Choose a goal to see which types are usually worth comparing.
- 中文: 选择一个目标，看看通常值得比较哪几种。

**`types.goals`**

| # | Field | EN | 中文 |
|---|---|---|---|
| 1 | key | now | now |
| 1 | label | Start income now | 现在就开始领取收入 |
| 1 | highlights | `spia` | |
| 1 | note | An immediate annuity turns a lump sum into payments that usually begin within a year. | 即期年金把一笔款项转化为定期给付，通常在一年内开始领取。 |
| 2 | key | steady | steady |
| 2 | label | Grow savings at a set rate | 以固定利率增值 |
| 2 | highlights | `myga` | |
| 2 | note | A multi-year guaranteed annuity locks in a rate for a set term. It’s often compared with a CD, but it isn’t a bank deposit. | 多年期保证年金在约定期限内锁定利率，常被拿来与定期存单（CD）比较，但它并不是银行存款。 |
| 3 | key | later | later |
| 3 | label | Growth now, income later | 现在增值，日后领取 |
| 3 | highlights | `fia` | |
| 3 | note | A fixed indexed annuity can grow with an index, within limits, and can add a lifetime income rider for later. | 固定指数型年金可在一定限制内随指数增长，并可附加终身收入条款，供日后领取。 |
| 4 | key | longevity | longevity |
| 4 | label | Income I can’t outlive | 活多久，领多久 |
| 4 | highlights | `spia fia` | |
| 4 | note | Both can pay income for life: an immediate annuity starts now, an indexed annuity with an income rider starts when you choose. | 两者都可以提供终身收入：即期年金现在开始领取，附加收入条款的指数型年金则由您决定何时开始。 |
| 5 | key | legacy | legacy |
| 5 | label | Leave money to family | 为家人留下资产 |
| 5 | highlights | `myga fia` | |
| 5 | note | Before income starts, the remaining value usually passes to the beneficiaries you name. | 在开始领取收入之前，剩余价值通常会给付给您指定的受益人。 |

**`types.cards`**

| # | Field | EN | 中文 |
|---|---|---|---|
| 1 | id | myga | myga |
| 1 | name | Multi-year guaranteed (MYGA) | 多年期保证年金（MYGA） |
| 1 | summary | A fixed rate, locked in for a set term of several years. At the end you can renew, move to another annuity or take the money. | 在约定的数年期限内锁定固定利率。到期后可以续约、转入其他年金，或取出资金。 |
| 1 | mayFit | Conservative savers who won’t need the money before the term ends and want a predictable result. | 期满前用不到这笔钱、希望结果可预期的稳健型储蓄者。 |
| 1 | weigh | Surrender charges apply if you take out more than the free amount early, and the rate won’t rise if market rates do. | 提前取出超过免费额度的部分需支付退保费用；即使市场利率上升，合同利率也不会随之提高。 |
| 2 | id | spia | spia |
| 2 | name | Immediate annuity (SPIA) | 即期年金（SPIA） |
| 2 | summary | One lump sum in, and income starts right away, typically within a year. Payments can last for life or for a set period. | 一次性存入一笔款项，收入随即开始，通常在一年内领取。给付可以终身，也可以按约定期限。 |
| 2 | mayFit | Retirees who want pension-like income to cover everyday costs. | 希望拥有类似退休金的收入、用来支付日常开支的退休人士。 |
| 2 | weigh | You generally give up access to the lump sum in exchange for the income. Payments depend on your age, the payout option and rates when you buy. | 通常需要放弃对这笔本金的支配权来换取收入。给付金额取决于投保年龄、给付方式以及购买时的利率。 |
| 3 | id | fia | fia |
| 3 | name | Fixed indexed (FIA) | 固定指数型年金（FIA） |
| 3 | summary | Interest linked to a market index, within a cap and other limits, with a floor so index losses aren’t credited. An optional rider can add lifetime income. | 利息与市场指数挂钩，设有上限和其他限制，同时设有保底，指数下跌时不计入亏损。可选择附加终身收入条款。 |
| 3 | mayFit | People some years from retirement who want growth potential with protection from index losses. | 距离退休还有几年、希望在防范指数下跌的同时获得增长潜力的人士。 |
| 3 | weigh | Caps and rates can change, rider fees reduce the account value, and surrender charges apply in the early years. | 上限和利率可能调整，附加条款的费用会减少账户价值，前几年提取需支付退保费用。 |

---

## 5. At a glance (V2)

**`compare.eyebrow`**
- EN: Compare
- 中文: 比较

**`compare.title`**
- EN: At a glance
- 中文: 一览比较

**`compare.takeaway`**
- EN: More certainty usually means less growth. More income now usually means less access later.
- 中文: 越确定，增长通常越有限；现在领取的越多，日后能动用的资金通常越少。

**`compare.caption`**
- EN: Comparison of multi-year guaranteed, immediate and fixed indexed annuities
- 中文: 多年期保证年金、即期年金与固定指数型年金的比较

**`compare.legend`**
- EN: Levels show general tendencies compared with the other two. Individual contracts vary.
- 中文: 等级表示与另外两种相比的大致倾向，具体合同可能不同。

**`compare.footnote`**
- EN: Rates, caps, terms and surrender periods vary by insurer and change over time.
- 中文: 利率、上限、期限及退保期因保险公司而异，并会随时间调整。

**`compare.levels`**

| EN | 中文 |
|---|---|
| None | 无 |
| Low | 低 |
| Medium | 中 |
| High | 高 |

**`compare.rows`** (bold = level shown as a 3-step bar)

| Row · 项目 | MYGA · 多年期保证年金 | Immediate · 即期年金 | Fixed indexed · 固定指数型年金 |
|---|---|---|---|
| Main job · 主要作用 | Steady, tax-deferred growth · 稳定、税收递延的增值 | Income starting now · 立即开始领取收入 | Growth now, income later · 现在增值，日后领取 |
| When income starts · 何时开始领取 | When you choose, usually after the term · 由您决定，通常在期满后 | Right away, typically within a year · 立即开始，通常在一年内 | When you choose; for life with an income rider · 由您决定；附加收入条款可终身领取 |
| How it grows · 如何增值 | A fixed rate set for the whole term · 整个期限内利率固定 | It doesn’t; the lump sum becomes income · 不以增值为目的，本金转化为收入 | Interest linked to an index, within a cap and a floor · 利息与指数挂钩，设有上限和保底 |
| Predictability · 可预期性 | **High** Rate set for the whole term · 整个期限内利率固定 | **High** Payments set when you buy · 购买时即确定给付金额 | **Medium** Credits vary year to year; index losses aren’t credited · 每年计入的利息不同；指数下跌不计入亏损 |
| Growth potential · 增长潜力 | **Low** Steady, set in advance · 稳定，事先确定 | **None** Not its purpose · 不以增值为目的 | **Medium** Higher, limited by a cap · 较高，但受上限限制 |
| Access to your money · 资金灵活度 | **Low** A free withdrawal each year; surrender charges beyond it · 每年有免费提取额度，超出部分需付退保费用 | **None** The lump sum is converted to income · 本金已转化为收入 | **Low** A free withdrawal each year; surrender charges beyond it · 每年有免费提取额度，超出部分需付退保费用 |
| Often used for · 常见用途 | Money set aside for a known date; compared with CDs · 为某个确定日期预留的资金；常与定期存单比较 | Covering essential costs in retirement · 支付退休后的基本开支 | Savings before retirement that will later pay income · 退休前的储蓄，日后转为收入 |

---

## 6. Features worth understanding (anchor `#features`)

**`features.eyebrow`**
- EN: Good to know
- 中文: 值得了解

**`features.title`**
- EN: Features worth understanding
- 中文: 需要了解的几项功能

**`features.intro`**
- EN: These come up in almost every annuity conversation. Availability and terms vary by insurer and state.
- 中文: 几乎每一次关于年金的讨论都会谈到这些。是否提供及具体条款因保险公司和州而异。

**`features.items`**

| # | Field | EN | 中文 |
|---|---|---|---|
| 1 | name | Lifetime income rider | 终身收入附加条款 |
| 1 | body | An optional rider on many indexed annuities that pays income for life once withdrawals begin, even if the account value later runs out. It has an annual fee. | 许多指数型年金可选的附加条款：开始提取后可终身领取收入，即使账户价值日后用尽也不受影响。每年需支付费用。 |
| 2 | name | Payout options | 给付方式 |
| 2 | body | Income can be paid for your life only, for life with a guaranteed minimum period, for two lives (joint and survivor) or for a set number of years. | 收入可以仅按您的寿命给付、终身给付并保证最低期限、按两人寿命给付（夫妻联合给付），或按约定年数给付。 |
| 3 | name | Free withdrawals | 免费提取 |
| 3 | body | Many contracts let you take out part of the value each year, often up to 10%, without a surrender charge. | 许多合同允许每年提取一部分价值（通常最多10%），无需支付退保费用。 |
| 4 | name | Surrender charges | 退保费用 |
| 4 | body | Taking out more than the free amount in the early years costs a charge that steps down each year, usually to zero by the end of the surrender period. | 前几年提取超过免费额度的部分需支付退保费用，费率逐年递减，通常在退保期结束时降为零。 |
| 5 | name | Death benefit | 身故给付 |
| 5 | body | If you pass away before income begins, the remaining value generally goes to the beneficiaries you name. | 若您在开始领取收入前身故，剩余价值一般会给付给您指定的受益人。 |
| 6 | name | 1035 exchange | 1035免税交换 |
| 6 | body | An existing annuity or life policy can often be moved into a new annuity without current tax. A new surrender period usually starts, so we compare carefully first. | 现有的年金或寿险保单通常可以转入新的年金，而无需当期缴税。新合同通常会重新开始计算退保期，因此我们会先仔细比较。 |

---

## 7. How we work

**`process.eyebrow`**
- EN: How we work
- 中文: 我们的做法

**`process.title`**
- EN: What working with us looks like
- 中文: 与我们合作的流程

**`process.intro`**
- EN: Clear steps, at your pace. You’re welcome to pause at any point.
- 中文: 步骤清晰，按您的节奏进行。您随时可以暂停。

**`process.stepLabel`**
- EN: Step {n}
- 中文: 第{n}步

**`process.steps`**

| # | Field | EN | 中文 |
|---|---|---|---|
| 1 | title | A conversation | 初次交流 |
| 1 | body | A relaxed first meeting in Bellevue, by phone or by video, in English or 中文. We learn when you plan to retire and what you’ll need. | 在贝尔维尤面谈，或通过电话、视频进行轻松的初次交流，中英文皆可。我们会了解您计划何时退休、需要多少收入。 |
| 2 | title | Map your income | 梳理收入来源 |
| 2 | body | We line up the income you expect from Social Security, pensions and savings, and see whether there’s a gap an annuity could help fill. | 我们把您预计从社会安全福利、退休金和储蓄中获得的收入逐项列出，看看是否存在年金可以帮忙填补的缺口。 |
| 3 | title | Compare carriers | 比较保险公司 |
| 3 | body | As an independent agency, we compare rates, caps, riders and surrender terms from several insurers side by side. | 作为独立代理机构，我们会把多家保险公司的利率、上限、附加条款和退保条件并排比较。 |
| 4 | title | Apply and fund | 投保与注资 |
| 4 | body | We help you complete the application and move the money, including a rollover or 1035 exchange when that fits. | 我们协助您填写投保申请并完成资金转入，必要时包括账户转存（rollover）或1035免税交换。 |
| 5 | title | Review over time | 定期检视 |
| 5 | body | We review the contract with you, including your choices at the end of a term and when to start income. | 我们会和您一起检视合同，包括期满时的选择，以及何时开始领取收入。 |

---

## 8. How we work: panels for steps 2 and 4

**`processDetails`**

| # | Field | EN | 中文 |
|---|---|---|---|
| 1 | step | `2` | |
| 1 | title | How much should go into an annuity? | 应该拿多少钱买年金？ |
| 1 | intro | Usually only part of your savings. We work it out with you from a few questions: | 通常只是储蓄的一部分。我们会通过以下几个问题和您一起算出来： |
| 1 | numbered | `true` | |
| 1 | items | What will your essential monthly costs be in retirement?<br>• How much of that will Social Security and any pension cover?<br>• How much do you want to keep easy to reach for emergencies and big plans?<br>• When would you like income to start, and should it continue for a spouse?<br>• How comfortable are you with surrender periods, caps and changing rates? | 退休后每月的基本开支大约是多少？<br>• 其中有多少可以由社会安全福利和退休金支付？<br>• 您希望保留多少随时可用的资金，以备急需和重要计划？<br>• 您希望何时开始领取收入？是否需要在配偶身上延续？<br>• 您对退保期、收益上限和利率变动的接受程度如何？ |
| 1 | outro | We’ll show you a few options and what each would pay or credit, then you decide. | 我们会列出几种方案以及各自的给付或计息方式，由您来决定。 |
| 2 | step | `4` | |
| 2 | title | Before you sign | 签约之前 |
| 2 | items | You’ll see the contract’s rates, caps, fees and surrender charges in writing. We go through them with you line by line.<br>• After the contract is delivered, a free-look period lets you review it and cancel for a refund.<br>• If the money comes from an IRA or 401(k), we arrange a direct rollover or transfer so it isn’t treated as a withdrawal.<br>• We explain how withdrawals will be taxed, including the federal additional tax that may apply before age 59½. | 合同的利率、上限、费用和退保费用都会以书面形式列明，我们会和您逐条过一遍。<br>• 合同送达后有一段冷静期，您可以审阅合同，并在期内取消、获得退款。<br>• 如果资金来自IRA或401(k)，我们会安排直接转存或转账，避免被视为提取。<br>• 我们会说明提取时如何纳税，包括59½岁前提取可能适用的联邦附加税。 |

---

## 9. FAQ

**`faq.eyebrow`**
- EN: Questions
- 中文: 常见问题

**`faq.title`**
- EN: Common questions
- 中文: 常见问题

**`faq.intro`**
- EN: Short answers to what people ask us most. We’re happy to go further in person.
- 中文: 简要解答大家最常问的问题。欢迎当面详谈。

**`faq.items`**

| # | Field | EN | 中文 |
|---|---|---|---|
| 1 | q | Should all of my savings go into an annuity? | 应该把全部储蓄都放进年金吗？ |
| 1 | a | Usually not. Most people use an annuity for part of their savings and keep the rest easier to reach. We’ll help you find a balance that fits your income needs and your plans. | 通常不建议。大多数人只用一部分储蓄购买年金，其余部分保持较高的灵活度。我们会根据您的收入需求和规划，帮您找到合适的比例。 |
| 2 | q | Is my money safe in an annuity? | 钱放在年金里安全吗？ |
| 2 | a | Annuity guarantees are backed by the financial strength and claims-paying ability of the insurer. Annuities aren’t bank deposits and aren’t FDIC-insured. State guaranty associations may offer limited protection if an insurer fails, but that shouldn’t be a reason to buy. We’ll show you each insurer’s ratings from independent agencies. | 年金的各项保证取决于保险公司的财务实力和理赔能力。年金不是银行存款，不受FDIC保障。若保险公司破产，各州的保险保障协会可能提供有限的保障，但这不应成为购买的理由。我们会为您展示各家保险公司由独立评级机构给出的评级。 |
| 3 | q | Can I lose money in a fixed indexed annuity? | 固定指数型年金会亏钱吗？ |
| 3 | a | Index losses aren’t credited to your account, so a down year typically credits zero rather than a loss. But surrender charges, rider fees, market value adjustments and early withdrawals can still reduce what you receive, especially in the first years. | 指数下跌不会计入您的账户，因此行情不好的年份通常计入零，而不是亏损。但退保费用、附加条款费用、市值调整以及提前提取，仍可能减少您实际拿到的金额，尤其是在最初几年。 |
| 4 | q | How is a MYGA different from a CD? | 多年期保证年金和定期存单（CD）有什么不同？ |
| 4 | a | Both can pay a set rate for a set term. A CD is a bank deposit with FDIC insurance, and its interest is taxed each year. A MYGA is an insurance contract: not FDIC-insured, with tax deferred until you withdraw, and surrender charges for early access. Rates on both change, so we compare them side by side. | 两者都可以在约定期限内提供固定利率。定期存单是银行存款，受FDIC保障，利息每年都要缴税。多年期保证年金是保险合同，不受FDIC保障，税款递延至提取时缴纳，提前动用需支付退保费用。两者的利率都会变动，所以我们会并排比较。 |
| 5 | q | How are annuities taxed? | 年金如何纳税？ |
| 5 | a | Growth inside an annuity is generally tax-deferred, then taxed as ordinary income when withdrawn. Taxable withdrawals before age 59½ may also face a 10% federal additional tax, with some exceptions. With an immediate annuity bought with after-tax money, part of each payment is usually a tax-free return of what you paid in. Please confirm your situation with a tax professional. | 年金内的增值一般可以税收递延，提取时按普通收入纳税。59½岁前提取应税部分，可能还需额外缴纳10%的联邦附加税，但有一些例外。用税后资金购买的即期年金，每笔给付中通常有一部分属于免税的本金返还。具体情况请向税务专业人士确认。 |
| 6 | q | Can I move my 401(k) or IRA into an annuity? | 可以把401(k)或IRA转入年金吗？ |
| 6 | a | Often, yes, through a direct rollover or transfer that keeps the money tax-deferred. An annuity inside an IRA follows IRA rules, including required minimum distributions. We’ll check whether it makes sense compared with leaving the money where it is. | 通常可以，通过直接转存或转账，资金仍可保持税收递延。IRA中的年金需遵守IRA的规定，包括最低强制提取额。我们会帮您比较，看看转入是否比维持现状更合适。 |
| 7 | q | What happens to my annuity when I die? | 我身故后年金怎么处理？ |
| 7 | a | Before income starts, the remaining value generally goes to your named beneficiaries. After income starts, it depends on the payout option you chose: life-only payments stop, while period-certain and joint payouts can continue to a beneficiary or spouse. | 在开始领取收入之前，剩余价值一般给付给您指定的受益人。开始领取之后，则取决于您选择的给付方式：仅按寿命给付的在身故后停止；保证期限给付和夫妻联合给付则可以继续支付给受益人或配偶。 |
| 8 | q | How are you paid? | 你们如何获得报酬？ |
| 8 | a | Like most insurance agencies, we’re typically paid a commission by the insurer whose annuity you choose. We’re happy to explain how compensation works for any annuity we recommend. | 和大多数保险代理机构一样，我们通常由您所选年金的保险公司支付佣金。对于我们推荐的任何年金，我们都乐意说明报酬是如何计算的。 |

---

## 10. Where it fits and related services

**`fits.eyebrow`**
- EN: Your plan
- 中文: 您的规划

**`fits.title`**
- EN: Where annuities fit
- 中文: 年金在规划中的位置

**`fits.intro`**
- EN: Annuities often play a part in these life stages.
- 中文: 年金常在以下人生阶段发挥作用。

**`fits.stageLinks`**

| # | Field | EN | 中文 |
|---|---|---|---|
| 1 | stage | `2` | |
| 1 | label | See retirement income | 了解退休收入 |
| 2 | stage | `3` | |
| 2 | label | See investment growth | 了解投资增长 |
| 3 | stage | `4` | |
| 3 | label | See legacy planning | 了解传承规划 |

**`fits.relatedEyebrow`**
- EN: Other services
- 中文: 其他服务

**`fits.relatedTitle`**
- EN: Other ways we can help
- 中文: 我们还能为您做什么

**`fits.relatedIntro`**
- EN: Life insurance and health insurance, compared and explained the same way.
- 中文: 寿险与健康险，同样为您比较、讲清楚。

---

## 11. Closing call to action

**`cta.title`**
- EN: Start with a conversation
- 中文: 从一次交流开始

**`cta.body`**
- EN: Tell us when you’d like to retire and what you want your savings to do. We’ll explain the options that may fit, with no pressure to decide.
- 中文: 告诉我们您希望何时退休，以及希望这笔储蓄发挥什么作用。我们会为您讲解可能适合的方案，绝不催促您做决定。

**`cta.primary`**
- EN: Talk with us
- 中文: 联系我们

**`cta.phone`**
- EN: Call
- 中文: 致电

---

## 12. Disclosures (page footnote)

**`disclosures.title`**
- EN: Important information
- 中文: 重要信息

**`disclosures.items`**

| EN | 中文 |
|---|---|
| Asset One Insurance is an insurance agency licensed in Washington State ([PLACEHOLDER] License no.). Annuities are issued by the insurance companies we represent, not by Asset One Insurance. Features, riders, rates and costs vary by insurer and state. | Asset One Insurance 是在华盛顿州持牌的保险代理机构（[PLACEHOLDER] 执照编号）。年金由我们代理的保险公司签发，而非 Asset One Insurance。功能、附加条款、利率和费用因保险公司和州而异。 |
| Annuities are long-term insurance contracts intended for retirement. They are not bank deposits, are not FDIC-insured and are not guaranteed by any bank or government agency. Guarantees are based on the claims-paying ability of the issuing insurer. | 年金是为退休设计的长期保险合同，不是银行存款，不受FDIC保障，也不由任何银行或政府机构担保。各项保证取决于签发保险公司的理赔能力。 |
| Fixed indexed annuities are not an investment in the stock market or in any index. Index-linked interest is subject to caps, participation rates, spreads and other limits, which may change. | 固定指数型年金并非投资于股市或任何指数。与指数挂钩的利息受上限、参与率、利差及其他限制约束，这些条件可能调整。 |
| Withdrawals above the free amount may be subject to surrender charges and market value adjustments. Taxable withdrawals are taxed as ordinary income and, before age 59½, may be subject to a 10% federal additional tax. | 提取超过免费额度的部分，可能需支付退保费用并适用市值调整。应税提取按普通收入纳税；59½岁前提取，可能需额外缴纳10%的联邦附加税。 |
| Optional riders carry additional fees and their own terms. The income base used by a lifetime income rider is not a cash value and cannot be withdrawn as a lump sum. | 可选附加条款需另付费用，并有各自的条款。终身收入附加条款所用的收入基数并非现金价值，不能一次性提取。 |
| This page is general information, not tax, legal or investment advice. Please consult a qualified tax or legal professional about your situation. | 本页为一般性信息，不构成税务、法律或投资建议。请就您的具体情况咨询合格的税务或法律专业人士。 |

---
## Visual specs

### V0 · Goal chips (reused)
Same component as Life Insurance (`TypeCards.astro`): five goals plus "All three". Three cards in one row on desktop; two per row below 1100px with matches moved first; one column on phones.

### V2 · At a glance (reused)
`CompareTable.astro` with three columns. Levels are a 3-step bar plus a word; the word is what screen readers hear.

## Photo briefs

| Slot | Now (fallback) | Brief |
|---|---|---|
| `annuitiesHero` | `retired-couple-beach-picnic.jpg` (homepage Retirement stage photo) | A couple in their 60s on a Lake Washington shoreline or Eastside trail, relaxed and unhurried, early evening light. Room on the left third for the headline. Not staged "luxury retirement" |
| `processAnnuities` | `advisor-client-financial-review.jpg` (homepage Annuities card) | Advisor and client at a table reviewing printed income options; hands and paper, faces optional. Shown under a deep blue tint, so detail matters less than shape |

## Saved for Insurance & You

- How a lifetime income rider works (benefit base vs account value), with the guide's caveats. Needs a schematic, not the numeric example.
- Annuities and taxes in more depth: qualified vs non-qualified, exclusion ratio, RMDs.
- MYGA vs CD, as a fuller side-by-side.

## Open questions

1. **[CONFIRM] Variable annuities:** offered? If yes, who holds the securities registration, and which broker-dealer? They'd need their own card and prospectus language.
2. **[CONFIRM] Spoken languages and meeting options** (same as Life Insurance: Mandarin, Cantonese or both; in person, phone, video).
3. **[CONFIRM] Compensation:** commission only? FAQ "How are you paid?" assumes so.
4. **[CONFIRM] Licence number** for the disclosure.
5. **[CONFIRM] Compliance review:** annuity marketing is reviewed by carriers and, in Washington, subject to the state's suitability ("best interest") rules. Who signs off on this page?
6. **[CONFIRM] Free-look period:** the page says "a free-look period" without a number of days. Add the Washington figure once compliance confirms it.
7. **Carrier names:** can the page name the insurers Asset One is appointed with?
