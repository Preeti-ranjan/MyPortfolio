import { BriefcaseBusiness } from 'lucide-react';
import { experience } from '../data/portfolioData.js';
import Section from './Section.jsx';

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="relative max-w-4xl border-l border-line pl-8">
        <div className="absolute -left-5 top-0 grid h-10 w-10 place-items-center rounded-full border border-cyan/30 bg-cyan/10 text-cyan">
          <BriefcaseBusiness size={20} aria-hidden="true" />
        </div>
        <div className="rounded-3xl border border-line bg-white/[0.035] p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan">{experience.duration}</p>
          <h3 className="mt-3 text-2xl font-bold text-white">{experience.role}</h3>
          <p className="mt-1 text-lg text-slate-300">{experience.company}</p>
          <p className="mt-5 leading-8 text-slate-300">{experience.description}</p>
        </div>
      </div>
    </Section>
  );
}
