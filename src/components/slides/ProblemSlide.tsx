import { motion } from 'framer-motion';
import { AlertTriangle, Cloud, Wrench, Brain, RefreshCw } from 'lucide-react';

const up = (d = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay: d, ease: 'easeOut' as const } },
});

const problems = [
  { icon: Cloud, label: 'Model Drift', desc: 'Behavior shifts silently between versions' },
  { icon: AlertTriangle, label: 'Noisy Retrieval', desc: 'RAG returns irrelevant or conflicting context' },
  { icon: Wrench, label: 'Tool Failures', desc: 'APIs break, schemas change, timeouts spike' },
  { icon: Brain, label: 'Edge Cases', desc: 'Real users find paths you never imagined' },
  { icon: RefreshCw, label: 'Hidden Logic', desc: 'Prompts become undocumented business rules' },
];

const terminalLines = [
  { t: '$ deploy agent-v2 --prod', level: 'dim' },
  { t: 'Building........ OK', level: 'normal' },
  { t: 'Tests........... 47/47 passed', level: 'normal' },
  { t: '', level: 'dim' },
  { t: '[WARN] context overflow on 12% of requests', level: 'warn' },
  { t: '[ERR]  hallucinated tool: delete_user()', level: 'err' },
  { t: '[ERR]  retrieval returned competitor docs', level: 'err' },
  { t: '[CRIT] task failure rate: 23% → 41%', level: 'crit' },
] as const;

const levelColor = { dim: 'rgba(255,255,255,0.4)', normal: 'rgba(255,255,255,0.75)', warn: '#ffffff', err: '#ffffff', crit: '#ffffff' };
const levelWeight = { dim: '400', normal: '400', warn: '500', err: '600', crit: '700' };

export function ProblemSlide() {
  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center overflow-hidden"
      style={{ padding: 'clamp(3rem, 5vh, 5rem) clamp(4rem, 6vw, 8rem)' }}>

      <motion.h2 {...up(0.05)} className="relative z-10 text-5xl md:text-6xl font-black text-center mb-5 leading-tight max-w-5xl text-white">
        Everyone is building with AI.
        <br /><span className="gradient-text-fire">Most demos break in production.</span>
      </motion.h2>

      <motion.p {...up(0.15)} className="relative z-10 text-xl md:text-2xl text-white text-center mb-14">
        Works in the playground. Falls apart when real users arrive.
      </motion.p>

      <div className="relative z-10 grid grid-cols-[2fr_3fr] gap-10 max-w-5xl w-full items-start">
        {/* Terminal */}
        <motion.div {...up(0.2)} className="rounded-2xl overflow-hidden"
          style={{ background: 'rgba(0,0,0,0.7)', border: '1px solid rgba(255,255,255,0.14)' }}>
          <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10">
            <div className="w-3 h-3 rounded-full bg-white/25" />
            <div className="w-3 h-3 rounded-full bg-white/18" />
            <div className="w-3 h-3 rounded-full bg-white/12" />
            <span className="ml-3 text-xs text-white/50 font-mono">production-logs</span>
          </div>
          <div className="p-5 font-mono text-sm leading-loose">
            {terminalLines.map((l, i) => (
              <motion.div key={i}
                style={{ color: levelColor[l.level], fontWeight: levelWeight[l.level] }}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.12 }}>
                {l.t || '\u00A0'}
              </motion.div>
            ))}
            <motion.span className="inline-block w-2 h-4 mt-1 bg-white"
              animate={{ opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} />
          </div>
        </motion.div>

        {/* Problem cards */}
        <div className="space-y-3.5">
          {problems.map((p, i) => (
            <motion.div key={p.label}
              className="glass-sm px-6 py-5 flex items-center gap-5 cursor-default"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.45 }}
              whileHover={{ scale: 1.015, boxShadow: '0 0 24px rgba(255,255,255,0.06)' }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-white/10">
                <p.icon size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{p.label}</h3>
                <p className="text-base text-white mt-0.5">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
