// src/i18n/LanguageContext.tsx
import { createContext, useContext, useState, ReactNode, useMemo } from 'react';
import { dictionary, Language, Translation } from './dictionary';

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('es');

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  const value = useMemo<LanguageContextType>(
    () => ({
      lang,
      toggleLanguage,
      t: dictionary[lang], // 👈 Ya no necesitas cast, el tipo es correcto
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage debe usarse dentro de <LanguageProvider>');
  return context;
}
