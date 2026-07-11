import { portfolio } from '../../data/portfolio'
import { CertificationCard } from '../ui/CertificationCard'
import { SectionLabel } from '../ui/SectionLabel'

export function Certifications() {
  return (
    <section id="certifications" className="section-shell">
      <SectionLabel label={portfolio.certifications.label} />
      <h2 className="section-heading">{portfolio.certifications.heading}</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {portfolio.certifications.items.map((certification) => (
          <CertificationCard key={`${certification.issuer}-${certification.name}`} certification={certification} />
        ))}
      </div>
    </section>
  )
}

