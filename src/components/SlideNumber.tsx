import { motion } from 'framer-motion';

interface SlideNumberProps {
  current: number;
  total: number;
}

export function SlideNumber({ current, total }: SlideNumberProps) {
  return (
    <motion.div
      className="fixed bottom-6 right-8 z-50 glass-sm px-4 py-2 font-mono text-xs"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <span className="text-neon-blue font-bold">{String(current).padStart(2, '0')}</span>
      <span className="text-text-muted mx-1.5">/</span>
      <span className="text-text-muted">{String(total).padStart(2, '0')}</span>
    </motion.div>
  );
}
