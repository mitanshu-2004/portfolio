import ScrollFade from './ScrollFade'

type Domain = 'robotics' | 'ai' | 'ds' | 'web'

interface Project {
  id: string
  domain: Domain
  title: string
  problem: string
  stack: string
  links: { github?: string; demo?: string }
}

const GROUPS: { domain: Domain; label: string; projects: Project[] }[] = [
  {
    domain: 'robotics',
    label: 'Robotics',
    projects: [
      {
        id: 'hexapod',
        domain: 'robotics',
        title: 'Hexapod',
        problem:
          '18-DoF hexapod with a full ROS 2 stack. Wrote the URDF xacro model and a complete ros2_control hardware interface from scratch. Dockerised the runtime with NVIDIA GPU support.',
        stack: 'ROS 2 Humble, ros2_control, Pinocchio, Docker',
        links: { github: 'https://github.com/atom-robotics-lab/Hexapod' },
      },
      {
        id: 'arm',
        domain: 'robotics',
        title: '6-DOF Robotic Arm',
        problem:
          'Motion planning pipeline for a 6-DOF arm — IK, collision-aware trajectories, and sim-to-real validation. The hard part was tracking down URDF kinematic mismatches that kept blocking stable execution.',
        stack: 'ROS, MoveIt, Gazebo, C++, Python',
        links: { github: 'https://github.com/mitanshu-2004/6dof-arm' },
      },
      {
        id: 'sentinel',
        domain: 'robotics',
        title: 'Sentinel',
        problem:
          'Emergency mesh communication that works with zero infrastructure — just ESP32 nodes talking to each other over ESP-NOW. Fall detection via MPU6050, with gas sensing packed into the same firmware. Mesh propagates alerts automatically.',
        stack: 'ESP32, ESP-NOW, C++, MPU6050',
        links: { github: 'https://github.com/mitanshu-2004/sentinel' },
      },
    ],
  },
  {
    domain: 'ai',
    label: 'AI & ML',
    projects: [
      {
        id: 'cpt',
        domain: 'ai',
        title: 'Reddit CPT',
        problem:
          'Six continued pretraining runs on a Reddit corpus I scraped and processed myself. Mistral 7B at two ranks, Qwen 2.5 at three scales, and a nanoGPT built from scratch to understand what training actually feels like end to end. Full pipeline from raw Pushshift data to packed tokenization.',
        stack: 'Unsloth, TRL, PEFT, LoRA, rsLoRA, Mistral 7B, Qwen 2.5, nanoGPT, A100',
        links: {},
      },
      {
        id: 'darwin',
        domain: 'ai',
        title: 'Darwin Studio',
        problem:
          'What if image generation worked like evolution? Darwin Studio treats SDXL latent tensors as genetic material — mutation, crossover, generations. A custom moment-preserving SLERP handles the interpolation and keeps child latents on the correct noise manifold so they decode properly.',
        stack: 'PyTorch, SDXL Lightning, Diffusers, custom SLERP',
        links: { github: 'https://github.com/mitanshu-2004/Darwin-Studio' },
      },
      {
        id: 'memory-ai',
        domain: 'ai',
        title: 'Memory Assistant',
        problem:
          'An offline personal memory store with hybrid dense and keyword retrieval. Phi-3 runs locally via llama.cpp for metadata at ingest time. The /api/v1/ask endpoint is the real RAG path — retrieve memories, generate a cited answer, return it with source references. No cloud required.',
        stack: 'FastAPI, ChromaDB, Sentence-Transformers, Phi-3 GGUF, llama.cpp',
        links: { github: 'https://github.com/mitanshu-2004/memory-assistant' },
      },
      {
        id: 'rag-assistant',
        domain: 'ai',
        title: 'RAG Assistant',
        problem:
          'A RAG system where hallucinations are structurally impossible by design. If the model claims "Fully Answered" but has no citations to back it up, Pydantic rejects the response at parse time — before it ever reaches the user. Built with a retry loop that feeds parse failures back to the model, and an eval that found 0 hallucinations across 9 test questions.',
        stack: 'Llama 3.3 70B, Groq, ChromaDB, Pydantic',
        links: { github: 'https://github.com/mitanshu-2004/RAG-assistant' },
      },
    ],
  },
  {
    domain: 'ds',
    label: 'Data Science',
    projects: [
      {
        id: 'retainiq',
        domain: 'ds',
        title: 'RetainIQ Churn Model',
        problem:
          'Churn prediction using a Cox proportional hazards model, with six risk signals extracted from Steam review text by an LLM. Careful about leakage — explicitly removed covariates that encode the event label. Hold-out C-index: 0.874 vs 0.640 without the LLM signals.',
        stack: 'Cox PH (lifelines), Groq Llama 4 Scout, scikit-learn',
        links: { github: 'https://github.com/mitanshu-2004/llm-survival-churn' },
      },
      {
        id: 'stockmetrics',
        domain: 'ds',
        title: 'StockMetrics Pipeline',
        problem:
          'Tested 25 fundamental-variable pairs across 5 Indian IT firms (2005–2025) for predictive power on annual stock returns. One pair came out significant — Wipro EBITDA margin change, p=0.029. The other 24 didn\'t, and the README says so plainly. Null results are results too.',
        stack: 'pandas, scikit-learn, F-test, statsmodels',
        links: { github: 'https://github.com/mitanshu-2004/StockMetrics' },
      },
      {
        id: 'stockcorr',
        domain: 'ds',
        title: 'Stock-Influence Platform',
        problem:
          'Upload any time-series and see how it correlates with a stock price. Three correlation methods (Pearson, Spearman, Kendall), each with proper 95% Fisher z-transform confidence intervals. The math is in the code and can be checked.',
        stack: 'FastAPI, React, pandas, SciPy, yfinance, Chart.js',
        links: { github: 'https://github.com/mitanshu-2004/Stock-Influence', demo: 'https://stock-influence.vercel.app' },
      },
    ],
  },
  {
    domain: 'web',
    label: 'Web',
    projects: [
      {
        id: 'chess',
        domain: 'web',
        title: 'Chesstra',
        problem:
          'Real-time multiplayer chess with Firestore. Server decides who wins — if the moving player crashes mid-move, the opponent\'s client detects it and writes the resolution. Presence heartbeats with a 15s liveness window. Stockfish runs as a separate FastAPI service with a cold-start wake-up ping.',
        stack: 'React 19, Firebase Firestore, FastAPI, Stockfish, Vite',
        links: { github: 'https://github.com/mitanshu-2004/chess', demo: 'https://chesstra.vercel.app' },
      },
    ],
  },
]

