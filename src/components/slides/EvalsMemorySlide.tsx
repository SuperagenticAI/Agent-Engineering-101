import { motion } from 'framer-motion';
import { BarChart3, Brain, TrendingUp, ArrowRight } from 'lucide-react';
import { GradientOrb } from '../backgrounds/GradientOrb';
import { SlideLayout, item } from '../visuals/SlideLayout';

const pillars = [
  {
    icon: BarChart3, title: 'Evaluation', color: '#38bdf8',
    items: ['Define success criteria up front', 'Test behavior, not just outputs', 'Automated feedback loops'],
  },
  {
    icon: Brain, title: 'Memory', color: '#a78bfa',
    items: ['Short-term vs long-term design', 'State boundaries matter', 'Retrieval strategy is critical'],
  },
  {
    icon: TrendingUp, title: 'Optimization', color: '#34d399',
    items: ['Metric-driven iteration', 'Beyond endless manual tweaks', 'Systematic, not random'],
  },
];

export function EvalsMemorySlide() {
  return (
    <SlideLayout>
      <GradientOrb color="rgba(56,189,248,0.06)" size={700} x="50%" y="45%" />

      <motion.h2 variants={item}
        className="relative z-10 text-5xl md:text-6xl font-black text-center mb-5 leading-tight max-w-4xl"
      >
        You can&apos;t prompt your way into <span className="gradient-text-green">reliability</span>
      </motion.h2>

      <motion.p variants={item} className="relative z-10 text-xl md:text-2xl text-text-secondary text-center mb-16">
        Reliability comes from evaluation loops, memory design, and optimization.
      </motion.p>

      <motion.div variants={item} className="relative z-10 grid grid-cols-3 gap-8 max-w-5xl w-full">
        {pillars.map((p, pi) => (
          <motion.div
            key={p.title}
            className="glass-strong p-9 relative overflow-hidden cursor-default"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + pi * 0.15, type: 'spring' }}
            whileHover={{ scale: 1.03, boxShadow: `0 0 32px ${p.color}10` }}
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl" style={{ background: p.color }} />
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: `${p.color}12` }}>
              <p.icon size={28} style={{ color: p.color }} />
            </div>
            <h3 className="text-2xl font-black mb-6 text-white">{p.title}</h3>
            <div className="space-y-4">
              {p.items.map((t, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full mt-2.5 shrink-0" style={{ background: p.color }} />
                  <span className="text-base text-text-secondary leading-relaxed">{t}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={item} className="relative z-10 flex items-center gap-5 mt-14 font-mono">
        {['Build', 'Evaluate', 'Optimize', 'Repeat'].map((s, i) => (
          <span key={s} className="flex items-center gap-5">
            <motion.span className={`glass-sm px-6 py-3 text-base font-bold ${s === 'Repeat' ? 'text-white' : 'text-text-secondary'}`} whileHover={{ scale: 1.08 }}>
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
