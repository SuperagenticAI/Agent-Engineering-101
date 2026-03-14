import { motion } from 'framer-motion';
import { Twitter, Linkedin, Calendar, Users } from 'lucide-react';
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
      <motion.h2 variants={item} className="relative z-10 text-5xl md:text-6xl font-black text-center mb-14 leading-tight text-white">
        Stay Connected
      </motion.h2>

      <motion.div variants={item} className="relative z-10 grid max-w-4xl w-full items-center gap-14 lg:grid-cols-[280px_minmax(0,1fr)]">
        <motion.div className="justify-self-center lg:justify-self-start"
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <div className="relative w-60 h-60 rounded-3xl overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,0.18)', boxShadow: '0 20px 60px rgba(0,0,0,0.7)' }}>
            <img src={SPEAKER.image} alt={`${SPEAKER.name} profile`} className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <motion.div className="glass-strong p-10"
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <h3 className="text-3xl md:text-4xl font-black text-white mb-4">{SPEAKER.name}</h3>
          <p className="text-lg md:text-xl text-white leading-relaxed mb-8">
            Founder of Superagentic AI and organizer of London Agentic AI.
          </p>

          <div className="space-y-3 mb-8">
            <a href={SPEAKER.x} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl px-4 py-3 bg-white/[0.05] border border-white/12 hover:border-white/25 hover:bg-white/[0.08] transition-all">
              <Twitter size={17} className="text-white shrink-0" />
              <span className="text-sm text-white">X</span>
              <span className="text-lg md:text-xl font-semibold text-white tracking-wide">@Shashikant86</span>
            </a>
            <a href={SPEAKER.linkedin} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl px-4 py-3 bg-white/[0.05] border border-white/12 hover:border-white/25 hover:bg-white/[0.08] transition-all">
              <Linkedin size={17} className="text-white shrink-0" />
              <span className="text-sm text-white">LinkedIn</span>
              <span className="text-lg md:text-xl font-semibold text-white tracking-wide">/in/shashikantjagtap</span>
            </a>
          </div>

          <div className="pt-6 border-t border-white/12 space-y-3.5">
            {communityLinks.map((link) => (
              <div key={link.label} className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <link.icon size={16} className="text-white" />
                </div>
                <ExternalLink href={link.url} className="text-base">{link.label}</ExternalLink>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.p variants={item} className="relative z-10 mt-12 text-4xl md:text-5xl font-black text-center text-white">
        Thank you
      </motion.p>

      <motion.p variants={item} className="relative z-10 mt-3 text-xl text-center font-mono text-white"
        style={{ opacity: 0.45 }}
        animate={{ opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 3, repeat: Infinity }}>
        Keep Agent Engineering
      </motion.p>
    </SlideLayout>
  );
}
