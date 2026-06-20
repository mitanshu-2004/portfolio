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
            Looking for full-time roles in Physical AI and Robotics SWE. Also
            open to research engineering and applied ML.
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
              <span className="contact-label">Phone</span>
              <span className="contact-value">
                <a href="tel:+918595657583">+91 85956 57583</a>
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
              <span className="contact-value">Delhi, India. Open to relocation.</span>
            </div>
          </div>
        </ScrollFade>
      </div>
    </section>
  )
}
