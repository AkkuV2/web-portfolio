// src/components/Education.tsx
import useInView from '@/hooks/useInView';
import { useLanguage } from '@/i18n/languageContext';

export default function Education() {
  const eduInView = useInView(0.1);
  const { t } = useLanguage();

  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold mb-12"
          style={{ fontFamily: 'JetBrains Mono, monospace', color: '#4f9ab9' }}
        >
          {t.education.title}
        </h2>
        <div
          ref={eduInView.ref}
          className="flex flex-col gap-6 transition-all duration-700"
          style={{
            opacity: eduInView.inView ? 1 : 0,
            transform: eduInView.inView ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          {t.education.items.map((edu) => (
            <div
              key={edu.degree}
              className="rounded-xl p-6"
              style={{ background: '#2e2d37', border: '1px solid rgba(79,154,185,0.2)' }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                <div className="flex flex-col gap-1">
                  <span
                    className="text-xs tracking-widest uppercase mb-1"
                    style={{ color: '#9898a8', fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    {edu.type}
                  </span>
                  <h3
                    className="text-lg font-bold leading-snug"
                    style={{ fontFamily: 'JetBrains Mono, monospace', color: '#4f9ab9' }}
                  >
                    {edu.degree}
                  </h3>
                  <p className="text-sm mt-1" style={{ color: '#c8c8d8' }}>
                    {edu.institution}
                    <span style={{ color: '#9898a8' }}> · {edu.location}</span>
                  </p>
                </div>
                <span
                  className="text-xs px-3 py-1 rounded-full self-start whitespace-nowrap"
                  style={{
                    background: 'rgba(79,154,185,0.12)',
                    color: '#6ab8d4',
                    fontFamily: 'JetBrains Mono, monospace',
                  }}
                >
                  {edu.period}
                </span>
              </div>

              <div className="w-full h-px mb-5" style={{ background: 'rgba(79,154,185,0.15)' }} />

              <ul className="flex flex-col gap-3">
                {edu.highlights.map((h, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: '#c8c8d8' }}>
                    <span style={{ color: '#4f9ab9', flexShrink: 0, marginTop: '2px' }}>◆</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
