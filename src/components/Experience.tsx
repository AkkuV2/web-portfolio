// src/components/Experience.tsx
import useInView from '@/hooks/useInView';
import { useLanguage } from '@/i18n/languageContext';

export default function Experience() {
  const expInView = useInView(0.1);
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold mb-12"
          style={{ fontFamily: 'JetBrains Mono, monospace', color: '#4f9ab9' }}
        >
          {t.experience.title}
        </h2>
        <div
          ref={expInView.ref}
          className="flex flex-col gap-10 transition-all duration-700"
          style={{
            opacity: expInView.inView ? 1 : 0,
            transform: expInView.inView ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          {t.experience.items.map((exp) => (
            <div key={exp.org}>
              <h3
                className="text-lg font-bold"
                style={{ fontFamily: 'JetBrains Mono, monospace', color: '#4f9ab9' }}
              >
                {exp.org}
              </h3>
              <p className="text-sm" style={{ color: '#9898a8' }}>
                {exp.location} · {exp.period}
              </p>
              <ul className="flex flex-col gap-3 mt-4">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: '#c8c8d8' }}>
                    <span style={{ color: '#4f9ab9', flexShrink: 0, marginTop: '2px' }}>◆</span>
                    <span>{b}</span>
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
