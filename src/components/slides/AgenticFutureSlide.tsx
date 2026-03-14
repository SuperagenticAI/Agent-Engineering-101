import { motion } from 'framer-motion';
import { Sparkles, Scale, Compass, ArrowRight } from 'lucide-react';
import { SlideLayout, item } from '../visuals/SlideLayout';

const pillars = [
  { icon: Sparkles, title: 'Models Keep Evolving',
    text: 'Model capabilities will keep improving and systems will become increasingly agentic.' },
  { icon: Scale, title: 'Humans Set Policy',
    text: 'Organizations, regulators, and users impose constraints, approvals, and operating boundaries.' },
  { icon: Compass, title: 'Engineering Steers Behavior',
    text: 'Agent Engineering remains the control layer that guides models toward reliable outcomes.' },
];

const flow = ['Model Evolution', 'Human Policies', 'Engineering Steering', 'Reliable Outcomes'];

export function AgenticFutureSlide() {
  return (
    <SlideLayout>
      <motion.h2 variants={item} className="relative z-10 text-5xl md:text-6xl font-black text-center mb-5 leading-tight max-w-5xl text-white">
        <span className="gradient-text">Long Live Agent Engineering</span>
      </motion.h2>

      <motion.p variants={item} className="relative z-10 text-xl md:text-2xl text-white text-center mb-16 max-w-4xl">
        Models evolve, policies tighten, and systems still need technical steering in the right direction.
      </motion.p>

      <motion.div variants={item} className="relative z-10 grid grid-cols-3 gap-8 max-w-5xl w-full">
        {pillars.map((pillar, index) => (
          <motion.div key={pillar.title} className="glass-strong p-9"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 + index * 0.1, type: 'spring' }}
            whileHover={{ scale: 1.02, boxShadow: '0 0 24px rgba(255,255,255,0.06)' }}
          >
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
              <pillar.icon size={22} className="text-white" />
            </div>
            <h3 className="text-2xl font-black text-white mb-4 leading-tight">{pillar.title}</h3>
            <p className="text-lg text-white leading-relaxed">{pillar.text}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={item} className="relative z-10 mt-14 flex items-center justify-center gap-5 flex-wrap font-mono">
        {flow.map((label, index) => (
          <span key={label} className="flex items-center gap-5">
            <motion.span className="glass-sm px-5 py-3 text-sm font-bold text-white"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.2 }}
            >
              {label}
            </motion.span>
            {index < flow.length - 1 && (
              <motion.span animate={{ x: [0, 4, 0], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: index * 0.18 }}>
                <ArrowRight size={16} className="text-white" />
              </motion.span>
            )}
          </span>
        ))}
      </motion.div>
    </SlideLayout>
  );
}
