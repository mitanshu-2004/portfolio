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
            Most of what I do sits where hardware meets learned models. Right
            now that means a bimanual VR teleoperation rig at nFerent.ai. A Meta
            Quest 3 drives a pair of Elite Robots CS66 arms through a real-time
            C++ control loop, and the same loop extends to a Franka Research 3 so
            it covers both arm families. The rig doubles as a data collector.
            Every session logs synchronised arm state and headset pose, which is
            what the imitation-learning policies train on.
          </p>
          <p>
            On the model side, I've been running continued-pretraining
            experiments on a Reddit corpus I scraped and processed myself. Six
            runs across Mistral 7B, Qwen 2.5 at a few scales, and a nanoGPT I
            built from scratch. Part of it was to ship real experiments, part of
            it was to feel what training actually does from the ground up. The
            habit underneath both threads is the same one. Build the eval before
            you trust the number.
          </p>
        </ScrollFade>
      </div>
    </section>
  )
}