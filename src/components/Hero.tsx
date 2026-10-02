import useInView from '@/hooks/useInView'
import { useLanguage } from '@/i18n/languageContext'
import useScrambleCycle from '@/hooks/useScrambledCycle'


export default function Hero(){
const heroInView = useInView(0.1)
const scrambledName = useScrambleCycle()
const { t } = useLanguage();

    return(
    <section
            className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16"
            style={{
              background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(79,154,185,0.08) 0%, transparent 70%)',
            }}
          >
            <div
              ref={heroInView.ref}
              className="transition-all duration-1000"
              style={{
                opacity: heroInView.inView ? 1 : 0,
                transform: heroInView.inView ? 'translateY(0)' : 'translateY(32px)',
              }}
            >
              <p
                className="text-sm tracking-[0.25em] uppercase mb-4"
                style={{ color: '#9898a8', fontFamily: 'JetBrains Mono, monospace' }}
              >
              {t.hero.lookingFor}
              </p>
              <h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
                style={{ fontFamily: 'JetBrains Mono, monospace', color: '#4f9ab9' }}
              >
                {t.hero.titleLine1}
                <br />
                {t.hero.titleLine2}
              </h1>
              <p
                className="text-lg md:text-xl mb-10"
                style={{ color: '#e8e8f0' }}
              >
                {t.hero.greeting}
                <span style={{ color: '#4f9ab9', fontFamily: 'JetBrains Mono, monospace' }}>{scrambledName}.</span>
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#about"
                  className="px-7 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider transition-all duration-200 hover:brightness-110"
                  style={{
                    background: '#4f9ab9',
                    color: '#1a1a22',
                    fontFamily: 'JetBrains Mono, monospace',
                  }}
                >
                    {t.nav.about}
                </a>
                <a
                  href="#experience"
                  className="px-7 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider transition-all duration-200"
                  style={{
                    border: '1px solid #4f9ab9',
                    color: '#4f9ab9',
                    fontFamily: 'JetBrains Mono, monospace',
                    background: 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget
                    el.style.background = 'rgba(79,154,185,0.12)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget
                    el.style.background = 'transparent'
                  }}
                >
                    {t.nav.experience}
                </a>
              </div>
            </div>

            <div
              className="mt-16 animate-bounce"
              style={{ color: '#4f9ab9', opacity: 0.5 }}
            >
              ↓
            </div>
    </section>
)
}

