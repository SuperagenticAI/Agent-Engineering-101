import { motion } from 'framer-motion';
import { Cpu, Box, Network, ArrowRight } from 'lucide-react';
import { LINKS } from '../../data/slides';
import { ExternalLink } from '../visuals/ExternalLink';
import { SlideLayout, item } from '../visuals/SlideLayout';

const cards = [
  { icon: Cpu, title: 'Gemini Models', sub: 'Foundation models',
    desc: 'Modern multimodal reasoning. Long context, structured outputs, function calling.',
    links: [{ label: 'Models', url: LINKS.geminiModels }, { label: 'Structured Output', url: LINKS.geminiStructured }, { label: 'Function Calling', url: LINKS.geminiFunctionCalling }] },
  { icon: Box, title: 'Google ADK', sub: 'Agent framework',
    desc: 'Develop and orchestrate agents as self-contained execution units with tools.',
    links: [{ label: 'ADK Docs', url: LINKS.adk }, { label: 'Agents', url: LINKS.adkAgents }] },
  { icon: Network, title: 'A2A Protocol', sub: 'Agent communication',
    desc: 'Agent-to-agent communication. Discover, talk to, and collaborate securely.',
    links: [{ label: 'A2A Docs', url: LINKS.adkA2A }] },
];

export function GoogleEcosystemSlide() {
  return (
    <SlideLayout>
      <motion.h2 variants={item} className="relative z-10 text-5xl md:text-6xl font-black text-center mb-5 leading-tight max-w-4xl text-white">
        Google&apos;s Agent <span className="gradient-text">Ecosystem</span>
      </motion.h2>

      <motion.p variants={item} className="relative z-10 text-xl md:text-2xl text-white text-center mb-16">
        Models, frameworks, and protocols for production agents
      </motion.p>

      <motion.div variants={item} className="relative z-10 grid grid-cols-3 gap-8 max-w-5xl w-full">
        {cards.map((card, i) => (
          <motion.div key={card.title}
            className="glass-strong p-9 relative overflow-hidden cursor-default"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.15, type: 'spring' }}
            whileHover={{ scale: 1.03, boxShadow: '0 0 28px rgba(255,255,255,0.06)' }}
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-3xl bg-white/30" />
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-white/10">
              <card.icon size={26} className="text-white" />
            </div>
            <h3 className="text-2xl font-black mb-1 text-white">{card.title}</h3>
            <span className="text-sm font-mono text-white block mb-5">{card.sub}</span>
            <p className="text-base text-white mb-7 leading-relaxed">{card.desc}</p>
            <div className="space-y-2.5">
              {card.links.map(l => (
                <ExternalLink key={l.label} href={l.url} className="text-base block">{l.label}</ExternalLink>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={item} className="relative z-10 flex items-center gap-5 mt-14 font-mono">
        {['Gemini', 'ADK Runtime', 'Tools', 'A2A Network'].map((s, i) => (
          <span key={s} className="flex items-center gap-5">
            <motion.span className="glass-sm px-5 py-2.5 text-sm font-bold text-white" whileHover={{ scale: 1.08 }}>{s}</motion.span>
            {i < 3 && (
              <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}>
                <ArrowRight size={16} className="text-white" style={{ opacity: 0.35 }} />
              </motion.span>
            )}
          </span>
        ))}
      </motion.div>
    </SlideLayout>
  );
}
