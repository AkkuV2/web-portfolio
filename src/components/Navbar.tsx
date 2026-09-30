import { useState, useEffect} from "react"


const NAV_LINKS = [
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education'},
  { label: 'Contact', href: '#contact' },
]

export default function Navbar(){

const [menuOpen, setMenuOpen] = useState(false)
const [scrolled, setScrolled] = useState(false)
useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

return(

      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(35,34,46,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(79,154,185,0.15)' : 'none',
        }}
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <span
            className="text-base font-bold tracking-tight"
            style={{ fontFamily: 'JetBrains Mono, monospace', color: '#4f9ab9' }}
          >
            ali.dev
          </span>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm transition-colors duration-150 hover:text-teal-400"
                style={{ color: '#9898a8', fontFamily: 'JetBrains Mono, monospace' }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#4f9ab9')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#9898a8')}
              >
                {l.label}
              </a>
            ))}
          </div>

          <button
            className="md:hidden p-2 rounded"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ color: '#4f9ab9' }}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

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

)
}
