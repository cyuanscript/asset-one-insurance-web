# Content pack: Life Insurance

| | |
|---|---|
| **Route** | `/services/life-insurance/` (EN) · `/zh/services/life-insurance/` (中文) |
| **Status** | Draft v1, 2026-11-11. English ready for client review; Chinese is a draft translation and needs a native review |
| **Voice** | Same as the homepage: plain language, calm, no pressure. "May fit" and "can help", never "best" or "guaranteed" without a qualifier |
| **Terminology** | Matches `src/i18n/content.ts`: 定期寿险, 终身寿险, 指数型万能寿险, 第二身故寿险, 保险公司, 现金价值 |

Items marked **[CONFIRM]** need an answer from Asset One before the copy goes live (all collected in [Open questions](#open-questions)).
Section keys (e.g. `hero.title`) are suggested names for a `lifeInsurance` object in `content.ts`.

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
- 中文: 定期与终身寿险，跨多家保险公司比较，用浅显的语言讲清楚，帮助您选择适合家庭和预算的保障。

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
  1. Life insurance pays a sum of money, called the death benefit, to the people you name when you pass away. Families use it to keep up with the mortgage, cover everyday costs, pay off debts, fund a child's education or pass on an inheritance. Some policies also build cash value you can use while you're living.
  2. The right policy depends on how long others will rely on you, what you want the money to do, and what fits comfortably in your budget now and later. We start there, not with a product.
- 中文:
  1. 寿险会在您身故后，向您指定的受益人支付一笔钱，称为身故保险金。许多家庭用它继续偿还房贷、支付日常开支、还清债务、资助孩子的教育，或留下一笔遗产。有些保单还会累积现金价值，您在世时也可以使用。
  2. 适合的保单取决于家人需要依靠您多久、您希望这笔钱发挥什么作用，以及现在和将来都能轻松负担的预算。我们从这些问题开始，而不是从产品开始。

**`basics.checklistTitle`**
- EN: It may be worth a look if…
- 中文: 如果符合以下情况，不妨了解一下……

**`basics.checklist`**

| EN | 中文 |
|---|---|
| A partner, children or parents rely on your income | 伴侣、孩子或父母依靠您的收入生活 |
| You have a mortgage or other debts you wouldn't want to leave behind | 您有房贷或其他不希望留给家人的债务 |
| You own a business, or a partner relies on you to keep it running | 您拥有企业，或合伙人依靠您维持经营 |
| You'd like to leave an inheritance, or a gift to a cause you care about | 您希望留下遗产，或向关心的公益事业捐赠 |
| Your coverage through work would end if you changed jobs, or may not be enough on its own | 公司提供的保障会在换工作时终止，或单靠它可能不够 |

---

## 4. Coverage types (anchor `#types`)

**`types.eyebrow`**
- EN: Coverage types
- 中文: 保障类型

**`types.title`**
- EN: Term and permanent, side by side
- 中文: 定期与终身，并排比较

**`types.intro`**
- EN: There are two broad families of life insurance. Term covers you for a set period. Permanent is designed to last your whole life and usually builds cash value. These are the options we're asked about most.
- 中文: 寿险大致分为两类。定期寿险在约定期限内提供保障；终身寿险旨在保障一生，通常会累积现金价值。以下是客户最常询问的几种。

**`types.labels`**
- EN: `mayFit: 'May fit'`, `weigh: 'Worth weighing'`
- 中文: `mayFit: '可能适合'`, `weigh: '需要权衡'`

### 4.1 Term life · 定期寿险

**summary**
- EN: Coverage for a set number of years, often 10, 20 or 30. If you pass away during the term, your beneficiaries receive the death benefit. If you outlive it, the coverage ends.
- 中文: 在约定年限内提供保障，常见为10年、20年或30年。若您在保障期内身故，受益人将获得身故保险金；若期满时您仍健在，保障即告结束。

**mayFit**
- EN: Covering the years your family relies on your income most, such as while children are young or the mortgage is outstanding.
- 中文: 覆盖家人最依赖您收入的那些年，例如孩子年幼或房贷尚未还清期间。

**weigh**
- EN: Usually the lowest premium for the most coverage, with no cash value. Buying new coverage later generally costs more, so many people choose a policy that can be converted to permanent coverage.
- 中文: 通常以最低的保费获得最高的保额，但没有现金价值。日后再购买新保单一般会更贵，因此许多人会选择可转换为终身保障的保单。

### 4.2 Whole life · 终身寿险

**summary**
- EN: Permanent coverage with a level premium and cash value that grows at a rate set in the policy. Some policies may also pay dividends, which are not guaranteed.
- 中文: 终身保障，保费固定，现金价值按保单约定的利率增长。部分保单还可能派发红利，但红利不保证。

**mayFit**
- EN: People who want lifelong coverage and predictable premiums, and value certainty over flexibility.
- 中文: 希望获得终身保障和可预期保费、更看重确定性而非灵活性的人。

**weigh**
- EN: Premiums are much higher than term for the same death benefit. Cash value builds slowly in the early years, and surrendering early can mean getting back less than you paid.
- 中文: 相同保额下，保费远高于定期寿险。早期现金价值累积较慢，提前退保可能拿回的钱少于已缴保费。

### 4.3 Indexed universal life · 指数型万能寿险

**summary**
- EN: Permanent coverage with flexible premiums. Cash value earns interest linked to a market index such as the S&P 500, up to a cap, with a floor that protects against index losses. Your money is not invested in the market directly.
- 中文: 终身保障，保费灵活。现金价值的利息与标普500等市场指数挂钩，设有收益上限，并有保底机制防范指数下跌带来的损失。您的资金并不直接投资于股市。

**mayFit**
- EN: People who want lifelong coverage with some growth potential and are comfortable reviewing the policy regularly.
- 中文: 希望获得终身保障并兼顾一定增长潜力、也愿意定期检视保单的人。

**weigh**
- EN: Caps, participation rates and policy charges can change and affect results, and charges still apply in years with no credited interest. Illustrations are projections, not promises. Underfunding or large loans can cause a policy to lapse, so it needs ongoing attention.
- 中文: 收益上限、参与率和保单费用可能调整并影响结果；即使某年没有计入利息，相关费用仍会扣除。保单演示只是预测，并非承诺。保费不足或贷款过多可能导致保单失效，因此需要持续关注。

### 4.4 Survivorship life · 第二身故寿险

**summary**
- EN: Permanent coverage on two people, usually spouses, that pays out after the second person passes away.
- 中文: 为两个人（通常是夫妻）提供的终身保障，在第二位被保险人身故后赔付。

**mayFit**
- EN: Estate and legacy planning, such as leaving an inheritance to children or a charitable gift, coordinated with your estate attorney or CPA.
- 中文: 遗产与传承规划，例如为子女留下遗产或进行慈善捐赠，并与您的遗产律师或会计师协同安排。

**weigh**
- EN: It doesn't provide money to the surviving spouse. Premiums are often lower than for two separate permanent policies.
- 中文: 在世的配偶无法从中获得赔付。保费通常低于分别购买两份终身寿险。

**`types.note`** (small print under the cards) **[CONFIRM]** which of these Asset One offers
- EN: We also help with guaranteed universal life, final expense coverage, and business uses such as key person and buy-sell funding.
- 中文: 我们也提供保证型万能寿险、身后事费用保险，以及关键人保险、股权买卖协议资金等企业用途的方案。

---

## 5. Term vs permanent at a glance

**`compare.title`**
- EN: At a glance
- 中文: 一览对比

**`compare.caption`** (visually hidden table caption)
- EN: Comparison of term and permanent life insurance
- 中文: 定期寿险与终身寿险对比

| Row · 项目 | Term · 定期 | Permanent · 终身 |
|---|---|---|
| How long it lasts · 保障期限 | A set period, often 10–30 years · 约定期限，常见10至30年 | For life, as long as premiums are paid as required · 终身，只要按要求缴纳保费 |
| Premium · 保费 | Lower to start · 起步较低 | Higher · 较高 |
| Cash value · 现金价值 | None · 无 | Builds over time · 随时间累积 |
| Flexibility · 灵活性 | Can often be converted to permanent · 通常可转换为终身保单 | Varies; universal life allows flexible premiums · 因产品而异；万能寿险保费可灵活调整 |
| Often used for · 常见用途 | Income replacement, the mortgage, young families · 替代收入、房贷、年轻家庭 | Legacy, estate planning, lifelong needs · 传承、遗产规划、终身需求 |

---

## 6. How much coverage

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

---

## 7. Optional riders

**`riders.eyebrow`**
- EN: Riders
- 中文: 附加条款

**`riders.title`**
- EN: Features you can add
- 中文: 可附加的保障

**`riders.intro`**
- EN: Riders add features to a policy, sometimes at an extra cost. Availability and terms vary by carrier and state.
- 中文: 附加条款可以为保单增加功能，有些需要额外付费。是否提供及具体条款因保险公司和州而异。

| Name · 名称 | EN | 中文 |
|---|---|---|
| Accelerated death benefit · 提前给付身故保险金 | Lets you receive part of the death benefit early if you're diagnosed with a qualifying terminal, chronic or critical illness. | 若确诊符合条件的末期、慢性或重大疾病，可提前领取部分身故保险金。 |
| Waiver of premium · 豁免保费 | Keeps the policy in force without premiums if you become disabled and can't work, as defined in the rider. | 若您因残疾无法工作（以条款定义为准），无需缴纳保费，保单继续有效。 |
| Long-term care · 长期护理 | Lets you use part of the death benefit to pay for qualifying long-term care. | 可动用部分身故保险金支付符合条件的长期护理费用。 |
| Child term · 子女定期保障 | Adds a small amount of term coverage for your children to your own policy. | 在您的保单上为子女附加少量定期保障。 |
| Conversion · 转换权 | Lets you change term coverage to permanent without new health questions, within the deadlines set in the policy. | 在保单规定的期限内，无需重新回答健康问题即可将定期保障转换为终身保障。 |

---

## 8. How we work

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
| 1 | A conversation | A relaxed first meeting in Bellevue, by phone or by video, in English or 中文. We learn about your family, goals and budget. **[CONFIRM]** spoken languages | 初次交流 | 在贝尔维尤面谈，或通过电话、视频，中英文皆可。我们会了解您的家庭、目标和预算。 |
| 2 | Needs review | We estimate how much coverage may fit and which types are worth comparing. | 需求分析 | 我们会估算可能适合的保额，以及值得比较的保障类型。 |
| 3 | Compare carriers | As an independent agency, we compare quotes and policy features from several insurers and explain the differences side by side. **[CONFIRM]** independent agency | 比较保险公司 | 作为独立保险代理机构，我们会比较多家保险公司的报价和保单条款，并逐项讲解差异。 |
| 4 | Apply and underwrite | We help you complete the application, prepare for underwriting and keep you updated until the insurer decides. | 投保与核保 | 我们协助您填写投保申请、准备核保，并随时告知进展，直到保险公司做出决定。 |
| 5 | Review over time | We check in as life changes, such as a new child, a new home or retirement, and review permanent policies regularly. | 定期检视 | 在您迎来新生儿、购置新居或退休等人生变化时，我们会主动联系，并定期检视终身保单。 |

---

## 9. Applying: what to expect

**`apply.title`**
- EN: What to expect when you apply
- 中文: 投保时会经历什么

**`apply.items`**

| EN | 中文 |
|---|---|
| The application asks about your health, family medical history, occupation, travel and lifestyle. | 投保申请会询问您的健康状况、家族病史、职业、出行和生活习惯。 |
| Depending on your age and the coverage amount, the insurer may ask for a short medical exam, lab work or records from your doctor. Some policies can be approved without an exam. | 视年龄和保额而定，保险公司可能要求简短体检、化验或调取病历。有些保单无需体检即可批准。 |
| Underwriting can take anywhere from a few days to several weeks. Your premium depends on the health rating the insurer assigns. | 核保可能需要几天到数周不等。保费取决于保险公司评定的健康等级。 |
| Coverage begins once the policy is approved and issued and the first premium is paid. | 保单获批并签发、且首期保费缴清后，保障即开始生效。 |

---

## 10. FAQ

**`faq.eyebrow`**
- EN: Questions
- 中文: 常见问题

**`faq.title`**
- EN: Common questions
- 中文: 大家常问的问题

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

**Q3**
- EN: I'm not a US citizen. Can I still apply?
- A: Many insurers offer coverage to permanent residents and to many visa holders living in the US. Requirements vary by carrier, visa type and how long you've lived here, so we'll check which options fit your situation.
- 中文: 我不是美国公民，也能投保吗？
- 答: 许多保险公司为永久居民和不少在美持签证居住的人士提供保障。具体要求因保险公司、签证类型和在美居住时间而异，我们会帮您确认适合的选择。

**Q4**
- EN: Is the death benefit taxed?
- A: Under current federal law, beneficiaries generally receive life insurance death benefits free of income tax, though there are exceptions, and estate tax may be a factor for larger estates. Please confirm your situation with a tax professional.
- 中文: 身故保险金需要缴税吗？
- 答: 根据现行联邦法律，受益人领取的寿险身故保险金一般无需缴纳所得税，但也有例外；对于较大的遗产，遗产税可能需要考虑。请向税务专业人士确认您的具体情况。

**Q5**
- EN: Can I use the cash value while I'm alive?
- A: With permanent policies you can usually borrow against or withdraw from the cash value. Loans accrue interest, and both loans and withdrawals reduce the cash value and death benefit and may have tax consequences. If a policy lapses with a loan outstanding, the loan may become taxable.
- 中文: 在世时可以使用现金价值吗？
- 答: 终身保单通常可以用现金价值贷款或部分提取。贷款会产生利息，贷款和提取都会减少现金价值和身故保险金，并可能产生税务影响。若保单在贷款未还清时失效，该贷款可能需要缴税。

**Q6** **[CONFIRM]** compensation model and any fees
- EN: How are you paid?
- A: Like most insurance agencies, we're typically paid a commission by the insurer whose policy you choose. We're happy to explain how compensation works for any policy we recommend.
- 中文: 你们如何收费？
- 答: 和大多数保险代理机构一样，我们通常由您所选保单的保险公司支付佣金。对于我们推荐的任何保单，我们都乐意说明报酬是如何计算的。

**Q7**
- EN: What happens if I miss a premium payment?
- A: Most policies have a grace period, often 30 or 31 days. Permanent policies with cash value may draw on it to cover premiums for a time. We'll help you understand your options before your coverage is at risk.
- 中文: 如果错过缴费会怎样？
- 答: 大多数保单设有宽限期，通常为30或31天。有现金价值的终身保单可能会在一段时间内用现金价值支付保费。在保障面临风险之前，我们会帮您了解可选的做法。

**Q8**
- EN: Can I change my policy later?
- A: Often, yes. Depending on the policy, you may be able to convert term coverage, adjust premiums on a universal life policy, update beneficiaries or add coverage. We'll review what's possible with you as life changes.
- 中文: 以后可以调整保单吗？
- 答: 很多情况下可以。视保单而定，您可能可以转换定期保障、调整万能寿险的保费、更新受益人或增加保额。人生发生变化时，我们会和您一起检视可行的调整。

---

## 11. Where it fits (cross-links)

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

## 12. Closing call to action

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

## 13. Disclosures (page footnote)

**[CONFIRM]** with Asset One's compliance contact before launch.

- EN:
  1. Asset One Insurance is an insurance agency licensed in Washington State ([PLACEHOLDER] License no.). Policies are issued by the insurance companies we represent, not by Asset One Insurance. Coverage, features, riders and costs vary by insurer and state and are subject to underwriting approval. Guarantees are based on the claims-paying ability of the issuing insurer.
  2. Indexed universal life insurance is not an investment in the stock market or in any index. Index-linked interest is subject to caps, participation rates and other limits, which may change. Policy illustrations are hypothetical and not guaranteed. Policy loans and withdrawals reduce cash value and the death benefit, may cause the policy to lapse and may have tax consequences.
  3. This page is general information, not tax, legal or investment advice. Please consult a qualified tax or legal professional about your situation.
- 中文:
  1. Asset One Insurance 是在华盛顿州持牌的保险代理机构（[PLACEHOLDER] 执照号码）。保单由我们代理的保险公司签发，而非由 Asset One Insurance 签发。保障范围、功能、附加条款和费用因保险公司和州而异，并须经核保批准。各项保证以签发保险公司的理赔能力为基础。
  2. 指数型万能寿险并非对股市或任何指数的投资。指数挂钩利息受收益上限、参与率及其他限制的约束，且可能调整。保单演示为假设情形，并不保证。保单贷款和提取会减少现金价值和身故保险金，可能导致保单失效，并可能产生税务影响。
  3. 本页内容仅为一般信息，不构成税务、法律或投资建议。请就您的具体情况咨询合格的税务或法律专业人士。

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

1. Hero (§2)
2. The basics + checklist (§3)
3. Coverage types, four cards (§4)
4. At a glance table (§5)
5. How much coverage (§6), with `lifeProcess` photo alongside
6. Riders (§7)
7. How we work, five steps (§8)
8. Applying (§9)
9. FAQ, as accordions (§10)
10. Where it fits + other services (§11)
11. Closing CTA (§12)
12. Disclosures (§13), then the site footer

Sections 3, 4, 6, 7, 8 and 10 have eyebrow + title + intro, so they can use `SectionHeading.astro` as is.

---

## Open questions

1. **Product range:** does Asset One offer guaranteed universal life, final expense, and business coverage (key person, buy-sell)? Remove `types.note` items that don't apply.
2. **Independent agency:** is "independent agency that compares several insurers" accurate? Can the site name the carriers you're appointed with? (A logo strip would help trust.)
3. **Spoken languages:** Mandarin, Cantonese or both? The process step currently says "in English or 中文".
4. **Meetings:** in person at the Bellevue office, by phone and by video, all available?
5. **Compensation:** commission only, or are there planning fees? FAQ Q6 assumes commission only.
6. **Licence number** for the disclosure (same open item as `contact.license`).
7. **Compliance review:** who signs off on the disclosures and the IUL wording? Any carrier marketing rules to follow?
8. **Asset One Wealth Management:** should this page mention coordinating with the sibling firm (e.g. in §11), and does that need its own affiliation disclosure?
