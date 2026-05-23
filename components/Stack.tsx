import ScrollFade from './ScrollFade'

export default function Stack() {
  return (
    <section id="stack" aria-label="Technical stack">
      <div className="container">
        <ScrollFade>
          <span className="section-label">Technical Stack</span>
        </ScrollFade>
        <ScrollFade>
          <div className="stack-grid">
            <div className="stack-group">
              <span className="stack-group-label">Robotics &amp; Embedded</span>
              <p className="stack-items">
                ROS 2 Humble · ROS · MoveIt · Pinocchio · Ignition Fortress · RViz · ros2_control · URDF
                <br />
                Elite Robots CS SDK (RTSI / EliteDriver) · Meta Quest 3 + ALVR + OpenVR
                <br />
                ESP32 · Raspberry Pi · Arduino IDE · ESP-NOW · SCHED_FIFO · mlockall · CPU pinning
              </p>
            </div>

            <div className="stack-group">
              <span className="stack-group-label">AI / ML</span>
              <p className="stack-items">
                PyTorch · Unsloth · TRL · PEFT / LoRA · rsLoRA · SDXL Lightning · Diffusers
                <br />
                NVIDIA NeMo · YOLOv8 · llama.cpp (Phi-3) · Sentence-Transformers · ChromaDB
                <br />
                scikit-learn · XGBoost · lifelines (Cox PH) · Pydantic structured output
              </p>
            </div>

            <div className="stack-group">
              <span className="stack-group-label">Languages</span>
              <p className="stack-items">Python · C++17 · TypeScript · SQL · URScript · Bash</p>
            </div>

            <div className="stack-group">
              <span className="stack-group-label">
                Backend + Systems
              </span>
              <p className="stack-items">
                FastAPI · Next.js 15 · React 19 · Firebase Firestore · Docker (NVIDIA runtime + CycloneDDS) · Linux · Git · SQLAlchemy · Hugging Face Hub
              </p>
            </div>
          </div>
        </ScrollFade>
      </div>
    </section>
  )
}
