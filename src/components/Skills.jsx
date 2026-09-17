import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData.js';
import Section from './Section.jsx';

export default function Skills() {
  return (
    <Section id="skills" title="Technical Skills" subtitle="Technologies and tools I work with.">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skills.map(({ title, icon: Icon, items }) => (
          <motion.div key={title} whileHover={{ y: -5 }} className="rounded-3xl border border-line bg-white/[0.035] p-6">
            <div className="mb-6 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl border border-cyan/25 bg-cyan/10 text-cyan">
                <Icon size={20} aria-hidden="true" />
              </span>
              <h3 className="text-lg font-bold text-white">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span key={item} className="skill-pill">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
