import { motion } from 'framer-motion';
import { AlertTriangle, Cloud, Wrench, Brain, RefreshCw } from 'lucide-react';
import { GradientOrb } from '../backgrounds/GradientOrb';

const up = (d = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay: d, ease: 'easeOut' as const } },
});

const problems = [
  { icon: Cloud, label: 'Model Drift', desc: 'Behavior shifts silently between versions', color: '#f87171' },
  { icon: AlertTriangle, label: 'Noisy Retrieval', desc: 'RAG returns irrelevant or conflicting context', color: '#fb923c' },
  { icon: Wrench, label: 'Tool Failures', desc: 'APIs break, schemas change, timeouts spike', color: '#facc15' },
  { icon: Brain, label: 'Edge Cases', desc: 'Real users find paths you never imagined', color: '#f472b6' },
  { icon: RefreshCw, label: 'Hidden Logic', desc: 'Prompts become undocumented business rules', color: '#a855f7' },
];

const terminalLines = [
  { t: '$ deploy agent-v2 --prod', c: '#94a3b8' },
  { t: 'Building........ OK', c: '#34d399' },
  { t: 'Tests........... 47/47 passed', c: '#34d399' },
  { t: '', c: '' },
  { t: '[WARN] context overflow on 12% of requests', c: '#facc15' },
  { t: '[ERR]  hallucinated tool: delete_user()', c: '#f87171' },
  { t: '[ERR]  retrieval returned competitor docs', c: '#f87171' },
  { t: '[CRIT] task failure rate: 23% → 41%', c: '#ef4444' },
];

export function ProblemSlide() {
  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center overflow-hidden"
      style={{ padding: 'clamp(2rem, 4vh, 4rem) clamp(3rem, 5vw, 7rem)' }}>
      <GradientOrb color="rgba(248,113,113,0.12)" size={800} x="75%" y="20%" />

      <motion.h2 {...up(0.05)}
        className="relative z-10 text-5xl md:text-6xl font-black text-center mb-4 leading-tight max-w-5xl">
        Everyone is building with AI.
        <br /><span className="gradient-text-fire">Most demos break in production.</span>
      </motion.h2>

      <motion.p {...up(0.15)} className="relative z-10 text-xl text-text-secondary text-center mb-12">
        Works in the playground. Falls apart when real users arrive.
      </motion.p>

      <div className="relative z-10 grid grid-cols-5 gap-6 max-w-6xl w-full items-start">
        {/* Terminal */}
        <motion.div {...up(0.2)} className="col-span-2 rounded-2xl overflow-hidden border border-white/5"
          style={{ background: 'rgba(0,0,0,0.6)' }}>
          <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5 bg-white/[0.02]">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="ml-3 text-xs text-text-muted font-mono">production-logs</span>
          </div>
          <div className="p-5 font-mono text-sm leading-relaxed">
            {terminalLines.map((l, i) => (
              <motion.div key={i} style={{ color: l.c }}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.12 }}>
                {l.t || '\u00A0'}
              </motion.div>
            ))}
            <motion.span className="inline-block w-2 h-4 bg-neon-green/60 mt-1"
              animate={{ opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} />
          </div>
        </motion.div>

        {/* Problem cards */}
        <div className="col-span-3 space-y-3">
          {problems.map((p, i) => (
            <motion.div key={p.label}
              className="glass-sm px-6 py-4 flex items-center gap-5 cursor-default group"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.45 }}
              whileHover={{ scale: 1.015, boxShadow: `0 0 30px ${p.color}15` }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: `${p.color}15` }}>
                <p.icon size={24} style={{ color: p.color }} />
              </div>
              <div>
                <h3 className="text-lg font-bold" style={{ color: p.color }}>{p.label}</h3>
                <p className="text-base text-text-secondary">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
