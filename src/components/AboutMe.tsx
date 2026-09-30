import profileImage from '@/assets/me.jpg'
import useInView from '@/hooks/useInView'

export default function (){
    const aboutInView = useInView(0.15)

    const STRENGTHS = [
      'Creative problem-solving applied to real systems',
      'High-quality technical documentation',
      'Architecture built from scratch without templates',
      'Self-taught — ships without constant supervision',
    ]

    const SOFT_SKILLS = ['Self-taught', 'Fast learner', 'Systemic thinking', 'Documentation', 'Async collaboration', 'Problem solving']

    const LANGUAGES = [
      { lang: 'Spanish', level: 'Native' },
      { lang: 'English', level: 'Intermediate — technical reading & communication' },
    ]

    return(
        <section id="about" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ fontFamily: 'JetBrains Mono, monospace', color: '#4f9ab9' }}>
            About me
            </h2>
          <div
            ref={aboutInView.ref}
            className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 transition-all duration-700"
            style={{
              opacity: aboutInView.inView ? 1 : 0,
              transform: aboutInView.inView ? 'translateY(0)' : 'translateY(24px)',
            }}
          >
            {/* LEFT — photo + bio */}
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
                  <p>
                My name is Ali Erazo. I'm a Junior Analyst and Software Developer with hands-on experience building AI-driven workflows and full-stack web applications.
              </p>
              <p>
                I started learning to code in my teenage years as a hobby, 
                later training formally at SENA in a Software Analysis and Development program
                — completing its practical stage as an intern at Universidad Autónoma del Caribe,
                 where I worked with .NET and DB2.
             </p>
                <p>
                  Since then, I've built full-stack projects like Carguard, a parking management system
                  using PHP, PostgreSQL,some libraries like AlpineJS, AJAX, SweetAlert2, and a custom middleware, and developed an n8n-based chatbot with
                  RAG and multiple security layers. I'm now exploring mobile development to bring that same experience to more platforms.
                </p>
                <p>
                  I have experience with <span style={{ color: '#4f9ab9' }}>React, PHP, C#, Docker, PostgreSQL, and n8n</span>,
                  combining traditional web development with <span style={{ color: '#4f9ab9' }}> AI agent workflows.</span>
                </p>
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
                    Strengths
                  </span>
                  <ul className="flex flex-col gap-3">
                    {STRENGTHS.map((s) => (
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
                    Soft skills
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {SOFT_SKILLS.map((s) => (
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

            {/* RIGHT — languages */}
            <div
              className="rounded-xl p-5 flex flex-col gap-4"
              style={{ background: '#2e2d37', border: '1px solid rgba(79,154,185,0.25)' }}
            >
              <span
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: '#4f9ab9', fontFamily: 'JetBrains Mono, monospace' }}
              >
                Languages
              </span>
              <div
                className="w-full h-px"
                style={{ background: 'rgba(79,154,185,0.15)' }}
              />
              {LANGUAGES.map((l) => (
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

              {/* Goals */}
              <div className="mt-2">
                <div
                  className="w-full h-px mb-4"
                  style={{ background: 'rgba(79,154,185,0.15)' }}
                />
                <span
                  className="text-xs font-bold tracking-widest uppercase block mb-4"
                  style={{ color: '#4f9ab9', fontFamily: 'JetBrains Mono, monospace' }}
                >
                  Goals
                </span>
                <ul className="flex flex-col gap-3">
                  {[
                    'Crear proyectos sostenibles a largo plazo',
                    'Aprender continuamente de programación',
                    'Asumir nuevos retos que no haya tenido antes',
                    'Crecer laboralmente en el sector IT',
                    'Elaborar aplicaciones funcionales para el dia a dia',
                    'Satisfacer a los usuarios',
                  ].map((g) => (
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
    )

}
