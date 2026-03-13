import { motion } from 'framer-motion';

interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = (current / total) * 100;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-white/[0.03]">
      <motion.div
        className="h-full relative"
        style={{
          background: 'linear-gradient(90deg, #00d4ff, #a855f7, #ec4899)',
        }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Glow effect at the tip */}
        <motion.div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0,212,255,0.6), transparent 70%)',
            filter: 'blur(4px)',
          }}
        />
      </motion.div>
    </div>
  );
}
