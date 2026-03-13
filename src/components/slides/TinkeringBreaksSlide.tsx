import { motion } from 'framer-motion';
import { X, Lightbulb } from 'lucide-react';
import { GradientOrb } from '../backgrounds/GradientOrb';
import { SlideLayout, item } from '../visuals/SlideLayout';

const reasons = [
  'Models do not read your mind',
  'Context changes between calls',
  'Retrieval is noisy and unreliable',
  'Tool outputs are unpredictable',
  'Memory can help — or hurt',
  'Models evolve over time',
];

export function TinkeringBreaksSlide() {
  return (
    <SlideLayout>
      <GradientOrb color="rgba(239,68,68,0.08)" size={600} x="80%" y="40%" />
      <GradientOrb color="rgba(168,85,247,0.06)" size={500} x="15%" y="25%" delay={1} />

      <motion.h2 variants={item}
        className="relative z-10 text-5xl md:text-6xl font-black text-center mb-16 leading-tight max-w-4xl"
      >
        Why prompts alone are{' '}
        <span className="gradient-text-fire">not enough</span>
      </motion.h2>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl w-full items-center">
        {/* Left — reasons */}
        <div className="space-y-4">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-4 glass-sm px-5 py-4 cursor-default"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
              whileHover={{ x: 8, boxShadow: '0 0 20px rgba(239,68,68,0.08)' }}
            >
              <div className="w-9 h-9 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                <X size={16} className="text-red-400" />
              </div>
              <span className="text-lg text-text-secondary">{r}</span>
            </motion.div>
          ))}

          {/* Final positive point */}
          <motion.div
            className="flex items-center gap-4 glass-strong neon-glow-blue px-5 py-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.4 }}
          >
            <div className="w-9 h-9 rounded-lg bg-neon-blue/15 flex items-center justify-center shrink-0">
              <Lightbulb size={16} className="text-neon-blue" />
            </div>
            <span className="text-lg text-text-primary font-bold">Reliability requires intentional design</span>
          </motion.div>
        </div>

        {/* Right — quote card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.7, type: 'spring' }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/15 to-neon-pink/5 blur-3xl rounded-3xl" />
            <div className="relative glass-strong neon-glow-purple p-12 text-center">
              <div className="text-7xl gradient-text font-black leading-none mb-6">"</div>
              <p className="text-4xl font-black leading-snug mb-6">
                Models won't
                <br />read <span className="gradient-text">your mind.</span>
              </p>
              <div className="w-16 h-[2px] bg-gradient-to-r from-neon-purple to-neon-pink mx-auto mb-6" />
              <p className="text-xl text-text-secondary">
                Without structure, every<br />improvement is a coin flip.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
}
