import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, GitBranch } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { filters, projects } from '../data/portfolioData.js';
import ProjectVisual from './ProjectVisual.jsx';
import Section from './Section.jsx';

function ProjectCard({ project, large = false }) {
  return (
    <motion.article layout initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} className={large ? 'project-card lg:grid lg:grid-cols-[0.95fr_1.05fr]' : 'project-card'}>
      <ProjectVisual type={project.visual} title={project.title} />
      <div className="flex h-full flex-col p-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="text-sm font-semibold text-cyan">{project.number}</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">{project.category}</span>
        </div>
        {project.badge && <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-violet">{project.badge}</p>}
        <h3 className="text-xl font-bold text-white sm:text-2xl">{project.title}</h3>
        <p className="mt-4 flex-1 leading-7 text-slate-300">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
        {project.highlights && (
          <ul className="mt-5 grid gap-2 text-sm text-slate-300">
            {project.highlights.slice(0, 3).map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan" />
                {highlight}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link className="btn-secondary" to={`/projects/${project.slug}`}>
            View Case Study <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
          <a className="btn-ghost" href={project.github} target="_blank" rel="noreferrer">
            <GitBranch size={17} aria-hidden="true" /> GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const featured = projects.filter((project) => project.featured);
  const visibleProjects = useMemo(
    () => (activeFilter === 'All' ? projects : projects.filter((project) => project.filterTags.includes(activeFilter))),
    [activeFilter],
  );

  return (
    <Section id="projects" title="Featured Projects" subtitle="Projects where I turned ideas into working software.">
      <div className="mb-12 grid gap-6">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} large />
        ))}
      </div>

      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h3 className="text-2xl font-bold text-white">All Projects</h3>
          <p className="mt-2 text-slate-400">Real repositories and project work from GitHub.</p>
        </div>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project filters">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`filter-button ${activeFilter === filter ? 'filter-button-active' : ''}`}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence>
          {visibleProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
