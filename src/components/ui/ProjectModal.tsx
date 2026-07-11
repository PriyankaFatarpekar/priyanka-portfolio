import { ExternalLink, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { portfolio, type Project } from '../../data/portfolio'

type ProjectModalProps = {
  project: Project
  onClose: () => void
}

type ProjectImage = { src: string; alt: string }

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const backdropRef = useRef<HTMLDivElement>(null)
  const hasGithub = 'github' in project
  const hasDeployment = project.deploymentUrl.length > 0
  const images = project.images as readonly ProjectImage[]

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.body.style.overflow = 'hidden'
    backdropRef.current?.scrollTo({ top: 0, left: 0 })
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  return createPortal(
    <div ref={backdropRef} className="project-modal-backdrop" role="presentation" onMouseDown={onClose}>
      <article className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onMouseDown={(event) => event.stopPropagation()}>
        <button className="icon-button project-modal-close" type="button" onClick={onClose} aria-label={portfolio.projects.closeLabel}>
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="relative min-h-52 overflow-hidden p-6 sm:p-8" style={{ background: project.gradient }}>
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/15 blur-2xl" />
          <div className="absolute bottom-5 right-6 grid w-48 gap-2 rounded-2xl bg-white/15 p-4 backdrop-blur">
            <span className="h-2 rounded-full bg-white/60" />
            <span className="h-2 w-3/4 rounded-full bg-white/40" />
            <span className="h-16 rounded-xl bg-white/20" />
          </div>
          <div className="relative max-w-xl text-white">
            <p className="font-mono text-sm uppercase tracking-wide text-white/75">{project.initials}</p>
            <h3 id="project-modal-title" className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">
              {project.name}
            </h3>
            <p className="mt-4 max-w-lg text-sm leading-6 text-white/85">{project.description}</p>
          </div>
        </div>

        <div className={`grid gap-7 p-6 sm:p-8 ${images.length > 0 ? 'lg:grid-cols-[1fr_0.85fr]' : ''}`}>
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-brand-primary">{portfolio.projects.detailLabels.overview}</p>
            <p className="mt-3 leading-7 text-ink-secondary dark:text-ink-dark-secondary">{project.detail}</p>

            <p className="mt-7 font-mono text-xs uppercase tracking-wide text-brand-primary">{portfolio.projects.detailLabels.keyWork}</p>
            <ul className="mt-3 grid gap-3">
              {project.detailPoints.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-6 text-ink-secondary dark:text-ink-dark-secondary">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="rounded border border-edge bg-surface-elevated px-2.5 py-1 font-mono text-xs text-ink-secondary dark:border-edge-dark dark:bg-surface-dark-elevated dark:text-ink-dark-secondary">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {hasDeployment && (
                <a className="button-primary" href={project.deploymentUrl} target="_blank" rel="noreferrer">
                  {portfolio.projects.deployedLinkLabel}
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
              {hasGithub && (
                <a className="button-secondary" href={project.github} target="_blank" rel="noreferrer">
                  {portfolio.projects.githubLinkLabel}
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>

          {images.length > 0 && (
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-brand-primary">{portfolio.projects.detailLabels.visuals}</p>
              <div className="mt-3 grid gap-3">
                {images.map((image) => (
                  <img key={image.src} src={image.src} alt={image.alt} className="w-full rounded-xl border border-edge object-cover dark:border-edge-dark" />
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </div>,
    document.body,
  )
}
