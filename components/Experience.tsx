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
            <span className="exp-role">Robotics Software Engineer Intern</span>
            <span className="exp-period">Current</span>
          </div>
          <div className="exp-org">Variety Innovation / Enferent.ai · Remote</div>
          <ul className="exp-bullets" aria-label="Responsibilities at Variety Innovation / Enferent.ai">
            <li>
              Building bimanual VR teleoperation infrastructure — Meta Quest 3
              driving an Elite Robots CS66 pair, now extending the same control
              loop to a Franka Research 3 so the system covers both arm families.
              Runs on a custom real-time Linux scheduler (SCHED_FIFO + CPU
              pinning + mlockall).
            </li>
            <li>
              Implemented damped-Jacobian inverse kinematics via Pinocchio with
              manipulability-adaptive damping and null-space regularisation; ships
              with three named singularity guards on joint and TCP rotation axes.
            </li>
            <li>
              Built the imitation-learning dataset recorder that captures
              synchronised left+right arm states, VR headset pose, and TCP poses
              across both platforms — the company's primary goal is to ship
              multi-robot teleoperation datasets at scale, and we train policies
              on top of the data we collect.
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
              Engineered a real-time voice pipeline using NVIDIA NeMo
              (FastConformer-Transducer) with custom wake-word detection, integrated
              into a UBTech Yanshee humanoid platform.
            </li>
            <li>
              Trained and deployed custom YOLOv8 models for three production tasks:
              human tracking, package classification, and gesture-based robot
              control — each with a separate training regime and inference pipeline.
            </li>
            <li>
              Designed a polling-based fault-tolerant interface between robot
              hardware and an AI inference agent to sustain operation under
              intermittent hardware response.
            </li>
            <li>
              Built an ESP32 / Raspberry Pi telemetry workstation bridging embedded
              firmware with Python analytics layers.
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
              Configured a 6-DOF robotic arm in ROS/Gazebo, debugging URDF
              kinematic configurations and resolving simulation-to-real
              discrepancies blocking stable trajectory execution.
            </li>
            <li>
              Integrated MoveIt for inverse kinematics and collision-aware
              trajectory planning using C++; achieved ~50% reduction in execution
              time by selecting a more appropriate planner and tuning its parameters.
            </li>
          </ul>
        </ScrollFade>
      </div>
    </section>
  )
}
