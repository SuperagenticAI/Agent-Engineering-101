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
const colors: Record<string, string> = {
  'neon-blue': '#00d4ff', 'neon-purple': '#a855f7', 'neon-green': '#22c55e',
  'neon-pink': '#ec4899', 'neon-orange': '#f97316',
};

export function TypesSlide() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <SlideLayout>
      <GradientOrb color="rgba(168,85,247,0.07)" size={800} x="50%" y="50%" />

      <motion.h2 variants={item}
        className="relative z-10 text-4xl md:text-6xl font-black text-center mb-3 leading-tight"
      >
        The 9 Disciplines of{' '}
        <span className="gradient-text">Agent Engineering</span>
      </motion.h2>

      <motion.p variants={item} className="relative z-10 text-lg text-text-muted text-center mb-10">
        A systems taxonomy for building reliable AI
      </motion.p>

      {/* 3 × 3 Grid */}
      <motion.div variants={item} className="relative z-10 grid grid-cols-3 gap-4 max-w-5xl w-full">
        {DISCIPLINES.map((d, i) => {
          const Icon = icons[d.icon];
          const c = colors[d.color];
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
              whileHover={{
                scale: 1.04,
                borderColor: `${c}44`,
                boxShadow: `0 0 40px ${c}22`,
              }}
            >
              {/* Glow */}
              <AnimatePresence>
                {active && (
                  <motion.div className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    style={{ background: `radial-gradient(circle at 30% 30%, ${c}12, transparent 70%)` }}
                  />
                )}
              </AnimatePresence>

              <div className="relative z-10 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `${c}15` }}>
                  <Icon size={24} style={{ color: c }} />
                </div>
                <div>
                  <h3 className="text-base font-bold mb-1" style={{ color: active ? c : undefined }}>
                    {d.name}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{d.description}</p>
                </div>
              </div>

              <span className="absolute top-3 right-3 text-[10px] font-mono font-bold opacity-40"
                style={{ color: c }}>
                {String(i + 1).padStart(2, '0')}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </SlideLayout>
  );
}
