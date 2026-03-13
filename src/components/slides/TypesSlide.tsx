import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare, Database, Settings, TestTube, Brain,
  Wrench, Shield, Zap, Network,
} from 'lucide-react';
import { DISCIPLINES } from '../../data/slides';
import { GradientOrb } from '../backgrounds/GradientOrb';
import { SlideLayout, item } from '../visuals/SlideLayout';

const icons: Record<string, React.ElementType> = {
  MessageSquare, Database, Settings, TestTube, Brain, Wrench, Shield, Zap, Network,
};

export function TypesSlide() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <SlideLayout>
      <GradientOrb color="rgba(255,255,255,0.04)" size={800} x="50%" y="50%" />

      <motion.h2 variants={item} className="relative z-10 text-4xl md:text-6xl font-black text-center mb-3 leading-tight">
        <span className="gradient-text">Agent Engineering(s)</span>
      </motion.h2>

      <motion.p variants={item} className="relative z-10 text-lg text-text-muted text-center mb-10">
        A systems taxonomy for building reliable AI
      </motion.p>

      <motion.div variants={item} className="relative z-10 grid grid-cols-3 gap-4 max-w-5xl w-full">
        {DISCIPLINES.map((d, i) => {
          const Icon = icons[d.icon];
          const active = hovered === i;
          return (
            <motion.div
              key={d.name}
              className="relative glass-sm p-6 cursor-default overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.06, duration: 0.45 }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              whileHover={{ scale: 1.04, borderColor: 'rgba(255,255,255,0.18)', boxShadow: '0 0 24px rgba(255,255,255,0.05)' }}
            >
              <AnimatePresence>
                {active && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.05), transparent 70%)' }}
                  />
                )}
              </AnimatePresence>

              <div className="relative z-10 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-white/8">
                  <Icon size={24} className="text-white/90" />
                </div>
                <div>
                  <h3 className="text-base font-bold mb-1 text-white/90">{d.name}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{d.description}</p>
                </div>
              </div>

              <span className="absolute top-3 right-3 text-[10px] font-mono font-bold opacity-40 text-white/70">
                {String(i + 1).padStart(2, '0')}
              </span>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div variants={item} className="relative z-10 mt-10 max-w-5xl w-full">
        <div className="glass-strong px-8 py-6 text-center">
          <p className="text-2xl font-black text-white">
            More <span className="gradient-text">*.Engineering</span> labels will keep appearing.
          </p>
          <p className="mt-3 text-lg leading-relaxed text-text-secondary">
            In real systems, they converge into <span className="text-white font-semibold">Agent Engineering</span>:
            the practical discipline of making context, memory, evals, tools, and orchestration work together.
          </p>
        </div>
      </motion.div>
    </SlideLayout>
  );
}
