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
            My work sits at the intersection of physical hardware and learned
            models. Right now that means a bimanual VR teleoperation rig — Meta
            Quest 3 driving two Elite Robots CS66 industrial arms over a C++17
            real-time control loop on Linux, with SCHED_FIFO scheduling and
            mlockall so end-to-end VR-to-arm latency stays bounded under load.
            Plus a §3.2-style imitation-learning dataset recorder for downstream
            policy training.
          </p>
          <p>
            In parallel: six training runs on a self-scraped Reddit corpus across
            Mistral 7B, Qwen 2.5 (1.5B, 3B, 7B), and a from-scratch nanoGPT —
            covering four hardware tiers from a Colab T4 to an A100 80 GB. Three
            adapters and checkpoints are public on Hugging Face.
          </p>
          <p>
            Final-year ECE student at MAIT Delhi, graduating June 2026. I
            approach inference and control problems from the deployment end first:
            what runs on a Raspberry Pi, what fits in 16 GB VRAM, what survives
            a sensor dropout.
          </p>
        </ScrollFade>
      </div>
    </section>
  )
}
