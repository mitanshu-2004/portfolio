import Link from 'next/link'
import ScrollFade from './ScrollFade'
import { DEMOS } from '@/lib/demos'

export default function Gallery() {
  return (
    <section id="gallery" aria-label="Demo gallery">
      <div className="container">
        <ScrollFade>
          <span className="section-label">Gallery</span>
        </ScrollFade>
        <ScrollFade>
          <p className="demos-lead">
            The robots I worked on, running. Each demo is explained in the
            experience section below.
          </p>
        </ScrollFade>

        <ScrollFade>
          <div className="demo-grid">
            {DEMOS.map((d) => (
              <figure
                key={d.id}
                className={`demo-tile demo-tile--${d.orientation}`}
              >
                <div className="video-frame demo-frame">
                  <video
                    src={d.src}
                    poster={d.poster}
                    controls
                    playsInline
                    preload="metadata"
                    aria-label={d.title}
                  >
                    {d.captionsVtt && (
                      <track
                        kind="captions"
                        src={d.captionsVtt}
                        srcLang="en"
                        label="English"
                        default
                      />
                    )}
                  </video>
                </div>
                <figcaption>
                  <span className="demo-title">{d.title}.</span> {d.caption}{' '}
                  {d.external && (
                    <>
                      <a
                        href={d.external.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {d.external.label} ↗
                      </a>{' '}
                    </>
                  )}
                  <Link href={d.contextHref} className="demo-context">
                    context ↓
                  </Link>
                </figcaption>
              </figure>
            ))}
          </div>
        </ScrollFade>
      </div>
    </section>
  )
}
