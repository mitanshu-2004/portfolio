import Link from 'next/link'

export default function Hero() {
  return (
    <section id="hero" aria-label="Introduction">
      <div className="container hero-content">
        <span className="hero-location">
          <span className="hero-availability-dot" aria-hidden="true" />
          Delhi, India · Actively looking
        </span>
        <h1 className="hero-name">Mitanshu Goel</h1>
        <p className="hero-descriptor">
          Building robots, and the data and models that teach them.
        </p>
        <div className="hero-links">
          <a
            href="https://github.com/mitanshu-2004"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
          <a
            href="https://linkedin.com/in/mitanshugoel"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
          <Link href="#chat">Ask the bot ↓</Link>
        </div>
      </div>
    </section>
  )
}
