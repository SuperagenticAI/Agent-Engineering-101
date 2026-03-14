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

const accentColors = [
  '#38bdf8', '#a78bfa', '#34d399', '#f472b6', '#fb923c',
  '#38bdf8', '#a78bfa', '#34d399', '#f472b6',
];

export function TypesSlide() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <SlideLayout>
      <GradientOrb color="rgba(167,139,250,0.06)" size={800} x="50%" y="50%" />

      <motion.h2 variants={item} className="relative z-10 text-5xl md:text-6xl font-black text-center mb-4 leading-tight">
        <span className="gradient-text">Agent Engineering(s)</span>
      </motion.h2>

      <motion.p variants={item} className="relative z-10 text-xl md:text-2xl text-text-secondary text-center mb-12">
        A systems taxonomy for building reliable AI
      </motion.p>

      <motion.div variants={item} className="relative z-10 grid grid-cols-3 gap-5 max-w-5xl w-full">
        {DISCIPLINES.map((d, i) => {
          const Icon = icons[d.icon];
          const active = hovered === i;
          const color = accentColors[i];
          return (
            <motion.div
              key={d.name}
              className="relative glass-sm p-5 cursor-default overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.06, duration: 0.45 }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              whileHover={{ scale: 1.04, borderColor: `${color}30`, boxShadow: `0 0 28px ${color}12` }}
            >
              <AnimatePresence>
                {active && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ background: `radial-gradient(circle at 30% 30%, ${color}08, transparent 70%)` }}
                  />
                )}
              </AnimatePresence>

              <div className="relative z-10 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${color}12` }}>
                  <Icon size={20} style={{ color }} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-bold mb-1 text-white/90">{d.name}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{d.description}</p>
                </div>
              </div>

              <span className="absolute top-3 right-3 text-[10px] font-mono font-bold opacity-30" style={{ color }}>
                {String(i + 1).padStart(2, '0')}
              </span>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div variants={item} className="relative z-10 mt-10 max-w-4xl w-full">
        <div className="glass-strong px-10 py-7 text-center">
          <p className="text-2xl font-black text-white">
            In real systems, they converge into <span className="gradient-text">Agent Engineering</span>
          </p>
        </div>
      </motion.div>
    </SlideLayout>
  );
}
