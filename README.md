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
| `src/styles/global.css` | Design tokens (colours, type, spacing, motion), buttons, reveal animation |
| `src/components/` | Header, Hero, LifeStages (selector), Products, Footer, LogoMark, Photo |
| `src/scripts/motion.ts` | Scroll reveals and hero parallax |
| `src/pages/index.astro`, `src/pages/zh/index.astro` | English and Chinese routes |
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
- Inner pages (Services, Insurance & You, About, News, Contact, legal pages):
  nav links point to their future URLs and currently 404.
