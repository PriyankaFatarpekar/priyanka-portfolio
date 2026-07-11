import { ArrowRight, ExternalLink } from 'lucide-react'
import { portfolio, type Project } from '../../data/portfolio'

type ProjectCardProps = {
  project: Project
  onViewMore: (project: Project) => void
}

export function ProjectCard({ project, onViewMore }: ProjectCardProps) {
  const isFeatured = 'featured' in project
  const hasGithub = 'github' in project
  const hasDeployment = project.deploymentUrl.length > 0

  return (
    <article className={`project-card stagger-item ${isFeatured ? 'md:col-span-2 lg:col-span-2' : ''}`}>
      <div className={`project-banner relative h-44 overflow-hidden ${isFeatured ? 'sm:h-56' : ''}`} style={{ background: project.gradient }}>
        {isFeatured && <span className="absolute right-4 top-4 rounded-full bg-brand-accent px-3 py-1 font-mono text-xs text-white">{portfolio.projects.featuredBadge}</span>}
        <div className="absolute left-6 top-6 h-16 w-16 rounded-full bg-white/15" />
        <div className="absolute bottom-5 right-5 grid w-36 gap-2 rounded-xl bg-white/15 p-3 backdrop-blur">
          <span className="h-2 rounded-full bg-white/60" />
          <span className="h-2 w-3/4 rounded-full bg-white/40" />
          <span className="h-10 rounded-lg bg-white/20" />
        </div>
        {isFeatured && (
          <div className="absolute bottom-5 left-5 flex gap-2">
            {[0, 1, 2].map((item) => (
              <span key={item} className="h-20 w-12 rounded-lg bg-white/15 backdrop-blur" />
            ))}
          </div>
        )}
        <div className="absolute inset-0 grid place-items-center font-display text-6xl font-extrabold text-white/35">{project.initials}</div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl font-bold">{project.name}</h3>
        <p className="mt-3 text-sm leading-6 text-ink-secondary dark:text-ink-dark-secondary">{project.description}</p>
        {project.highlights.length > 0 && (
          <ul className="mt-4 grid gap-2">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2 text-xs text-ink-muted dark:text-ink-dark-muted">
                <ArrowRight className="mt-0.5 h-3.5 w-3.5 flex-none text-brand-accent" aria-hidden="true" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span key={tech} className="rounded border border-edge bg-surface-elevated px-2 py-0.5 font-mono text-xs text-ink-secondary dark:border-edge-dark dark:bg-surface-dark-elevated dark:text-ink-dark-secondary">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <button className="button-secondary" type="button" onClick={() => onViewMore(project)}>
            {portfolio.projects.viewMoreLabel}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
          {hasDeployment && (
            <a className="button-primary" href={project.deploymentUrl} target="_blank" rel="noreferrer">
              {portfolio.projects.deployedLinkLabel}
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
          {hasGithub && (
            <a className="button-primary" href={project.github} target="_blank" rel="noreferrer">
              {portfolio.projects.githubLinkLabel}
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
