import ScrollFade from './ScrollFade'

export default function Education() {
  return (
    <section id="education" aria-label="Education">
      <div className="container">
        <ScrollFade>
          <span className="section-label">Education</span>
        </ScrollFade>

        <ScrollFade className="exp-entry">
          <div className="exp-header">
            <span className="exp-role">
              B.Tech — Electronics &amp; Communication Engineering
            </span>
            <span className="exp-period">2022 – 2026 (expected)</span>
          </div>
          <div className="exp-org">
            Maharaja Agrasen Institute of Technology (MAIT) · Delhi
          </div>
          <ul className="exp-bullets" aria-label="Education details">
            <li>
              <strong>Minor:</strong> Artificial Intelligence &amp; Machine
              Learning
            </li>
            <li>
              {/* TODO: add CGPA once finalised */}
              <strong>Key coursework:</strong>{' '}
              <span className="edu-tags">
                Signals &amp; Systems · Embedded Systems · Control Theory ·
                Machine Learning · Digital Signal Processing
              </span>
            </li>
          </ul>
        </ScrollFade>
      </div>
    </section>
  )
}
