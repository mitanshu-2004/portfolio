import Link from 'next/link'
import {
  RESUMES,
  RESUME_PERSONAL,
  RESUME_EDUCATION,
  type ResumeDomain,
} from '@/lib/resume-data'
import PrintResumeButton from './PrintResumeButton'

const DOMAINS: ResumeDomain[] = ['robotics', 'ai', 'ds', 'web']

const DOMAIN_SHORT: Record<ResumeDomain, string> = {
  robotics: 'Robotics',
  ai: 'AI / ML',
  ds: 'Data Science',
  web: 'Web',
}

export default function ResumeView({ domain }: { domain: ResumeDomain }) {
  const data = RESUMES[domain]

  return (
    <div className={`resume-outer resume-outer--${domain}`}>
      <div className="resume-controls">
        <span className="resume-controls-label">{data.title}</span>
        <nav className="resume-domain-nav" aria-label="Resume domain">
          {DOMAINS.map((d) => (
            <Link
              key={d}
              href={`/cv?domain=${d}`}
              className={`resume-domain-link${d === domain ? ' resume-domain-link--active' : ''}`}
              aria-current={d === domain ? 'page' : undefined}
            >
              {DOMAIN_SHORT[d]}
            </Link>
          ))}
        </nav>
        <PrintResumeButton domain={domain} />
      </div>

      <article className="resume-page">
        <header className="resume-header">
          <h1 className="resume-name">{RESUME_PERSONAL.name}</h1>
          <p className="resume-contact-line">
            <a
              href={`mailto:${RESUME_PERSONAL.email}`}
              className="resume-contact-link"
            >
              {RESUME_PERSONAL.email}
            </a>
            <span className="resume-contact-sep">·</span>
            <a
              href={`https://${RESUME_PERSONAL.github}`}
              className="resume-contact-link"
            >
              {RESUME_PERSONAL.github}
            </a>
            <span className="resume-contact-sep">·</span>
            <a
              href={`https://${RESUME_PERSONAL.linkedin}`}
              className="resume-contact-link"
            >
              {RESUME_PERSONAL.linkedin}
            </a>
            <span className="resume-contact-sep">·</span>
            <a href="https://mitanshu.me" className="resume-contact-link">
              mitanshu.me
            </a>
            <span className="resume-contact-sep">·</span>
            <span>{RESUME_PERSONAL.location}</span>
          </p>
        </header>

        <hr className="resume-rule" />

        <section className="resume-section">
          <h2 className="resume-section-title">Summary</h2>
          <p className="resume-summary">{data.summary}</p>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">Experience</h2>
          {data.experience.map((exp) => (
            <div key={`${exp.org}-${exp.period}`} className="resume-entry">
              <div className="resume-entry-header">
                <span className="resume-entry-role">
                  {exp.role}
                  <span className="resume-entry-org-inline">
                    {' '}
                    — {exp.org}
                  </span>
                </span>
                <span className="resume-entry-period">{exp.period}</span>
              </div>
              <p className="resume-entry-org">{exp.location}</p>
              <ul className="resume-bullets">
                {exp.bullets.map((b) => (
                  <li key={b.slice(0, 48)} className="resume-bullet">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">Projects</h2>
          {data.projects.map((proj) => (
            <div key={proj.name} className="resume-entry">
              <div className="resume-entry-header">
                <span className="resume-entry-role">{proj.name}</span>
              </div>
              <p className="resume-project-stack">{proj.stack}</p>
              <ul className="resume-bullets">
                {proj.bullets.map((b) => (
                  <li key={b.slice(0, 48)} className="resume-bullet">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">Skills</h2>
          <div className="resume-skills">
            {data.skills.map((g) => (
              <div key={g.label} className="resume-skill-row">
                <span className="resume-skill-label">{g.label}:</span>
                <span className="resume-skill-items">{g.items.join(' · ')}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">Education</h2>
          <div className="resume-entry">
            <div className="resume-entry-header">
              <span className="resume-entry-role">{RESUME_EDUCATION.degree}</span>
              <span className="resume-entry-period">{RESUME_EDUCATION.period}</span>
            </div>
            <p className="resume-entry-org">
              {RESUME_EDUCATION.institution} · {RESUME_EDUCATION.location}
            </p>
            <p className="resume-entry-sub">{RESUME_EDUCATION.minor}</p>
          </div>
        </section>
      </article>
    </div>
  )
}
