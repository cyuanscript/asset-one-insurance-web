# Content pack: News

| | |
|---|---|
| **Routes** | `/news/` and `/news/<slug>/` (EN) · `/zh/news/` and `/zh/news/<slug>/` (中文) |
| **Status** | v1, 2026-11-12. Five articles built. **Needs a tax professional's review before launch** (see [Fact-check flags](#fact-check-flags)) and a native review of the Chinese |
| **Source** | `Weekly Articles 5.1.zip`: five bilingual Word drafts from Global Sagacity Consulting ("彼岸 TWO SHORES · U.S. Tax Basics") |
| **Where things live** | Articles: `src/content/news/en/<slug>.md` and `src/content/news/zh/<slug>.md` (same filename = same article). Page copy: `src/i18n/news.ts`. Schema: `src/content/config.ts` |

## How to add an article

1. Add `src/content/news/en/<slug>.md` and `src/content/news/zh/<slug>.md`. The filename becomes the URL in both languages.
2. Front matter (checked at build time, so a typo fails the build instead of the live page):

```yaml
title: "Headline"
dek: "One- or two-sentence standfirst. Also the meta description."
category: us-tax-basics      # add new categories in config.ts and news.ts
order: 6                     # reading order; also the big numeral on the cover
date: 2026-11-20             # optional: real publication date only
author: "Name"               # optional: leave out rather than invent
disclaimer: "The article's own note"
draft: false
```

3. Body: plain paragraphs. A line starting with `> ` becomes a pull quote.

## Articles

| # | Slug | English title | 中文标题 | Reading time (calculated) |
|---|---|---|---|---|
| 1 | `are-you-a-us-taxpayer-yet` | Are You a U.S. Taxpayer Yet? The Test Nobody Tells You About | 您已经是美国纳税人了吗？——一个很少有人告诉你的测试 | 2 min |
| 2 | `worldwide-income-taxation` | The Day Your Shanghai Rent Check Became America's Business | 从那天起，您在上海收的房租也归美国税务局管了 | 2 min |
| 3 | `fatca-fbar-disclosure` | The Forms That Turn Your Bank Account Into a Disclosure | 那些让您的银行账户“被看见”的申报表 | 2 min |
| 4 | `crs-vs-fatca` | China Is Already Telling the IRS What You Told Your Bank | 您告诉中国银行的信息，可能已经转告了美国国税局 | 2 min |
| 5 | `pfic-tax-trap` | The Ordinary Mutual Fund That Becomes a Tax Trap | 一只普通基金，如何变成一个税务陷阱 | 2 min |

## What changed from the source files

| Change | Why |
|---|---|
| **Removed** "彼岸 TWO SHORES", "Global Sagacity Consulting Inc — Content Draft" and the © Global Sagacity footer | Decided 2026-11-12: publish under Asset One Insurance with no GSC marks |
| **Kept** each article's own disclaimer, shown in a "Please note" box under the body | It's specific to each topic |
| **Replaced** the GSC footer with a general Asset One line (same meaning, new name) | `news.ts → general` |
| **"6 min read" → calculated reading time** (2 min) | The articles are ~300–330 words; "6 min" overstated it |
| **Chinese punctuation:** half-width , : ; ? ( ) and straight quotes converted to full-width ，：；？（）“” | The drafts used half-width marks; the rest of the site uses full-width in Chinese |
| **Pull quotes** (the lines in “…” / 「…」) became styled pull quotes | Same text |
| **No dates or bylines** | None in the files. Add `date` / `author` once confirmed; the pages show them automatically |
| **Order:** 1 → 5 as numbered in the files; #1 is featured as "Start here" | No publication dates to sort by |

Wording otherwise unchanged.

## Fact-check flags

These are flagged, not fixed, because the articles are the client's content. **A cross-border tax professional should review all five before launch.**

| # | Where | Issue | Suggestion |
|---|---|---|---|
| 1 | Article 4, headline (EN + 中文) | "China Is Already Telling the IRS What You Told Your Bank" is contradicted by the article's own body, which correctly says mainland China does not exchange with the U.S. under CRS (the U.S. isn't a CRS participant). | Reword, e.g. "Your Offshore Accounts Are Less Private Than You Think" / "您的境外账户，可能没有您想象的那么隐秘" |
| 2 | Article 3, pull quote | "FBAR penalties are calculated per account, per year." Since *Bittner v. United States* (2023), the **non-willful** penalty applies per report (per year), not per account. Willful penalties can still be assessed per account. | Reword, e.g. "FBAR penalties can apply for every year an account goes unreported, which is how a modest oversight becomes a five-figure problem." |
| 3 | Article 2, paragraph 2 | "China taxes residents primarily on a more territorial-leaning basis." Chinese tax residents are taxed on worldwide income by law; the article's real point is that enforcement on foreign income has historically been limited. | Reword to make the enforcement point, not a legal one |
| 4 | Article 2, paragraph 3 | GILTI: 2025 federal legislation renamed and changed it ("net CFC tested income") for tax years after 2025. | Have the reviewer confirm current terminology |
| 5 | All | Tax content on an insurance agency's site | Keep the disclaimers; consider a line on the News index that the articles are educational and Asset One doesn't give tax advice (already in the per-article note) |

## Interface copy (`src/i18n/news.ts`)

| Key | EN | 中文 |
|---|---|---|
| `hero.eyebrow` | News | 新闻 |
| `hero.title` | Notes for planning with clarity | 把规划想清楚 |
| `hero.lead` | Short, plain-language articles on the questions families bring to us, starting with U.S. tax basics for those with ties to China and Hong Kong. | 用浅显的语言，解答家庭常向我们提出的问题。首个系列：为与中国内地和香港有联系的家庭讲解美国税务基础。 |
| `latest` (featured card label) | Start here | 从这里开始 |
| `categories.us-tax-basics` | U.S. Tax Basics | 美国税务基础 |
| `noteTitle` | Please note | 温馨提示 |
| `cta.title` | Planning across two countries? | 在两个国家之间做规划？ |
| `cta.body` | Insurance is one part of a cross-border plan. We work alongside your CPA and attorney so each piece fits, and we're happy to talk it through in English or 中文. | 保险只是跨境规划中的一环。我们会与您的会计师和律师协同合作，让各个部分相互配合。欢迎用中文或英文与我们聊聊。 |

## Design notes

- **Band hero:** a shorter dark hero (`news/BandHero.astro`): the Lake Washington photo on the index; a slate ground with fine water lines on articles, so reading starts sooner.
- **Typographic covers:** no photos yet, so each card shows the article number in large serif on pale sky with water lines (`news/ArticleCover.astro`). A photo can replace it later.
- **Article page:** ~720px reading measure, larger first paragraph, scarlet-ruled pull quotes, a "Please note" box, three more articles, a closing call to action.
- **Structured data:** each article outputs schema.org `Article` JSON-LD (date and author only when set).

## Open questions

1. Publication dates and bylines for the five articles?
2. Who reviews the tax content (flags above)?
3. Should these also feed the homepage ("Latest from News") and the newsletter? The homepage section isn't built yet.
4. Category names for future articles (e.g. Life Insurance, Retirement, Health, Planning)?
