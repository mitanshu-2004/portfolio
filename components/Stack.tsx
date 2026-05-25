'use client'

import { useState } from 'react'
import ScrollFade from './ScrollFade'

type Mode = 'main' | 'physical-ai' | 'data-science'

interface StackGroup {
  label: string
  main: string
  full: string[]
}

const ROBOTICS: StackGroup = {
  label: 'Robotics & Embedded',
  main: 'ROS 2 · MoveIt · Pinocchio · ros2_control · C++17 (real-time)',
  full: [
    'ROS 2 Humble · ROS · MoveIt · Pinocchio · Ignition Fortress · RViz · ros2_control · URDF',
    'Elite Robots CS SDK (RTSI / EliteDriver) · Meta Quest 3 + ALVR + OpenVR',
    'ESP32 · Raspberry Pi · Arduino IDE · ESP-NOW · SCHED_FIFO · mlockall · CPU pinning',
  ],
}

const AIML: StackGroup = {
  label: 'AI / ML',
  main: 'PyTorch · Unsloth · LoRA / rsLoRA · Hugging Face Hub',
  full: [
    'PyTorch · Unsloth · TRL · PEFT / LoRA · rsLoRA · SDXL Lightning · Diffusers',
    'NVIDIA NeMo · YOLOv8 · llama.cpp (Phi-3) · Sentence-Transformers · ChromaDB',
    'scikit-learn · XGBoost · lifelines (Cox PH) · Pydantic structured output',
  ],
}

const LANGUAGES: StackGroup = {
  label: 'Languages',
  main: 'Python · C++17 · TypeScript',
  full: ['Python · C++17 · TypeScript · SQL · URScript · Bash'],
}

const BACKEND: StackGroup = {
  label: 'Backend + Systems',
  main: 'FastAPI · Next.js 15 · Docker · Linux',
  full: [
    'FastAPI · Next.js 15 · React 19 · Firebase Firestore · Docker (NVIDIA runtime + CycloneDDS) · Linux · Git · SQLAlchemy · Hugging Face Hub',
  ],
}

const TABS: { value: Mode; label: string }[] = [
  { value: 'main', label: 'Main' },
  { value: 'physical-ai', label: 'Physical AI' },
  { value: 'data-science', label: 'Data Science / LLM' },
]

function Group({ group, full }: { group: StackGroup; full: boolean }) {
  return (
    <div className="stack-group">
      <span className="stack-group-label">{group.label}</span>
      <p className="stack-items">
        {full
          ? group.full.map((line, i) => (
              <span key={i}>
                {line}
                {i < group.full.length - 1 && <br />}
              </span>
            ))
          : group.main}
      </p>
    </div>
  )
}

export default function Stack() {
  const [mode, setMode] = useState<Mode>('main')

  const showFullRobotics = mode === 'physical-ai'
  const showFullAI = mode === 'data-science'
  const showFullSupport = mode !== 'main'

  return (
    <section id="stack" aria-label="Technical stack">
      <div className="container">
        <ScrollFade>
          <span className="section-label">Technical Stack</span>
        </ScrollFade>
        <ScrollFade>
          <div className="stack-tabs" role="tablist" aria-label="Stack focus">
            {TABS.map((tab) => (
              <button
                key={tab.value}
                role="tab"
                aria-selected={mode === tab.value}
                className={`stack-tab${mode === tab.value ? ' stack-tab--active' : ''}`}
                onClick={() => setMode(tab.value)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="stack-grid">
            <Group group={ROBOTICS} full={showFullRobotics} />
            <Group group={AIML} full={showFullAI} />
            <Group group={LANGUAGES} full={showFullSupport} />
            <Group group={BACKEND} full={showFullSupport} />
          </div>
        </ScrollFade>
      </div>
    </section>
  )
}
