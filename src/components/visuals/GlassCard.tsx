import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  delay?: number;
}

export function GlassCard({ children, className = '', glowColor, delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      className={`glass p-7 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={
        glowColor
          ? { boxShadow: `0 0 35px ${glowColor}`, scale: 1.02 }
          : { scale: 1.02 }
      }
    >
      {children}
    </motion.div>
  );
}
