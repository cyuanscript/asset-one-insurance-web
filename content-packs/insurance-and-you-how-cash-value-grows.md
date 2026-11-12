# Content pack: How cash value grows (Insurance & You guide)

| | |
|---|---|
| **Route** | `/insurance-and-you/how-cash-value-grows/` (EN) · `/zh/insurance-and-you/how-cash-value-grows/` (中文) [PLACEHOLDER: slug] |
| **Status** | Parked 2026-11-12. Moved off the Life Insurance service page to keep that page short. Not built as a page yet |
| **Code that already exists** | Copy: `src/i18n/guides/cash-value.ts`. Section with tabs: `src/components/guides/CashValueGrowth.astro`. Charts: `src/components/viz/` (WholeLifeChart, PremiumFlow, CapFloorChart, DeathBenefitOptions). These render today; they just aren't on any page |
| **Source** | Global Sagacity Whole Life and IUL product guides, paraphrased (see `services-life-insurance.md`, "What we didn't use") |

When the Insurance & You template exists, this becomes one guide: an intro paragraph, then the section below as the body. The Life Insurance page can link to it from the Whole life and IUL cards.

---

## How the cash value grows

Two tabs. Each tab = a one-sentence lead, one or two visuals, three key points, and a closed "Go deeper" expander.

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

### Tab: Whole life

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

### Tab: Indexed universal life

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


---

## Visuals

Same rules as the service page: schematic SVG with no axis numbers, a one-line takeaway above each chart, `prefers-reduced-motion` shows the final state.

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

### Also parked: V7 · Two risks (life insurance vs. annuity)

Cut from the Life Insurance page on 2026-11-12. The idea (life insurance protects against life being shorter than planned, an annuity against it being longer) may suit the Annuities page or an Insurance & You guide on choosing between them. The v2 copy and spec are in `content-packs/archive/services-life-insurance.v2.md` (§12.1 and V7).
