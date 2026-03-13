import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { GradientOrb } from '../backgrounds/GradientOrb';
import { SlideLayout, item } from '../visuals/SlideLayout';

const before = [
  'Single prompt in a playground',
  'Manual copy-paste testing',
  'Vibes-based iteration',
  '"It works on my machine"',
  'Undocumented behavior',
];

const after = [
  'Explicit system specification',
  'Automated evaluation suites',
  'Metric-driven feedback loops',
  'Guardrails and safety policies',
  'Orchestrated, observable systems',
];

export function WhyEngineeringSlide() {
  return (
    <SlideLayout>
      <GradientOrb color="rgba(0,212,255,0.1)" size={700} x="50%" y="50%" />

      <motion.h2 variants={item}
        className="relative z-10 text-5xl md:text-6xl font-black text-center mb-4 leading-tight max-w-4xl"
      >
        From <span className="text-text-muted line-through opacity-50">tinkering</span>{' '}
        to <span className="gradient-text">systems thinking</span>
      </motion.h2>

      <motion.p variants={item} className="relative z-10 text-xl text-text-secondary text-center mb-16 max-w-2xl">
        Agent Engineering: the discipline for building reliable, non-deterministic AI systems.
      </motion.p>

      {/* Before → After */}
      <motion.div variants={item} className="relative z-10 flex items-stretch gap-8 max-w-4xl w-full">
        {/* Before */}
        <div className="glass p-8 flex-1 relative overflow-hidden opacity-60 hover:opacity-90 transition-opacity">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent" />
          <span className="relative inline-block px-4 py-1.5 rounded-full text-sm font-bold font-mono bg-red-500/10 text-red-400 mb-6">
            BEFORE
          </span>
          <div className="relative space-y-4">
            {before.map((t, i) => (
              <motion.div key={i} className="flex items-center gap-3"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.08 }}
              >
                <span className="w-2 h-2 rounded-full bg-red-400/50 shrink-0" />
                <span className="text-lg text-text-muted">{t}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Center icon */}
        <div className="flex items-center">
          <motion.div
            className="w-20 h-20 rounded-2xl bg-gradient-to-br from-neon-blue via-neon-purple to-neon-pink flex items-center justify-center shadow-lg shadow-neon-purple/20"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.7, type: 'spring', stiffness: 180 }}
            whileHover={{ scale: 1.12, rotate: 10 }}
          >
            <Zap size={36} className="text-white" />
          </motion.div>
        </div>

        {/* After */}
        <div className="glass-strong neon-glow-blue p-8 flex-1 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-transparent" />
          <span className="relative inline-block px-4 py-1.5 rounded-full text-sm font-bold font-mono bg-neon-blue/10 text-neon-blue mb-6">
            AFTER
          </span>
          <div className="relative space-y-4">
            {after.map((t, i) => (
              <motion.div key={i} className="flex items-center gap-3"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + i * 0.08 }}
              >
                <motion.span
                  className="w-6 h-6 rounded-lg bg-neon-blue/15 flex items-center justify-center shrink-0"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.9 + i * 0.1, type: 'spring' }}
                >
                  <span className="text-neon-blue text-xs font-bold">✓</span>
                </motion.span>
                <span className="text-lg text-text-primary">{t}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.p variants={item} className="relative z-10 mt-12 text-xl text-text-muted text-center font-mono">
        Prompts are the interface. <span className="text-neon-blue font-bold">Engineering is the system.</span>
      </motion.p>
    </SlideLayout>
  );
}
