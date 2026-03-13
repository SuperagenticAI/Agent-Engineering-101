import type { SlideData } from '../types';

export const SPEAKER = {
  name: 'Shashi Jagtap',
  bio: 'Shashi Jagtap is the Founder of Superagentic AI and a former Apple engineer with nearly 20 years of experience in software engineering. He focuses on Agent Engineering, building reliable, evaluation-driven AI systems for real-world applications. As organizer of the London Agentic AI community, he brings together engineers advancing the next generation of production-ready AI systems.',
  x: 'https://x.com/Shashikant86',
  linkedin: 'https://www.linkedin.com/in/shashikantjagtap/',
};

export const EVENT = {
  name: 'GDG London',
  branding: 'Build With AI',
  link: 'https://www.eventbrite.com/e/build-with-ai-iwd-2026-by-gdg-london-tickets-1981892162810',
};

export const LINKS = {
  dspy: 'https://dspy.ai',
  gepa: 'https://gepa-ai.github.io/gepa/',
  geminiModels: 'https://ai.google.dev/gemini-api/docs/models',
  geminiStructured: 'https://ai.google.dev/gemini-api/docs/structured-output',
  geminiFunctionCalling: 'https://ai.google.dev/gemini-api/docs/function-calling',
  adk: 'https://google.github.io/adk-docs/',
  adkAgents: 'https://google.github.io/adk-docs/agents/',
  adkA2A: 'https://google.github.io/adk-docs/a2a/',
  meetup: 'https://www.meetup.com/london-agentic-ai',
  luma: 'https://luma.com/londonagenticai?k=c',
};

export const DISCIPLINES = [
  { name: 'Prompt Engineering', description: 'Instructions, patterns, structured outputs', icon: 'MessageSquare' as const, color: 'neon-blue' },
  { name: 'Context Engineering', description: 'Runtime context, grounding, retrieval, MCP', icon: 'Database' as const, color: 'neon-purple' },
  { name: 'Harness Engineering', description: 'Execution environment, policies, sandboxes, tools wiring', icon: 'Settings' as const, color: 'neon-green' },
  { name: 'Eval Engineering', description: 'Behavioral testing, LLM-as-judge, benchmarks', icon: 'TestTube' as const, color: 'neon-pink' },
  { name: 'Memory Engineering', description: 'Short-term vs long-term memory, retrieval strategies', icon: 'Brain' as const, color: 'neon-orange' },
  { name: 'Skills Engineering', description: 'Tool use, capability composition, reusable skills', icon: 'Wrench' as const, color: 'neon-blue' },
  { name: 'Guardrail Engineering', description: 'Safety, constraints, policy boundaries', icon: 'Shield' as const, color: 'neon-purple' },
  { name: 'Inference Engineering', description: 'Latency, serving, batching, cost/performance', icon: 'Zap' as const, color: 'neon-green' },
  { name: 'Agentic Engineering', description: 'Multi-agent orchestration, human-in-the-loop, workflow design', icon: 'Network' as const, color: 'neon-pink' },
];

export const slides: SlideData[] = [
  { id: 1, type: 'hero', section: 'Intro', title: 'Agent Engineering 101: How to Build Reliable AI Systems', subtitle: 'From prompt tinkering to production-ready AI systems' },
  { id: 2, type: 'speaker', section: 'Intro', title: 'About the Speaker' },
  { id: 3, type: 'problem', section: 'Problem', title: 'Everyone is building with AI. Most demos break in production.' },
  { id: 4, type: 'what-is-agent', section: 'Problem', title: 'An agent is not just a prompt. It is a system.' },
  { id: 5, type: 'how-we-build', section: 'Current State', title: 'How teams are building agents right now' },
  { id: 6, type: 'tinkering-breaks', section: 'Current State', title: 'Why prompts alone are not enough' },
  { id: 7, type: 'why-engineering', section: 'Engineering', title: 'Agent Engineering is the shift from tinkering to systems thinking' },
  { id: 8, type: 'types', section: 'Engineering', title: 'The main disciplines of Agent Engineering' },
  { id: 9, type: 'evals-memory', section: 'Engineering', title: 'You cannot prompt your way into reliability' },
  { id: 10, type: 'dspy-gepa', section: 'Frameworks', title: 'Programming and optimizing AI systems systematically' },
  { id: 11, type: 'google-ecosystem', section: 'Frameworks', title: "Google's ecosystem for building production agents" },
  { id: 12, type: 'resilient', section: 'Action', title: 'Practical rules for building reliable AI systems' },
  { id: 13, type: 'closing', section: 'Action', title: 'Reliable AI systems are engineered, not merely prompted' },
];
