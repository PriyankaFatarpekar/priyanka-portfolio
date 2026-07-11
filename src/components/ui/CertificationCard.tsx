import { ExternalLink } from 'lucide-react'
import { portfolio } from '../../data/portfolio'

type Certification = (typeof portfolio.certifications.items)[number]

export function CertificationCard({ certification }: { certification: Certification }) {
  const content = (
    <article className="content-card flex h-full items-start gap-4">
      <span className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-gradient-brand text-white">
        <ExternalLink className="h-5 w-5" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <p className="font-mono text-xs uppercase tracking-wide text-brand-primary">{certification.issuer}</p>
        <h3 className="mt-1 font-semibold">{certification.name}</h3>
        <p className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-primary">
          {portfolio.certifications.linkLabel}
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </p>
      </div>
    </article>
  )

  if (!certification.url) {
    return content
  }

  return (
    <a href={certification.url} target="_blank" rel="noreferrer" className="block h-full">
      {content}
    </a>
  )
}
