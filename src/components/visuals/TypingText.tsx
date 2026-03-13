import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypingTextProps {
  lines: { text: string; color?: string }[];
  speed?: number;
  startDelay?: number;
}

export function TypingText({ lines, speed = 30, startDelay = 500 }: TypingTextProps) {
  const [displayedLines, setDisplayedLines] = useState<{ text: string; color?: string }[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (!started || currentLine >= lines.length) return;

    const line = lines[currentLine];
    if (currentChar < line.text.length) {
      const t = setTimeout(() => {
        setDisplayedLines((prev) => {
          const copy = [...prev];
          if (copy.length <= currentLine) {
            copy.push({ text: line.text[0], color: line.color });
          } else {
            copy[currentLine] = {
              text: line.text.substring(0, currentChar + 1),
              color: line.color,
            };
          }
          return copy;
        });
        setCurrentChar((c) => c + 1);
      }, speed);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, 200);
      return () => clearTimeout(t);
    }
  }, [started, currentLine, currentChar, lines, speed]);

  return (
    <div className="font-mono text-sm leading-relaxed">
      {displayedLines.map((line, i) => (
        <div key={i} className={line.color || 'text-text-muted'}>
          {line.text}
          {i === currentLine && (
            <motion.span
              className="inline-block w-2 h-4 bg-neon-green ml-0.5 align-middle"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
