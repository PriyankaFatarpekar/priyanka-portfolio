import { portfolio } from '../../data/portfolio'
import { SectionLabel } from '../ui/SectionLabel'

export function Skills() {
  const featuredSkills = portfolio.skills.featured as readonly string[]

  return (
    <section id="skills" data-section className="section-shell section-animate">
      <SectionLabel label={portfolio.skills.label} />
      <h2 className="section-heading">{portfolio.skills.heading}</h2>
      <div className="mt-9 grid gap-5">
        {portfolio.skills.categories.map((category) => (
          <div key={category.name} className="grid gap-3 rounded-xl border border-edge bg-surface-card p-4 dark:border-edge-dark dark:bg-surface-dark-card md:grid-cols-[160px_1fr]">
            <h3 className="font-mono text-xs uppercase tracking-wide text-ink-muted dark:text-ink-dark-muted">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className={`skill-pill ${featuredSkills.includes(skill) ? 'skill-pill-featured' : ''}`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

