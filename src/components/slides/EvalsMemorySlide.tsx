import { motion } from 'framer-motion';
import { BarChart3, Brain, TrendingUp, ArrowRight } from 'lucide-react';
import { SlideLayout, item } from '../visuals/SlideLayout';

const pillars = [
  { icon: BarChart3, title: 'Evaluation', items: ['Define success criteria up front', 'Test behavior, not just outputs', 'Automated feedback loops'] },
  { icon: Brain, title: 'Memory', items: ['Short-term vs long-term design', 'State boundaries matter', 'Retrieval strategy is critical'] },
  { icon: TrendingUp, title: 'Optimization', items: ['Metric-driven iteration', 'Beyond endless manual tweaks', 'Systematic, not random'] },
];

export function EvalsMemorySlide() {
  return (
    <SlideLayout>
      <motion.h2 variants={item} className="relative z-10 text-5xl md:text-6xl font-black text-center mb-5 leading-tight max-w-4xl text-white">
        You can&apos;t prompt your way into <span className="gradient-text-green">reliability</span>
      </motion.h2>

      <motion.p variants={item} className="relative z-10 text-xl md:text-2xl text-white text-center mb-16">
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
            whileHover={{ scale: 1.03, boxShadow: '0 0 28px rgba(255,255,255,0.07)' }}
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-3xl bg-white/40" />
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-white/10" style={{ width: 52, height: 52 }}>
              <p.icon size={26} className="text-white" />
            </div>
            <h3 className="text-2xl font-black mb-6 text-white">{p.title}</h3>
            <div className="space-y-4">
              {p.items.map((t, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full mt-2.5 shrink-0 bg-white/50" />
                  <span className="text-base text-white leading-relaxed">{t}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={item} className="relative z-10 flex items-center gap-5 mt-14 font-mono">
        {['Build', 'Evaluate', 'Optimize', 'Repeat'].map((s, i) => (
          <span key={s} className="flex items-center gap-5">
            <motion.span className={`glass-sm px-6 py-3 text-base font-bold text-white`} whileHover={{ scale: 1.08 }}>
              {s}
            </motion.span>
            {i < 3 && (
              <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}>
                <ArrowRight size={18} className="text-white" style={{ opacity: 0.4 }} />
              </motion.span>
            )}
          </span>
        ))}
      </motion.div>
    </SlideLayout>
  );
}
