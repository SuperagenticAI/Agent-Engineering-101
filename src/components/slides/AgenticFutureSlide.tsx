import { motion } from 'framer-motion';
import { Sparkles, Scale, Compass, ArrowRight } from 'lucide-react';
import { GradientOrb } from '../backgrounds/GradientOrb';
import { SlideLayout, item } from '../visuals/SlideLayout';

const pillars = [
  {
    icon: Sparkles,
    title: 'Models Keep Evolving',
    text: 'Model capabilities will keep improving and systems will become increasingly agentic.',
  },
  {
    icon: Scale,
    title: 'Humans Set Policy',
    text: 'Organizations, regulators, and users impose constraints, approvals, and operating boundaries.',
  },
  {
    icon: Compass,
    title: 'Engineering Steers Behavior',
    text: 'Agent Engineering remains the control layer that guides models toward reliable outcomes.',
  },
];

const flow = ['Model Evolution', 'Human Policies', 'Engineering Steering', 'Reliable Outcomes'];

export function AgenticFutureSlide() {
  return (
    <SlideLayout>
      <GradientOrb color="rgba(255,255,255,0.05)" size={760} x="55%" y="40%" />

      <motion.h2 variants={item}
        className="relative z-10 text-5xl md:text-6xl font-black text-center mb-4 leading-tight max-w-5xl"
      >
        Steering the{' '}
        <span className="gradient-text">Agentic Future</span>
      </motion.h2>

      <motion.p variants={item} className="relative z-10 text-xl text-text-secondary text-center mb-12 max-w-4xl">
        Agent Engineering is a long-term discipline: models evolve, policies tighten, and systems still need
        technical steering in the right direction.
      </motion.p>

      <motion.div variants={item} className="relative z-10 grid grid-cols-3 gap-6 max-w-5xl w-full">
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.title}
            className="glass-strong p-7"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 + index * 0.1, type: 'spring' }}
            whileHover={{ scale: 1.02, boxShadow: '0 0 24px rgba(255,255,255,0.06)' }}
          >
            <div className="w-12 h-12 rounded-xl bg-white/8 flex items-center justify-center mb-5">
              <pillar.icon size={22} className="text-white/90" />
            </div>
            <h3 className="text-2xl font-black text-white mb-3 leading-tight">{pillar.title}</h3>
            <p className="text-lg text-text-secondary leading-relaxed">{pillar.text}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={item}
        className="relative z-10 mt-10 flex items-center justify-center gap-3 md:gap-4 flex-wrap font-mono"
      >
        {flow.map((label, index) => (
          <span key={label} className="flex items-center gap-3 md:gap-4">
            <motion.span
              className="glass-sm px-4 md:px-5 py-2.5 text-sm md:text-base font-bold text-white/90"
              animate={{ opacity: [0.72, 1, 0.72] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.2 }}
            >
              {label}
            </motion.span>
            {index < flow.length - 1 && (
              <motion.span
                animate={{ x: [0, 4, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: index * 0.18 }}
              >
                <ArrowRight size={16} className="text-text-muted" />
              </motion.span>
            )}
          </span>
        ))}
      </motion.div>

      <motion.p
        variants={item}
        className="relative z-10 mt-9 text-lg md:text-xl text-center text-text-secondary max-w-4xl"
        animate={{ opacity: [0.78, 1, 0.78] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        As models become more agentic over time, engineering remains essential to steer decisions safely and
        consistently.
      </motion.p>
    </SlideLayout>
  );
}
