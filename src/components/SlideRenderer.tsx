import type { SlideData } from '../types';
import { HeroSlide } from './slides/HeroSlide';
import { SpeakerSlide } from './slides/SpeakerSlide';
import { ProblemSlide } from './slides/ProblemSlide';
import { WhatIsAgentSlide } from './slides/WhatIsAgentSlide';
import { HowWeBuildSlide } from './slides/HowWeBuildSlide';
import { TinkeringBreaksSlide } from './slides/TinkeringBreaksSlide';
import { WhyEngineeringSlide } from './slides/WhyEngineeringSlide';
import { TypesSlide } from './slides/TypesSlide';
import { EvalsMemorySlide } from './slides/EvalsMemorySlide';
import { DSPyGEPASlide } from './slides/DSPyGEPASlide';
import { GoogleEcosystemSlide } from './slides/GoogleEcosystemSlide';
import { ResilientSlide } from './slides/ResilientSlide';
import { AdvancedTracksSlide } from './slides/AdvancedTracksSlide';
import { ClosingSlide } from './slides/ClosingSlide';

interface SlideRendererProps {
  slide: SlideData;
  onStart: () => void;
}

export function SlideRenderer({ slide, onStart }: SlideRendererProps) {
  switch (slide.type) {
    case 'hero': return <HeroSlide onStart={onStart} />;
    case 'speaker': return <SpeakerSlide />;
    case 'problem': return <ProblemSlide />;
    case 'what-is-agent': return <WhatIsAgentSlide />;
    case 'how-we-build': return <HowWeBuildSlide />;
    case 'tinkering-breaks': return <TinkeringBreaksSlide />;
    case 'why-engineering': return <WhyEngineeringSlide />;
    case 'types': return <TypesSlide />;
    case 'evals-memory': return <EvalsMemorySlide />;
    case 'dspy-gepa': return <DSPyGEPASlide />;
    case 'google-ecosystem': return <GoogleEcosystemSlide />;
    case 'resilient': return <ResilientSlide />;
    case 'advanced-tracks': return <AdvancedTracksSlide />;
    case 'closing': return <ClosingSlide />;
    default: return null;
  }
}
