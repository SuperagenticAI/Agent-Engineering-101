import { motion, AnimatePresence } from 'framer-motion';
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
      <AnimatePresence>
        {!isFirst && (
          <motion.button
            onClick={onPrev}
            className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-1 group"
            aria-label="Previous slide"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className="w-11 h-11 rounded-xl glass-sm flex items-center justify-center text-white/50 group-hover:text-white group-hover:bg-white/10 transition-all"
              animate={{ x: [0, -4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.15, boxShadow: '0 0 20px rgba(0,212,255,0.2)' }}
            >
              <ChevronLeft size={22} />
            </motion.div>
            <span className="text-[10px] text-white/30 group-hover:text-white/60 transition-colors tracking-wider uppercase">Prev</span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isLast && (
          <motion.button
            onClick={onNext}
            className="fixed right-16 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-1 group"
            aria-label="Next slide"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className="w-11 h-11 rounded-xl glass-sm flex items-center justify-center text-white/50 group-hover:text-white group-hover:bg-white/10 transition-all"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.15, boxShadow: '0 0 20px rgba(0,212,255,0.2)' }}
            >
              <ChevronRight size={22} />
            </motion.div>
            <span className="text-[10px] text-white/30 group-hover:text-white/60 transition-colors tracking-wider uppercase">Next</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Bottom scroll hint — shown only on first slide */}
      <AnimatePresence>
        {isFirst && (
          <motion.div
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 pointer-events-none"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1.5 }}
          >
            <span className="text-[11px] text-white/40 tracking-widest uppercase">Scroll or use arrow keys</span>
            <motion.div
              className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-1 h-2 rounded-full bg-white/60"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
