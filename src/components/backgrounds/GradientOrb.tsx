import { motion } from 'framer-motion';

interface GradientOrbProps {
  color?: string;
  size?: number;
  x?: string;
  y?: string;
  delay?: number;
}

export function GradientOrb({
  color = 'rgba(0, 212, 255, 0.15)',
  size = 400,
  x = '50%',
  y = '50%',
  delay = 0,
}: GradientOrbProps) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${color}, transparent 70%)`,
        filter: 'blur(60px)',
        transform: 'translate(-50%, -50%)',
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.5, 0.8, 0.5],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}
