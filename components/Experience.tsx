import ScrollFade from './ScrollFade'

export default function Experience() {
  return (
    <section id="experience" aria-label="Work experience">
      <div className="container">
        <ScrollFade>
          <span className="section-label">Experience</span>
        </ScrollFade>

        {/*
          className="exp-entry" applied to ScrollFade wrapper so the CSS
          sibling selector .exp-entry + .exp-entry works correctly across
          the fade-in wrappers.
        */}
        <ScrollFade className="exp-entry">
          <div className="exp-header">
            <span className="exp-role">Robotics SWE &amp; Physical AI Intern</span>
            <span className="exp-period">Mar 2026 – Present</span>
          </div>
          <div className="exp-org">Variety Innovation / Enferent.ai · Gurugram, On-site</div>
          <ul className="exp-bullets" aria-label="Responsibilities at Variety Innovation / Enferent.ai">
            <li>
              Building bimanual VR teleoperation infrastructure. Meta Quest 3
              drives an Elite Robots CS66 pair, extended to a Franka Research 3
              so the system covers both arm families.
            </li>
            <li>
              Implemented damped-Jacobian IK via Pinocchio — manipulability-adaptive
              damping, null-space regularisation, and three singularity guards on
              the critical joint and TCP rotation axes.
            </li>
            <li>
              Built the imitation-learning dataset recorder. It captures
              synchronised left and right arm states, VR headset pose, and TCP
              poses across both platforms. The company's main goal is to ship
              multi-robot teleoperation datasets at scale, and we train
              policies on top of the data we collect.
            </li>
          </ul>
        </ScrollFade>

        <ScrollFade className="exp-entry">
          <div className="exp-header">
            <span className="exp-role">AI &amp; Robotics Intern</span>
            <span className="exp-period">Jun – Aug 2025</span>
          </div>
          <div className="exp-org">SarthakAI · Delhi</div>
          <ul className="exp-bullets" aria-label="Responsibilities at SarthakAI">
            <li>
              Built a real-time voice pipeline with NVIDIA NeMo's
              FastConformer-Transducer STT, added custom wake-word detection,
              and integrated it into a UBTech Yanshee humanoid.
            </li>
            <li>
              Trained and deployed custom YOLOv8 models for three production
              tasks: human tracking, package classification, and gesture-based
              robot control. Each one had its own training regime and inference
              pipeline.
            </li>
            <li>
              Designed a fault-tolerant interface between the robot hardware and
              the AI inference agent — polling-based, built to keep running even
              when hardware responses are intermittent.
            </li>
            <li>
              Built an ESP32 / Raspberry Pi telemetry workstation bridging
              embedded firmware with Python analytics layers.
            </li>
          </ul>
        </ScrollFade>

        <ScrollFade className="exp-entry">
          <div className="exp-header">
            <span className="exp-role">Robotics Intern</span>
            <span className="exp-period">Jul – Sep 2024</span>
          </div>
          <div className="exp-org">Nextup Robotics · Delhi</div>
          <ul
            className="exp-bullets"
            aria-label="Responsibilities at Nextup Robotics"
          >
            <li>
              Configured a 6-DOF arm in ROS/Gazebo — debugged URDF kinematic
              configurations and tracked down the sim-to-real discrepancies that
              were blocking stable trajectory execution.
            </li>
            <li>
              Integrated MoveIt for inverse kinematics and collision-aware
              trajectory planning in C++. Cut execution time by roughly 50%
              after switching planners and tuning parameters.
            </li>
          </ul>
        </ScrollFade>
      </div>
    </section>
  )
}