function ProjectEntry({ p }: { p: Project }) {
  return (
    <article className="proj-entry" aria-label={p.title}>
      <div className="proj-header">
        <span className="proj-title">{p.title}</span>
      </div>
      <p className="proj-problem">{p.problem}</p>
      <div className="proj-stack">{p.stack}</div>
      <div className="proj-links">
        {p.links.github && (
          <a href={p.links.github} target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
        )}
        {p.links.demo && (
          <a href={p.links.demo} target="_blank" rel="noopener noreferrer">
            Demo ↗
          </a>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" aria-label="Projects">
      <div className="container">
        <ScrollFade>
          <span className="section-label">Projects</span>
        </ScrollFade>

        <div className="proj-groups">
          {GROUPS.map((group) => (
            <ScrollFade key={group.domain} className={`proj-group proj-domain--${group.domain}`}>
              <span className="proj-group-label">{group.label}</span>
              <div className="proj-list">
                {group.projects.map((p) => (
                  <ProjectEntry key={p.id} p={p} />
                ))}
              </div>
            </ScrollFade>
          ))}
        </div>

        <ScrollFade>
          <div className="proj-github-link">
            <a
              href="https://github.com/mitanshu-2004"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View all projects on GitHub"
            >
              View all projects on GitHub ↗
            </a>
          </div>
        </ScrollFade>
      </div>
    </section>
  )
}