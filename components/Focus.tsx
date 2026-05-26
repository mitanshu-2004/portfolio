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
            Most of what I do has hardware on one side and a learned model on
            the other. Right now that means a bimanual VR teleop rig — Meta
            Quest 3 driving an Elite Robots CS66 pair, extended to cover a
            Franka Research 3 so the stack works across arm families. The rig
            also logs an imitation-learning dataset while you teleop. The
            teleop is the data collector.
          </p>
          <p>
            On the model side, I have been running continued pretraining
            experiments on a Reddit corpus I scraped and processed myself —
            Mistral 7B, Qwen 2.5 at a few scales, and a from-scratch nanoGPT
            I built to understand what training actually feels like end to end.
          </p>
        </ScrollFade>
      </div>
    </section>
  )
}
