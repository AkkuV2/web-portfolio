import SkillCard from "./SkillCard"
import { useLanguage } from "@/i18n/languageContext"

export default function Skills(){
const FRONTEND_SKILLS = ['React', 'JavaScript', 'Razor', 'Tailwind CSS v4', 'CSS3 / HTML5']
const BACKEND_SKILLS = ['PHP', 'C#', 'Python', 'ASP.NET', '.NET Core', 'Docker']
const PLATFORM_SKILLS = ['GitHub', 'n8n', 'Cursor', 'Sigma', 'ClickUp', 'Claude AI', 'Deepseek']
const {t} = useLanguage();

return(
<section id="skills" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ fontFamily: 'JetBrains Mono, monospace', color: '#4f9ab9' }}>
          {t.skills.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SkillCard title={t.skills.frontend} items={FRONTEND_SKILLS} delay={0} />
            <SkillCard title={t.skills.platforms} items={PLATFORM_SKILLS} delay={100} />
            <SkillCard title={t.skills.backend} items={BACKEND_SKILLS} delay={200} />
          </div>
        </div>
      </section>
)
}
