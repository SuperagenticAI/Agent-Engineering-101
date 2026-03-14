import { motion } from 'framer-motion';
import { Cpu, Wrench, Brain, Shield, BarChart3, Target } from 'lucide-react';

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
      style={{ padding: 'clamp(3rem, 5vh, 5rem) clamp(4rem, 6vw, 8rem)' }}>

      <motion.h2 {...up(0.05)} className="relative z-10 text-5xl md:text-6xl font-black text-center mb-5 leading-tight max-w-4xl text-white">
        An agent is not just a prompt.
        <br /><span className="gradient-text">It is a system.</span>
      </motion.h2>

      <motion.p {...up(0.15)} className="relative z-10 text-xl md:text-2xl text-white text-center mb-20">
        A goal-driven runtime with models, tools, memory, and evaluation in a control loop.
      </motion.p>

      <motion.div {...up(0.25)} className="relative z-10 flex items-center gap-10 max-w-5xl w-full justify-center">
        <div className="glass p-6 text-center w-28 shrink-0">
          <div className="text-4xl mb-2">👤</div>
          <span className="font-mono text-sm font-bold text-white">User</span>
        </div>

        <div className="flex gap-2.5">
          {[0, 1, 2].map((i) => (
            <motion.div key={i} className="w-2 h-2 rounded-full bg-white"
              animate={{ opacity: [0.2, 1, 0.2], scale: [0.7, 1, 0.7] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.25 }} />
          ))}
        </div>

        <div className="glass-strong p-10 flex-1 max-w-2xl relative overflow-hidden">
          <div className="accent-bar bg-white/40" />
          <h3 className="text-base font-black text-white font-mono tracking-[0.22em] text-center mb-8 mt-1">
            AGENT RUNTIME
          </h3>
          <div className="grid grid-cols-3 gap-5">
            {parts.map((p, i) => (
              <motion.div
                key={p.label}
                className="glass-sm p-4 text-center cursor-default"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.55 + i * 0.08, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.07, boxShadow: '0 0 20px rgba(255,255,255,0.08)' }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 bg-white/12">
                  <p.icon size={20} className="text-white" />
                </div>
                <span className="text-sm font-bold text-white">{p.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex gap-2.5">
          {[0, 1, 2].map((i) => (
            <motion.div key={i} className="w-2 h-2 rounded-full bg-white"
              animate={{ opacity: [0.2, 1, 0.2], scale: [0.7, 1, 0.7] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.25 }} />
          ))}
        </div>

        <div className="glass p-6 text-center w-28 shrink-0">
          <motion.div className="text-4xl mb-2" animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 2.5, repeat: Infinity }}>⚡</motion.div>
          <span className="font-mono text-sm font-bold text-white">Action</span>
        </div>
      </motion.div>

      <motion.div {...up(0.7)} className="relative z-10 mt-14 flex items-center gap-4 font-mono text-sm">
        {['observe', 'decide', 'act', 'evaluate'].map((s, i) => (
          <span key={s} className="flex items-center gap-4">
            <span className="glass-sm px-5 py-2.5 font-bold text-white">{s}</span>
            {i < 3 && <span className="text-white text-lg" style={{ opacity: 0.4 }}>→</span>}
          </span>
        ))}
        <span className="text-white font-bold text-lg ml-3" style={{ opacity: 0.4 }}>↻</span>
      </motion.div>
    </div>
  );
}
