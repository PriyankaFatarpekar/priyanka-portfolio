import { useState } from 'react'
import { portfolio, type Project } from '../../data/portfolio'
import { ProjectCard } from '../ui/ProjectCard'
import { ProjectModal } from '../ui/ProjectModal'
import { SectionLabel } from '../ui/SectionLabel'

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" data-section className="section-shell section-animate">
      <SectionLabel label={portfolio.projects.label} />
      <h2 className="section-heading">{portfolio.projects.heading}</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {portfolio.projects.items.map((project, index) => (
          <div key={project.name} style={{ transitionDelay: `${index * 70}ms` }}>
            <ProjectCard project={project} onViewMore={setSelectedProject} />
          </div>
        ))}
      </div>
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  )
}
