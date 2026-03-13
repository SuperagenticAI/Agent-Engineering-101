import { motion } from 'framer-motion';
import {
  Target, FileCode, Brain, TestTube, ShieldAlert, RefreshCw, Eye, TrendingUp,
} from 'lucide-react';
import { GradientOrb } from '../backgrounds/GradientOrb';
import { SlideLayout, item } from '../visuals/SlideLayout';

const rules = [
  { icon: Target, text: 'Keep the task narrow', detail: 'Focused agents beat generalist ones', color: '#00d4ff' },
  { icon: FileCode, text: 'Define explicit tool contracts', detail: 'Clear schemas, typed inputs and outputs', color: '#a855f7' },
  { icon: Brain, text: 'Bound memory carefully', detail: 'Too much context is as bad as too little', color: '#22c55e' },
  { icon: TestTube, text: 'Write evals early', detail: 'Know what good looks like before optimizing', color: '#f97316' },
  { icon: ShieldAlert, text: 'Add fallbacks and retries', detail: 'Models fail — plan for it gracefully', color: '#ec4899' },
  { icon: RefreshCw, text: 'Expect model changes', detail: 'Your system should survive a model swap', color: '#06b6d4' },
  { icon: Eye, text: 'Observe in production', detail: 'Logs, traces, metrics are non-negotiable', color: '#8b5cf6' },
  { icon: TrendingUp, text: 'Optimize systematically', detail: 'Use DSPy and GEPA, not guesswork', color: '#10b981' },
];

export function ResilientSlide() {
  return (
    <SlideLayout>
      <GradientOrb color="rgba(34,197,94,0.08)" size={700} x="50%" y="45%" />

      <motion.h2 variants={item}
        className="relative z-10 text-5xl md:text-6xl font-black text-center mb-4 leading-tight max-w-4xl"
      >
        The Engineering{' '}
        <span className="gradient-text-green">Playbook</span>
      </motion.h2>

      <motion.p variants={item} className="relative z-10 text-xl text-text-secondary text-center mb-14 max-w-xl">
        8 practical rules for production-ready AI systems
      </motion.p>

      <motion.div variants={item} className="relative z-10 grid grid-cols-2 gap-4 max-w-5xl w-full">
        {rules.map((rule, i) => (
          <motion.div
            key={i}
            className="glass-sm px-6 py-5 flex items-center gap-5 cursor-default group"
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.07, duration: 0.45 }}
            whileHover={{ scale: 1.02, boxShadow: `0 0 30px ${rule.color}18` }}
          >
            <motion.div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: `${rule.color}15` }}
              whileHover={{ rotate: 8, scale: 1.1 }}
            >
              <rule.icon size={22} style={{ color: rule.color }} />
            </motion.div>
            <div className="min-w-0">
              <h3 className="text-lg font-bold group-hover:text-white transition-colors">{rule.text}</h3>
              <p className="text-base text-text-muted">{rule.detail}</p>
            </div>
            <span className="ml-auto text-sm font-mono font-bold opacity-20 shrink-0"
              style={{ color: rule.color }}>
              {String(i + 1).padStart(2, '0')}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </SlideLayout>
  );
}
