import { motion } from 'framer-motion';
import { BarChart3, Brain, TrendingUp, ArrowRight } from 'lucide-react';
import { GradientOrb } from '../backgrounds/GradientOrb';
import { SlideLayout, item } from '../visuals/SlideLayout';

const pillars = [
  {
    icon: BarChart3, title: 'Evaluation',
    items: ['Define success criteria up front', 'Test behavior, not just outputs', 'Automated feedback loops', 'Use LLM-as-judge for nuance'],
  },
  {
    icon: Brain, title: 'Memory',
    items: ['Short-term vs long-term design', 'State boundaries matter', 'Personalization vs confusion', 'Retrieval strategy is critical'],
  },
  {
    icon: TrendingUp, title: 'Optimization',
    items: ['Structured improvement process', 'Metric-driven iteration', 'Beyond endless manual tweaks', 'Systematic, not random'],
  },
];

export function EvalsMemorySlide() {
  return (
    <SlideLayout>
      <GradientOrb color="rgba(255,255,255,0.04)" size={700} x="50%" y="45%" />

      <motion.h2 variants={item}
        className="relative z-10 text-5xl md:text-6xl font-black text-center mb-4 leading-tight max-w-4xl"
      >
        You can't prompt your way into <span className="gradient-text-green">reliability</span>
      </motion.h2>

      <motion.p variants={item} className="relative z-10 text-xl text-text-secondary text-center mb-14 max-w-xl">
        Reliability comes from evaluation loops, memory design, and optimization.
      </motion.p>

      <motion.div variants={item} className="relative z-10 grid grid-cols-3 gap-6 max-w-5xl w-full">
        {pillars.map((p, pi) => (
          <motion.div
            key={p.title}
            className="glass-strong p-7 relative overflow-hidden cursor-default"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + pi * 0.15, type: 'spring' }}
            whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(255,255,255,0.05)' }}
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl bg-white/60" />
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-white/8">
              <p.icon size={28} className="text-white/90" />
            </div>
            <h3 className="text-2xl font-black mb-5 text-white">{p.title}</h3>
            <div className="space-y-3">
              {p.items.map((t, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full mt-2.5 shrink-0 bg-white/70" />
                  <span className="text-base text-text-secondary">{t}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={item} className="relative z-10 flex items-center gap-4 mt-12 font-mono">
        {['Build', 'Evaluate', 'Optimize', 'Repeat'].map((s, i) => (
          <span key={s} className="flex items-center gap-4">
            <motion.span className={`glass-sm px-5 py-2.5 text-base font-bold ${s === 'Repeat' ? 'text-white' : 'text-text-secondary'}`} whileHover={{ scale: 1.08 }}>
              {s}
            </motion.span>
            {i < 3 && (
              <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}>
                <ArrowRight size={18} className="text-text-muted" />
              </motion.span>
            )}
          </span>
        ))}
      </motion.div>
    </SlideLayout>
  );
}
