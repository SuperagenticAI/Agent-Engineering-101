export type SlideType =
  | 'hero'
  | 'speaker'
  | 'problem'
  | 'what-is-agent'
  | 'how-we-build'
  | 'tinkering-breaks'
  | 'why-engineering'
  | 'types'
  | 'evals-memory'
  | 'dspy-gepa'
  | 'google-ecosystem'
  | 'resilient'
  | 'closing';

export interface SlideLink {
  label: string;
  url: string;
}

export interface SlideData {
  id: number;
  type: SlideType;
  section: string;
  title: string;
  subtitle?: string;
  notes?: string;
}
