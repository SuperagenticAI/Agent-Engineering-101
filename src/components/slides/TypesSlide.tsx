import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Database, Settings, TestTube, Brain, Wrench, Shield, Zap, Network } from 'lucide-react';
import { DISCIPLINES } from '../../data/slides';
import { SlideLayout, item } from '../visuals/SlideLayout';

const icons: Record<string, React.ElementType> = {
  MessageSquare, Database, Settings, TestTube, Brain, Wrench, Shield, Zap, Network,
};

export function TypesSlide() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <SlideLayout>
      <motion.h2 variants={item} className="relative z-10 text-5xl md:text-6xl font-black text-center mb-4 leading-tight text-white">
        <span className="gradient-text">Agent Engineering(s)</span>
      </motion.h2>

      <motion.p variants={item} className="relative z-10 text-xl md:text-2xl text-white text-center mb-12">
        A systems taxonomy for building reliable AI
      </motion.p>

      <motion.div variants={item} className="relative z-10 grid grid-cols-3 gap-5 max-w-5xl w-full">
        {DISCIPLINES.map((d, i) => {
          const Icon = icons[d.icon];
          return (
            <motion.div
              key={d.name}
              className="relative glass-sm p-5 cursor-default overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.06, duration: 0.45 }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              whileHover={{ scale: 1.04, boxShadow: '0 0 24px rgba(255,255,255,0.07)', borderColor: 'rgba(255,255,255,0.22)' }}
            >
              <AnimatePresence>
                {hovered === i && (
                  <motion.div className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    style={{ background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.05), transparent 70%)' }}
                  />
                )}
              </AnimatePresence>

              <div className="relative z-10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-white/10">
                  <Icon size={19} className="text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-bold mb-1 text-white">{d.name}</h3>
                  <p className="text-sm text-white leading-relaxed">{d.description}</p>
                </div>
              </div>

              <span className="absolute top-3 right-3 text-[10px] font-mono font-bold text-white" style={{ opacity: 0.2 }}>
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
