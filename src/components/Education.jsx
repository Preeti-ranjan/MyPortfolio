import { education } from '../data/portfolioData.js';
import Section from './Section.jsx';

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="grid gap-4 lg:grid-cols-3">
        {education.map((item) => (
          <article key={item.degree} className="rounded-3xl border border-line bg-white/[0.035] p-6">
            <h3 className="text-xl font-bold text-white">{item.degree}</h3>
            <p className="mt-4 leading-7 text-slate-300">{item.institution}</p>
            <p className="mt-5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white">
              {item.duration}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
