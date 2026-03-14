import { motion } from 'framer-motion';
import { Gauge, LayoutTemplate, Code2, BriefcaseBusiness } from 'lucide-react';
import { GradientOrb } from '../backgrounds/GradientOrb';
import { SlideLayout, item } from '../visuals/SlideLayout';

const tracks = [
  {
    icon: Gauge,
    eyebrow: '--optimize',
    title: 'Agent Optimization',
    text: 'Automatic improvement across prompts, retrieval, protocols, memory, and context.',
    color: '#38bdf8',
  },
  {
    icon: LayoutTemplate,
    eyebrow: '--design-ax',
    title: 'Agent Experience (AX)',
    text: 'Build for agents, make them efficient and effective.',
    color: '#a78bfa',
  },
  {
    icon: Code2,
    eyebrow: '--future-code',
    title: 'Agentic Coding',
    text: 'How software development changes when agents become first-class contributors.',
    color: '#34d399',
  },
  {
    icon: BriefcaseBusiness,
    eyebrow: '--business-models',
    title: 'Agentic Business Models',
    text: 'Exploring the business layer of Agentic AI, including SaaS, FDE, and new operating models.',
    color: '#fb923c',
  },
];

export function AdvancedTracksSlide() {
  return (
    <SlideLayout>
      <GradientOrb color="rgba(167,139,250,0.06)" size={720} x="50%" y="50%" />

      <motion.h2 variants={item} className="relative z-10 text-5xl md:text-6xl font-black text-center mb-5 leading-tight max-w-5xl">
        <span className="gradient-text">Future Proof</span>
      </motion.h2>

      <motion.p variants={item} className="relative z-10 text-xl md:text-2xl text-text-secondary text-center mb-16 max-w-3xl">
        Where Agent Engineering expands next
      </motion.p>

      <motion.div variants={item} className="relative z-10 grid grid-cols-2 gap-7 max-w-5xl w-full">
        {tracks.map((track, index) => (
          <motion.div
            key={track.title}
            className="glass-strong p-9"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 + index * 0.08 }}
            whileHover={{ scale: 1.02, boxShadow: `0 0 28px ${track.color}10` }}
          >
            <div className="mb-5 flex items-center gap-5">
              <div className="w-13 h-13 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: `${track.color}12`, width: 52, height: 52 }}>
                <track.icon size={24} style={{ color: track.color }} />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.24em]" style={{ color: track.color }}>{track.eyebrow}</p>
                <h3 className="text-2xl font-black text-white">{track.title}</h3>
              </div>
            </div>
            <p className="text-lg leading-relaxed text-text-secondary">{track.text}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.p variants={item} className="relative z-10 mt-12 text-lg text-text-muted text-center max-w-3xl">
        Teams that understand these shifts will build more adaptable agent systems.
      </motion.p>
    </SlideLayout>
  );
}
