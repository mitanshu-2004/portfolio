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
          <div className="exp-org">Nferent AI · Gurugram, On-site</div>
          <ul className="exp-bullets" aria-label="Responsibilities at Nferent AI">
            <li>
              <strong>Dual-arm VR teleoperation.</strong> Built the stack from
              scratch. A Meta Quest 3 controller streams pose over UDP to a
              per-arm real-time C++ control loop that drives two Elite Robots
              CS66 arms by Cartesian servoing, with One-Euro input filtering,
              SE(3) command smoothing, and singularity and step-cap safety
              guards. An anchor-and-clutch model lets the operator release and
              re-grip without the arm jumping.
              <figure className="exp-media">
                <div className="video-frame">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/kUlfE-U_5m4"
                    title="Dual-arm VR teleoperation demo — Nferent AI"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <figcaption>
                  That&rsquo;s me teleoperating the dual-arm rig I built at
                  Nferent AI.{' '}
                  <a
                    href="https://www.youtube.com/watch?v=kUlfE-U_5m4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch on YouTube ↗
                  </a>
                </figcaption>
              </figure>
            </li>
            <li>
              <strong>Franka teleop and imitation-learning data.</strong>{' '}
              Extended the same teleoperation to a Franka Research 3 with
              DROID-style anchor-and-delta control and a layered safety stack:
              frame-jump rejection, a position and orientation leash, and
              slew-rate limiting. Collected a multi-episode dataset of dual
              RGB-D video and robot state for imitation learning.
            </li>
            <li>
              <strong>MANUS multi-sensor capture.</strong> Built a capture tool,
              two MANUS gloves and three RealSense cameras, that synchronises
              every stream on one hardware clock and runs a frame-uniqueness
              watchdog to catch silent camera repeat-frame faults.
            </li>
            <li>
              Diagnosed and patched a real-hardware crash in the robot's
              URScript, a null handle on headless restart, that had been
              breaking teleop bring-up.
            </li>
            <li>
              Brought up and tested incoming commercial robots before dispatch:
              arms (Franka, Flexiv, Elite, Elephant Robotics), grippers
              (Robotiq, Tesollo, DH Robotics), and a Unitree quadruped.
            </li>
          </ul>
        </ScrollFade>

        <ScrollFade className="exp-entry">
          <div className="exp-header">
            <span className="exp-role">AI Intern</span>
            <span className="exp-period">Jun – Aug 2025</span>
          </div>
          <div className="exp-org">SarthakAI · Delhi</div>
          <ul className="exp-bullets" aria-label="Responsibilities at SarthakAI">
            <li>
              Built the PC-side system that turned a UBTech Yanshee humanoid into
              a voice and vision assistant for a logistics demo. A custom-trained
              YOLOv8 package detector ran over the robot's MJPEG stream, and a
              NeMo ASR pipeline handled wake-word and command routing to either a
              chat service or a QR scanner.
            </li>
            <li>
              Designed resilient camera reconnection with exponential backoff and
              placeholder frames, so the web view never went blank when the
              stream dropped.
            </li>
            <li>
              Handled wake-word detection cheaply by matching ASR transcripts
              against about twenty phonetic spellings of the trigger phrase,
              instead of pulling in a separate wake-word engine.
            </li>
            <li>
              Built a sensor-network workstation that collected environmental
              data and ran predictive analysis on it to infer the state of the
              monitored equipment.
            </li>
            <li>
              Built a vision-driven detection and sorting line on a robotic arm
              and conveyor belt.
            </li>
          </ul>
        </ScrollFade>

        <ScrollFade className="exp-entry">
          <div className="exp-header">
            <span className="exp-role">Robotics Intern</span>
            <span className="exp-period">Jul – Sep 2024</span>
          </div>
          <div className="exp-org">Nextup Robotics · Ghaziabad</div>
          <ul
            className="exp-bullets"
            aria-label="Responsibilities at Nextup Robotics"
          >
            <li>
              Built MoveIt motion planning for a 6-DOF arm, validated first in
              simulation and then on the real hardware, focused on
              Cartesian-space planning for pick-and-place.
            </li>
            <li>
              Tracked down the URDF kinematic mismatches between simulation and
              hardware that were blocking stable trajectory execution.
            </li>
          </ul>
        </ScrollFade>

        <ScrollFade className="exp-entry">
          <div className="exp-header">
            <span className="exp-role">Core Member</span>
            <span className="exp-period">Oct 2023 – Present</span>
          </div>
          <div className="exp-org">A.T.O.M. Robotics, MAIT robotics society · Delhi</div>
          <ul
            className="exp-bullets"
            aria-label="Projects and responsibilities at A.T.O.M. Robotics"
          >
            <li>
              <strong>Hexapod.</strong> An 18-DoF hexapod built with ROS 2, run
              in simulation and on hardware. I worked on the control side: the
              tripod-gait and analytic inverse-kinematics node, the ros2_control
              hardware interface, and the launch wiring. The URDF is
              CAD-exported. Team project.{' '}
              <a
                href="https://github.com/atom-robotics-lab/Hexapod"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
            </li>
            <li>
              <strong>Web-controlled robotic arm.</strong> A browser interface
              that drives a robotic arm through a rosbridge WebSocket, with the
              arm's live camera feed streamed back into the UI.
            </li>
            <li>
              Represent the society at robotics competitions and hackathons, and
              run technical sessions for members.
            </li>
          </ul>
        </ScrollFade>
      </div>
    </section>
  )
}
