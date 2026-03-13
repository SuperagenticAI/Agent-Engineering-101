import { motion } from 'framer-motion';
import { Code, Sparkles, ArrowRight } from 'lucide-react';
import { LINKS } from '../../data/slides';
import { ExternalLink } from '../visuals/ExternalLink';
import { GradientOrb } from '../backgrounds/GradientOrb';
import { SlideLayout, item } from '../visuals/SlideLayout';

export function DSPyGEPASlide() {
  return (
    <SlideLayout>
      <GradientOrb color="rgba(0,212,255,0.08)" size={500} x="25%" y="35%" />
      <GradientOrb color="rgba(168,85,247,0.08)" size={500} x="75%" y="65%" delay={1} />

      <motion.h2 variants={item}
        className="relative z-10 text-5xl md:text-6xl font-black text-center mb-4 leading-tight max-w-4xl"
      >
        Optimize <span className="gradient-text">systematically</span>
      </motion.h2>

      <motion.p variants={item} className="relative z-10 text-xl text-text-secondary text-center mb-14 max-w-xl">
        Structured programs + evaluation-driven optimization
      </motion.p>

      <motion.div variants={item} className="relative z-10 grid grid-cols-2 gap-8 max-w-5xl w-full">
        {/* DSPy */}
        <motion.div className="glass-strong p-8 relative overflow-hidden"
          whileHover={{ boxShadow: '0 0 50px rgba(0,212,255,0.15)' }}>
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-neon-blue to-neon-cyan rounded-t-3xl" />
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-xl bg-neon-blue/10 flex items-center justify-center">
              <Code size={28} className="text-neon-blue" />
            </div>
            <div>
              <h3 className="text-3xl font-black text-neon-blue">DSPy</h3>
              <span className="text-sm font-mono text-text-muted">Declarative AI Programming</span>
            </div>
          </div>
          <p className="text-base text-text-secondary mb-6 leading-relaxed">
            Build modular, structured AI programs instead of brittle prompt strings.
          </p>
          <div className="glass-sm p-5 font-mono text-sm leading-relaxed mb-6">
            <div><span className="text-neon-purple">class</span> <span className="text-neon-blue">RAGAgent</span>(dspy.Module):</div>
            <div className="pl-4"><span className="text-neon-purple">def</span> <span className="text-neon-green">forward</span>(self, question):</div>
            <div className="pl-8">context = self.retrieve(question)</div>
            <div className="pl-8"><span className="text-neon-purple">return</span> self.generate(context, question)</div>
          </div>
          <ExternalLink href={LINKS.dspy} className="text-lg font-bold">dspy.ai</ExternalLink>
        </motion.div>

        {/* GEPA */}
        <motion.div className="glass-strong p-8 relative overflow-hidden"
          whileHover={{ boxShadow: '0 0 50px rgba(168,85,247,0.15)' }}>
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-neon-purple to-neon-pink rounded-t-3xl" />
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-xl bg-neon-purple/10 flex items-center justify-center">
              <Sparkles size={28} className="text-neon-purple" />
            </div>
            <div>
              <h3 className="text-3xl font-black text-neon-purple">GEPA</h3>
              <span className="text-sm font-mono text-text-muted">Reflective Optimization</span>
            </div>
          </div>
          <p className="text-base text-text-secondary mb-6 leading-relaxed">
            Optimize prompts and system components using evaluation feedback and reflection.
          </p>
          <div className="glass-sm p-5 font-mono text-sm leading-relaxed mb-6">
            <div className="text-text-muted"># GEPA optimization loop</div>
            <div><span className="text-neon-purple">for</span> step <span className="text-neon-purple">in</span> range(N):</div>
            <div className="pl-4">results = <span className="text-neon-green">evaluate</span>(program)</div>
            <div className="pl-4">feedback = <span className="text-neon-green">reflect</span>(results)</div>
            <div className="pl-4">program = <span className="text-neon-green">optimize</span>(program, feedback)</div>
          </div>
          <ExternalLink href={LINKS.gepa} className="text-lg font-bold">GEPA Docs</ExternalLink>
        </motion.div>
      </motion.div>

      {/* Pipeline */}
      <motion.div variants={item} className="relative z-10 flex items-center gap-3 mt-12 font-mono">
        {['Program', 'Evaluate', 'Reflect', 'Optimize', 'Better System'].map((s, i) => (
          <span key={s} className="flex items-center gap-3">
            <motion.span className={`glass-sm px-4 py-2 text-sm font-bold ${
              s === 'Better System' ? 'text-neon-green neon-glow-green' : 'text-text-secondary'
            }`} whileHover={{ scale: 1.08 }}>{s}</motion.span>
            {i < 4 && (
              <motion.span animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}>
                <ArrowRight size={15} className="text-neon-purple" />
              </motion.span>
            )}
          </span>
        ))}
      </motion.div>
    </SlideLayout>
  );
}
