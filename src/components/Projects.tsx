// src/components/Projects.tsx
import useInView from '@/hooks/useInView';
import { useLanguage } from '@/i18n/languageContext';

export default function Projects() {
  const projectsInView = useInView(0.1);
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          style={{ fontFamily: 'JetBrains Mono, monospace', color: '#4f9ab9' }}
        >
          {t.projects.title}
        </h2>
        <p className="text-center mb-12 text-sm" style={{ color: '#9898a8' }}>
          {t.projects.subtitle}
        </p>
        <div
          ref={projectsInView.ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700"
          style={{
            opacity: projectsInView.inView ? 1 : 0,
            transform: projectsInView.inView ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          {t.projects.items.map((p) => (
            <div
              key={p.name}
              className="rounded-xl p-6"
              style={{
                background: '#2e2d37',
                border: '1px solid rgba(79,154,185,0.3)',
                transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#4f9ab9';
                e.currentTarget.style.boxShadow = '0 4px 32px rgba(79,154,185,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(79,154,185,0.3)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <h3
                className="text-lg font-bold mb-2"
                style={{ fontFamily: 'JetBrains Mono, monospace', color: '#4f9ab9' }}
              >
                {p.name}
              </h3>
              <p className="text-sm mb-4" style={{ color: '#c8c8d8' }}>{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded"
                    style={{
                      background: 'rgba(79,154,185,0.12)',
                      color: '#6ab8d4',
                      fontFamily: 'JetBrains Mono, monospace',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
