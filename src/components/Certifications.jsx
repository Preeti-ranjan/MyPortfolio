import { certifications } from '../data/portfolioData.js';
import Section from './Section.jsx';

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <div className="grid gap-5 md:grid-cols-2">
        {certifications.map(({ title, icon: Icon }, index) => (
          <article key={title} className="rounded-3xl border border-line bg-white/[0.035] p-7">
            <span className="text-sm font-semibold text-cyan">{String(index + 1).padStart(2, '0')}</span>
            <Icon className="mt-8 text-violet" size={30} aria-hidden="true" />
            <h3 className="mt-5 text-2xl font-bold text-white">{title}</h3>
          </article>
        ))}
      </div>
    </Section>
  );
}
