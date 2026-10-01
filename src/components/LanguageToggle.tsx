// src/components/LanguageToggle.tsx
import { useLanguage } from "@/i18n/languageContext";
export default function LanguageToggle() {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <div
      className="flex items-center rounded-full p-1 transition-all duration-300"
      style={{
        background: '#2e2d37',
        border: '1px solid #4a4a58',
      }}
    >
      {/* Botón Español */}
      <button
        onClick={() => lang !== 'es' && toggleLanguage()}
        className="px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer"
        style={{
          fontFamily: 'JetBrains Mono, monospace',
          background: lang === 'es' ? '#4f9ab9' : 'transparent',
          color: lang === 'es' ? '#35343e' : '#9898a8',
        }}
        aria-label="Cambiar a Español"
      >
        ES
      </button>

      {/* Botón Inglés */}
      <button
        onClick={() => lang !== 'en' && toggleLanguage()}
        className="px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer"
        style={{
          fontFamily: 'JetBrains Mono, monospace',
          background: lang === 'en' ? '#4f9ab9' : 'transparent',
          color: lang === 'en' ? '#35343e' : '#9898a8',
        }}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
