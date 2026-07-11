import { ArrowRight, ChevronDown, Download, MapPin } from 'lucide-react'
import { portfolio } from '../../data/portfolio'

export function Hero() {
  return (
    <>
      <section className="mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <div className="mb-5 inline-flex items-center rounded-full border border-edge bg-surface-elevated px-4 py-1.5 font-mono text-xs text-ink-secondary dark:border-edge-dark dark:bg-surface-dark-elevated dark:text-ink-dark-secondary">
            {portfolio.hero.availability}
          </div>
          <h1 className="font-display text-hero font-extrabold leading-tight tracking-normal text-ink-primary dark:text-ink-dark-primary">
            {portfolio.profile.name}
          </h1>
          <p className="mt-3 bg-gradient-brand bg-[length:200%_auto] bg-clip-text font-display text-title font-bold text-transparent animate-shimmer">
            {portfolio.profile.role}
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-ink-secondary dark:text-ink-dark-secondary">{portfolio.hero.tagline}</p>
          <div className="mt-3 inline-flex items-center gap-2 text-sm text-ink-muted dark:text-ink-dark-muted">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {portfolio.profile.location}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="button-primary" href="#projects">
              {portfolio.hero.primaryCta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            {portfolio.profile.resumeUrl && (
              <a className="button-secondary" href={portfolio.profile.resumeUrl} target="_blank" rel="noreferrer">
                {portfolio.hero.secondaryCta}
                <Download className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="glass-card min-h-[470px] overflow-hidden p-7">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(34,211,238,0.18),transparent_38%)]" />
            <div className="relative mx-auto mt-4 grid h-44 w-44 place-items-center rounded-full border border-edge bg-gradient-brand p-1 shadow-2xl shadow-brand-primary/20 dark:border-edge-dark">
              <div className="grid h-full w-full place-items-center rounded-full bg-surface-card dark:bg-surface-dark-card">
                <div className="relative h-24 w-24">
                  <div className="absolute left-4 top-2 h-16 w-16 rounded-full bg-brand-primary/25" />
                  <div className="absolute bottom-2 left-1/2 h-12 w-24 -translate-x-1/2 rounded-t-full bg-gradient-brand" />
                  <div className="absolute left-1/2 top-8 h-12 w-16 -translate-x-1/2 rounded-2xl border border-edge bg-surface-elevated dark:border-edge-dark dark:bg-surface-dark-elevated" />
                  <div className="absolute left-9 top-11 h-1.5 w-1.5 rounded-full bg-brand-primary" />
                  <div className="absolute right-9 top-11 h-1.5 w-1.5 rounded-full bg-brand-primary" />
                </div>
              </div>
            </div>
            <div className="relative mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {portfolio.hero.tags.map((tag, index) => (
                <span key={tag} className="floating-tag" style={{ animationDelay: `${index * 120}ms` }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto -mt-10 hidden w-fit items-center gap-2 font-mono text-xs text-ink-muted dark:text-ink-dark-muted md:flex">
        {portfolio.hero.scrollLabel}
        <ChevronDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
      </div>
    </>
  )
}

