import { motion } from 'framer-motion';
import {
  Target, FileCode, Brain, TestTube, ShieldAlert, RefreshCw, Eye, TrendingUp,
} from 'lucide-react';
import { GradientOrb } from '../backgrounds/GradientOrb';
import { SlideLayout, item } from '../visuals/SlideLayout';

const rules = [
  { icon: Target, text: 'Scope agents narrowly', detail: 'Specific agents outperform vague generalists' },
  { icon: FileCode, text: 'Contract every tool', detail: 'Typed inputs and outputs reduce runtime surprises' },
  { icon: Brain, text: 'Design memory deliberately', detail: 'State should help decisions, not create confusion' },
  { icon: TestTube, text: 'Start with evals', detail: 'Define success before you start tuning prompts' },
  { icon: ShieldAlert, text: 'Plan for failure paths', detail: 'Retries, fallbacks, and safe exits are part of the design' },
  { icon: RefreshCw, text: 'Assume models will change', detail: 'Your system should survive provider or model swaps' },
  { icon: Eye, text: 'Instrument production', detail: 'Logs, traces, metrics, and reviews close the loop' },
  { icon: TrendingUp, text: 'Optimize with evidence', detail: 'Use measurement and iteration, not guesswork' },
];

const ruleColors = [
  '#38bdf8', '#a78bfa', '#f472b6', '#34d399',
  '#fb923c', '#22d3ee', '#fbbf24', '#34d399',
];

export function ResilientSlide() {
  return (
    <SlideLayout>
      <GradientOrb color="rgba(52,211,153,0.06)" size={700} x="50%" y="45%" />

      <motion.h2 variants={item} className="relative z-10 text-5xl md:text-6xl font-black text-center mb-5 leading-tight max-w-4xl">
        A practical <span className="gradient-text-green">playbook</span> for reliable agents
      </motion.h2>

      <motion.p variants={item} className="relative z-10 text-xl md:text-2xl text-text-secondary text-center mb-14">
        The engineering habits that matter once agents enter production.
      </motion.p>

      <motion.div variants={item} className="relative z-10 grid grid-cols-2 gap-5 max-w-5xl w-full">
        {rules.map((rule, i) => (
          <motion.div
            key={i}
            className="glass-sm px-7 py-5 flex items-center gap-5 cursor-default group"
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.07, duration: 0.45 }}
            whileHover={{ scale: 1.02, boxShadow: `0 0 24px ${ruleColors[i]}10` }}
          >
            <motion.div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: `${ruleColors[i]}12` }}
              whileHover={{ rotate: 8, scale: 1.1 }}
            >
              <rule.icon size={22} style={{ color: ruleColors[i] }} />
            </motion.div>
            <div className="min-w-0">
              <h3 className="text-lg font-bold group-hover:text-white transition-colors">{rule.text}</h3>
              <p className="text-base text-text-muted mt-0.5">{rule.detail}</p>
            </div>
            <span className="ml-auto text-sm font-mono font-bold opacity-20 shrink-0" style={{ color: ruleColors[i] }}>
              {String(i + 1).padStart(2, '0')}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </SlideLayout>
  );
}
