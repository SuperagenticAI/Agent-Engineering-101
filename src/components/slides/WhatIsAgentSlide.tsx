import { motion } from 'framer-motion';
import { Cpu, Wrench, Brain, Shield, BarChart3, Target } from 'lucide-react';
import { GradientOrb } from '../backgrounds/GradientOrb';

const up = (d = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay: d, ease: 'easeOut' as const } },
});

const parts = [
  { icon: Target, label: 'Goal' },
  { icon: Cpu, label: 'Model' },
  { icon: Brain, label: 'Context & Memory' },
  { icon: Wrench, label: 'Tools' },
  { icon: Shield, label: 'Policies' },
  { icon: BarChart3, label: 'Evaluation' },
];

export function WhatIsAgentSlide() {
  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center overflow-hidden"
      style={{ padding: 'clamp(2rem, 4vh, 4rem) clamp(3rem, 5vw, 7rem)' }}>
      <GradientOrb color="rgba(255,255,255,0.04)" size={800} x="50%" y="40%" />

      <motion.h2 {...up(0.05)} className="relative z-10 text-5xl md:text-6xl font-black text-center mb-4 leading-tight max-w-4xl">
        An agent is not just a prompt.
        <br /><span className="gradient-text">It is a system.</span>
      </motion.h2>

      <motion.p {...up(0.15)} className="relative z-10 text-xl text-text-secondary text-center mb-16">
        A goal-driven runtime with models, tools, memory, and evaluation in a control loop.
      </motion.p>

      <motion.div {...up(0.25)} className="relative z-10 flex items-center gap-8 max-w-5xl w-full justify-center">
        <div className="glass p-6 text-center w-28 shrink-0">
          <div className="text-4xl mb-2">👤</div>
          <span className="font-mono text-sm font-bold">User</span>
        </div>

        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div key={i} className="w-2.5 h-2.5 rounded-full bg-white/70" animate={{ opacity: [0.2, 1, 0.2], scale: [0.6, 1, 0.6] }} transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.25 }} />
          ))}
        </div>

        <div className="glass-strong p-8 flex-1 max-w-2xl relative overflow-hidden">
          <div className="accent-bar bg-white/60" />
          <h3 className="text-lg font-black text-white font-mono tracking-widest text-center mb-6 mt-1">
            AGENT RUNTIME
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {parts.map((p, i) => (
              <motion.div
                key={p.label}
                className="glass-sm p-4 text-center cursor-default"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.55 + i * 0.08, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.08, boxShadow: '0 0 20px rgba(255,255,255,0.05)' }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-2 bg-white/8">
                  <p.icon size={22} className="text-white/90" />
                </div>
                <span className="text-sm font-bold">{p.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div key={i} className="w-2.5 h-2.5 rounded-full bg-white/70" animate={{ opacity: [0.2, 1, 0.2], scale: [0.6, 1, 0.6] }} transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.25 }} />
          ))}
        </div>

        <div className="glass p-6 text-center w-28 shrink-0">
          <motion.div className="text-4xl mb-2" animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 2.5, repeat: Infinity }}>⚡</motion.div>
          <span className="font-mono text-sm font-bold">Action</span>
        </div>
      </motion.div>

      <motion.div {...up(0.7)} className="relative z-10 mt-10 flex items-center gap-3 font-mono text-sm">
        {['observe', 'decide', 'act', 'evaluate'].map((s, i) => (
          <span key={s} className="flex items-center gap-3">
            <span className="glass-sm px-4 py-2 font-bold text-text-secondary">{s}</span>
            {i < 3 && <span className="text-white/70 text-lg">→</span>}
          </span>
        ))}
        <span className="text-white/70 font-bold text-lg ml-2">↻</span>
      </motion.div>
    </div>
  );
}
