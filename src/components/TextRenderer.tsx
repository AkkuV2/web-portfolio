// src/components/TextRenderer.tsx
import { TextFragment } from '@/i18n/dictionary';

const STYLE_MAP: Record<string, React.CSSProperties> = {
  accent: { color: '#4f9ab9' },
};

export default function TextRenderer({ fragments }: { fragments: TextFragment[] }) {
  return (
    <>
      {fragments.map((frag, i) => (
        <span key={i} style={frag.style ? STYLE_MAP[frag.style] : undefined}>
          {frag.text}
        </span>
      ))}
    </>
  );
}
