import { motion } from 'framer-motion';
import { GradientOrb } from '../backgrounds/GradientOrb';
import { SlideLayout, item } from '../visuals/SlideLayout';

const principles = [
  {
    title: 'Non-determinism',
    text: "Agentic AI doesn't behave like traditional software. Variability is part of the system.",
  },
  {
    title: 'Intelligent Specification',
    text: "Models don't read minds. Better specifications produce better agent behavior.",
  },
  {
    title: 'Every Input Is an Edge Case',
    text: 'Users can ask anything, so systems need evaluation loops, not just happy-path logic.',
  },
  {
    title: 'Strategic Orchestration',
    text: 'Context, tools, memory, and human review need to be coordinated intentionally.',
  },
];

export function WhyEngineeringSlide() {
  return (
    <SlideLayout>
      <GradientOrb color="rgba(255,255,255,0.05)" size={700} x="50%" y="50%" />

      <motion.h2
        variants={item}
        className="relative z-10 text-5xl md:text-6xl font-black text-center mb-4 leading-tight max-w-5xl"
      >
        Agent Engineering is <span className="gradient-text">systems thinking</span> for AI
      </motion.h2>

      <motion.p
        variants={item}
        className="relative z-10 text-xl text-text-secondary text-center mb-14 max-w-3xl"
      >
        A production mindset built around non-deterministic behavior, clear specification, evaluation, and orchestration.
      </motion.p>

      <motion.div variants={item} className="relative z-10 grid grid-cols-2 gap-5 max-w-5xl w-full">
        {principles.map((principle, index) => (
          <motion.div
            key={principle.title}
            className="glass-strong p-7"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.08 }}
            whileHover={{ scale: 1.02, boxShadow: '0 0 24px rgba(255,255,255,0.05)' }}
          >
            <p className="mb-3 text-xs font-mono uppercase tracking-[0.24em] text-text-muted">
              Principle {String(index + 1).padStart(2, '0')}
            </p>
            <h3 className="mb-3 text-2xl font-black text-white">{principle.title}</h3>
            <p className="text-lg leading-relaxed text-text-secondary">{principle.text}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.p variants={item} className="relative z-10 mt-12 text-lg text-text-muted text-center max-w-4xl">
        Context, memory, evals, harnesses, and orchestration have to work together as one engineering discipline.
      </motion.p>
    </SlideLayout>
  );
}
