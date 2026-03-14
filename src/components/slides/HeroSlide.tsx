import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ExternalLink as LinkIcon } from 'lucide-react';
import { EVENT } from '../../data/slides';
import { GradientOrb } from '../backgrounds/GradientOrb';

interface HeroSlideProps { onStart: () => void }

type CodeToken = { text: string; color?: string };

const CODE_LINES: CodeToken[][] = [
  [
    { text: 'agent', color: '#67e8f9' },
    { text: '.', color: '#fda4af' },
    { text: 'init', color: '#fef08a' },
    { text: '(model=' },
    { text: '"gemini-3.1-pro-preview"', color: '#c4b5fd' },
    { text: ')' },
  ],
  [
    { text: 'agent', color: '#67e8f9' },
    { text: '.', color: '#fda4af' },
    { text: 'add_tools', color: '#fef08a' },
    { text: '([' },
    { text: 'search', color: '#86efac' },
    { text: ', ' },
    { text: 'code', color: '#fca5a5' },
    { text: ', ' },
    { text: 'deploy', color: '#93c5fd' },
    { text: '])' },
  ],
  [
    { text: 'agent', color: '#67e8f9' },
    { text: '.', color: '#fda4af' },
    { text: 'run', color: '#fef08a' },
    { text: '(goal=' },
    { text: '"ship it"', color: '#c4b5fd' },
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
      <span key={`${token.text}-${idx}`} style={token.color ? { color: token.color } : undefined}>
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
      timeoutId = window.setTimeout(() => {
        setActiveLine(0);
        setCharsInActiveLine(0);
        setIsResetting(false);
      }, 380);
      return () => window.clearTimeout(timeoutId);
    }

    if (charsInActiveLine < currentLineLength) {
      timeoutId = window.setTimeout(() => {
        setCharsInActiveLine((value) => value + 1);
      }, 34);
      return () => window.clearTimeout(timeoutId);
    }

    if (activeLine < CODE_LINES.length - 1) {
      timeoutId = window.setTimeout(() => {
        setActiveLine((line) => line + 1);
        setCharsInActiveLine(0);
      }, 520);
      return () => window.clearTimeout(timeoutId);
    }

    timeoutId = window.setTimeout(() => {
      setIsResetting(true);
    }, 1600);

    return () => window.clearTimeout(timeoutId);
  }, [activeLine, charsInActiveLine, isResetting]);

  const visibleCharsPerLine = CODE_LINE_TEXT.map((lineText, index) => {
    if (index < activeLine) return lineText.length;
    if (index === activeLine) return charsInActiveLine;
    return 0;
  });

  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center overflow-hidden">
      <GradientOrb color="rgba(56,189,248,0.16)" size={1000} x="8%" y="18%" />
      <GradientOrb color="rgba(244,114,182,0.13)" size={920} x="92%" y="82%" delay={1} />
      <GradientOrb color="rgba(250,204,21,0.11)" size={760} x="82%" y="24%" delay={0.6} />

      <div className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage: 'linear-gradient(rgba(125,211,252,0.34) 1px, transparent 1px), linear-gradient(90deg, rgba(192,132,252,0.3) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <motion.a
        initial={{ opacity: 0, y: 32 }}
        animate={{
          opacity: 1,
          y: [0, -4, 0],
          boxShadow: [
            '0 0 0 rgba(56,189,248,0)',
            '0 0 22px rgba(56,189,248,0.35)',
            '0 0 0 rgba(56,189,248,0)',
          ],
        }}
        transition={{
          opacity: { duration: 0.7, delay: 0.1, ease: 'easeOut' },
          y: { duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.1 },
          boxShadow: { duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.1 },
        }}
        href={EVENT.link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 inline-flex items-center gap-4 px-7 py-3.5 mb-12 hover:scale-105 transition-transform"
        style={{
          borderRadius: 100,
          background: 'linear-gradient(135deg, rgba(12,16,25,0.85), rgba(17,12,24,0.72))',
          border: '1px solid rgba(125,211,252,0.55)',
        }}
      >
        <motion.span className="w-3 h-3 rounded-full shrink-0"
          style={{ backgroundColor: '#22d3ee' }}
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }} />
        <span className="font-mono text-lg font-medium text-cyan-100">{EVENT.name}</span>
        <span className="w-px h-6 bg-cyan-200/30" />
        <span
          className="text-lg font-bold"
          style={{
            background: 'linear-gradient(135deg, #fef08a, #fb7185 56%, #c084fc)',
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
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: [0, -5, 0] }}
        transition={{
          opacity: { duration: 0.7, delay: 0.25, ease: 'easeOut' },
          y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.25 },
        }}
        className="relative z-10 text-center font-black tracking-tight leading-[1.0] mb-8"
        style={{ fontSize: 'clamp(3.5rem, 8vw, 7.5rem)' }}
      >
        <motion.span
          className="text-white"
          animate={{ opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          Agent Engineering
        </motion.span>
        <br />
        <motion.span
          className="text-slate-100"
          animate={{
            textShadow: [
              '0 0 8px rgba(59,130,246,0.25)',
              '0 0 20px rgba(244,114,182,0.5)',
              '0 0 8px rgba(250,204,21,0.28)',
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          101
        </motion.span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: [0.85, 1, 0.88], y: 0 }}
        transition={{
          opacity: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.4 },
          y: { duration: 0.7, ease: 'easeOut', delay: 0.4 },
        }}
        className="relative z-10 text-center text-2xl md:text-4xl text-cyan-50 font-light max-w-3xl px-5"
        style={{ textShadow: '0 0 24px rgba(56,189,248,0.18)' }}
      >
        How to Build Reliable AI Systems
      </motion.p>

      <motion.div
        className="absolute bottom-8 left-7 md:left-10 w-[min(94vw,590px)] font-mono text-[11px] md:text-xs leading-relaxed"
        animate={{
          y: [0, -5, 0],
          boxShadow: [
            '0 0 0 rgba(34,211,238,0)',
            '0 0 24px rgba(34,211,238,0.22)',
            '0 0 0 rgba(34,211,238,0)',
          ],
        }}
        transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          borderRadius: 14,
          padding: '0.7rem 0.95rem',
          background: 'linear-gradient(135deg, rgba(10,14,24,0.88), rgba(26,14,33,0.8))',
          border: '1px solid rgba(125,211,252,0.45)',
          color: 'rgba(217,249,255,0.92)',
        }}
      >
        {CODE_LINES.map((line, index) => {
          const isCursorLine = index === activeLine && !isResetting;

          return (
            <div key={`code-line-${index}`} className="min-h-[1.4em]">
              {renderTypedTokens(line, visibleCharsPerLine[index])}
              {isCursorLine && (
                <motion.span
                  className="inline-block ml-0.5"
                  style={{ color: '#fef08a' }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.9, repeat: Infinity }}
                >
                  ▍
                </motion.span>
              )}
            </div>
          );
        })}
      </motion.div>

      <motion.div
        className="absolute top-10 right-7 md:right-12 font-mono text-xs leading-relaxed text-right px-3 py-2 rounded-xl"
        animate={{ y: [0, 5, 0], opacity: [0.72, 1, 0.72] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        style={{
          color: 'rgba(199,210,254,0.88)',
          background: 'rgba(15,23,42,0.46)',
          border: '1px solid rgba(129,140,248,0.35)',
        }}
      >
        <div>eval_score: <span style={{ color: '#a5f3fc' }}>0.94</span></div>
        <div>latency_p99: <span style={{ color: '#fef08a' }}>142ms</span></div>
        <div>status: <span style={{ color: '#86efac' }}>healthy</span></div>
      </motion.div>
    </div>
  );
}
