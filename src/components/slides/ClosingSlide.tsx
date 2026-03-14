import { motion } from 'framer-motion';
import { Twitter, Linkedin, Calendar, Users } from 'lucide-react';
import { GradientOrb } from '../backgrounds/GradientOrb';
import { ExternalLink } from '../visuals/ExternalLink';
import { SPEAKER, LINKS } from '../../data/slides';
import { SlideLayout, item } from '../visuals/SlideLayout';

const communityLinks = [
  { icon: Users, label: 'London Agentic AI Meetup', url: LINKS.meetup },
  { icon: Calendar, label: 'Luma Calendar', url: LINKS.luma },
];

export function ClosingSlide() {
  return (
    <SlideLayout>
      <GradientOrb color="rgba(167,139,250,0.06)" size={700} x="25%" y="35%" />
      <GradientOrb color="rgba(56,189,248,0.05)" size={620} x="82%" y="72%" />

      <motion.h2 variants={item}
        className="relative z-10 text-5xl md:text-6xl font-black text-center mb-14 leading-tight max-w-4xl"
      >
        Stay Connected
      </motion.h2>

      <motion.div variants={item}
        className="relative z-10 grid max-w-4xl w-full items-center gap-14 lg:grid-cols-[280px_minmax(0,1fr)]"
      >
        <motion.div
          className="justify-self-center lg:justify-self-start"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.55, ease: 'easeOut' }}
        >
          <div
            className="relative w-60 h-60 rounded-3xl overflow-hidden border border-white/10 bg-white/5"
            style={{ boxShadow: '0 18px 60px rgba(0,0,0,0.4), 0 0 40px rgba(167,139,250,0.08)' }}
          >
            <img
              src={SPEAKER.image}
              alt={`${SPEAKER.name} profile`}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          className="glass-strong p-9 md:p-10"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.55, ease: 'easeOut' }}
        >
          <h3 className="text-3xl md:text-4xl font-black text-white mb-4">{SPEAKER.name}</h3>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8">
            Founder of Superagentic AI and organizer of London Agentic AI.
          </p>

          <div className="space-y-3.5 mb-8">
            <a href={SPEAKER.x} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl px-4 py-3 bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-colors">
              <Twitter size={18} className="text-cyan-400" />
              <span className="text-sm text-text-muted">X</span>
              <span className="text-lg md:text-xl font-semibold text-cyan-200 tracking-wide">@Shashikant86</span>
            </a>
            <a href={SPEAKER.linkedin} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl px-4 py-3 bg-white/5 border border-white/10 hover:border-sky-400/30 transition-colors">
              <Linkedin size={18} className="text-sky-400" />
              <span className="text-sm text-text-muted">LinkedIn</span>
              <span className="text-lg md:text-xl font-semibold text-sky-200 tracking-wide">/in/shashikantjagtap</span>
            </a>
          </div>

          <div className="pt-6 border-t border-white/8 space-y-3.5">
            {communityLinks.map((link) => (
              <div key={link.label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                  <link.icon size={18} className="text-purple-400/85" />
                </div>
                <ExternalLink href={link.url} className="text-base">{link.label}</ExternalLink>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.p
        variants={item}
        className="relative z-10 mt-12 text-3xl md:text-4xl font-black text-center"
      >
        <span className="gradient-text">Thank you</span>
      </motion.p>
    </SlideLayout>
  );
}
