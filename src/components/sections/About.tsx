import { portfolio } from '../../data/portfolio'
import { SectionLabel } from '../ui/SectionLabel'

export function About() {
  return (
    <section id="about" data-section className="section-shell section-animate grid gap-12 lg:grid-cols-2 lg:items-center">
      <div>
        <SectionLabel label={portfolio.about.label} />
        <h2 className="section-heading">{portfolio.about.heading}</h2>
        <p className="mt-5 text-lg leading-8 text-ink-secondary dark:text-ink-dark-secondary">{portfolio.about.body}</p>
        <blockquote className="mt-7 border-l-4 border-brand-primary pl-5 text-lg font-medium text-ink-primary dark:text-ink-dark-primary">
          {portfolio.about.quote}
        </blockquote>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {portfolio.about.stats.map((stat) => (
          <article key={stat.label} className="metric-card">
            <div className="bg-gradient-brand bg-clip-text font-display text-4xl font-extrabold text-transparent">{stat.value}</div>
            <p className="mt-2 text-sm text-ink-muted dark:text-ink-dark-muted">{stat.label}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

