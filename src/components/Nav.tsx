import React, { useState, useEffect } from 'react';
import RayleighLogo from '../assets/Rayleighlogo.png';

const Logo: React.FC<{ scrolled: boolean }> = ({ scrolled }) => (
  <div className={`flex items-center justify-center transition-all duration-300 ${scrolled ? '' : 'relative top-6'}`}>
    <img
      src={RayleighLogo}
      alt="Rayleigh"
      className={`w-auto transition-all duration-300 ${scrolled ? 'h-15' : 'h-25'}`}
    />
  </div>
);

const Nav: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('hero');

  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const onScroll = () => setScrolled(window.scrollY > 50);
  window.addEventListener('scroll', onScroll, { passive: true });
  return () => window.removeEventListener('scroll', onScroll);
}, []);

  useEffect(() => {
    const ids = ['hero', 'services', 'science', 'platform', 'architecture', 'challenge', 'talent'];
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length) setActive(visible[0].target.id);
      },
      { threshold: [0.5, 0.75] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`sticky top-0 z-50 backdrop-blur relative transition-colors duration-300 ${scrolled ? 'bg-[var(--ink)]/70' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Mobile header: hamburger (left) - centered logo - access (right) */}
        <div className="flex items-center h-16 md:hidden">
          <div className="flex items-center md:hidden">
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="p-2 rounded-md text-[var(--gold)] hover:bg-[var(--panel)] transition-colors cursor-pointer"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 5H17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M3 10H17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M3 15H17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none">
            <Logo scrolled={scrolled} />
          </div>

          <div className="ml-auto">
            <button className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--gold)] hover:bg-[var(--gold-bright)] text-sm font-semibold text-[var(--ink)] shadow-md shadow-black/30 transition-all duration-300 transform hover:scale-105 cursor-pointer">
               Access
            </button>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center h-20">
          <div className="flex-1">
            <ul className="flex gap-8 text-sm text-[#ddd7aa]">
              <li>
                <a href="#hero" className={`cursor-pointer transition-colors duration-200 ${active === 'hero' ? 'text-[var(--gold)]' : 'hover:text-[var(--gold)]'}`}>Platform</a>
              </li>
              <li>
                <a href="#services" className={`cursor-pointer transition-colors duration-200 ${active === 'services' ? 'text-[var(--gold)]' : 'hover:text-[var(--gold)]'}`}>Services</a>
              </li>
              <li>
                <a href="#science" className={`cursor-pointer transition-colors duration-200 ${active === 'science' ? 'text-[var(--gold)]' : 'hover:text-[var(--gold)]'}`}>Technology</a>
              </li>
              <li>
                <a href="#talent" className={`cursor-pointer transition-colors duration-200 ${active === 'talent' ? 'text-[var(--gold)]' : 'hover:text-[var(--gold)]'}`}>Careers ▾</a>
              </li>
            </ul>
          </div>

          <div className="flex-none">
            <Logo scrolled={scrolled}/>
          </div>

          <div className="flex-1 text-right">
            <button className="px-4 py-2 rounded border border-[var(--gold-warm)]/70 text-sm font-medium text-[var(--gold)] bg-[var(--panel)] hover:bg-[var(--panel-strong)] transition-colors">
             Request Access
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div className={`md:hidden ${open ? 'block' : 'hidden'} bg-[var(--panel-strong)] border-t border-[var(--gold-warm)]/30`}>
        <div className="px-6 py-4">
            <ul className="flex flex-col gap-3 text-[#ddd7aa]">
            <li className="py-2">
              <a href="#hero" onClick={() => setOpen(false)} className={`transition-colors duration-200 ${active === 'hero' ? 'text-[var(--gold)]' : 'hover:text-[var(--gold)]'}`}>Platform</a>
            </li>
            <li className="py-2">
              <a href="#services" onClick={() => setOpen(false)} className={`transition-colors duration-200 ${active === 'services' ? 'text-[var(--gold)]' : 'hover:text-[var(--gold)]'}`}>Services</a>
            </li>
            <li className="py-2">
              <a href="#science" onClick={() => setOpen(false)} className={`transition-colors duration-200 ${active === 'science' ? 'text-[var(--gold)]' : 'hover:text-[var(--gold)]'}`}>Technology</a>
            </li>
            <li className="py-2">
              <a href="#talent" onClick={() => setOpen(false)} className={`transition-colors duration-200 ${active === 'talent' ? 'text-[var(--gold)]' : 'hover:text-[var(--gold)]'}`}>Careers</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;