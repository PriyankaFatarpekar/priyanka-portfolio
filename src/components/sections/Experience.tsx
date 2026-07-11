import { portfolio } from '../../data/portfolio'
import { SectionLabel } from '../ui/SectionLabel'

export function Experience() {
  return (
    <section id="experience" data-section className="section-shell section-animate">
      <SectionLabel label={portfolio.experience.label} />
      <h2 className="section-heading">{portfolio.experience.heading}</h2>
      <div className="relative mt-10 border-l border-brand-primary/40 pl-6">
        {portfolio.experience.entries.map((entry) => (
          <article key={`${entry.company}-${entry.role}`} className="relative pb-10 last:pb-0">
            <span className="absolute -left-[31px] top-2 h-3.5 w-3.5 rounded-full bg-brand-primary ring-4 ring-brand-primary/20" />
            <div className="content-card">
              <span className="inline-flex rounded-full bg-brand-primary/10 px-3 py-1 font-mono text-xs text-brand-primary">{entry.period}</span>
              <h3 className="mt-4 font-display text-xl font-bold">{entry.company}</h3>
              <p className="mt-1 text-sm italic text-ink-muted dark:text-ink-dark-muted">{entry.role} - {entry.location}</p>
              <ul className="mt-5 grid gap-3">
                {entry.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-6 text-ink-secondary dark:text-ink-dark-secondary">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

