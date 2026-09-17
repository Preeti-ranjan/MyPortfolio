import CustomCursor from './components/CustomCursor.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Certifications from './components/Certifications.jsx';
import GithubSection from './components/GithubSection.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import AnimatedBackground from './components/AnimatedBackground.jsx';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-slate-100 selection:bg-cyan/30 selection:text-white">
      <AnimatedBackground />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <GithubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
