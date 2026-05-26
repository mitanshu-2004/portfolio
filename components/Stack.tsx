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
              <span className="stack-group-label">Robotics</span>
              <p className="stack-items">
                ROS 2 Humble, ROS, MoveIt, Pinocchio, ros2_control, RViz.
              </p>
            </div>

            <div className="stack-group">
              <span className="stack-group-label">AI &amp; ML</span>
              <p className="stack-items">
                PyTorch, Unsloth, TRL, PEFT, LoRA, rsLoRA, BitsAndBytesConfig, Hugging Face Hub.
                <br />
                Mistral 7B, Qwen 2.5, nanoGPT, SDXL Lightning, Diffusers, NVIDIA NeMo, YOLOv8.
                <br />
                Sentence-Transformers, ChromaDB, llama.cpp.
              </p>
            </div>

            <div className="stack-group">
              <span className="stack-group-label">Data Science</span>
              <p className="stack-items">
                lifelines (Cox PH), scikit-learn, XGBoost, K-Means, pandas, NumPy, SciPy, statsmodels.
                <br />
                Fisher z-transform CIs, F-tests, NDCG, MRR, Recall@k.
              </p>
            </div>

            <div className="stack-group">
              <span className="stack-group-label">Backend &amp; Web</span>
              <p className="stack-items">
                FastAPI, Uvicorn, SQLite FTS5, BM25.
                <br />
                Next.js 15, React 19, Firebase Firestore, TypeScript.
                <br />
                Docker, Linux, Git.
              </p>
            </div>

            <div className="stack-group stack-group--full">
              <span className="stack-group-label">Languages</span>
              <p className="stack-items">
                Python, C++, TypeScript, JavaScript, SQL, Bash.
              </p>
            </div>
          </div>
        </ScrollFade>
      </div>
    </section>
  )
}
