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
      <GradientOrb color="rgba(56,189,248,0.13)" size={1000} x="8%" y="18%" />
      <GradientOrb color="rgba(244,114,182,0.10)" size={920} x="92%" y="82%" delay={1} />
      <GradientOrb color="rgba(250,204,21,0.08)" size={760} x="82%" y="24%" delay={0.6} />

      <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: 'linear-gradient(rgba(56,189,248,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.25) 1px, transparent 1px)',
          backgroundSize: '90px 90px',
        }}
      />

      <motion.a
        initial={{ opacity: 0, y: 32 }}
        animate={{
          opacity: 1,
          y: [0, -4, 0],
          boxShadow: [
            '0 0 0 rgba(56,189,248,0)',
            '0 0 28px rgba(56,189,248,0.3)',
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
        className="relative z-10 inline-flex items-center gap-4 px-8 py-4 mb-16 hover:scale-105 transition-transform"
        style={{
          borderRadius: 100,
          background: 'linear-gradient(135deg, rgba(12,16,25,0.85), rgba(17,12,24,0.72))',
          border: '1px solid rgba(56,189,248,0.4)',
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
            background: 'linear-gradient(135deg, #fbbf24, #f472b6 56%, #a78bfa)',
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
        className="relative z-10 text-center font-black tracking-tight leading-[1.0] mb-10"
        style={{ fontSize: 'clamp(3.5rem, 8vw, 8rem)' }}
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
          className="gradient-text"
          animate={{
            textShadow: [
              '0 0 12px rgba(167,139,250,0.3)',
              '0 0 24px rgba(244,114,182,0.4)',
              '0 0 12px rgba(251,191,36,0.3)',
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
        className="relative z-10 text-center text-2xl md:text-4xl text-cyan-50/90 font-light max-w-3xl px-5"
        style={{ textShadow: '0 0 30px rgba(56,189,248,0.15)' }}
      >
        How to Build Reliable AI Systems
      </motion.p>

      <motion.div
        className="absolute bottom-10 left-8 md:left-12 w-[min(90vw,560px)] font-mono text-[12px] md:text-sm leading-relaxed"
        animate={{
          y: [0, -5, 0],
          boxShadow: [
            '0 0 0 rgba(34,211,238,0)',
            '0 0 28px rgba(34,211,238,0.18)',
            '0 0 0 rgba(34,211,238,0)',
          ],
        }}
        transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          borderRadius: 16,
          padding: '1rem 1.25rem',
          background: 'linear-gradient(135deg, rgba(10,14,24,0.9), rgba(26,14,33,0.82))',
          border: '1px solid rgba(56,189,248,0.3)',
          color: 'rgba(217,249,255,0.92)',
        }}
      >
        {CODE_LINES.map((line, index) => {
          const isCursorLine = index === activeLine && !isResetting;

          return (
            <div key={`code-line-${index}`} className="min-h-[1.5em]">
              {renderTypedTokens(line, visibleCharsPerLine[index])}
              {isCursorLine && (
                <motion.span
                  className="inline-block ml-0.5"
                  style={{ color: '#fbbf24' }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.9, repeat: Infinity }}
                >
                  |
                </motion.span>
              )}
            </div>
          );
        })}
      </motion.div>

      <motion.div
        className="absolute top-12 right-8 md:right-14 font-mono text-sm leading-loose text-right px-4 py-3 rounded-xl"
        animate={{ y: [0, 5, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        style={{
          color: 'rgba(199,210,254,0.9)',
          background: 'rgba(15,23,42,0.5)',
          border: '1px solid rgba(129,140,248,0.25)',
        }}
      >
        <div>eval_score: <span style={{ color: '#67e8f9' }}>0.94</span></div>
        <div>latency_p99: <span style={{ color: '#fbbf24' }}>142ms</span></div>
        <div>status: <span style={{ color: '#34d399' }}>healthy</span></div>
      </motion.div>
    </div>
  );
}
