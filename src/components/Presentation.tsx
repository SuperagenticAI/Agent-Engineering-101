import { AnimatePresence, motion } from 'framer-motion';
import { slides } from '../data/slides';
import { SlideRenderer } from './SlideRenderer';

interface PresentationProps {
  currentSlide: number;
  direction: number;
  onStart: () => void;
}

const variants = {
  enter: (d: number) => ({
    opacity: 0,
    x: d > 0 ? 60 : -60,
    scale: 0.98,
  }),
  center: { opacity: 1, x: 0, scale: 1 },
  exit: (d: number) => ({
    opacity: 0,
    x: d > 0 ? -60 : 60,
    scale: 0.98,
  }),
};

export function Presentation({ currentSlide, direction, onStart }: PresentationProps) {
  const slide = slides[currentSlide - 1];
  return (
    <div className="relative h-full w-full overflow-hidden" style={{ zIndex: 1 }}>
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={slide.id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.45, ease: 'easeOut' as const }}
          className="absolute inset-0"
        >
          <SlideRenderer slide={slide} onStart={onStart} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
