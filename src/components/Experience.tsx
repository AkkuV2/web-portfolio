import useInView from "@/hooks/useInView"

export default function Experience(){
const expInView = useInView(0.1);
const EXPERIENCE = [
  {
    org: 'Universidad Autónoma del Caribe',
    location: 'Practices · On-site · Colombia',
    period: '2025/2026',
    bullets: [
      'Developed an n8n-based chatbot using RAG and rate limiting, with 8 security layers to control how the chatbot responds.',
      'Made an entry software documentation for new developers, with a visual summary of the technologies that the university uses.',
      'Integrated React views with APIs REST, using data retrieved from the DB2 database through the backend to create a dynamic experience for the user.',
    ],
  },
]

    return(
        <section id="experience" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ fontFamily: 'JetBrains Mono, monospace', color: '#4f9ab9' }}>
            My Experience
          </h2>
          <div
            ref={expInView.ref}
            className="flex flex-col gap-10 transition-all duration-700"
            style={{
              opacity: expInView.inView ? 1 : 0,
              transform: expInView.inView ? 'translateY(0)' : 'translateY(24px)',
            }}
          >
            {EXPERIENCE.map((exp) => (
              <div
                key={exp.org}
                className="rounded-xl p-6"
                style={{ background: '#2e2d37', border: '1px solid rgba(79,154,185,0.2)' }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-4">
                  <div>
                    <h3
                      className="text-lg font-bold"
                      style={{ fontFamily: 'JetBrains Mono, monospace', color: '#4f9ab9' }}
                    >
                      {exp.org}
                    </h3>
                    <p className="text-sm" style={{ color: '#9898a8' }}>{exp.location}</p>
                  </div>
                  <span
                    className="text-xs px-3 py-1 rounded-full self-start md:self-auto"
                    style={{ background: 'rgba(79,154,185,0.12)', color: '#6ab8d4', fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    {exp.period}
                  </span>
                </div>
                <ul className="flex flex-col gap-3">
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
    )
}
