import { aboutCards } from '../data/portfolioData.js';
import Section from './Section.jsx';

export default function About() {
  return (
    <Section id="about" title="About Me" subtitle="Building practical solutions with code.">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-3xl border border-line bg-white/[0.035] p-6 sm:p-8">
          <p className="text-lg leading-8 text-slate-300">
            I am a B.Tech Computer Science graduate focused on Full Stack Development with Java, React.js, Spring Boot,
            Node.js, Express.js, REST APIs, MongoDB, and MySQL. I enjoy building practical software that balances clean
            interfaces, reliable backend architecture, and clear problem solving.
          </p>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            My project work also explores AI/ML and Computer Vision, giving me a strong foundation for modern applications
            that combine web engineering with intelligent features.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {aboutCards.map(({ number, title, icon: Icon }) => (
            <div key={title} className="feature-card">
              <span className="text-sm font-semibold text-cyan">{number}</span>
              <Icon className="mt-8 text-cyan" size={28} aria-hidden="true" />
              <h3 className="mt-5 text-xl font-bold text-white">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
