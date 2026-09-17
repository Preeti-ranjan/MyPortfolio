import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, GitBranch } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import AnimatedBackground from '../components/AnimatedBackground.jsx';
import CustomCursor from '../components/CustomCursor.jsx';
import ProjectVisual from '../components/ProjectVisual.jsx';
import { projects } from '../data/portfolioData.js';

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-ink px-5 py-24 text-white">
        <AnimatedBackground />
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold">Project not found</h1>
          <Link className="btn-primary mt-8" to="/">
            <ArrowLeft size={18} /> Back Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-slate-100">
      <AnimatedBackground />
      <CustomCursor />
      <motion.main
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -18 }}
        transition={{ duration: 0.45 }}
        className="mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:px-10"
      >
        <Link className="btn-ghost" to="/">
          <ArrowLeft size={17} aria-hidden="true" /> Back
        </Link>

        <section className="grid gap-8 py-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan">{project.category}</p>
            <h1 className="mt-5 break-words text-4xl font-black text-white sm:text-6xl">{project.title}</h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">{project.description}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a className="btn-primary" href={project.github} target="_blank" rel="noreferrer">
                <GitBranch size={18} aria-hidden="true" /> GitHub
              </a>
              <a className="btn-ghost" href={project.github} target="_blank" rel="noreferrer">
                Repository <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
          <ProjectVisual type={project.visual} title={project.title} />
        </section>

        <section className="grid gap-5 pb-16 md:grid-cols-2">
          <InfoBlock title="Overview">{project.sections?.overview ?? project.description}</InfoBlock>
          <InfoBlock title="Technology">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="skill-pill">
                  {tech}
                </span>
              ))}
            </div>
          </InfoBlock>
          {project.sections?.implementation && <InfoBlock title="Implementation">{project.sections.implementation}</InfoBlock>}
          {project.highlights && (
            <InfoBlock title="Project Highlights">
              <ul className="grid gap-3">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </InfoBlock>
          )}
        </section>
      </motion.main>
    </div>
  );
}

function InfoBlock({ title, children }) {
  return (
    <article className="rounded-3xl border border-line bg-white/[0.035] p-6">
      <h2 className="text-xl font-bold text-white">{title}</h2>
      <div className="mt-4 leading-7 text-slate-300">{children}</div>
    </article>
  );
}
