import Link from 'next/link'

export default function NotFound() {
  return (
    <section
      id="not-found"
      aria-label="Page not found"
      style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        borderTop: 'none',
        paddingTop: '80px',
      }}
    >
      <div className="container">
        <span className="hero-location">404</span>
        <h1
          className="hero-name"
          style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem' }}
        >
          Page not found.
        </h1>
        <p className="hero-descriptor">
          This URL does not exist. The portfolio is a single page.
        </p>
        <div className="hero-links" style={{ marginTop: '1.5rem' }}>
          <Link href="/">← Back to portfolio</Link>
        </div>
      </div>
    </section>
  )
}
