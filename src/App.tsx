import { useSlideNavigation } from './hooks/useSlideNavigation';
import { Presentation } from './components/Presentation';
import { ProgressBar } from './components/ProgressBar';
import { SlideNumber } from './components/SlideNumber';
import { SectionNav } from './components/SectionNav';
import { NavigationButtons } from './components/NavigationButtons';
import { AnimatedCanvas } from './components/backgrounds/AnimatedCanvas';

export default function App() {
  const { currentSlide, direction, totalSlides, goTo, next, prev } = useSlideNavigation();

  return (
    <div className="h-full w-full relative">
      <AnimatedCanvas />
      <ProgressBar current={currentSlide} total={totalSlides} />
      <SectionNav current={currentSlide} goTo={goTo} />
      <NavigationButtons
        onPrev={prev}
        onNext={next}
        isFirst={currentSlide === 1}
        isLast={currentSlide === totalSlides}
      />
      <SlideNumber current={currentSlide} total={totalSlides} />
      <Presentation
        currentSlide={currentSlide}
        direction={direction}
        onStart={next}
      />
    </div>
  );
}
