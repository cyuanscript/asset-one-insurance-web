/**
 * Shapes shared by every Services page (Life, Health, Annuities).
 *
 * Each page keeps its own copy file (life-insurance.ts, health-insurance.ts,
 * annuities.ts) but the sections are built from the same components in
 * src/components/service/, which accept these shapes as props.
 */

export type Link = { label: string; href: string };

export type HeroCopy = {
  eyebrow: string;
  title: string[];
  lead: string;
  primary: string;
  secondary: string;
};

export type BasicsCopy = {
  eyebrow: string;
  title: string;
  body: string[];
  checklistTitle: string;
  checklist: string[];
};

export type TypeCard = {
  id: string;
  name: string;
  summary: string;
  bullets?: string[];
  note?: string;
  mayFit: string;
  weigh: string;
};

export type TypesCopy = {
  eyebrow: string;
  title: string;
  intro: string;
  labels: { mayFit: string; weigh: string };
  goalsLabel: string;
  /** "All four", "All three"… */
  goalsAll: string;
  allNote: string;
  goals: { key: string; label: string; highlights: string[]; note: string; link?: Link }[];
  cards: TypeCard[];
};

export type CompareCopy = {
  eyebrow: string;
  title: string;
  takeaway: string;
  caption: string;
  columns: string[];
  /** Words for levels 0–3, e.g. None / Low / Medium / High */
  levels: string[];
  legend: string;
  rows: { label: string; cells: { level?: number; text: string }[] }[];
  footnote?: string;
};

export type FeatureGridCopy = {
  eyebrow: string;
  title: string;
  intro: string;
  items: { name: string; body: string }[];
};

export type ProcessDetail = {
  /** Which step (1-based) this panel zooms in on */
  step: number;
  title: string;
  intro?: string;
  items: string[];
  numbered?: boolean;
  outro?: string;
};

export type ProcessCopy = {
  eyebrow: string;
  title: string;
  intro: string;
  stepLabel: string;
  steps: { title: string; body: string }[];
};

export type FaqCopy = {
  eyebrow: string;
  title: string;
  intro: string;
  items: { q: string; a: string }[];
};

export type FitsCopy = {
  eyebrow: string;
  title: string;
  intro: string;
  /** `stage` is the index into the homepage life-stage selector */
  stageLinks: { stage: number; label: string }[];
  relatedEyebrow: string;
  relatedTitle: string;
  relatedIntro: string;
};

export type CtaCopy = {
  title: string;
  body: string;
  primary: string;
  phone: string;
};

export type DisclosuresCopy = {
  title: string;
  items: string[];
};
