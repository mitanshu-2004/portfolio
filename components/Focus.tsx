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
            the other. Right now that means a bimanual VR teleop rig. Meta
            Quest 3 driving an Elite Robots CS66 pair, and we are putting a
            Franka Research 3 onto the same control loop so the stack is not
            tied to one arm vendor. Real-time Linux underneath. SCHED_FIFO,
            CPU pinning, mlockall, the usual suspects, because VR-to-arm
            latency starts to wander the second the box gets busy. The rig
            also logs an imitation-learning dataset while you teleop, which is
            really the whole point. The teleop is the data collector.
          </p>
          <p>
            Separately, six training runs on a Reddit corpus I scraped myself.
            Mistral 7B. Qwen 2.5 at 1.5B, 3B, and 7B. A from-scratch nanoGPT I
            wrote because I wanted to feel the pain. Four hardware tiers, from
            a Colab T4 up to an A100 80 GB borrowed for a weekend. The
            artefacts are kept private for now.
          </p>
          <p>
            ECE at MAIT Delhi, 2026. I tend to start from the deployment end.
            What fits in 16 GB VRAM. What runs on a Pi. Whether the whole
            stack survives one sensor cutting out at the worst possible
            moment.
          </p>
        </ScrollFade>
      </div>
    </section>
  )
}
