'use client'

import { useState } from 'react'
import ScrollFade from './ScrollFade'
import { GROUPS, type Project } from '@/lib/projects'

// Continuous index across all groups (01..N), computed once.
const PROJECT_INDEX: Record<string, number> = {}
GROUPS.flatMap((g) => g.projects).forEach((p, i) => {
  PROJECT_INDEX[p.id] = i + 1
})

function ProjectRow({
  p,
  open,
  onToggle,
}: {
  p: Project
  open: boolean
  onToggle: () => void
}) {
  const panelId = `proj-panel-${p.id}`
  const headId = `proj-head-${p.id}`

  return (
    <div className={`proj-row${open ? ' is-open' : ''}`}>
      <button
        id={headId}
        type="button"
        className="proj-row-head"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="proj-index">
          {String(PROJECT_INDEX[p.id]).padStart(2, '0')}
        </span>
        <span className="proj-row-main">
          <span className="proj-title">{p.title}</span>
          <span className="proj-hook">{p.hook}</span>
        </span>
        <span className="proj-toggle" aria-hidden="true" />
      </button>
      <div
        className="proj-panel"
        id={panelId}
        role="region"
        aria-labelledby={headId}
      >
        <div className="proj-panel-inner" inert={!open}>
          <div className="proj-panel-pad">
            <p className="proj-problem">{p.problem}</p>
            <div className="proj-stack">{p.stack}</div>
            {p.links.length > 0 && (
              <div className="proj-links">
                {p.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [openIds, setOpenIds] = useState<string[]>([])

  const toggle = (id: string) =>
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )

  return (
    <section id="projects" aria-label="Projects">
      <div className="container">
        <ScrollFade>
          <span className="section-label">Projects</span>
        </ScrollFade>

        <div className="proj-groups">
          {GROUPS.map((group) => (
            <ScrollFade
              key={group.domain}
              className={`proj-group proj-domain--${group.domain}`}
            >
              <span className="proj-group-label">{group.label}</span>
              <div className="proj-list">
                {group.projects.map((p) => (
                  <ProjectRow
                    key={p.id}
                    p={p}
                    open={openIds.includes(p.id)}
                    onToggle={() => toggle(p.id)}
                  />
                ))}
              </div>
            </ScrollFade>
          ))}
        </div>

        <ScrollFade>
          <div className="proj-github-link">
            <a
              href="https://github.com/mitanshu-2004"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View all projects on GitHub"
            >
              View all projects on GitHub ↗
            </a>
          </div>
        </ScrollFade>
      </div>
    </section>
  )
}
