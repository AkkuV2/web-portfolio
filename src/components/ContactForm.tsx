// src/components/ContactForm.tsx
import { useState } from 'react';
import { useLanguage } from '@/i18n/languageContext';

export default function ContactForm() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = t.contactForm.errors.name;
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = t.contactForm.errors.email;
    if (!form.message.trim()) e.message = t.contactForm.errors.message;
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    setErrors({});
    setSent(true);
  };

  if (sent) {
    return (
      <div
        className="flex flex-col items-center justify-center gap-4 py-12 rounded-xl"
        style={{ background: '#2e2d37', border: '1px solid #4f9ab9' }}
      >
        <span className="text-4xl">✓</span>
        <p
          className="text-lg font-semibold"
          style={{ color: '#4f9ab9', fontFamily: 'JetBrains Mono, monospace' }}
        >
          {t.contactForm.sentTitle}
        </p>
        <p className="text-sm" style={{ color: '#9898a8' }}>{t.contactForm.sentSubtitle}</p>
        <button
          onClick={() => {
            setSent(false);
            setForm({ name: '', email: '', message: '' });
          }}
          className="mt-2 text-sm underline"
          style={{ color: '#4f9ab9' }}
        >
          {t.contactForm.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-xl p-6"
      style={{ background: '#2e2d37', border: '1px solid #4f9ab9' }}
      noValidate
    >
      {/* Nombre */}
      <div className="flex flex-col gap-1">
        <label
          className="text-xs tracking-widest uppercase"
          style={{ color: '#9898a8', fontFamily: 'JetBrains Mono, monospace' }}
        >
          {t.contactForm.name}
        </label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder={t.contactForm.namePlaceholder}
          className="rounded-lg px-4 py-3 text-sm outline-none transition-all duration-200"
          style={{
            background: '#35343e',
            border: errors.name ? '1px solid #e05252' : '1px solid #4a4a58',
            color: '#e8e8f0',
          }}
          onFocus={(e) => (e.target.style.borderColor = '#4f9ab9')}
          onBlur={(e) => (e.target.style.borderColor = errors.name ? '#e05252' : '#4a4a58')}
        />
        {errors.name && <span className="text-xs" style={{ color: '#e05252' }}>{errors.name}</span>}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1">
        <label
          className="text-xs tracking-widest uppercase"
          style={{ color: '#9898a8', fontFamily: 'JetBrains Mono, monospace' }}
        >
          {t.contactForm.email}
        </label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder={t.contactForm.emailPlaceholder}
          className="rounded-lg px-4 py-3 text-sm outline-none transition-all duration-200"
          style={{
            background: '#35343e',
            border: errors.email ? '1px solid #e05252' : '1px solid #4a4a58',
            color: '#e8e8f0',
          }}
          onFocus={(e) => (e.target.style.borderColor = '#4f9ab9')}
          onBlur={(e) => (e.target.style.borderColor = errors.email ? '#e05252' : '#4a4a58')}
        />
        {errors.email && <span className="text-xs" style={{ color: '#e05252' }}>{errors.email}</span>}
      </div>

      {/* Mensaje */}
      <div className="flex flex-col gap-1">
        <label
          className="text-xs tracking-widest uppercase"
          style={{ color: '#9898a8', fontFamily: 'JetBrains Mono, monospace' }}
        >
          {t.contactForm.message}
        </label>
        <textarea
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder={t.contactForm.messagePlaceholder}
          className="rounded-lg px-4 py-3 text-sm outline-none transition-all duration-200 resize-none"
          style={{
            background: '#35343e',
            border: errors.message ? '1px solid #e05252' : '1px solid #4a4a58',
            color: '#e8e8f0',
          }}
          onFocus={(e) => (e.target.style.borderColor = '#4f9ab9')}
          onBlur={(e) => (e.target.style.borderColor = errors.message ? '#e05252' : '#4a4a58')}
        />
        {errors.message && <span className="text-xs" style={{ color: '#e05252' }}>{errors.message}</span>}
      </div>

      <button
        type="submit"
        className="mt-1 py-3 px-6 rounded-lg font-semibold text-sm tracking-wider uppercase transition-all duration-200 hover:brightness-110 active:scale-95"
        style={{
          background: '#4f9ab9',
          color: '#1a1a22',
          fontFamily: 'JetBrains Mono, monospace',
        }}
      >
        {t.contactForm.submit}
      </button>
    </form>
  );
}
