import { motion } from 'framer-motion';
import { MessageSquare, Database, Wrench, Box, RefreshCw, AlertTriangle } from 'lucide-react';
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
      <motion.h2 variants={item} className="relative z-10 text-5xl md:text-6xl font-black text-center mb-5 leading-tight max-w-4xl text-white">
        How teams build agents <span className="gradient-text">right now</span>
      </motion.h2>

      <motion.p variants={item} className="relative z-10 text-xl md:text-2xl text-white text-center mb-20 max-w-xl">
        An incremental path that leads to accidental complexity
      </motion.p>

      <motion.div variants={item} className="relative z-10 max-w-5xl w-full">
        <div className="absolute top-[56px] left-[8%] right-[8%] h-[1px] rounded-full overflow-hidden bg-white/20">
          <motion.div
            className="h-full rounded-full bg-white"
            style={{ transformOrigin: 'left' }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2.5, delay: 0.3, ease: 'easeOut' as const }}
          />
        </div>

        <div className="grid grid-cols-6 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.18, duration: 0.5, type: 'spring' }}
            >
              <motion.div
                className="glass-strong p-6 mb-5 cursor-default"
                whileHover={{ scale: 1.1, boxShadow: '0 0 24px rgba(255,255,255,0.08)' }}
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto bg-white/10">
                  <step.icon size={26} className="text-white" />
                </div>
              </motion.div>
              <h3 className="text-base font-bold text-white">{step.label}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={item} className="relative z-10 mt-16 glass px-12 py-7 text-center max-w-lg">
        <p className="text-xl text-white">
          Each step adds power <span className="font-black">and fragility</span>
        </p>
        <div className="flex items-center justify-center gap-10 mt-4 text-base font-mono text-white">
          <span>+capability</span>
          <span>+complexity</span>
          <span>+risk</span>
        </div>
      </motion.div>
    </SlideLayout>
  );
}
