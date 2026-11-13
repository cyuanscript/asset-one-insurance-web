# Content pack: Health Insurance

| | |
|---|---|
| **Route** | `/services/health-insurance/` (EN) · `/zh/services/health-insurance/` (中文) |
| **Status** | Draft v1, 2026-11-12. Built at `src/pages/services/health-insurance.astro`; copy lives in `src/i18n/health-insurance.ts`. English ready for client review **once the plan types are confirmed**; Chinese is a draft translation and needs a native review |
| **Sources** | GSC Profile (health insurance paragraph), doc 05 draft copy, homepage card ("Individual, family and Medicare plans"). GSC has no health product guide, so the plan types and enrollment rules are general, public information and need confirming (open questions 1–3) |
| **Voice** | Same as Life Insurance: plain, calm, no pressure |
| **Terminology** | 自付额 (deductible) · 共付额 (copay) · 共同保险 (coinsurance) · 自付上限 (out-of-pocket maximum) · 医疗网络 (network) · 联邦医疗保险 Medicare (kept in English after first use, as Chinese-speaking clients see it on their cards) · Medicare Advantage and Part B/C/D kept in English · Medicare 补充保险 (Medigap) · Washington Healthplanfinder kept in English |
| **Template** | Shared Services sections, plus two health-only pieces: a cost-sharing chart (V1) and enrollment windows. No "Where it fits" band, because the homepage life stages are about life insurance and annuities |

