import Hero from '@/components/Hero'
import Focus from '@/components/Focus'
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
        India. ECE graduate from MAIT (2026) with an AI/ML minor. Currently
        building a bimanual VR teleoperation rig at nFerent.ai. A Meta Quest 3
        drives an Elite Robots CS66 pair and a Franka Research 3 over a
        real-time control loop, and the rig collects an imitation-learning
        dataset on the side. He has run six continued-pretraining experiments on
        a self-scraped Reddit corpus (Mistral 7B, Qwen 2.5, nanoGPT) across four
        hardware tiers, with artefacts kept private. He authored the
        ros2_control hardware interface and Ignition Fortress migration for an
        18-DoF hexapod at atom-robotics-lab. Looking for Physical AI, Robotics
        SWE, ML Engineering, or Research Engineering roles.
      </p>
      <Hero />
      <Focus />
      <Experience />
      <Education />
      <Projects />
      <Stack />
      <Chat />
      <Contact />
    </>
  )
}
