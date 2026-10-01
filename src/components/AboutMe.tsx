// src/components/AboutMe.tsx
import profileImage from '@/assets/me.jpg';
import useInView from '@/hooks/useInView';
import { useLanguage } from '@/i18n/languageContext';
import TextRenderer from './TextRenderer';

export default function AboutMe() {
  const aboutInView = useInView(0.15);
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold mb-12"
          style={{ fontFamily: 'JetBrains Mono, monospace', color: '#4f9ab9' }}
        >
          {t.about.title}
        </h2>
        <div
          ref={aboutInView.ref}
          className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 transition-all duration-700"
          style={{
            opacity: aboutInView.inView ? 1 : 0,
            transform: aboutInView.inView ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          {/* LEFT */}
          <div className="flex flex-col gap-5">
            <div
              className="rounded-xl p-6 flex flex-col sm:flex-row gap-6 items-start"
              style={{ background: '#2e2d37', border: '1px solid rgba(79,154,185,0.25)' }}
            >
              <div className="flex-shrink-0 flex justify-center sm:justify-start w-full sm:w-auto">
                <div
                  className="w-28 h-28 rounded-full overflow-hidden"
                  style={{ border: '3px solid #4f9ab9', boxShadow: '0 0 28px rgba(79,154,185,0.22)' }}
                >
                  <img
                    src={profileImage}
                    alt="Ali Erazo developer portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 text-sm leading-relaxed" style={{ color: '#c8c8d8' }}>
                {t.about.bio.map((paragraph, pIndex) => (
                  <p key={pIndex}>
                    <TextRenderer fragments={paragraph} />
                  </p>
                ))}
              </div>
            </div>

            {/* Strengths + Soft skills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div
                className="rounded-xl p-5"
                style={{ background: '#2e2d37', border: '1px solid rgba(79,154,185,0.25)' }}
              >
                <span
                  className="text-xs font-bold tracking-widest uppercase block mb-4"
                  style={{ color: '#4f9ab9', fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {t.about.strengthsTitle}
                </span>
                <ul className="flex flex-col gap-3">
                  {t.about.strengths.map((s) => (
                    <li key={s} className="flex gap-3 text-sm leading-snug" style={{ color: '#c8c8d8' }}>
                      <span style={{ color: '#4f9ab9', flexShrink: 0, fontSize: '10px', marginTop: '4px' }}>✔</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="rounded-xl p-5"
                style={{ background: '#2e2d37', border: '1px solid rgba(79,154,185,0.25)' }}
              >
                <span
                  className="text-xs font-bold tracking-widest uppercase block mb-4"
                  style={{ color: '#4f9ab9', fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {t.about.softSkillsTitle}
                </span>
                <div className="flex flex-wrap gap-2">
                  {t.about.softSkills.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-3 py-1 rounded-md"
                      style={{
                        border: '1px solid rgba(79,154,185,0.35)',
                        color: '#9898a8',
                        fontFamily: 'JetBrains Mono, monospace',
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="rounded-xl p-5 flex flex-col gap-4"
            style={{ background: '#2e2d37', border: '1px solid rgba(79,154,185,0.25)' }}
          >
            <span
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: '#4f9ab9', fontFamily: 'JetBrains Mono, monospace' }}
            >
              {t.about.languagesTitle}
            </span>
            <div className="w-full h-px" style={{ background: 'rgba(79,154,185,0.15)' }} />
            {t.about.languages.map((l) => (
              <div
                key={l.lang}
                className="flex flex-col gap-2 py-3"
                style={{ borderBottom: '1px solid rgba(79,154,185,0.1)' }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium" style={{ color: '#e8e8f0' }}>{l.lang}</span>
                  <span
                    className="text-xs px-2 py-0.5 rounded"
                    style={{
                      background: 'rgba(79,154,185,0.12)',
                      color: '#6ab8d4',
                      fontFamily: 'JetBrains Mono, monospace',
                    }}
                  >
                    {l.level.split('—')[0].trim()}
                  </span>
                </div>
                {l.level.includes('—') && (
                  <span className="text-xs" style={{ color: '#9898a8', fontFamily: 'JetBrains Mono, monospace' }}>
                    {l.level.split('—')[1].trim()}
                  </span>
                )}
              </div>
            ))}

            <div className="mt-2">
              <div className="w-full h-px mb-4" style={{ background: 'rgba(79,154,185,0.15)' }} />
              <span
                className="text-xs font-bold tracking-widest uppercase block mb-4"
                style={{ color: '#4f9ab9', fontFamily: 'JetBrains Mono, monospace' }}
              >
                {t.about.goalsTitle}
              </span>
              <ul className="flex flex-col gap-3">
                {t.about.goals.map((g) => (
                  <li key={g} className="flex gap-3 text-sm leading-snug" style={{ color: '#c8c8d8' }}>
                    <span style={{ color: '#4f9ab9', flexShrink: 0, marginTop: '3px' }}>→</span>
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
