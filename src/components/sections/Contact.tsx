import { Copy, Code2, Network, Mail } from 'lucide-react'
import { portfolio } from '../../data/portfolio'
import { SectionLabel } from '../ui/SectionLabel'

type ContactProps = {
  copied: boolean
  onCopyEmail: () => void
}

export function Contact({ copied, onCopyEmail }: ContactProps) {
  return (
    <section id="contact" data-section className="section-shell section-animate relative text-center">
      <div className="pointer-events-none absolute inset-x-10 top-12 -z-10 h-56 rounded-full bg-brand-accent/10 blur-3xl" />
      <div className="mx-auto max-w-2xl">
        <SectionLabel label={portfolio.contact.label} />
        <h2 className="section-heading">{portfolio.contact.heading}</h2>
        <p className="mt-4 text-ink-secondary dark:text-ink-dark-secondary">{portfolio.contact.subtext}</p>

        <div className="mt-8 inline-flex max-w-full items-center gap-3 rounded-2xl border border-edge bg-surface-card p-3 text-left font-mono text-sm dark:border-edge-dark dark:bg-surface-dark-card">
          <Mail className="h-4 w-4 flex-none text-brand-primary" aria-hidden="true" />
          <span className="truncate">{portfolio.profile.email}</span>
          <button className="icon-button flex-none" type="button" onClick={onCopyEmail} aria-label={portfolio.contact.copyLabel}>
            <Copy className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
        {copied && <p className="mt-2 font-mono text-xs text-brand-accent">{portfolio.contact.copied}</p>}

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a className="button-ghost" href={portfolio.profile.github} target="_blank" rel="noreferrer">
            <Code2 className="h-4 w-4" aria-hidden="true" />
            {portfolio.contact.social.github}
          </a>
          <a className="button-ghost" href={portfolio.profile.linkedin} target="_blank" rel="noreferrer">
            <Network className="h-4 w-4" aria-hidden="true" />
            {portfolio.contact.social.linkedin}
          </a>
          <a className="button-primary" href={`mailto:${portfolio.profile.email}`}>
            <Mail className="h-4 w-4" aria-hidden="true" />
            {portfolio.contact.social.email}
          </a>
        </div>
      </div>
    </section>
  )
}


