import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { navItems, profile } from '../data/portfolioData.js';
import ResumeButton from './ResumeButton.jsx';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (location.pathname !== '/') return undefined;
    const sections = navItems.map((item) => document.querySelector(item.href)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: 0.01 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [location.pathname]);

  const handleNav = (href) => {
    setOpen(false);
    if (location.pathname !== '/') {
      navigate(`/${href}`);
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition ${
        scrolled || open ? 'border-line bg-ink/78 shadow-glow backdrop-blur-xl' : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10" aria-label="Main">
        <Link to="/" className="flex items-center gap-3 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan">
          <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-2xl border border-cyan/30 bg-cyan/10 text-sm font-black text-cyan">
            <img src={profile.photoUrl} alt="" className="h-full w-full object-cover object-top" />
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-semibold text-white">{profile.name}</span>
            <span className="text-xs text-slate-400">{profile.primaryRole}</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => handleNav(item.href)}
              className={`rounded-full px-3 py-2 text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan ${
                active === item.href.slice(1) && location.pathname === '/'
                  ? 'bg-white/10 text-white'
                  : 'text-slate-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden lg:block">
          <ResumeButton variant="secondary" />
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white/5 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="border-t border-line bg-ink/95 px-5 py-5 backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto grid max-w-7xl gap-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => handleNav(item.href)}
                  className="rounded-2xl px-4 py-3 text-left text-sm font-medium text-slate-200 transition hover:bg-white/5"
                >
                  {item.label}
                </button>
              ))}
              <ResumeButton variant="secondary" className="mt-2 w-full" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
