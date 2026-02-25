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
                ROS · ROS2 · MoveIt · Gazebo · RViz · ROS2 Control · URDF
                <br />
                ESP32 · Raspberry Pi · Arduino IDE · ESP-NOW
              </p>
            </div>

            <div className="stack-group">
              <span className="stack-group-label">AI / ML</span>
              <p className="stack-items">
                PyTorch · YOLOv8 · SDXL · LoRA · NVIDIA NeMo
                <br />
                Sentence-Transformers · llama.cpp · ChromaDB
                <br />
                scikit-learn · XGBoost
              </p>
            </div>

            <div className="stack-group">
              <span className="stack-group-label">Languages</span>
              <p className="stack-items">Python · C++ · TypeScript · SQL</p>
            </div>

            <div className="stack-group">
              <span className="stack-group-label">
                Systems &amp; Infrastructure
              </span>
              <p className="stack-items">
                Docker · FastAPI · Linux · Git · SQLAlchemy · Firebase · React
              </p>
            </div>
          </div>
        </ScrollFade>
      </div>
    </section>
  )
}
