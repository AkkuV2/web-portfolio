// src/components/Footer.tsx
import { useLanguage } from "@/i18n/languageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      className="py-8 text-center text-xs"
      style={{
        borderTop: '1px solid rgba(79,154,185,0.12)',
        color: '#9898a8',
        fontFamily: 'JetBrains Mono, monospace',
      }}
    >
      <span>{t.footer.text}</span>
    </footer>
  );
}
