import { ArrowRight, GitBranch } from 'lucide-react';
import { profile, projects } from '../data/portfolioData.js';
import Section from './Section.jsx';

export default function GithubSection() {
  return (
    <Section id="github" title="Explore My Code" subtitle="Interested in the code behind my projects? Explore my GitHub repositories.">
      <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-3xl border border-line bg-white/[0.035] p-7">
          <GitBranch size={34} className="text-cyan" aria-hidden="true" />
          <h3 className="mt-5 text-2xl font-bold text-white">GitHub Repositories</h3>
          <p className="mt-4 leading-7 text-slate-300">Browse the real repositories used throughout this portfolio.</p>
          <a className="btn-primary mt-7" href={profile.github} target="_blank" rel="noreferrer">
            View GitHub <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
        <div className="grid gap-3">
          {projects.slice(0, 5).map((project) => (
            <a key={project.slug} href={project.github} target="_blank" rel="noreferrer" className="repo-row">
              <span>
                <span className="block font-semibold text-white">{project.title}</span>
                <span className="text-sm text-slate-400">{project.technology}</span>
              </span>
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
