import { motion } from 'framer-motion';
import { ExternalLink as LinkIcon } from 'lucide-react';
import { EVENT } from '../../data/slides';
import { GradientOrb } from '../backgrounds/GradientOrb';

interface HeroSlideProps { onStart: () => void }

const up = (d = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay: d, ease: 'easeOut' as const } },
});

export function HeroSlide({ onStart }: HeroSlideProps) {
  void onStart;

  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center overflow-hidden">
      <GradientOrb color="rgba(255,255,255,0.06)" size={1000} x="8%" y="18%" />
      <GradientOrb color="rgba(255,255,255,0.04)" size={900} x="92%" y="82%" delay={1} />

      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <motion.a
        {...up(0.1)}
        href={EVENT.link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 inline-flex items-center gap-4 px-7 py-3.5 glass mb-12 hover:scale-105 transition-transform"
        style={{ borderRadius: 100 }}
      >
        <motion.span className="w-3 h-3 rounded-full shrink-0"
          style={{ backgroundColor: '#ffffff' }}
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }} />
        <span className="font-mono text-lg font-medium text-white/90">{EVENT.name}</span>
        <span className="w-px h-6 bg-white/10" />
        <span
          className="text-lg font-bold"
          style={{
            background: 'linear-gradient(135deg, #ffffff, #ececec 55%, #cfcfcf)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {EVENT.branding}
        </span>
        <LinkIcon size={16} className="text-text-muted" />
      </motion.a>

      <motion.h1
        {...up(0.25)}
        className="relative z-10 text-center font-black tracking-tight leading-[1.0] mb-8"
        style={{ fontSize: 'clamp(3.5rem, 8vw, 7.5rem)' }}
      >
        <span
          style={{
            background: 'linear-gradient(135deg, #ffffff, #efefef 58%, #cfcfcf)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Agent Engineering
        </span>
        <br />
        <span className="text-text-primary">101</span>
      </motion.h1>

      <motion.p
        {...up(0.4)}
        className="relative z-10 text-center text-2xl md:text-4xl text-text-secondary font-light max-w-3xl"
      >
        How to Build Reliable AI Systems
      </motion.p>

      <motion.div
        className="absolute bottom-8 left-10 font-mono text-xs text-text-muted/30 leading-relaxed"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div>agent.init(model=<span style={{ color: 'rgba(255,255,255,0.45)' }}>"gemini-2.5"</span>)</div>
        <div>agent.add_tools([search, code, deploy])</div>
        <div>agent.run(goal=<span style={{ color: 'rgba(255,255,255,0.32)' }}>"ship it"</span>)</div>
      </motion.div>

      <motion.div
        className="absolute top-10 right-12 font-mono text-xs text-text-muted/25 leading-relaxed text-right"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      >
        <div>eval_score: <span style={{ color: 'rgba(255,255,255,0.32)' }}>0.94</span></div>
        <div>latency_p99: <span style={{ color: 'rgba(255,255,255,0.40)' }}>142ms</span></div>
        <div>status: <span style={{ color: 'rgba(255,255,255,0.32)' }}>healthy</span></div>
      </motion.div>
    </div>
  );
}
