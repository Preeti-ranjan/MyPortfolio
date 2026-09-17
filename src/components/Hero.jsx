import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, GitBranch, Network, Terminal } from 'lucide-react';
import { profile } from '../data/portfolioData.js';
import ResumeButton from './ResumeButton.jsx';

const techCards = ['Java', 'React', 'Spring Boot', 'Node.js', 'MongoDB', 'MySQL'];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative mx-auto min-h-screen w-full max-w-7xl px-5 pb-12 pt-32 sm:px-8 lg:px-10 lg:pt-40">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <p className="inline-flex rounded-full border border-cyan/25 bg-cyan/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan">
            Available for software development opportunities
          </p>
          <h1 className="mt-7 text-4xl font-black leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Hi, I'm
            <span className="mt-2 block">{profile.name}</span>
          </h1>
          <p className="mt-5 bg-gradient-to-r from-cyan to-violet bg-clip-text text-3xl font-black text-transparent sm:text-5xl">
            {profile.primaryRole}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Computer Science graduate passionate about building scalable web applications, AI-powered solutions, and modern
            digital experiences.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a className="btn-primary" href="#projects">
              View My Projects <ArrowRight size={18} aria-hidden="true" />
            </a>
            <ResumeButton variant="secondary" />
            <a className="btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
              Let's Connect <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="social-link" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <GitBranch size={20} aria-hidden="true" />
              <span>GitHub</span>
            </a>
            <a className="social-link" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <Network size={20} aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="hero-console"
        >
          <div className="flex items-center justify-between border-b border-line p-4">
            <div className="flex gap-2" aria-hidden="true">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-amber-300/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-300/80" />
            </div>
            <span className="text-xs text-slate-400">preetiranjan.dev</span>
          </div>
          <div className="p-5 sm:p-7">
            <div className="mb-6 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-cyan/30 bg-cyan/10">
                <img
                  src={profile.photoUrl}
                  alt="Preeti Ranjan Sarangi"
                  className="h-full w-full object-cover object-top"
                  loading="eager"
                />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white">{profile.name}</p>
                <p className="mt-1 text-sm text-slate-400">{profile.secondaryRole}</p>
              </div>
            </div>
            <div className="mb-6 rounded-2xl border border-cyan/20 bg-cyan/5 p-4 font-mono text-sm text-slate-200">
              <p className="flex items-center gap-2 text-cyan">
                <Terminal size={16} aria-hidden="true" /> $ whoami
              </p>
              <p className="mt-3">preeti@developer:~$</p>
              <p className="text-white">{profile.primaryRole}</p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {techCards.map((tech, index) => (
                <motion.div
                  key={tech}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center text-sm font-semibold text-slate-100"
                  animate={reduceMotion ? undefined : { y: [0, index % 2 ? -5 : 5, 0] }}
                  transition={{ duration: 4 + index * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
