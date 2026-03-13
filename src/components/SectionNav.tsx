import { motion } from 'framer-motion';
import { slides } from '../data/slides';

interface SectionNavProps {
  current: number;
  goTo: (n: number) => void;
}

export function SectionNav({ current, goTo }: SectionNavProps) {
  const sections = slides.reduce<{ name: string; startSlide: number; count: number }[]>(
    (acc, slide) => {
      const last = acc[acc.length - 1];
      if (last && last.name === slide.section) {
        last.count++;
      } else {
        acc.push({ name: slide.section, startSlide: slide.id, count: 1 });
      }
      return acc;
    },
    []
  );

  return (
    <motion.div
      className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2.5"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8 }}
    >
      {sections.map((section) => {
        const isActive =
          current >= section.startSlide &&
          current < section.startSlide + section.count;
        return (
          <button
            key={section.name}
            onClick={() => goTo(section.startSlide)}
            className="group flex items-center gap-3 justify-end py-0.5"
            title={section.name}
          >
            <motion.span
              className="text-[10px] font-mono tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ color: isActive ? '#00d4ff' : '#64748b' }}
            >
              {section.name}
            </motion.span>
            <motion.div
              className="rounded-full transition-all duration-200"
              style={{
                width: isActive ? 14 : 6,
                height: isActive ? 14 : 6,
                background: isActive ? '#00d4ff' : 'rgba(255,255,255,0.15)',
                boxShadow: isActive ? '0 0 12px rgba(0,212,255,0.5)' : 'none',
              }}
              whileHover={{
                scale: 1.5,
                background: '#00d4ff',
                boxShadow: '0 0 12px rgba(0,212,255,0.4)',
              }}
            />
          </button>
        );
      })}
    </motion.div>
  );
}
