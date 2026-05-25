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
                ROS 2 Humble, ROS, MoveIt, Pinocchio, ros2_control, URDF, Ignition Fortress, RViz.
                <br />
                Elite Robots CS SDK (RTSI, EliteDriver), Franka libfranka, Meta Quest 3, OpenVR, ALVR.
                <br />
                Real-time Linux (SCHED_FIFO, CPU pinning, mlockall), ESP32, Raspberry Pi, ESP-NOW, Arduino IDE.
              </p>
            </div>

            <div className="stack-group">
              <span className="stack-group-label">AI &amp; Foundation Models</span>
              <p className="stack-items">
                PyTorch, Unsloth, TRL, PEFT, LoRA, rsLoRA, BitsAndBytesConfig, Hugging Face Hub.
                <br />
                Continued pretraining (Mistral, Qwen 2.5, nanoGPT), SDXL Lightning, Diffusers, NVIDIA NeMo, YOLOv8.
                <br />
                Sentence-Transformers, ChromaDB, hybrid retrieval, llama.cpp (Phi-3), Pydantic structured output, Instructor.
              </p>
            </div>

            <div className="stack-group">
              <span className="stack-group-label">Data Science &amp; Stats</span>
              <p className="stack-items">
                lifelines (Cox PH), scikit-learn, XGBoost, K-Means, pandas, NumPy, SciPy, statsmodels.
                <br />
                Fisher z-transform CIs, F-tests, likelihood-ratio χ², leakage audits, held-out evaluation, NDCG, MRR, Recall@k.
              </p>
            </div>

            <div className="stack-group">
              <span className="stack-group-label">Backend &amp; Systems</span>
              <p className="stack-items">
                FastAPI, Uvicorn, SQLAlchemy, SQLite FTS5, BM25.
                <br />
                Next.js 15, React 19, Vercel Edge Runtime, Firebase Firestore, TypeScript strict, Framer Motion.
                <br />
                Docker (NVIDIA runtime + CycloneDDS), Linux, Git, Bash.
              </p>
            </div>

            <div className="stack-group stack-group--full">
              <span className="stack-group-label">Languages</span>
              <p className="stack-items">
                Python, C++, TypeScript, JavaScript, SQL, URScript, Bash.
              </p>
            </div>
          </div>
        </ScrollFade>
      </div>
    </section>
  )
}
