# Asset One Insurance — website

Bilingual (English / 简体中文) marketing site for Asset One Insurance, Bellevue, WA.
Built with [Astro](https://astro.build) 4 as a static site. The homepage follows
design direction **2a, "Shoreline with life-stage selector"**.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321  (Chinese: /zh/)
npm run build    # static output in dist/
```

Requires Node 18.14 or newer.

## Where things live

| Path | What it is |
|---|---|
| `src/i18n/content.ts` | All copy (EN + 中文), contact details, and photo slots |
| `content-packs/` | Page copy decks (EN + 中文) for inner pages, ready to move into `content.ts` |
| `src/styles/global.css` | Design tokens (colours, type, spacing, motion), buttons, reveal animation |
| `src/components/` | Header, Hero, PageHero (inner pages), LifeStages (selector), Products, Footer, LogoMark, Photo |
| `src/components/service/` | Sections shared by every Services page: Basics, TypeCards (goal chips + cards), CompareTable (Low/Medium/High), FeatureGrid, Process, Faq, WhereItFits, ClosingCta, Disclosures. Each takes its copy as a `t` prop (shapes in `src/i18n/service-types.ts`) |
| `src/components/life/`, `health/`, `annuities/` | Page assemblers for each Services page (plus Life's BusinessPlanning section) |
| `src/components/news/` | News index and article page, BandHero (compact dark hero), ArticleCard, ArticleCover (typographic cover) |
| `src/content/news/{en,zh}/` | News articles as Markdown, one file per language with the same filename (= URL slug). Schema in `src/content/config.ts`; how-to in `content-packs/news.md` |
| `src/components/viz/`, `src/components/guides/` | Charts and a tabbed section for a future Insurance & You guide on cash value (copy in `src/i18n/guides/cash-value.ts`). Not on any page yet |
| `src/i18n/life-insurance.ts`, `health-insurance.ts`, `annuities.ts` | Services page copy (EN + 中文), from the matching `content-packs/services-*.md` |
| `src/i18n/news.ts` | News page copy and the reading-time helper |
| `src/scripts/motion.ts` | Scroll reveals and hero parallax |
| `src/pages/index.astro`, `src/pages/zh/index.astro` | English and Chinese homepage routes |
| `src/pages/services/*.astro` (+ `zh/`) | Life Insurance, Health Insurance and Annuities pages |
| `src/pages/news/` (+ `zh/`) | `/news/` and `/news/<slug>/` |
| `public/brand/` | Logo: original PNG plus vector mark (`asset-one-mark.svg`, `-reversed.svg` for dark grounds) |

## Adding photos

1. Put the image files in `public/images/` (e.g. `public/images/hero.jpg`).
2. In `src/i18n/content.ts`, set the matching `src` in `photos`, e.g.
   `hero: { src: '/images/hero.jpg', caption: '…' }`.

Until a `src` is set, each slot shows a striped placeholder with a caption
describing the intended shot.

## Motion

- Hero: photo settles from 1.04× to 1× over 2.4s; parallax at 0.85× scroll speed;
  headline lines rise from a mask, then the lead and buttons fade up; animated scroll cue.
- Header: turns solid Cloud White after 80px of scroll and tightens from 96px to 76px.
- Life-stage selector: ~300ms crossfade, photo drifts in 8px, text settles in.
- Cards and section headings: rise 16px and fade in on scroll, staggered by 100ms.
  Cards lift 2px on hover with a 1.03× photo zoom.
- Services dropdown and mobile menu animate open; the mobile menu wipes down with staggered links.
- `prefers-reduced-motion` turns all of this off.

## Still to do

- Photography (hero, 5 life stages, 3 product cards).
- Licence number in `contact.license` (`src/i18n/content.ts`).
- Final body copy from the content packs; native review of the draft Chinese.
- Newsletter: the form validates and shows success/error states but is **not
  connected to a mailing service yet** (see the TODO in `Footer.astro`).
- Inner pages: Life Insurance, Health Insurance, Annuities and News are built.
  Services overview, Insurance & You, About, Contact and the legal pages still 404.
- Health Insurance and Annuities: open [CONFIRM] items in their content packs
  (plan types offered, Medicare and marketplace certification, variable annuities).
- News: tax review of the five articles (fact-check flags in `content-packs/news.md`),
  publication dates and bylines.
