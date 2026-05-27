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
            Most of what I do sits at the intersection of hardware and learned
            models. Right now that means a bimanual VR teleoperation rig — a
            Meta Quest 3 driving an Elite Robots CS66 pair, with the same
            control loop being extended to a Franka Research 3 so it works
            across arm families. The rig double-duties as a dataset collector:
            every teleoperation session logs synchronised arm states and headset
            pose for downstream policy training.
          </p>
          <p>
            On the model side, I've been running continued pretraining
            experiments on a Reddit corpus I scraped and processed myself. Six
            runs across Mistral 7B, Qwen 2.5 at a few scales, and a nanoGPT I
            built from scratch — partly to ship experiments, partly just to
            understand what training actually feels like from the ground up.
          </p>
        </ScrollFade>
      </div>
    </section>
  )
}