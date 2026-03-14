import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ExternalLink as LinkIcon } from 'lucide-react';
import { EVENT } from '../../data/slides';

interface HeroSlideProps { onStart: () => void }

type CodeToken = { text: string; dim?: boolean };

const CODE_LINES: CodeToken[][] = [
  [
    { text: 'agent' },
    { text: '.', dim: true },
    { text: 'init' },
    { text: '(model=' },
    { text: '"gemini-3.1-pro-preview"', dim: true },
    { text: ')' },
  ],
  [
    { text: 'agent' },
    { text: '.', dim: true },
    { text: 'add_tools' },
    { text: '([search, code, deploy])' },
  ],
  [
    { text: 'agent' },
    { text: '.', dim: true },
    { text: 'run' },
    { text: '(goal=' },
    { text: '"ship it"', dim: true },
    { text: ')' },
  ],
];

const CODE_LINE_TEXT = CODE_LINES.map((line) => line.map((token) => token.text).join(''));

function renderTypedTokens(tokens: CodeToken[], visibleChars: number) {
  let remaining = visibleChars;
  return tokens.map((token, idx) => {
    if (remaining <= 0) return null;
    const charsToTake = Math.min(token.text.length, remaining);
    remaining -= charsToTake;
    const text = token.text.slice(0, charsToTake);
    return (
      <span key={idx} style={{ color: token.dim ? 'rgba(255,255,255,0.55)' : '#ffffff' }}>
        {text}
      </span>
    );
  });
}

export function HeroSlide({ onStart }: HeroSlideProps) {
  void onStart;
  const [activeLine, setActiveLine] = useState(0);
  const [charsInActiveLine, setCharsInActiveLine] = useState(0);
  const [isResetting, setIsResetting] = useState(false);

  useEffect(() => {
    let timeoutId: number;
    const currentLineLength = CODE_LINE_TEXT[activeLine].length;
    if (isResetting) {
      timeoutId = window.setTimeout(() => { setActiveLine(0); setCharsInActiveLine(0); setIsResetting(false); }, 380);
      return () => window.clearTimeout(timeoutId);
    }
    if (charsInActiveLine < currentLineLength) {
      timeoutId = window.setTimeout(() => setCharsInActiveLine((v) => v + 1), 34);
      return () => window.clearTimeout(timeoutId);
    }
    if (activeLine < CODE_LINES.length - 1) {
      timeoutId = window.setTimeout(() => { setActiveLine((l) => l + 1); setCharsInActiveLine(0); }, 520);
      return () => window.clearTimeout(timeoutId);
    }
    timeoutId = window.setTimeout(() => setIsResetting(true), 1600);
    return () => window.clearTimeout(timeoutId);
  }, [activeLine, charsInActiveLine, isResetting]);

  const visibleCharsPerLine = CODE_LINE_TEXT.map((lineText, index) => {
    if (index < activeLine) return lineText.length;
    if (index === activeLine) return charsInActiveLine;
    return 0;
  });

  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Event badge */}
      <motion.a
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        href={EVENT.link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 inline-flex items-center gap-4 px-8 py-3.5 mb-16 hover:bg-white/8 transition-colors"
        style={{ borderRadius: 100, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.18)' }}
      >
        <motion.span className="w-2.5 h-2.5 rounded-full shrink-0 bg-white"
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity }} />
        <span className="font-mono text-lg font-semibold text-white">{EVENT.name}</span>
        <span className="w-px h-5 bg-white/30" />
        <span className="text-lg font-bold text-white">{EVENT.branding}</span>
        <LinkIcon size={14} className="text-white/50" />
      </motion.a>

      {/* Main title */}
      <motion.h1
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="relative z-10 text-center font-black tracking-tight leading-[1.0] mb-10 text-white"
        style={{ fontSize: 'clamp(3.5rem, 8vw, 8rem)' }}
      >
        Agent Engineering
        <br />
        <span className="gradient-text">101</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="relative z-10 text-center text-2xl md:text-3xl text-white font-light max-w-2xl"
      >
        How to Build Reliable AI Systems
      </motion.p>

      {/* Code snippet */}
      <motion.div
        className="absolute bottom-10 left-8 md:left-12 w-[min(88vw,520px)] font-mono text-sm leading-loose"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        style={{ borderRadius: 14, padding: '1rem 1.25rem', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.14)' }}
      >
        {CODE_LINES.map((line, index) => (
          <div key={index} className="min-h-[1.6em]">
            {renderTypedTokens(line, visibleCharsPerLine[index])}
            {index === activeLine && !isResetting && (
              <motion.span
                className="inline-block w-[2px] h-[1em] ml-0.5 bg-white align-middle"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.9, repeat: Infinity }}
              />
            )}
          </div>
        ))}
      </motion.div>

      {/* Stats */}
      <motion.div
        className="absolute top-12 right-8 md:right-14 font-mono text-sm leading-loose text-right px-4 py-3 rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={{ color: 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)' }}
      >
        <div>eval_score: <span className="text-white font-semibold">0.94</span></div>
        <div>latency_p99: <span className="text-white font-semibold">142ms</span></div>
        <div>status: <span className="text-white font-semibold">healthy</span></div>
      </motion.div>
    </div>
  );
}
