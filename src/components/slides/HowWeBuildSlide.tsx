import { motion } from 'framer-motion';
import { MessageSquare, Database, Wrench, Box, RefreshCw, AlertTriangle } from 'lucide-react';
import { GradientOrb } from '../backgrounds/GradientOrb';
import { SlideLayout, item } from '../visuals/SlideLayout';

const steps = [
  { icon: MessageSquare, label: 'Prompting' },
  { icon: Database, label: 'Add RAG' },
  { icon: Wrench, label: 'Tools / MCP' },
  { icon: Box, label: 'Framework' },
  { icon: RefreshCw, label: 'Model Swap' },
  { icon: AlertTriangle, label: 'Complexity' },
];

export function HowWeBuildSlide() {
  return (
    <SlideLayout>
      <GradientOrb color="rgba(255,255,255,0.04)" size={600} x="50%" y="35%" />

      <motion.h2 variants={item} className="relative z-10 text-5xl md:text-6xl font-black text-center mb-4 leading-tight max-w-4xl">
        How teams build agents <span className="gradient-text">right now</span>
      </motion.h2>

      <motion.p variants={item} className="relative z-10 text-xl text-text-secondary text-center mb-16 max-w-xl">
        An incremental path that leads to accidental complexity
      </motion.p>

      <motion.div variants={item} className="relative z-10 max-w-5xl w-full">
        <div className="absolute top-[56px] left-[8%] right-[8%] h-[3px] rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-white/50"
            style={{ transformOrigin: 'left' }}
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
              <motion.div className="glass-strong p-5 mb-4 cursor-default" whileHover={{ scale: 1.1, boxShadow: '0 0 24px rgba(255,255,255,0.05)' }}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto bg-white/8">
                  <step.icon size={28} className="text-white/90" />
                </div>
              </motion.div>
              <h3 className="text-base font-bold mb-1 text-white/90">{step.label}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={item} className="relative z-10 mt-14 glass px-10 py-5 text-center max-w-lg">
        <p className="text-xl text-text-secondary">
          Each step adds power <span className="text-white font-bold">and fragility</span>
        </p>
        <div className="flex items-center justify-center gap-8 mt-3 text-base font-mono text-white/80">
          <span>+capability</span>
          <span>+complexity</span>
          <span>+risk</span>
        </div>
      </motion.div>
    </SlideLayout>
  );
}
