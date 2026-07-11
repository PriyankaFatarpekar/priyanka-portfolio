import { ArrowUp, Code2, Network } from 'lucide-react'
import { portfolio } from '../../data/portfolio'

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-edge px-5 py-8 text-center text-sm text-ink-muted dark:border-edge-dark dark:text-ink-dark-muted">
      <p>
        {portfolio.footer.prefix}{' '}
        <span className="bg-gradient-brand bg-clip-text font-semibold text-transparent">{portfolio.profile.name}</span> {portfolio.footer.year}
      </p>
      <div className="mt-4 flex justify-center gap-4">
        <a className="footer-link" href={portfolio.profile.github} target="_blank" rel="noreferrer" aria-label={portfolio.contact.social.github}>
          <Code2 className="h-4 w-4" aria-hidden="true" />
        </a>
        <a className="footer-link" href={portfolio.profile.linkedin} target="_blank" rel="noreferrer" aria-label={portfolio.contact.social.linkedin}>
          <Network className="h-4 w-4" aria-hidden="true" />
        </a>
        <a className="footer-link" href="#top" aria-label={portfolio.footer.backToTop}>
          <ArrowUp className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}

