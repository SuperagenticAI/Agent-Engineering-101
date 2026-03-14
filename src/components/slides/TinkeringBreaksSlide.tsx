import { motion } from 'framer-motion';
import { X, Lightbulb } from 'lucide-react';
import { GradientOrb } from '../backgrounds/GradientOrb';
import { SlideLayout, item } from '../visuals/SlideLayout';

const reasons = [
  'Models do not read your mind',
  'Context changes between calls',
  'Retrieval is noisy and unreliable',
  'Tool outputs are unpredictable',
  'Memory can help or hurt',
  'Models evolve over time',
];

export function TinkeringBreaksSlide() {
  return (
    <SlideLayout>
      <GradientOrb color="rgba(251,146,60,0.06)" size={600} x="80%" y="40%" />

      <motion.h2 variants={item} className="relative z-10 text-5xl md:text-6xl font-black text-center mb-20 leading-tight max-w-5xl">
        Why <span className="gradient-text-fire">Agentic AI</span> is different
      </motion.h2>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl w-full items-center">
        <div className="space-y-4">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-5 glass-sm px-6 py-5 cursor-default"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
              whileHover={{ x: 8, boxShadow: '0 0 24px rgba(251,146,60,0.08)' }}
            >
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0">
                <X size={16} className="text-orange-300/80" />
              </div>
              <span className="text-lg text-text-secondary">{r}</span>
            </motion.div>
          ))}

          <motion.div
            className="flex items-center gap-5 glass-strong px-6 py-5"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.4 }}
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
              <Lightbulb size={16} className="text-emerald-300/90" />
            </div>
            <span className="text-lg text-text-primary font-bold">Reliability requires intentional design</span>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 0.7, type: 'spring' }}>
          <div className="relative">
            <div className="absolute inset-0 bg-purple-500/5 blur-3xl rounded-3xl" />
            <div className="relative glass-strong p-14 text-center">
              <div className="text-7xl gradient-text font-black leading-none mb-8">&ldquo;</div>
              <p className="text-4xl font-black leading-snug mb-8">
                Models won&apos;t
                <br />read <span className="gradient-text">your mind.</span>
              </p>
              <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-8" />
              <p className="text-xl text-text-secondary leading-relaxed">
                Without structure, every
                <br />improvement is a coin flip.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
}
