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
            <span className="exp-role">AI &amp; Robotics Intern</span>
            <span className="exp-period">Jun – Aug 2025</span>
          </div>
          <div className="exp-org">SarthakAI · Delhi</div>
          <ul className="exp-bullets" aria-label="Responsibilities at SarthakAI">
            <li>
              Engineered a real-time voice pipeline using NVIDIA NeMo for
              speech-to-text with custom wake-word detection integrated into a
              physical robot system — latency requirements drove all architecture
              decisions.
            </li>
            <li>
              Built a polling-based interface layer between robot hardware and an
              AI agent for low-latency query processing and feedback; designed
              for fault tolerance under intermittent hardware responses.
            </li>
            <li>
              Trained and deployed custom YOLOv8 models for three distinct
              production tasks: human tracking, package classification, and
              gesture-based control — each with separate training regimes and
              inference pipelines.
            </li>
            <li>
              Developed a hardware telemetry workstation on ESP32/Raspberry Pi
              capturing environmental sensor data for predictive analytics,
              bridging embedded firmware with Python processing layers.
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
              trajectory planning using C++; achieved 50% reduction in execution
              time through shortest-path algorithm selection and parameter
              tuning.
            </li>
          </ul>
        </ScrollFade>
      </div>
    </section>
  )
}
