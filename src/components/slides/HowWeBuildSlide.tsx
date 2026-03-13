import { motion } from 'framer-motion';
import { MessageSquare, Database, Wrench, Box, RefreshCw, AlertTriangle } from 'lucide-react';
import { GradientOrb } from '../backgrounds/GradientOrb';
import { SlideLayout, item } from '../visuals/SlideLayout';

const steps = [
  { icon: MessageSquare, label: 'Prompting', color: '#00d4ff', bg: 'rgba(0,212,255,0.12)' },
  { icon: Database, label: 'Add RAG', color: '#22c55e', bg: 'rgba(34,197,94,0.12)' },
  { icon: Wrench, label: 'Tools / MCP', color: '#a855f7', bg: 'rgba(168,85,247,0.12)' },
  { icon: Box, label: 'Framework', color: '#f97316', bg: 'rgba(249,115,22,0.12)' },
  { icon: RefreshCw, label: 'Model Swap', color: '#ec4899', bg: 'rgba(236,72,153,0.12)' },
  { icon: AlertTriangle, label: 'Complexity', color: '#ef4444', bg: 'rgba(239,68,68,0.12)' },
];

export function HowWeBuildSlide() {
  return (
    <SlideLayout>
      <GradientOrb color="rgba(168,85,247,0.08)" size={600} x="50%" y="35%" />

      <motion.h2 variants={item}
        className="relative z-10 text-5xl md:text-6xl font-black text-center mb-4 leading-tight max-w-4xl"
      >
        How teams build agents{' '}
        <span className="gradient-text">right now</span>
      </motion.h2>

      <motion.p variants={item} className="relative z-10 text-xl text-text-secondary text-center mb-16 max-w-xl">
        An incremental path that leads to accidental complexity
      </motion.p>

      {/* Timeline */}
      <motion.div variants={item} className="relative z-10 max-w-5xl w-full">
        {/* Connecting gradient line */}
        <div className="absolute top-[56px] left-[8%] right-[8%] h-[3px] rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              transformOrigin: 'left',
              background: 'linear-gradient(90deg, #00d4ff, #22c55e, #a855f7, #f97316, #ec4899, #ef4444)',
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2.5, delay: 0.3, ease: 'easeOut' as const }}
          />
        </div>

        <div className="grid grid-cols-6 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.18, duration: 0.5, type: 'spring' }}
            >
              <motion.div
                className="glass-strong p-5 mb-4 cursor-default"
                whileHover={{ scale: 1.1, boxShadow: `0 0 35px ${step.bg}` }}
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto"
                  style={{ background: step.bg }}>
                  <step.icon size={28} style={{ color: step.color }} />
                </div>
              </motion.div>
              <h3 className="text-base font-bold mb-1" style={{ color: step.color }}>{step.label}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Insight */}
      <motion.div variants={item} className="relative z-10 mt-14 glass px-10 py-5 text-center max-w-lg">
        <p className="text-xl text-text-secondary">
          Each step adds power — <span className="text-red-400 font-bold">and fragility</span>
        </p>
        <div className="flex items-center justify-center gap-8 mt-3 text-base font-mono">
          <span className="text-neon-green">+capability</span>
          <span className="text-red-400">+complexity</span>
          <span className="text-yellow-400">+risk</span>
        </div>
      </motion.div>
    </SlideLayout>
  );
}
