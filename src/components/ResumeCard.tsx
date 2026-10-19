import resumePDF from '@/assets/curriculum_ATS_Ali_Erazo-1.pdf'
import { useLanguage } from '@/i18n/languageContext'

export default function ResumeCard() {
  const { t } = useLanguage()

  return (
    <div
      className="group flex h-full flex-col rounded-xl p-6 md:p-8"
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
      <div
        className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl"
        style={{ background: 'rgba(79,154,185,0.15)', color: '#4f9ab9' }}
      >
        <svg
          aria-hidden="true"
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.75"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 2.25H6.75A1.5 1.5 0 0 0 5.25 3.75v16.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V6.75L14.25 2.25Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 2.25v4.5h4.5M9 15.75 12 18.75m0 0 3-3m-3 3v-7.5" />
        </svg>
      </div>

      {/* Label superior: "Curriculum vitae" - No está en tu diccionario, lo dejo estático o puedes añadirlo */}
      <span
        className="mb-2 text-xs tracking-widest uppercase"
        style={{ color: '#6ab8d4', fontFamily: 'JetBrains Mono, monospace' }}
      >
        Curriculum vitae
      </span>

      <h3
        className="mb-3 text-2xl font-bold"
        style={{ color: '#e8e8f0', fontFamily: 'JetBrains Mono, monospace' }}
      >
        {t.resumeCard.invitation}
      </h3>
      
      <p className="mb-6 text-sm leading-relaxed" style={{ color: '#c8c8d8' }}>
        {t.resumeCard.textInvitation1}
      </p>

      <div className="mb-7 flex flex-wrap gap-2">
        {t.resumeCard.resumeDescription.map((detail) => (
          <span
            key={detail}
            className="rounded px-2 py-1 text-xs"
            style={{ background: '#35343e', color: '#9898a8', fontFamily: 'JetBrains Mono, monospace' }}
          >
            {detail}
          </span>
        ))}
      </div>

      <a
        href={resumePDF}
        download="Ali_Erazo_CV.pdf"
        className="mt-auto flex items-center justify-center gap-3 rounded-lg px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-200 hover:brightness-110 active:scale-95"
        style={{
          background: '#4f9ab9',
          color: '#1a1a22',
          fontFamily: 'JetBrains Mono, monospace',
          textDecoration: 'none',
        }}
      >
        {t.resumeCard.buttonText}
        <svg
          aria-hidden="true"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />
        </svg>
      </a>
    </div>
  )
}
