// src/components/Navbar.tsx
import { useState, useEffect } from 'react';
import { useLanguage } from '@/i18n/languageContext';
import LanguageToggle from './LanguageToggle';

// Los href son estáticos: las secciones siempre se llaman igual
const NAV_HREFS = [
  { href: '#skills' },
  { href: '#about' },
  { href: '#projects' },
  { href: '#experience' },
  { href: '#education' },
  { href: '#contact' },
] as const;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  // Construimos los links combinando href estático + label traducido
  const NAV_LINKS = [
    { label: t.nav.skills,     href: '#skills' },
    { label: t.nav.about,      href: '#about' },
    { label: t.nav.projects,   href: '#projects' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.education,  href: '#education' },
    { label: t.nav.contact,    href: '#contact' },
  ];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(35,34,46,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(79,154,185,0.15)' : 'none',
      }}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <span
          className="text-base font-bold tracking-tight"
          style={{ fontFamily: 'JetBrains Mono, monospace', color: '#4f9ab9' }}
        >
          ali.dev
        </span>

        {/* Contenedor Derecho: Links + Toggle + Mobile Menu */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* Links de Escritorio */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm transition-colors duration-150"
                style={{ color: '#9898a8', fontFamily: 'JetBrains Mono, monospace' }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#4f9ab9')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#9898a8')}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Selector de Idioma */}
          <LanguageToggle />

          {/* Botón Menú Móvil */}
          <button
            className="md:hidden p-2 rounded"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ color: '#4f9ab9' }}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ background: 'rgba(35,34,46,0.97)' }}
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm"
              style={{ color: '#9898a8', fontFamily: 'JetBrains Mono, monospace' }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