Items marked **[CONFIRM]** still need an answer from Asset One before the copy goes live (collected in [Open questions](#open-questions)).
Section keys match `src/i18n/health-insurance.ts`. Sections 1–14 below are generated from that file, so they always match what's built.

---

## Page depth

| Depth | Sections |
|---|---|
| **1 · Scan** | Hero, Basics, Plan options |
| **2 · Understand and compare** | Plain terms + cost chart, Medicare Advantage or a supplement, When you can enroll |
| **3 · Working together** | How we work, FAQ (closed accordions) |

## Choices made in v1, and why

| Choice | Why |
|---|---|
| **Four starting points** (individual and family, small business group, Medicare Advantage, Medicare Supplement) | Matches the homepage card and doc 05's placeholder list. Each is [CONFIRM] until Asset One says which it sells |
| **Plain terms before any comparison** | Most confusion about health plans is vocabulary. Six terms, then a chart that shows how they fit together over a year |
| **Medicare comparison, not a metal-tier table** | Turning 65 (for clients or their parents) is the decision where an agent adds the most, and it's a real two-way choice. Bronze/Silver/Gold detail is better as an Insurance & You guide |
| **Enrollment windows as their own section** | Timing is what most often goes wrong in health coverage; Medicare late penalties last |
| **Required Medicare wording in the disclosures** | Agents who market Medicare Advantage or Part D plans must show CMS's "We do not offer every plan…" statement. Included word for word; compliance to confirm |
| **Dates** | Only rules that are fixed in federal law are dated (Medicare windows). Washington's open enrollment end date is left to Healthplanfinder, since the state sets it |

---

## 1. Page meta

**`meta.title`**
- EN: Health Insurance in Bellevue, WA · Asset One Insurance
- 中文: 健康险 · 华盛顿州贝尔维尤 | Asset One Insurance

**`meta.description`**
- EN: Individual and family plans, small business coverage and Medicare, compared side by side and explained in plain language. In English and 中文.
- 中文: 个人与家庭计划、小企业团体保险及联邦医疗保险（Medicare），并排比较，用浅显的语言讲清楚。中英文服务。

---

## 2. Hero

**`hero.eyebrow`**
- EN: Services · Health Insurance
- 中文: 服务 · 健康险

**`hero.title`** (array = line breaks)
- EN: `["Coverage that keeps care within reach."]`
- 中文: `["让医疗照护，","始终触手可及。"]`

**`hero.lead`**
- EN: Individual and family plans, small business coverage and Medicare, compared side by side and explained in plain language, so you can choose with confidence.
- 中文: 个人与家庭计划、小企业团体保险及联邦医疗保险（Medicare），并排比较，用浅显的语言讲清楚，让您安心选择。

**`hero.primary`**
- EN: Talk with us
- 中文: 联系我们

**`hero.secondary`**
- EN: Compare plan options
- 中文: 比较计划类型

---

## 3. The basics

**`basics.eyebrow`**
- EN: The basics
- 中文: 基础知识

**`basics.title`**
- EN: What health insurance is for
- 中文: 健康险的作用

**`basics.body`**

| EN | 中文 |
|---|---|
| Health insurance helps pay for doctor visits, hospital stays, prescriptions and preventive care, and puts a ceiling on how much a serious illness or injury can cost you in a year. It protects your health and your savings at the same time. | 健康险帮助支付看诊、住院、处方药和预防保健的费用，并为一年内重大疾病或意外可能带来的花费设定上限。它守护的既是您的健康，也是您的积蓄。 |
| The right plan depends on the doctors you want to keep, the prescriptions you take, how often you expect to need care, and whether you’d rather pay more each month or more when you use care. We start with those questions. | 适合的计划取决于您想继续看哪些医生、正在服用哪些药物、预计多久需要一次医疗服务，以及您更愿意每月多付保费，还是在看病时多付费用。我们从这些问题开始。 |

**`basics.checklistTitle`**
- EN: It may be worth a look if…
- 中文: 如果符合以下情况，不妨了解一下……

**`basics.checklist`**

| EN | 中文 |
|---|---|
| You’re self-employed, retiring early or between jobs | 您是自雇人士、提前退休，或正处于换工作期间 |
| You’re turning 65, or helping a parent with Medicare | 您即将年满65岁，或正在帮父母了解联邦医疗保险 |
| Your household has changed: a marriage, a new baby, a move | 家庭情况有变化：结婚、添了宝宝、搬家 |
| You run a small business and want to offer coverage to your team | 您经营小企业，希望为员工提供保险 |
| Your current plan’s costs or doctor network no longer fit | 目前计划的费用或医生网络已不再适合您 |

---

## 4. Plan options (anchor `#types`)

**`types.eyebrow`**
- EN: Plan options
- 中文: 计划类型

**`types.title`**
- EN: Coverage for each stage of life
- 中文: 每个人生阶段的保障

**`types.intro`**
- EN: Most people start from one of four places. Choose the one that describes you to see which options are usually worth comparing.
- 中文: 大多数人都从以下四种情况之一开始。选择最符合您的一项，看看通常值得比较哪些方案。

**`types.labels.mayFit`**
- EN: May fit
- 中文: 可能适合

**`types.labels.weigh`**
- EN: Worth weighing
- 中文: 需要权衡

**`types.goalsLabel`**
- EN: What describes you?
- 中文: 哪一项最符合您？

**`types.goalsAll`**
- EN: All four
- 中文: 全部四种

**`types.allNote`**
- EN: Choose the one that describes you to see which options are usually worth comparing.
- 中文: 选择最符合您的一项，看看通常值得比较哪些方案。

**`types.goals`**

| # | Field | EN | 中文 |
|---|---|---|---|
| 1 | key | self | self |
| 1 | label | Self-employed or between jobs | 自雇或正在换工作 |
| 1 | highlights | `individual` | |
| 1 | note | Individual and family plans are the usual starting point. Many households qualify for lower premiums through Washington Healthplanfinder. | 通常从个人与家庭计划开始。许多家庭可通过 Washington Healthplanfinder 获得保费补贴。 |
| 2 | key | family | family |
| 2 | label | Covering my family | 为全家投保 |
| 2 | highlights | `individual group` | |
| 2 | note | Compare family coverage through work with an individual plan. The lower premium isn’t always the lower total cost. | 把公司提供的家庭保险与个人计划做个比较。保费较低的，总花费不一定较低。 |
| 3 | key | business | business |
| 3 | label | I run a small business | 我经营小企业 |
| 3 | highlights | `group individual` | |
| 3 | note | A group plan is the traditional route. We’ll explain the participation and contribution rules insurers set. | 团体计划是传统做法。我们会说明保险公司对参保比例和雇主分担比例的要求。 |
| 4 | key | sixtyfive | sixtyfive |
| 4 | label | Turning 65 | 即将年满65岁 |
| 4 | highlights | `advantage supplement` | |
| 4 | note | Most people choose between Medicare Advantage and Original Medicare with a supplement. Your first window opens three months before the month you turn 65. | 大多数人会在 Medicare Advantage 与“传统 Medicare + 补充保险”之间选择。首次投保窗口从您满65岁当月的前三个月开始。 |
| 5 | key | parent | parent |
| 5 | label | Helping a parent with Medicare | 帮父母了解 Medicare |
| 5 | highlights | `advantage supplement` | |
| 5 | note | We can sit down with you and your parent, in English or 中文, and compare plans that fit their doctors and prescriptions. | 我们可以与您和父母一起坐下来，用中文或英文比较适合他们医生和用药的计划。 |

**`types.cards`**

| # | Field | EN | 中文 |
|---|---|---|---|
| 1 | id | individual | individual |
| 1 | name | Individual and family | 个人与家庭计划 |
| 1 | summary | Plans you buy for yourself or your household, including through Washington Healthplanfinder, the state’s marketplace. | 为自己或家人购买的计划，包括通过华盛顿州的保险交易平台 Washington Healthplanfinder 购买。 |
| 1 | mayFit | The self-employed, early retirees and anyone without coverage through work. | 自雇人士、提前退休者，以及没有雇主保险的人。 |
| 1 | weigh | You can enroll only during open enrollment or after a qualifying life event, and networks vary a lot between plans. | 只能在开放投保期或发生符合条件的人生事件后投保，不同计划的医生网络差别很大。 |
| 2 | id | group | group |
| 2 | name | Small business group | 小企业团体保险 |
| 2 | summary | Coverage a business offers its team, with the cost usually shared between the employer and employees. | 企业为员工提供的保险，费用通常由雇主和员工共同分担。 |
| 2 | mayFit | Owners who want to attract and keep good people. | 希望吸引并留住优秀员工的企业主。 |
| 2 | weigh | Insurers set minimum participation and contribution rules, and the business handles some paperwork each year. | 保险公司对最低参保比例和雇主分担比例有要求，企业每年也需要处理一些行政手续。 |
| 3 | id | advantage | advantage |
| 3 | name | Medicare Advantage | Medicare Advantage |
| 3 | summary | Also called Part C: an all-in-one alternative to Original Medicare from a private insurer, often with drug coverage and extras. | 又称 Part C：由私营保险公司提供、可替代传统 Medicare 的一体化计划，通常包含药品保障和额外福利。 |
| 3 | mayFit | People comfortable using a provider network who like set copays. | 习惯在医疗网络内就医、喜欢固定自付额的人。 |
| 3 | weigh | You’ll usually need in-network doctors, sometimes referrals, and benefits can change each year. | 通常需要看网络内的医生，有时需要转诊，福利每年都可能调整。 |
| 4 | id | supplement | supplement |
| 4 | name | Medicare Supplement | Medicare 补充保险 |
| 4 | summary | Also called Medigap: works alongside Original Medicare to cover costs such as deductibles and coinsurance. Usually paired with a Part D drug plan. | 又称 Medigap：与传统 Medicare 搭配，支付自付额、共同保险等费用，通常再搭配一份 Part D 药品计划。 |
| 4 | mayFit | People who want to see any provider that accepts Medicare, with few surprise bills. | 希望可以看任何接受 Medicare 的医生、少有意外账单的人。 |
| 4 | weigh | Monthly premiums are usually higher, and switching later may mean answering health questions. | 月保费通常较高；日后更换时可能需要回答健康问题。 |

---

## 5. Plain terms (anchor `#terms`)

**`terms.eyebrow`**
- EN: Plain terms
- 中文: 名词解释

**`terms.title`**
- EN: The words that decide what you pay
- 中文: 决定您花费多少的几个词

**`terms.intro`**
- EN: Every plan is built from the same pieces. Knowing them makes any two plans easier to compare.
- 中文: 每个计划都由同样的几个部分组成。了解它们，比较任何两个计划都会容易得多。

**`terms.items`**

| # | Field | EN | 中文 |
|---|---|---|---|
| 1 | name | Premium | 保费 |
| 1 | body | What you pay each month to keep the plan, whether or not you use care. | 为维持计划每月支付的费用，无论是否就医都要缴纳。 |
| 2 | name | Deductible | 自付额（Deductible） |
| 2 | body | What you pay for covered care each year before the plan starts sharing the cost. | 每年在计划开始分担费用之前，您需要先自行支付的承保医疗费用。 |
| 3 | name | Copay | 共付额（Copay） |
| 3 | body | A set amount for a visit or prescription, such as a fixed fee to see your doctor. | 每次看诊或取药时支付的固定金额，例如看家庭医生的固定费用。 |
| 4 | name | Coinsurance | 共同保险（Coinsurance） |
| 4 | body | Your share of a bill as a percentage, once you’ve met the deductible. | 达到自付额之后，您按比例分担的那部分费用。 |
| 5 | name | Out-of-pocket maximum | 自付上限 |
| 5 | body | The most you’ll pay for covered care in a year. After that, the plan pays 100% of covered costs. | 一年内您为承保医疗服务支付的最高金额。超过之后，计划支付全部承保费用。 |
| 6 | name | Network | 医疗网络 |
| 6 | body | The doctors and hospitals that contract with the plan. Staying in network usually costs far less. | 与计划签约的医生和医院。在网络内就医，费用通常低得多。 |

---

## 6. How costs are shared over a year (V1, inside Plain terms)

**`costs.title`**
- EN: How costs are shared over a year
- 中文: 一年之中，费用如何分担

**`costs.takeaway`**
- EN: You pay more of the early bills. The plan pays more as the year goes on, and all of it once you reach the limit.
- 中文: 年初的账单您付得多；随着时间推移，计划分担得越来越多，达到上限后则全部由计划支付。

**`costs.you`**
- EN: You pay
- 中文: 您支付

**`costs.plan`**
- EN: Your plan pays
- 中文: 计划支付

**`costs.phases`**

| # | Field | EN | 中文 |
|---|---|---|---|
| 1 | label | Until the deductible | 达到自付额之前 |
| 1 | text | You pay the bills for most covered care. | 大部分承保医疗费用由您支付。 |
| 2 | label | After the deductible | 达到自付额之后 |
| 2 | text | You and the plan share costs through copays and coinsurance. | 通过共付额和共同保险，由您和计划共同分担。 |
| 3 | label | After the out-of-pocket maximum | 达到自付上限之后 |
| 3 | text | The plan pays 100% of covered care for the rest of the year. | 当年余下时间，承保医疗费用全部由计划支付。 |

**`costs.note`**
- EN: An illustration, not to scale. Premiums are separate and don’t count toward these limits. Many plans cover preventive care at no cost and charge set copays for some visits before the deductible.
- 中文: 示意图，未按比例绘制。保费另计，不计入上述限额。许多计划免费提供预防保健，部分看诊在达到自付额之前也只需支付固定共付额。

---

## 7. Medicare Advantage or a supplement? (V2)

**`compare.eyebrow`**
- EN: Turning 65
- 中文: 年满65岁

**`compare.title`**
- EN: Medicare Advantage or a supplement?
- 中文: Medicare Advantage 还是补充保险？

**`compare.takeaway`**
- EN: Lower monthly costs usually come with a network and copays. More freedom usually costs more each month.
- 中文: 月费较低，通常意味着有医疗网络和共付额；自由度越高，每月花费通常越多。

**`compare.caption`**
- EN: Comparison of Medicare Advantage and Original Medicare with a Medicare Supplement
- 中文: Medicare Advantage 与“传统 Medicare + 补充保险”的比较

**`compare.legend`**
- EN: Levels show general tendencies compared with the other option. Individual plans vary.
- 中文: 等级表示与另一选项相比的大致倾向，具体计划可能不同。

**`compare.footnote`**
- EN: Plans, premiums and benefits vary by county and change every year.
- 中文: 计划、保费和福利因县而异，并且每年都会调整。

**`compare.levels`**

| EN | 中文 |
|---|---|
| None | 无 |
| Low | 低 |
| Medium | 中 |
| High | 高 |

**`compare.rows`** (bold = level shown as a 3-step bar)

| Row · 项目 | Medicare Advantage · Medicare Advantage | Original Medicare + supplement · 传统 Medicare + 补充保险 |
|---|---|---|
| Choice of doctors · 医生选择 | **Low** Usually a network; referrals may be needed · 通常限于网络内，可能需要转诊 | **High** Any provider in the U.S. that accepts Medicare · 全美任何接受 Medicare 的医疗机构 |
| Monthly premium · 月保费 | **Low** Often low, plus your Part B premium · 通常较低，另加 Part B 保费 | **High** Higher, plus Part B and a drug plan · 较高，另加 Part B 保费和药品计划 |
| Costs when you get care · 就医时的花费 | **Medium** Copays and coinsurance, up to a yearly limit · 共付额和共同保险，每年设有上限 | **Low** Low; most plans cover most of what Medicare doesn’t · 较低；多数计划承担 Medicare 未支付的大部分费用 |
| Drug coverage · 药品保障 | Usually included · 通常已包含 | A separate Part D plan · 需另购 Part D 计划 |
| Extras · 额外福利 | Often some dental, vision or hearing benefits · 常含部分牙科、视力或听力福利 | Not included; can be bought separately · 不包含，可另行购买 |
| Changing later · 日后更换 | You can switch plans each fall · 每年秋季可以更换计划 | A new supplement may require health questions · 更换补充保险可能需要回答健康问题 |

---

## 8. When you can enroll (anchor `#enroll`)

**`enroll.eyebrow`**
- EN: Timing
- 中文: 时间安排

**`enroll.title`**
- EN: When you can enroll
- 中文: 什么时候可以投保

**`enroll.intro`**
- EN: Health coverage runs on set windows. Missing one can mean waiting months, or a lasting penalty with Medicare.
- 中文: 健康险按固定的时间窗口办理。错过窗口，可能要等上几个月；如果是 Medicare，还可能面临长期的罚金。

**`enroll.items`**

| # | Field | EN | 中文 |
|---|---|---|---|
| 1 | name | Open enrollment | 开放投保期 |
| 1 | body | Once a year, starting November 1, for individual and family plans. Washington Healthplanfinder sets the closing date. | 个人与家庭计划每年一次，从11月1日开始，截止日期由 Washington Healthplanfinder 公布。 |
| 2 | name | Special enrollment | 特殊投保期 |
| 2 | body | Usually within 60 days of a qualifying life event, such as losing other coverage, marriage, a new baby or a move. | 通常在符合条件的人生事件发生后60天内，例如失去其他保险、结婚、添了宝宝或搬家。 |
| 3 | name | Employer plans | 雇主计划 |
| 3 | body | When you’re hired, at your employer’s yearly renewal, or after a qualifying life event. | 入职时、雇主每年续保时，或发生符合条件的人生事件之后。 |
| 4 | name | Medicare at 65 | 年满65岁时的 Medicare |
| 4 | body | A seven-month window: the three months before the month you turn 65, that month, and the three months after. | 共七个月：满65岁当月的前三个月、当月，以及之后的三个月。 |
| 5 | name | Medicare each fall | 每年秋季的 Medicare |
| 5 | body | From October 15 to December 7, you can switch Medicare Advantage or Part D plans for the next year. | 每年10月15日至12月7日，可以为下一年更换 Medicare Advantage 或 Part D 计划。 |
| 6 | name | Medicare Advantage, early in the year | 年初的 Medicare Advantage |
| 6 | body | From January 1 to March 31, you can change Medicare Advantage plans once, or return to Original Medicare. | 每年1月1日至3月31日，可以更换一次 Medicare Advantage 计划，或回到传统 Medicare。 |

---

## 9. How we work

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
| 1 | body | A relaxed first meeting in Bellevue, by phone or by video, in English or 中文. We learn about your household, doctors, prescriptions and budget. | 在贝尔维尤面谈，或通过电话、视频进行轻松的初次交流，中英文皆可。我们会了解您的家庭成员、医生、用药和预算。 |
| 2 | title | Check what fits | 确认适合的方向 |
| 2 | body | We check eligibility for marketplace savings, employer coverage or Medicare, and list what a plan must cover for you. | 我们会确认您是否符合交易平台补贴、雇主保险或 Medicare 的资格，并列出计划必须涵盖的内容。 |
| 3 | title | Compare plans | 比较计划 |
| 3 | body | We compare premiums, deductibles, networks and drug coverage across insurers, side by side. | 我们把多家保险公司的保费、自付额、医疗网络和药品保障并排比较。 |
| 4 | title | Enroll | 办理投保 |
| 4 | body | We help you enroll in the plan you choose, in the right window, and confirm when your coverage starts. | 我们协助您在正确的窗口期内投保所选计划，并确认保障何时生效。 |
| 5 | title | Help through the year | 全年协助 |
| 5 | body | We’re here for questions about coverage or bills, and we review your plan with you before the next enrollment period. | 有关保障或账单的问题，随时可以找我们；下一个投保期之前，我们也会和您一起重新检视计划。 |

---

## 10. How we work: panels for steps 2 and 4

**`processDetails`**

| # | Field | EN | 中文 |
|---|---|---|---|
| 1 | step | `2` | |
| 1 | title | What to bring to our first meeting | 初次见面时请带上 |
| 1 | intro | A few details make the comparison accurate from the start: | 有了这些资料，比较从一开始就会更准确： |
| 1 | items | Your current insurance cards, if you have coverage now<br>• The doctors, clinics and hospitals you want to keep<br>• Your prescriptions, with doses<br>• An estimate of this year’s household income, to check for marketplace savings<br>• Your Medicare card and start dates, if you’re turning 65 or already enrolled | 目前的保险卡（如有）<br>• 您希望继续看的医生、诊所和医院<br>• 您的处方药及剂量<br>• 今年家庭收入的估算，用于确认交易平台补贴<br>• 如即将年满65岁或已参加 Medicare，请带上 Medicare 卡和生效日期 |
| 2 | step | `4` | |
| 2 | title | Good to know when you enroll | 投保时值得留意 |
| 2 | items | Coverage usually starts on the first of a month, depending on the plan and when you enroll.<br>• Keep your current coverage until the new plan is confirmed, so there’s no gap.<br>• Marketplace savings are based on your estimated income. Report changes during the year so they stay accurate.<br>• Enrolling in Medicare late can bring a penalty that lasts as long as you have coverage. We’ll help you keep track of the dates. | 保障通常在某月1日生效，具体取决于计划和投保时间。<br>• 在新计划确认之前，请保留现有保险，避免出现保障空档。<br>• 交易平台的补贴根据您估算的收入计算。年内收入有变化时请及时申报，以免补贴不准确。<br>• 延迟参加 Medicare 可能产生罚金，并在您参保期间一直适用。我们会帮您留意各个时间点。 |

---

## 11. FAQ

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
| 1 | q | Can you help me find out if I qualify for lower premiums? | 你们能帮我确认是否符合保费补贴的资格吗？ |
| 1 | a | Yes. Many individuals and families who buy through Washington Healthplanfinder qualify for tax credits that lower their monthly premium, based on household income and size. We’ll help you check and apply. | 可以。许多通过 Washington Healthplanfinder 投保的个人和家庭，可以根据家庭收入和人数获得税收抵免，降低每月保费。我们会协助您确认并申请。 |
| 2 | q | Does it cost more to use an agent? | 通过代理人投保会更贵吗？ |
| 2 | a | Generally, no. The premium for the same plan is the same whether you enroll on your own or with us. Insurers pay agents a commission. | 一般不会。同一计划的保费，无论您自行投保还是通过我们投保都是一样的。代理人的佣金由保险公司支付。 |
| 3 | q | Can I keep my doctors? | 我可以继续看原来的医生吗？ |
| 3 | a | Often, yes, if they’re in the plan’s network. We check your doctors, clinics and hospitals against each plan before you choose. | 如果他们在计划的医疗网络内，通常可以。在您做决定之前，我们会逐一核对您的医生、诊所和医院是否在各个计划的网络中。 |
| 4 | q | What’s the difference between an HMO and a PPO? | HMO 和 PPO 有什么区别？ |
| 4 | a | An HMO usually asks you to use doctors in its network and get referrals to see specialists, in return for lower costs. A PPO lets you see providers outside the network, at a higher cost. An EPO sits in between: no referrals, but generally no coverage outside the network except emergencies. | HMO 通常要求您在网络内就医，看专科医生需要转诊，换来的是较低的费用。PPO 允许您在网络外就医，但费用较高。EPO 介于两者之间：无需转诊，但除急诊外，网络外一般不予承保。 |
| 5 | q | I’m turning 65 but still working. Do I need Medicare? | 我快65岁了，但还在工作，需要参加 Medicare 吗？ |
| 5 | a | It depends on the size of your employer and your coverage there. Some people can delay Part B without a penalty while covered by an employer plan based on current work; others need to enroll. We’ll help you check before your window closes. | 这取决于雇主的规模以及您在公司的保险。有些人在享有基于在职身份的雇主保险期间，可以推迟参加 Part B 而不受罚；有些人则需要按时参加。我们会在窗口关闭之前帮您确认。 |
| 6 | q | What if I miss open enrollment? | 错过了开放投保期怎么办？ |
| 6 | a | You may still qualify for a special enrollment period after a life event, such as losing other coverage, marriage, a new baby or a move. Otherwise, you’ll usually wait for the next open enrollment. | 如果发生了失去其他保险、结婚、添了宝宝或搬家等人生事件，您可能仍符合特殊投保期的条件。否则，通常需要等到下一个开放投保期。 |
| 7 | q | How are you paid? | 你们如何获得报酬？ |
| 7 | a | Like most insurance agencies, we’re typically paid a commission by the insurer whose plan you choose. We’re happy to explain how compensation works for any plan we recommend. | 和大多数保险代理机构一样，我们通常由您所选计划的保险公司支付佣金。对于我们推荐的任何计划，我们都乐意说明报酬是如何计算的。 |

---

## 12. Related services

**`related.eyebrow`**
- EN: Other services
- 中文: 其他服务

**`related.title`**
- EN: Other ways we can help
- 中文: 我们还能为您做什么

**`related.intro`**
- EN: Life insurance and annuities, compared and explained the same way.
- 中文: 寿险与年金，同样为您比较、讲清楚。

---

## 13. Closing call to action

**`cta.title`**
- EN: Start with a conversation
- 中文: 从一次交流开始

**`cta.body`**
- EN: Tell us who needs coverage and which doctors matter to you. We’ll compare the plans that may fit, with no pressure to decide.
- 中文: 告诉我们谁需要保险、哪些医生对您很重要。我们会为您比较可能适合的计划，绝不催促您做决定。

**`cta.primary`**
- EN: Talk with us
- 中文: 联系我们

**`cta.phone`**
- EN: Call
- 中文: 致电

---

## 14. Disclosures (page footnote)

**`disclosures.title`**
- EN: Important information
- 中文: 重要信息

**`disclosures.items`**

| EN | 中文 |
|---|---|
| Asset One Insurance is an insurance agency licensed in Washington State ([PLACEHOLDER] License no.). Plans are issued by the insurance companies we represent, not by Asset One Insurance. Benefits, networks, premiums and availability vary by insurer, county and year. | Asset One Insurance 是在华盛顿州持牌的保险代理机构（[PLACEHOLDER] 执照编号）。计划由我们代理的保险公司签发，而非 Asset One Insurance。福利、医疗网络、保费和供应情况因保险公司、县和年份而异。 |
| We do not offer every plan available in your area. Any information we provide is limited to those plans we do offer in your area. Please contact Medicare.gov or 1-800-MEDICARE to get information on all of your options. | 我们并未提供您所在地区的所有计划。我们提供的任何信息仅限于我们在您所在地区提供的计划。如需了解您的全部选择，请访问 Medicare.gov 或致电 1-800-MEDICARE。 |
| Asset One Insurance is not connected with or endorsed by the U.S. government or the federal Medicare program. | Asset One Insurance 与美国政府或联邦 Medicare 计划没有关联，亦未获其认可。 |
| Eligibility for premium tax credits is determined by Washington Healthplanfinder and depends on household income and other factors. | 保费税收抵免的资格由 Washington Healthplanfinder 认定，取决于家庭收入及其他因素。 |
| Enrollment dates and rules described on this page are general and may change. This page is general information, not legal or tax advice. | 本页所述的投保日期和规则仅为一般性说明，可能发生变化。本页为一般性信息，不构成法律或税务建议。 |

---
## Visual specs

### V0 · Situation chips (reused)
`TypeCards.astro`: five situations plus "All four"; four cards in one row on desktop.

### V1 · How costs are shared over a year (new: `src/components/viz/CostSharing.astro`)
Three bars, one per phase (until the deductible · after the deductible · after the out-of-pocket maximum). Each bar is split: solid Deep Sky = you pay, pale hatched Sky = your plan pays. Shares are schematic (all · some · none) with no amounts and a visible "not to scale" note. The takeaway sentence sits above in text. On phones the bars turn horizontal and stack. Bars grow in on reveal; static under reduced motion.

### V2 · Medicare Advantage or a supplement (reused)
`CompareTable.astro` with two columns (fixed table layout keeps them equal).

## Photo briefs

| Slot | Now (fallback) | Brief |
|---|---|---|
| `healthHero` | `couple-park-meditation.jpg` (homepage Health card) | Everyday wellbeing, not medical: a parent and child walking a Bellevue park trail, or a couple in their 60s on a lakeside path. No hospitals, stethoscopes or clipboards. Headline room on the left third |
| `processHealth` | `advisor-office-lounge.jpg` (homepage Investment Growth stage) | Advisor and client at a laptop comparing plans, natural office light. Shown under a deep blue tint |

## Saved for Insurance & You

From doc 07 §8: HMO vs PPO vs EPO in depth · Metal tiers (Bronze, Silver, Gold, Platinum) · High-deductible plans and HSAs · Medicare basics (Parts A, B, C and D) · Open and special enrollment, with examples.

## Open questions

1. **[CONFIRM] Plan types offered:** individual and family? small business group? Medicare Advantage? Medicare Supplement? Part D? Remove any card Asset One doesn't sell.
2. **[CONFIRM] Washington Healthplanfinder:** is Asset One (or its agents) a certified broker? The FAQ says "We'll help you check and apply."
3. **[CONFIRM] Medicare:** are agents certified with the carriers for the current plan year (AHIP and carrier certification)? CMS rules then also apply to how this page and any Medicare leads are handled, including the disclaimer in §14.
4. **[CONFIRM] Ongoing service:** step 5 promises help with coverage and bill questions during the year. Is that offered?
5. **[CONFIRM] Spoken languages, meeting options, compensation, licence number, compliance reviewer** (same as Life Insurance).
6. **Brand fit:** the logo's descriptor reads "Life Insurance and Annuities" (doc 05). Health insurance now has a full page; confirm the brand line still fits.
