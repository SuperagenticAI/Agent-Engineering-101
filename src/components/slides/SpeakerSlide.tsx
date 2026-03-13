import { motion } from 'framer-motion';
import { Twitter, Linkedin } from 'lucide-react';
import { SPEAKER } from '../../data/slides';
import { GradientOrb } from '../backgrounds/GradientOrb';

const up = (d = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay: d, ease: 'easeOut' as const } },
});

export function SpeakerSlide() {
  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden"
      style={{ padding: 'clamp(2rem, 5vh, 5rem) clamp(3rem, 6vw, 8rem)' }}>
      <GradientOrb color="rgba(255,255,255,0.05)" size={800} x="80%" y="30%" />

      <div className="relative z-10 grid max-w-5xl w-full items-center gap-12 lg:grid-cols-[320px_minmax(0,1fr)]">
        <motion.div {...up(0.1)} className="flex flex-col items-center shrink-0">
          <motion.div
            className="relative w-56 h-56 rounded-3xl mb-6 overflow-hidden border border-white/10 bg-white/4"
            style={{
              boxShadow: '0 18px 60px rgba(0,0,0,0.28)',
            }}
          >
            <img
              src={SPEAKER.image}
              alt={`${SPEAKER.name} profile`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 px-4 pb-5 pt-8 bg-gradient-to-t from-black/85 via-black/35 to-transparent">
              <span className="block text-[11px] leading-none font-mono text-white/90 uppercase tracking-[0.14em]">
                Speaker
              </span>
            </div>
          </motion.div>

          <div className="glass-sm w-full p-4 space-y-3">
            <motion.a
              href={SPEAKER.x} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 text-base text-text-secondary transition-colors"
              whileHover={{ scale: 1.02, x: 2 }}
            >
              <Twitter size={16} className="text-white/80" />
              <div>
                <p className="font-mono text-sm text-text-primary">@Shashikant86</p>
                <p className="text-xs text-text-muted">X profile</p>
              </div>
            </motion.a>
            <motion.a
              href={SPEAKER.linkedin} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 text-base text-text-secondary transition-colors"
              whileHover={{ scale: 1.02, x: 2 }}
            >
              <Linkedin size={16} className="text-white/80" />
              <div>
                <p className="text-sm text-text-primary">LinkedIn</p>
                <p className="text-xs text-text-muted">Professional profile</p>
              </div>
            </motion.a>
          </div>
        </motion.div>

        <div className="min-w-0 flex-1">
          <motion.p {...up(0.12)} className="mb-3 text-sm uppercase tracking-[0.28em] text-text-secondary">
            Speaker
          </motion.p>

          <motion.h2 {...up(0.15)} className="text-5xl md:text-6xl font-black mb-4 leading-tight">
            {SPEAKER.name}
          </motion.h2>

          <motion.div {...up(0.35)} className="glass p-8">
            <p className="text-xl text-text-secondary leading-relaxed">
              {SPEAKER.summary}
            </p>
          </motion.div>

          <motion.div {...up(0.5)} className="mt-6 flex items-center gap-3 text-base text-text-muted font-mono">
            <motion.span className="w-2 h-2 rounded-full"
              style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }} />
            Building reliable AI systems for the real world
          </motion.div>
        </div>
      </div>
    </div>
  );
}
