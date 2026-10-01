import ContactForm from "@/components/ContactForm"
import useInView from "@/hooks/useInView"
import { useLanguage } from "@/i18n/languageContext"
import TextRenderer from "./TextRenderer";

export default function ContactMe(){
const {t} = useLanguage()
    interface SocialLink {
        key: 'github'| 'linkedin' |'email';
        handle: string,
        icon: string,
        href?: string // sin href = no es un enlace (ej. Email)
}
    const contactInView = useInView(0.1)
    const SOCIAL_LINKS: SocialLink[] = [
      { key: 'github', handle: '@akku', icon: '⌥', href: 'https://github.com/AkkuV2' },
      { key: 'linkedin', handle: 'Ali Erazo', icon: '⌘', href: 'https://www.linkedin.com/in/ali-erazo-805181376/' },
      { key: 'email', handle: 'aalierazo@proton.me', icon: '✉' },
    ]

    return(
        <section id="contact" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ fontFamily: 'JetBrains Mono, monospace', color: '#4f9ab9' }}>
            {t.contact.title}
          </h2>
          <div
            ref={contactInView.ref}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 transition-all duration-700"
            style={{
              opacity: contactInView.inView ? 1 : 0,
              transform: contactInView.inView ? 'translateY(0)' : 'translateY(24px)',
            }}
          >
            <ContactForm />

            <div className="flex flex-col gap-6">
              <div>
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ fontFamily: 'JetBrains Mono, monospace', color: '#4f9ab9' }}
                >
                    {t.contact.socialMediaTitle}
                </h3>
                <div className="flex flex-col gap-3">
                  {SOCIAL_LINKS.map((s) => (
                    <a
                      key={s.key}
                      href={s.href}
                      {...(s.href && { target: '_blank', rel: 'noopener noreferrer' })}
                      className="flex items-center gap-4 rounded-xl px-5 py-4 transition-all duration-200"
                      style={{
                        background: '#2e2d37',
                        border: '1px solid rgba(79,154,185,0.2)',
                        color: '#e8e8f0',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget
                        el.style.borderColor = '#4f9ab9'
                        el.style.background = 'rgba(79,154,185,0.08)'
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget
                        el.style.borderColor = 'rgba(79,154,185,0.2)'
                        el.style.background = '#2e2d37'
                      }}
                    >
                      <span
                        className="w-9 h-9 flex items-center justify-center rounded-lg text-base"
                        style={{ background: 'rgba(79,154,185,0.15)', color: '#4f9ab9' }}
                      >
                        {s.icon}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-xs tracking-widest uppercase" style={{ color: '#9898a8', fontFamily: 'JetBrains Mono, monospace' }}>
                            {t.contact.socialLabels[s.key]}
                        </span>
                        <span className="text-sm" style={{ color: '#e8e8f0' }}>{s.handle}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div
                className="rounded-xl p-5 mt-2"
                style={{ background: 'rgba(79,154,185,0.07)', border: '1px solid rgba(79,154,185,0.2)' }}
              >
                <p className="text-sm leading-relaxed" style={{ color: '#9898a8' }}>
                    <TextRenderer fragments={t.contact.availability} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
