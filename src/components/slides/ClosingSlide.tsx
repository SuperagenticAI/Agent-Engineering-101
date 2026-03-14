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
      <GradientOrb color="rgba(255,255,255,0.05)" size={700} x="25%" y="35%" />
      <GradientOrb color="rgba(255,255,255,0.04)" size={620} x="82%" y="72%" />

      <motion.h2 variants={item}
        className="relative z-10 text-4xl md:text-5xl font-black text-center mb-10 leading-tight max-w-4xl"
      >
        Stay Connected
      </motion.h2>

      <motion.div variants={item}
        className="relative z-10 grid max-w-4xl w-full items-center gap-10 lg:grid-cols-[280px_minmax(0,1fr)]"
      >
        <motion.div
          className="justify-self-center lg:justify-self-start"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.55, ease: 'easeOut' }}
        >
          <div
            className="relative w-56 h-56 rounded-3xl overflow-hidden border border-white/10 bg-white/5"
            style={{ boxShadow: '0 14px 50px rgba(0,0,0,0.35)' }}
          >
            <img
              src={SPEAKER.image}
              alt={`${SPEAKER.name} profile`}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          className="glass-strong p-7 md:p-8"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.55, ease: 'easeOut' }}
        >
          <h3 className="text-3xl md:text-4xl font-black text-white mb-3">{SPEAKER.name}</h3>
          <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-6">
            Founder of Superagentic AI and organizer of London Agentic AI.
          </p>

          <div className="space-y-3 mb-6">
            <a href={SPEAKER.x} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl px-3 py-2 bg-white/5 border border-white/10 hover:border-cyan-300/40 transition-colors">
              <Twitter size={18} className="text-cyan-300" />
              <span className="text-sm text-text-muted">X</span>
              <span className="text-lg md:text-xl font-semibold text-cyan-200 tracking-wide">@Shashikant86</span>
            </a>
            <a href={SPEAKER.linkedin} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl px-3 py-2 bg-white/5 border border-white/10 hover:border-sky-300/40 transition-colors">
              <Linkedin size={18} className="text-sky-300" />
              <span className="text-sm text-text-muted">LinkedIn</span>
              <span className="text-lg md:text-xl font-semibold text-sky-200 tracking-wide">/in/shashikantjagtap</span>
            </a>
          </div>

          <div className="pt-5 border-t border-white/8 space-y-3">
            {communityLinks.map((link) => (
              <div key={link.label} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center shrink-0">
                  <link.icon size={17} className="text-white/85" />
                </div>
                <ExternalLink href={link.url} className="text-base">{link.label}</ExternalLink>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.p
        variants={item}
        className="relative z-10 mt-8 text-2xl md:text-3xl font-semibold text-text-secondary text-center"
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        Thank you
      </motion.p>

      <motion.p
        variants={item}
        className="relative z-10 mt-2 text-lg md:text-2xl font-medium text-text-muted text-center"
        animate={{ opacity: [0.45, 0.75, 0.45] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
      >
        Keep Agent Engineering
      </motion.p>
    </SlideLayout>
  );
}
