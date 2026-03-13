import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SlideLayoutProps {
  children: ReactNode;
  className?: string;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

export const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' as const },
  },
};

export function SlideLayout({ children, className = '' }: SlideLayoutProps) {
  return (
    <motion.div
      className={`relative h-full w-full flex flex-col items-center justify-center overflow-hidden ${className}`}
      style={{ padding: 'clamp(2rem, 5vh, 5rem) clamp(3rem, 6vw, 8rem)' }}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.div>
  );
}
