import { motion } from 'framer-motion';
import { X, Lightbulb } from 'lucide-react';
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
      <motion.h2 variants={item} className="relative z-10 text-5xl md:text-6xl font-black text-center mb-20 leading-tight max-w-5xl text-white">
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
              whileHover={{ x: 6, boxShadow: '0 0 20px rgba(255,255,255,0.06)' }}
            >
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                <X size={15} className="text-white" />
              </div>
              <span className="text-lg text-white">{r}</span>
            </motion.div>
          ))}

          <motion.div
            className="flex items-center gap-5 glass-strong px-6 py-5"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.4 }}
          >
            <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
              <Lightbulb size={15} className="text-white" />
            </div>
            <span className="text-lg text-white font-bold">Reliability requires intentional design</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.7, type: 'spring' }}
        >
          <div className="glass-strong p-14 text-center">
            <div className="text-6xl font-black text-white leading-none mb-8" style={{ opacity: 0.25 }}>&ldquo;</div>
            <p className="text-4xl font-black leading-snug mb-8 text-white">
              Models won&apos;t
              <br />read <span className="gradient-text">your mind.</span>
            </p>
            <div className="w-16 h-[1px] bg-white/30 mx-auto mb-8" />
            <p className="text-xl text-white leading-relaxed">
              Without structure, every
              <br />improvement is a coin flip.
            </p>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
}
