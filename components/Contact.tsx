import ScrollFade from './ScrollFade'

export default function Contact() {
  return (
    <section id="contact" aria-label="Contact information">
      <div className="container">
        <ScrollFade>
          <span className="section-label">Contact</span>
        </ScrollFade>
        <ScrollFade>
          <p className="contact-lead">
            Open to research engineering, ML engineering, and robotics software
            roles — full-time or internship. Responses within 24 hours.
          </p>
          <div className="contact-rows">
            <div className="contact-row">
              <span className="contact-label">Email</span>
              <span className="contact-value">
                <a href="mailto:mitanshug2004@gmail.com">
                  mitanshug2004@gmail.com
                </a>
              </span>
            </div>
            <div className="contact-row">
              <span className="contact-label">GitHub</span>
              <span className="contact-value">
                <a
                  href="https://github.com/mitanshu-2004"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/mitanshu-2004
                </a>
              </span>
            </div>
            <div className="contact-row">
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">
                <a
                  href="https://linkedin.com/in/mitanshugoel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/mitanshugoel
                </a>
              </span>
            </div>
            <div className="contact-row">
              <span className="contact-label">Location</span>
              <span className="contact-value">Delhi, India</span>
            </div>
          </div>
        </ScrollFade>
      </div>
    </section>
  )
}
