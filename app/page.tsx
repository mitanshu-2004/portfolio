import Hero from '@/components/Hero'
import Gallery from '@/components/Gallery'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Projects from '@/components/Projects'
import Stack from '@/components/Stack'
import Chat from '@/components/Chat'
import Contact from '@/components/Contact'
import { projectListSchema, faqSchema, workExperienceSchema } from '@/lib/schema'

export default function Home() {
  return (
    <>
      {/* Project list schema for AI search citation */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectListSchema) }}
      />
      {/* FAQPage schema — highest-value GEO signal */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Work experience schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workExperienceSchema) }}
      />
      {/* Invisible semantic summary for AI crawlers / RAG chunking */}
      <p className="sr-only">
        Mitanshu Goel is a robotics and Physical AI engineer based in Delhi,
        India. ECE graduate from MAIT (2026) with an AI/ML minor. At Nferent AI
        (Mar to Jun 2026) he built a bimanual VR teleoperation rig and
        robot-learning data pipeline: a Meta Quest 3 drives an Elite Robots
        CS66 pair and a Franka Research 3 over a real-time C++ control loop, a
        multi-sensor capture tool records MANUS gloves and RealSense cameras on
        one hardware clock, and the Franka rig recorded a 51-episode
        imitation-learning dataset exported to LeRobot format. He also wrote
        the control software for a Tesollo DG-5F dexterous hand that plays
        Rock-Paper-Scissors using a RealSense camera and a MediaPipe gesture
        classifier. Demo videos of the dual-arm teleoperation, the dexterous
        hand, and the SarthakAI voice assistant are embedded on this page. He
        has run three continued-pretraining experiments on a self-scraped
        Reddit corpus (a LoRA adapter on Mistral 7B, a QLoRA adapter on Qwen
        2.5 through a hand-written distributed loop, and a small GPT from
        scratch). On an A.T.O.M. Robotics team hexapod he worked on the gait
        and inverse-kinematics control node and the ros2_control integration.
        He looks for Physical AI, Robotics SWE, ML Engineering, and Research
        Engineering roles.
      </p>
      <Hero />
      <Gallery />
      <Experience />
      <Education />
      <Projects />
      <Stack />
      <Chat />
      <Contact />
    </>
  )
}
