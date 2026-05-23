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
        Mitanshu Goel is a robotics and AI/ML engineer based in Delhi, India,
        graduating June 2026 from MAIT (ECE + AI/ML minor). Currently building a
        bimanual VR teleoperation rig at Variety Innovation / Enferent.ai —
        Meta Quest 3 driving Elite Robots CS66 arms over a C++17 real-time
        Linux control loop. Six continued-pretraining runs on a self-scraped
        Reddit corpus (Mistral 7B, Qwen 2.5, nanoGPT) across four hardware
        tiers; three artefacts public on Hugging Face. Sole-authored the
        ros2_control hardware interface and Ignition Fortress migration for an
        18-DoF hexapod at atom-robotics-lab. Seeking Robotics SWE, Research
        Engineering, ML Engineering, or Applied AI roles from June 2026.
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
