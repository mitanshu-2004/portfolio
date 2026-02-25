import ScrollFade from './ScrollFade'

export default function Focus() {
  return (
    <section id="focus" aria-label="Focus and positioning">
      <div className="container">
        <ScrollFade>
          <span className="section-label">Focus</span>
        </ScrollFade>
        <ScrollFade>
          <p>
            My work sits at the boundary between physical systems and learned
            models — building AI pipelines where compute budgets, latency
            ceilings, and hardware interfaces are non-negotiable constraints,
            not afterthoughts. I approach perception and inference problems from
            the deployment end first: what runs on a Raspberry Pi, what fits in
            16GB VRAM, what survives a sensor dropout.
          </p>
          <p>
            Current technical focus: multi-modal robot perception,
            edge-inference optimization, and the system architecture decisions
            that determine whether a model benchmarks well or operates reliably.
          </p>
          <p>
            Final-year ECE student at MAIT Delhi (graduating 2026), building
            across the full stack from microcontroller firmware to deployed ML
            inference — with a particular obsession for systems that remain
            reliable when the hardware misbehaves.
          </p>
        </ScrollFade>
      </div>
    </section>
  )
}
