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
        <ScrollFade className="exp-entry" id="nferent">
          <div className="exp-header">
            <span className="exp-role">Robotics SWE &amp; Physical AI Intern</span>
            <span className="exp-period">Mar – Jun 2026</span>
          </div>
          <div className="exp-org">Nferent AI · Gurugram, On-site</div>
          <ul className="exp-bullets" aria-label="Work at Nferent AI">
            <li>
              <strong>Dual-arm VR teleoperation.</strong> Built the stack that
              drives two Elite Robots CS66 arms from Meta Quest 3 controllers,
              a real-time C++ control loop per arm, written from scratch. It
              maps the operator&rsquo;s hand motion to end-effector motion in
              the tool frame, smooths the noisy human input, and clamps sudden
              or near-singular moves so the arm cannot jerk. An anchor and
              clutch model lets the operator release, reposition, and re-grip
              without the arm jumping.
            </li>
            <li>
              <strong>DROID-style Franka teleop and a LeRobot dataset.</strong>{' '}
              Extended the teleoperation to a Franka Research 3 with a layered
              safety stack between the headset and the arm: a frame-jump guard
              rejects impossible VR readings, a leash keeps every command
              within a short reach of the arm&rsquo;s measured pose, and a
              slew-rate limiter caps how fast the target can move. Used the rig
              to record a 10-task, 51-episode manipulation dataset, about 2.1
              hours of two-camera RGB-D (color plus depth) video with
              synchronized robot state, exported to LeRobot format for
              imitation learning.
            </li>
            <li>
              <strong>Dexterous-hand Rock-Paper-Scissors.</strong> Wrote the
              control software that lets a Tesollo DG-5F five-finger hand, 20
              motors over Modbus-TCP, play Rock-Paper-Scissors with a human. A
              RealSense camera and a MediaPipe gesture classifier read the
              operator&rsquo;s hand at any orientation. Two fixes made the hand
              reliable: registering the vendor SDK&rsquo;s callbacks before
              connecting, because the native library segfaults otherwise, and
              replacing the firmware&rsquo;s unreliable arrived flag with a
              detector that waits for the joints to settle.
            </li>
            <li>
              <strong>MANUS multi-sensor capture.</strong> Built the capture
              tool that records two MANUS gloves and three RealSense cameras on
              a single hardware clock, with measured sync error under 15
              milliseconds at the 95th percentile. A frame-uniqueness watchdog
              fails any episode in which a camera silently repeats a stale
              frame, so corrupted recordings never reach the training set.
              Recorded 9 manipulation tasks across 45 episodes, every one
              validation-passed.
            </li>
            <li>
              Diagnosed and patched a real-hardware crash in the robot&rsquo;s
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

        <ScrollFade className="exp-entry" id="sarthakai">
          <div className="exp-header">
            <span className="exp-role">AI Intern</span>
            <span className="exp-period">Jun – Aug 2025</span>
          </div>
          <div className="exp-org">SarthakAI · Delhi</div>
          <ul className="exp-bullets" aria-label="Work at SarthakAI">
            <li>
              Built the PC-side system that turned a UBTech Yanshee humanoid into
              a voice and vision assistant for a logistics demo. A custom-trained
              YOLOv8 package detector ran over the robot's camera stream, and a
              NeMo speech-recognition (ASR) pipeline handled wake-word and
              command routing to either a chat service or a QR scanner.
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
            aria-label="Work at Nextup Robotics"
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
              <strong>Hexapod.</strong> An 18-DoF hexapod built with ROS 2. I
              worked on the control side: the tripod-gait and analytic
              inverse-kinematics node, the ros2_control hardware interface, and
              the launch wiring. The URDF is CAD-exported. Team project, and an
              honest boundary with it: the hexapod walks in Gazebo and on a
              stand, and free-standing on the floor is the part that never got
              solved.{' '}
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
