import useInView from "@/hooks/useInView"


export default function Projects(){
const projectsInView = useInView(0.1)
const PROJECTS = [
  {
    name: 'Carguard',
    description:
      'A small project created to help security guards at their parking facility keep track of vehicle owners\' information, recording entries and exits of people.',
    tags: ['PHP', 'PostgreSQL', 'TailwindV4'],
    status: 'Completed',
    href: '',
  },
]

    return(
        <section id="projects" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ fontFamily: 'JetBrains Mono, monospace', color: '#4f9ab9' }}>
            Projects
          </h2>
          <p className="text-center mb-12 text-sm" style={{ color: '#9898a8' }}>
            A small group of projects that I've done or support.
          </p>
          <div
            ref={projectsInView.ref}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700"
            style={{
              opacity: projectsInView.inView ? 1 : 0,
              transform: projectsInView.inView ? 'translateY(0)' : 'translateY(24px)',
            }}
          >
            {PROJECTS.map((p) => (
              <div
                key={p.name}
                className="rounded-xl p-6 flex flex-col gap-4"
                style={{
                  background: '#2e2d37',
                  border: '1px solid rgba(79,154,185,0.3)',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = '#4f9ab9'
                  el.style.boxShadow = '0 4px 32px rgba(79,154,185,0.15)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = 'rgba(79,154,185,0.3)'
                  el.style.boxShadow = 'none'
                }}
              >
                <div className="flex items-center justify-between">
                  <h3
                    className="text-lg font-bold"
                    style={{ fontFamily: 'JetBrains Mono, monospace', color: '#4f9ab9' }}
                  >
                    {p.name}
                  </h3>
                  <span
                    className="text-xs px-2 py-1 rounded-full"
                    style={{ background: 'rgba(79,154,185,0.15)', color: '#6ab8d4', fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    {p.status}
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#c8c8d8' }}>{p.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded"
                      style={{ background: '#35343e', color: '#9898a8', fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    )
}
