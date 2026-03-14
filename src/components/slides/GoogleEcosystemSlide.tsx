import { motion } from 'framer-motion';
import { Cpu, Box, Network, ArrowRight, Workflow, Braces } from 'lucide-react';
import { LINKS } from '../../data/slides';
import { ExternalLink } from '../visuals/ExternalLink';
import { GradientOrb } from '../backgrounds/GradientOrb';
import { SlideLayout, item } from '../visuals/SlideLayout';

const cards = [
  {
    icon: Cpu, title: 'Gemini Models', sub: 'Foundation models',
    color: 'rgba(255,255,255,0.92)', bg: 'rgba(255,255,255,0.08)',
    desc: 'Modern multimodal reasoning. Long context, structured outputs, function calling.',
    links: [
      { label: 'Models', url: LINKS.geminiModels },
      { label: 'Structured Output', url: LINKS.geminiStructured },
      { label: 'Function Calling', url: LINKS.geminiFunctionCalling },
    ],
  },
  {
    icon: Box, title: 'Google ADK', sub: 'Agent framework',
    color: 'rgba(255,255,255,0.92)', bg: 'rgba(255,255,255,0.08)',
    desc: 'Develop and orchestrate agents as self-contained execution units with tools.',
    links: [
      { label: 'ADK Docs', url: LINKS.adk },
      { label: 'Agents', url: LINKS.adkAgents },
    ],
  },
  {
    icon: Network, title: 'A2A Protocol', sub: 'Agent communication',
    color: 'rgba(255,255,255,0.92)', bg: 'rgba(255,255,255,0.08)',
    desc: 'Agent-to-agent communication. Discover, talk to, and collaborate securely.',
    links: [
      { label: 'A2A Docs', url: LINKS.adkA2A },
    ],
  },
];

const codeExamples = [
  {
    icon: Workflow,
    title: 'Google ADK',
    code: `from google.adk.agents import Agent

planner = Agent(
    name="release_planner",
    model="gemini-3.1-pro-preview",
    instruction="Plan a production launch.",
    tools=[search_docs, estimate_scope],
)`,
  },
  {
    icon: Braces,
    title: 'A2A',
    code: `{
  "jsonrpc": "2.0",
  "method": "tasks/send",
  "params": {
    "agent": "security-reviewer",
    "task": { "title": "Review tool permissions" }
  }
}`,
  },
];

export function GoogleEcosystemSlide() {
  return (
    <SlideLayout>
      <GradientOrb color="rgba(255,255,255,0.05)" size={700} x="50%" y="45%" />

      <motion.h2 variants={item}
        className="relative z-10 text-5xl md:text-6xl font-black text-center mb-4 leading-tight max-w-4xl"
      >
        Google's Agent{' '}
        <span className="gradient-text">Ecosystem</span>
      </motion.h2>

      <motion.p variants={item} className="relative z-10 text-xl text-text-secondary text-center mb-14 max-w-xl">
        Models, frameworks, and protocols for production agents
      </motion.p>

      <motion.div variants={item} className="relative z-10 grid grid-cols-3 gap-6 max-w-5xl w-full">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            className="glass-strong p-7 relative overflow-hidden cursor-default"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.15, type: 'spring' }}
            whileHover={{ scale: 1.03, boxShadow: '0 0 24px rgba(255,255,255,0.05)' }}
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl" style={{ background: card.color }} />

            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
              style={{ background: card.bg }}>
              <card.icon size={28} style={{ color: card.color }} />
            </div>

            <h3 className="text-2xl font-black mb-1" style={{ color: card.color }}>{card.title}</h3>
            <span className="text-sm font-mono text-text-muted block mb-4">{card.sub}</span>

            <p className="text-base text-text-secondary mb-5 leading-relaxed">{card.desc}</p>

            <div className="space-y-2">
              {card.links.map(l => (
                <ExternalLink key={l.label} href={l.url} className="text-base block">{l.label}</ExternalLink>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={item} className="relative z-10 mt-8 grid grid-cols-2 gap-6 max-w-5xl w-full">
        {codeExamples.map((example) => (
          <div key={example.title} className="glass-strong p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/8 flex items-center justify-center">
                <example.icon size={18} className="text-white/90" />
              </div>
              <h3 className="text-xl font-bold text-white">{example.title}</h3>
            </div>
            <pre className="code-block"><code>{example.code}</code></pre>
          </div>
        ))}
      </motion.div>

      <motion.div variants={item} className="relative z-10 flex items-center gap-4 mt-12 font-mono">
        {[
          { label: 'Gemini', c: 'rgba(255,255,255,0.88)' },
          { label: 'ADK Runtime', c: 'rgba(255,255,255,0.88)' },
          { label: 'Tools', c: 'rgba(255,255,255,0.88)' },
          { label: 'A2A Network', c: 'rgba(255,255,255,0.88)' },
        ].map((s, i) => (
          <span key={s.label} className="flex items-center gap-4">
            <motion.span className="glass-sm px-5 py-2.5 text-sm font-bold"
              style={{ color: s.c }}
              whileHover={{ scale: 1.08, boxShadow: '0 0 20px rgba(255,255,255,0.05)' }}>
              {s.label}
            </motion.span>
            {i < 3 && (
              <motion.span animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}>
                <ArrowRight size={16} className="text-text-muted" />
              </motion.span>
            )}
          </span>
        ))}
      </motion.div>
    </SlideLayout>
  );
}
