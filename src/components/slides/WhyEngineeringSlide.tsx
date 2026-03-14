import { motion } from 'framer-motion';
import { SlideLayout, item } from '../visuals/SlideLayout';

const principles = [
  { n: '01', title: 'Non-determinism', text: "Agentic AI doesn't behave like traditional software. Variability is part of the system." },
  { n: '02', title: 'Intelligent Specification', text: "Models don't read minds. Better specifications produce better agent behavior." },
  { n: '03', title: 'Every Input Is an Edge Case', text: 'Users can ask anything, so systems need evaluation loops, not just happy-path logic.' },
  { n: '04', title: 'Strategic Orchestration', text: 'Context, tools, memory, and human review need to be coordinated intentionally.' },
];

export function WhyEngineeringSlide() {
  return (
    <SlideLayout>
      <motion.h2 variants={item} className="relative z-10 text-5xl md:text-6xl font-black text-center mb-5 leading-tight max-w-5xl text-white">
        Agent Engineering is <span className="gradient-text">systems thinking</span> for AI
      </motion.h2>

      <motion.p variants={item} className="relative z-10 text-xl md:text-2xl text-white text-center mb-16 max-w-3xl">
        A production mindset built around non-deterministic behavior, clear specification, evaluation, and orchestration.
      </motion.p>

      <motion.div variants={item} className="relative z-10 grid grid-cols-2 gap-7 max-w-5xl w-full">
        {principles.map((p, index) => (
          <motion.div
            key={p.title}
            className="glass-strong p-9"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.08 }}
            whileHover={{ scale: 1.02, boxShadow: '0 0 28px rgba(255,255,255,0.06)' }}
          >
            <p className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-white">
              Principle {p.n}
            </p>
            <h3 className="mb-4 text-2xl font-black text-white">{p.title}</h3>
            <p className="text-lg leading-relaxed text-white">{p.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </SlideLayout>
  );
}
