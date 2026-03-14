import { motion } from 'framer-motion';
import { Code, Sparkles, ArrowRight } from 'lucide-react';
import { LINKS } from '../../data/slides';
import { ExternalLink } from '../visuals/ExternalLink';
import { SlideLayout, item } from '../visuals/SlideLayout';

export function DSPyGEPASlide() {
  return (
    <SlideLayout>
      <motion.h2 variants={item} className="relative z-10 text-5xl md:text-6xl font-black text-center mb-5 leading-tight max-w-4xl text-white">
        Optimize <span className="gradient-text">systematically</span>
      </motion.h2>

      <motion.p variants={item} className="relative z-10 text-xl md:text-2xl text-white text-center mb-16">
        Structured programs with evaluation-driven improvement
      </motion.p>

      <motion.div variants={item} className="relative z-10 grid grid-cols-2 gap-10 max-w-5xl w-full">
        {[
          { icon: Code, title: 'DSPy', sub: 'Declarative AI Programming', link: LINKS.dspy, label: 'dspy.ai',
            desc: 'Build modular, structured AI programs instead of brittle prompt strings.',
            code: `class RAGAgent(dspy.Module):
    def forward(self, question):
        context = self.retrieve(question)
        return self.generate(context, question)` },
          { icon: Sparkles, title: 'GEPA', sub: 'Reflective Optimization', link: LINKS.gepa, label: 'GEPA Docs',
            desc: 'Improve prompts and system components using evaluation feedback and reflection.',
            code: `for step in range(N):
    results = evaluate(program)
    feedback = reflect(results)
    program = optimize(program, feedback)` },
        ].map((card) => (
          <motion.div key={card.title} className="glass-strong p-10 relative overflow-hidden"
            whileHover={{ boxShadow: '0 0 28px rgba(255,255,255,0.06)' }}>
            <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-3xl bg-white/35" />
            <div className="flex items-center gap-5 mb-7">
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
                <card.icon size={26} className="text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-black text-white">{card.title}</h3>
                <span className="text-sm font-mono text-white">{card.sub}</span>
              </div>
            </div>
            <p className="text-lg text-white mb-7 leading-relaxed">{card.desc}</p>
            <pre className="code-block mb-7"><code>{card.code}</code></pre>
            <ExternalLink href={card.link} className="text-lg font-bold">{card.label}</ExternalLink>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={item} className="relative z-10 flex items-center gap-4 mt-14 font-mono">
        {['Program', 'Evaluate', 'Reflect', 'Optimize'].map((s, i) => (
          <span key={s} className="flex items-center gap-4">
            <motion.span className="glass-sm px-5 py-2.5 text-sm font-bold text-white" whileHover={{ scale: 1.08 }}>{s}</motion.span>
            {i < 3 && (
              <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}>
                <ArrowRight size={15} className="text-white" style={{ opacity: 0.35 }} />
              </motion.span>
            )}
          </span>
        ))}
      </motion.div>
    </SlideLayout>
  );
}
