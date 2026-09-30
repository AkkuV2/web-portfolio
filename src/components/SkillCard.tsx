import useInView from "@/hooks/useInView"

export default function SkillCard({title, items,delay = 0,}: {title: string, items: string[], delay?: number}){

const { ref, inView } = useInView()
  return (
    <div
      ref={ref}
      className="rounded-xl p-6 flex flex-col gap-3 border transition-all duration-700"
      style={{
        background: '#2e2d37',
        borderColor: '#4f9ab9',
        borderWidth: '1px',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(24px)',
        transitionDelay: `${delay}ms`,
        boxShadow: inView ? '0 4px 32px rgba(79,154,185,0.10)' : 'none',
      }}
    >
      <h3
        className="text-sm font-semibold tracking-widest uppercase mb-1"
        style={{ fontFamily: 'JetBrains Mono, monospace', color: '#4f9ab9' }}
      >
        {title}
      </h3>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="text-sm px-3 py-1 rounded-full"
            style={{
              background: 'rgba(79,154,185,0.12)',
              color: '#6ab8d4',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
