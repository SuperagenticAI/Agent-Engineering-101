import { motion } from 'framer-motion';
import { Code, Sparkles, ArrowRight } from 'lucide-react';
import { LINKS } from '../../data/slides';
import { ExternalLink } from '../visuals/ExternalLink';
import { GradientOrb } from '../backgrounds/GradientOrb';
import { SlideLayout, item } from '../visuals/SlideLayout';

export function DSPyGEPASlide() {
  return (
    <SlideLayout>
      <GradientOrb color="rgba(251,191,36,0.06)" size={500} x="25%" y="35%" />

      <motion.h2 variants={item}
        className="relative z-10 text-5xl md:text-6xl font-black text-center mb-5 leading-tight max-w-4xl"
      >
        Optimize <span className="gradient-text">systematically</span>
      </motion.h2>

      <motion.p variants={item} className="relative z-10 text-xl md:text-2xl text-text-secondary text-center mb-16">
        Structured programs with evaluation-driven improvement
      </motion.p>

      <motion.div variants={item} className="relative z-10 grid grid-cols-2 gap-10 max-w-5xl w-full">
        <motion.div className="glass-strong p-10 relative overflow-hidden" whileHover={{ boxShadow: '0 0 32px rgba(56,189,248,0.08)' }}>
          <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl" style={{ background: '#38bdf8' }} />
          <div className="flex items-center gap-5 mb-7">
            <div className="w-14 h-14 rounded-xl bg-sky-500/10 flex items-center justify-center">
              <Code size={28} className="text-sky-400" />
            </div>
            <div>
              <h3 className="text-3xl font-black text-white">DSPy</h3>
              <span className="text-sm font-mono text-text-muted">Declarative AI Programming</span>
            </div>
          </div>
          <p className="text-lg text-text-secondary mb-7 leading-relaxed">
            Build modular, structured AI programs instead of brittle prompt strings.
          </p>
          <pre className="code-block mb-7"><code>{`class RAGAgent(dspy.Module):
    def forward(self, question):
        context = self.retrieve(question)
        return self.generate(context, question)`}</code></pre>
          <ExternalLink href={LINKS.dspy} className="text-lg font-bold">dspy.ai</ExternalLink>
        </motion.div>

        <motion.div className="glass-strong p-10 relative overflow-hidden" whileHover={{ boxShadow: '0 0 32px rgba(167,139,250,0.08)' }}>
          <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl" style={{ background: '#a78bfa' }} />
          <div className="flex items-center gap-5 mb-7">
            <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center">
              <Sparkles size={28} className="text-purple-400" />
            </div>
            <div>
              <h3 className="text-3xl font-black text-white">GEPA</h3>
              <span className="text-sm font-mono text-text-muted">Reflective Optimization</span>
            </div>
          </div>
          <p className="text-lg text-text-secondary mb-7 leading-relaxed">
            Improve prompts and system components using evaluation feedback and reflection.
          </p>
          <pre className="code-block mb-7"><code>{`for step in range(N):
    results = evaluate(program)
    feedback = reflect(results)
    program = optimize(program, feedback)`}</code></pre>
          <ExternalLink href={LINKS.gepa} className="text-lg font-bold">GEPA Docs</ExternalLink>
        </motion.div>
      </motion.div>

      <motion.div variants={item} className="relative z-10 flex items-center gap-4 mt-14 font-mono">
        {['Program', 'Evaluate', 'Reflect', 'Optimize'].map((s, i) => (
          <span key={s} className="flex items-center gap-4">
            <motion.span className={`glass-sm px-5 py-2.5 text-sm font-bold ${i === 3 ? 'text-white' : 'text-text-secondary'}`} whileHover={{ scale: 1.08 }}>
              {s}
            </motion.span>
            {i < 3 && (
              <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}>
                <ArrowRight size={15} className="text-text-muted" />
              </motion.span>
            )}
          </span>
        ))}
      </motion.div>
    </SlideLayout>
  );
}
