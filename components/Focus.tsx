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
            My work sits where physical hardware meets learned models. Right
            now that means a bimanual VR teleoperation rig. Meta Quest 3 drives
            an Elite Robots CS66 pair, and we are extending the same control
            loop to a Franka Research 3 so the system covers both arm families.
            It runs on a real-time Linux scheduler (SCHED_FIFO, CPU pinning,
            mlockall) so end-to-end VR-to-arm latency stays bounded under
            load. The same rig writes an imitation-learning dataset on the
            side, for downstream policy training.
          </p>
          <p>
            In parallel, six training runs on a self-scraped Reddit corpus.
            Mistral 7B, Qwen 2.5 (1.5B, 3B, 7B), and a from-scratch nanoGPT.
            Four hardware tiers, from a Colab T4 up to an A100 80 GB. Three of
            those adapters and checkpoints are public on Hugging Face.
          </p>
          <p>
            ECE at MAIT Delhi, graduated 2026. I approach inference and
            control problems from the deployment end first. What runs on a
            Raspberry Pi. What fits in 16 GB VRAM. What survives a sensor
            dropout.
          </p>
        </ScrollFade>
      </div>
    </section>
  )
}
