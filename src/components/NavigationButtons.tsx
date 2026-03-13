import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationButtonsProps {
  onPrev: () => void;
  onNext: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export function NavigationButtons({ onPrev, onNext, isFirst, isLast }: NavigationButtonsProps) {
  return (
    <>
      {!isFirst && (
        <motion.button
          onClick={onPrev}
          className="fixed left-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-xl glass-sm flex items-center justify-center text-text-muted hover:text-white hover:bg-white/10 transition-all"
          aria-label="Previous slide"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.15, boxShadow: '0 0 20px rgba(0,212,255,0.15)' }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft size={20} />
        </motion.button>
      )}
      {!isLast && (
        <motion.button
          onClick={onNext}
          className="fixed right-16 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-xl glass-sm flex items-center justify-center text-text-muted hover:text-white hover:bg-white/10 transition-all"
          aria-label="Next slide"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.15, boxShadow: '0 0 20px rgba(0,212,255,0.15)' }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight size={20} />
        </motion.button>
      )}
    </>
  );
}
