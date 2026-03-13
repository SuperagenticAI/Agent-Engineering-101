import { motion } from 'framer-motion';
import { Twitter, Linkedin, Users, Cpu, Award, Code2 } from 'lucide-react';
import { SPEAKER } from '../../data/slides';
import { GradientOrb } from '../backgrounds/GradientOrb';

const up = (d = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay: d, ease: 'easeOut' as const } },
});

const highlights = [
  { icon: Cpu, label: 'Former Apple Engineer', color: '#a855f7' },
  { icon: Code2, label: '20 Years in Software', color: '#00d4ff' },
  { icon: Award, label: 'Founder, Superagentic AI', color: '#34d399' },
  { icon: Users, label: 'London Agentic AI Organizer', color: '#f472b6' },
];

export function SpeakerSlide() {
  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden"
      style={{ padding: 'clamp(2rem, 5vh, 5rem) clamp(3rem, 6vw, 8rem)' }}>
      <GradientOrb color="rgba(168,85,247,0.12)" size={800} x="80%" y="30%" />
      <GradientOrb color="rgba(0,212,255,0.08)" size={600} x="10%" y="70%" delay={1.5} />

      <div className="relative z-10 flex items-center gap-16 max-w-5xl w-full">
        {/* Left: Avatar + social */}
        <motion.div {...up(0.1)} className="flex flex-col items-center shrink-0">
          <motion.div
            className="w-44 h-44 rounded-3xl bg-gradient-to-br from-neon-blue via-neon-purple to-neon-pink flex items-center justify-center mb-6"
            style={{ boxShadow: '0 0 80px rgba(168,85,247,0.2)' }}
            animate={{ rotate: [0, 1.5, -1.5, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="text-7xl font-black text-white/90">SJ</span>
          </motion.div>

          <div className="flex gap-3">
            <motion.a
              href={SPEAKER.x} target="_blank" rel="noopener noreferrer"
              className="glass-sm px-5 py-3 flex items-center gap-2 text-base text-text-secondary hover:text-neon-blue transition-colors"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0,212,255,0.1)' }}
            >
              <Twitter size={18} /> <span className="font-mono">@Shashikant86</span>
            </motion.a>
            <motion.a
              href={SPEAKER.linkedin} target="_blank" rel="noopener noreferrer"
              className="glass-sm px-5 py-3 flex items-center gap-2 text-base text-text-secondary hover:text-neon-blue transition-colors"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0,212,255,0.1)' }}
            >
              <Linkedin size={18} /> <span>LinkedIn</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Right: Info */}
        <div className="min-w-0 flex-1">
          <motion.h2 {...up(0.15)} className="text-5xl md:text-6xl font-black mb-3 leading-tight">
            {SPEAKER.name}
          </motion.h2>

          <motion.div {...up(0.25)} className="flex flex-wrap gap-3 mb-8">
            {highlights.map((h, i) => (
              <motion.span
                key={h.label}
                className="glass-sm px-4 py-2 flex items-center gap-2 text-sm font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.1, type: 'spring' }}
                whileHover={{ scale: 1.05, boxShadow: `0 0 20px ${h.color}22` }}
              >
                <h.icon size={16} style={{ color: h.color }} />
                <span style={{ color: h.color }}>{h.label}</span>
              </motion.span>
            ))}
          </motion.div>

          <motion.div {...up(0.35)} className="glass p-8">
            <p className="text-xl text-text-secondary leading-relaxed">
              {SPEAKER.bio}
            </p>
          </motion.div>

          <motion.div {...up(0.5)} className="mt-6 flex items-center gap-3 text-base text-text-muted font-mono">
            <motion.span className="w-2 h-2 rounded-full bg-neon-green"
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }} />
            Building reliable AI systems for the real world
          </motion.div>
        </div>
      </div>
    </div>
  );
}
