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
            now that means a bimanual VR teleoperation rig at Nferent AI. A Meta
            Quest 3 drives a pair of Elite Robots CS66 arms through a real-time
            C++ control loop, and the same loop extends to a Franka Research 3 so
            it covers both arm families. The rig is also how the data gets made.
            Every session records synchronised arm state, headset pose, and
            multi-camera video, and a separate capture tool puts two MANUS gloves
            and three RealSense cameras on one hardware clock. That recorded data
            is what imitation-learning policies train on.
          </p>
          <p>
            On the model side, I have been running continued-pretraining
            experiments on a Reddit corpus I scraped and cleaned myself. Three so
            far: a LoRA adapter on Mistral 7B, a QLoRA adapter on Qwen 2.5 through
            a distributed training loop I wrote by hand, and a small GPT from
            scratch. The hard part was making them survive free cloud sessions,
            so the loop shards the corpus by token offset and picks up from the
            exact token it stopped at when a session dies. Part of it was to ship
            real experiments, part of it was to feel what training does from the
            ground up. The habit underneath both threads is the same. Build the
            eval before you trust the number.
          </p>
        </ScrollFade>
      </div>
    </section>
  )
}