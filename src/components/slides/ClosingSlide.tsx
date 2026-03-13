import { motion } from 'framer-motion';
import { Twitter, Linkedin, Calendar, Users, BookOpen, Sparkles, Heart } from 'lucide-react';
import { ParticleField } from '../backgrounds/ParticleField';
import { GradientOrb } from '../backgrounds/GradientOrb';
import { ExternalLink } from '../visuals/ExternalLink';
import { SPEAKER, LINKS } from '../../data/slides';
import { SlideLayout, item } from '../visuals/SlideLayout';

const takeaways = [
  'Prompts are necessary, not sufficient',
  'Agents are systems, not prompts',
  'Reliability = context + tools + memory + evals + optimization',
  'Agent Engineering is the path from prototype to production',
];

const resources = [
  { icon: Users, label: 'London Agentic AI Meetup', url: LINKS.meetup, color: '#00d4ff' },
  { icon: Calendar, label: 'Luma Calendar', url: LINKS.luma, color: '#a855f7' },
  { icon: BookOpen, label: 'DSPy', url: LINKS.dspy, color: '#22c55e' },
  { icon: Sparkles, label: 'GEPA', url: LINKS.gepa, color: '#f97316' },
];

export function ClosingSlide() {
  return (
    <SlideLayout>
      <ParticleField count={30} />
      <GradientOrb color="rgba(0,212,255,0.12)" size={700} x="25%" y="35%" />
      <GradientOrb color="rgba(168,85,247,0.10)" size={600} x="75%" y="65%" delay={1} />

      <motion.h2 variants={item}
        className="relative z-10 text-5xl md:text-6xl font-black text-center mb-12 leading-tight max-w-4xl"
      >
        Reliable AI systems are{' '}
        <span className="gradient-text">engineered</span>,
        <br />not merely prompted
      </motion.h2>

      <div className="relative z-10 grid grid-cols-3 gap-8 max-w-5xl w-full">
        {/* Takeaways — 2 cols */}
        <motion.div variants={item} className="col-span-2 glass-strong p-8">
          <h3 className="text-xl font-black text-neon-blue mb-6 font-mono tracking-wider flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-neon-blue" />
            KEY TAKEAWAYS
          </h3>
          <div className="space-y-4">
            {takeaways.map((t, i) => (
              <motion.div key={i} className="flex items-center gap-4"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <div className="w-8 h-8 rounded-lg bg-neon-blue/10 flex items-center justify-center shrink-0">
                  <span className="text-neon-blue text-sm font-bold">{i + 1}</span>
                </div>
                <span className="text-lg text-text-secondary">{t}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Connect — 1 col */}
        <motion.div variants={item} className="glass-strong p-8">
          <h3 className="text-xl font-black text-neon-purple mb-6 font-mono tracking-wider flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-neon-purple" />
            CONNECT
          </h3>
          <div className="space-y-4">
            {resources.map(r => (
              <div key={r.label} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: `${r.color}15` }}>
                  <r.icon size={18} style={{ color: r.color }} />
                </div>
                <ExternalLink href={r.url} className="text-base">{r.label}</ExternalLink>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-white/5 flex flex-col gap-3">
            <a href={SPEAKER.x} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-base text-text-muted hover:text-neon-blue transition-colors">
              <Twitter size={16} /> @Shashikant86
            </a>
            <a href={SPEAKER.linkedin} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-base text-text-muted hover:text-neon-blue transition-colors">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div variants={item} className="relative z-10 mt-10 flex items-center gap-3 text-2xl font-bold">
        <span className="text-text-secondary">Thank you!</span>
        <motion.span animate={{ scale: [1, 1.25, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}>
          <Heart size={24} className="text-neon-pink" />
        </motion.span>
        <span className="text-text-muted">Questions?</span>
      </motion.div>
    </SlideLayout>
  );
}
