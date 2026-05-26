import ScrollFade from './ScrollFade'

type Domain = 'robotics' | 'ai' | 'ds' | 'web'

interface Project {
  id: string
  domain: Domain
  tag: string
  title: string
  problem: string
  metrics: { value: string; label: string }[]
  stack: string
  featured?: boolean
  links: { github?: string; demo?: string }
}

const PROJECTS: Project[] = [
  {
    id: 'hexapod',
    domain: 'robotics',
    tag: 'Robotics',
    title: 'Hexapod (atom-robotics-lab)',
    featured: true,
    problem:
      'Team-built 18-DoF hexapod ROS 2 stack at atom-robotics-lab. URDF xacro model, ros2_control hardware interface, Dockerised NVIDIA + CycloneDDS runtime, and the Gazebo Classic to Ignition Fortress migration. Analytic IK by collaborator Akshat.',
    metrics: [
      { value: '1000 Hz', label: 'Ignition physics under 5 Hz JointTrajectory' },
      { value: 'Docker', label: 'NVIDIA runtime + CycloneDDS real-time network' },
    ],
    stack: 'ROS 2 Humble, ros2_control, Pinocchio, Docker (NVIDIA + CycloneDDS)',
    links: { github: 'https://github.com/atom-robotics-lab/Hexapod' },
  },
  {
    id: 'cpt',
    domain: 'ai',
    tag: 'AI',
    title: 'Reddit CPT',
    featured: true,
    problem:
      'Continued pretraining on a self-scraped Reddit corpus. Mistral 7B (r=128, r=256), Qwen 2.5 (7B, 3B, 1.5B), and a from-scratch nanoGPT. Full data pipeline — libtorrent Pushshift download, zstandard decompression, thread joining, Wilson-score ranking, and tokenisation with packing.',
    metrics: [
      { value: 'Mistral + Qwen', label: 'multiple scales from 1.5B to 7B' },
      { value: 'nanoGPT', label: 'from-scratch to understand training end to end' },
    ],
    stack: 'Unsloth, TRL, PEFT, LoRA, rsLoRA, Mistral 7B, Qwen 2.5, nanoGPT, Kaggle, Colab, A100',
    links: {},
  },
  {
    id: 'darwin',
    domain: 'ai',
    tag: 'AI',
    title: 'Darwin Studio',
    featured: true,
    problem:
      'Treats SDXL latent tensors as genetic material. Mutation and crossover applied between generations. Custom moment-preserving SLERP does spherical interpolation, then z-score normalisation and restoration of the weighted target mean and std. That keeps child latents on the unit-norm noise manifold.',
    metrics: [
      { value: 'SLERP', label: 'vs LERP, eliminates variance collapse' },
      { value: 'manual', label: 'CFG, scheduler, and VAE decode loop' },
    ],
    stack: 'PyTorch, SDXL Lightning, Diffusers, custom moment-preserving SLERP',
    links: { github: 'https://github.com/mitanshu-2004/Darwin-Studio' },
  },
  {
    id: 'memory-ai',
    domain: 'ai',
    tag: 'AI',
    title: 'Memory Assistant',
    featured: true,
    problem:
      'Offline memory store with hybrid dense and keyword retrieval. Phi-3 (4-bit GGUF) runs at ingest time for metadata. /api/v1/ask is the real RAG path. Retrieve, format cited context, generate via llama.cpp, return a source-grounded answer with citations.',
    metrics: [
      { value: '0 deps', label: 'on external APIs' },
      { value: '/api/v1/ask', label: 'real RAG endpoint with local Phi-3' },
    ],
    stack: 'FastAPI, ChromaDB, Sentence-Transformers, Phi-3 GGUF, llama.cpp, SQLAlchemy',
    links: { github: 'https://github.com/mitanshu-2004/memory-assistant' },
  },
  {
    id: 'retainiq',
    domain: 'ds',
    tag: 'Data',
    title: 'RetainIQ Churn Survival Model',
    featured: true,
    problem:
      'Cox proportional hazards model with six LLM-extracted risk signals (frustration_level, engagement_dropped, etc.) from Steam review text. Explicit removal of log_duration and playtime_2wk_ratio as covariates because they leak the survival time.',
    metrics: [
      { value: '0.874', label: 'hold-out C-index (LLM + behavioural)' },
      { value: '+0.14', label: 'defensible lift after leakage audit' },
    ],
    stack: 'Cox PH (lifelines), Groq Llama 4 Scout, scikit-learn, held-out eval',
    links: { github: 'https://github.com/mitanshu-2004/llm-survival-churn' },
  },
  {
    id: 'arm',
    domain: 'robotics',
    tag: 'Robotics',
    title: '6-DOF Robotic Arm',
    problem:
      'Full motion-planning pipeline with inverse kinematics, collision-aware trajectory planning, and sim-to-real validation. Resolved URDF kinematic mismatches blocking stable trajectory execution.',
    metrics: [
      { value: '~50%', label: 'execution time cut by planner selection and tuning' },
      { value: 'C++', label: 'collision-free trajectory via MoveIt' },
    ],
    stack: 'ROS, MoveIt, Gazebo, Python, C++',
    links: { github: 'https://github.com/mitanshu-2004/6dof-arm' },
  },
  {
    id: 'sentinel',
    domain: 'robotics',
    tag: 'Robotics',
    title: 'Sentinel',
    problem:
      'Offline mesh emergency communication using ESP-NOW. No Wi-Fi or cellular infrastructure required. Fall detection via MPU6050 and dual-axis threshold analysis, with mesh-propagated alerts. Gas hazard sensing in the same firmware layer.',
    metrics: [
      { value: 'ESP-NOW', label: 'zero-infrastructure peer-to-peer mesh' },
      { value: 'IMU + gas', label: 'dual-sensor fall and hazard detection' },
    ],
    stack: 'ESP32, ESP-NOW, C++, MPU6050, Arduino IDE',
    links: { github: 'https://github.com/mitanshu-2004/sentinel' },
  },
  {
    id: 'rag-assistant',
    domain: 'ai',
    tag: 'AI',
    title: 'RAG Assistant',
    problem:
      'Pydantic cross-field model_validator refuses to parse "Fully Answered" responses when the citations list is empty. A structural anti-hallucination guard, enforced at parse time. V3 prompt does explicit constraint extraction, an exception hierarchy, and a retry-with-error-feedback loop.',
    metrics: [
      { value: '6/9 pass', label: '9-question eval, 0 hallucinations' },
      { value: 'Pydantic', label: 'structural anti-hallucination at parse time' },
    ],
    stack: 'Llama 3.3 70B, Groq, ChromaDB, Pydantic structured output, hybrid retrieval',
    links: { github: 'https://github.com/mitanshu-2004/RAG-assistant' },
  },
  {
    id: 'stockmetrics',
    domain: 'ds',
    tag: 'Data',
    title: 'StockMetrics Pipeline',
    problem:
      'Tested 25 company-variable pairs (5 fundamentals × 5 Indian IT firms, 2005 to 2025) for predictive power on annual stock returns. One pair reached significance. Wipro EBITDA margin change (p=0.029). 24 others non-significant, framed as power-limited rather than failure.',
    metrics: [
      { value: 'p=0.029', label: 'Wipro EBITDA margin change, sole sig. pair' },
      { value: '25 pairs', label: 'tested, 20 years × Big 5 IT firms' },
    ],
    stack: 'pandas, scikit-learn, F-test, statsmodels',
    links: { github: 'https://github.com/mitanshu-2004/StockMetrics' },
  },
  {
    id: 'stockcorr',
    domain: 'ds',
    tag: 'Data',
    title: 'Stock-Influence Platform',
    problem:
      'Full-stack app correlating user-uploaded time-series against Yahoo Finance stock history. Three correlation methods (Pearson, Spearman, Kendall), each returned with 95% Fisher z-transform confidence intervals. The math is implemented in code and verifiable.',
    metrics: [
      { value: '3 methods', label: 'with proper Fisher z CIs' },
      { value: 'Chart.js', label: 'heatmaps and synchronised time-series overlay' },
    ],
    stack: 'FastAPI, React, pandas, SciPy, yfinance, Chart.js',
    links: { github: 'https://github.com/mitanshu-2004/Stock-Influence', demo: 'https://stock-influence.vercel.app' },
  },
  {
    id: 'chess',
    domain: 'web',
    tag: 'Web',
    title: 'Chesstra',
    problem:
      'Real-time multiplayer chess with Firestore onSnapshot and a monotonic version counter for idempotent dedup. Server-authoritative game-over with client fallback. Presence heartbeats (5 s write, 15 s liveness window). Separate Stockfish FastAPI engine with cold-start health ping.',
    metrics: [
      { value: 'version', label: 'counter dedup eliminates duplicate moves' },
      { value: '5 s', label: 'heartbeat presence with 15 s liveness window' },
    ],
    stack: 'React 19, Firebase Firestore, FastAPI, Stockfish, Vite',
    links: { github: 'https://github.com/mitanshu-2004/chess', demo: 'https://chesstra.vercel.app' },
  },
]

function ProjectRow({ p }: { p: Project }) {
  return (
    <article className="proj-entry" aria-label={p.title}>
      <div className="proj-header">
        <span className="proj-title">{p.title}</span>
        <span className="proj-tag">{p.tag}</span>
      </div>
      <p className="proj-problem">{p.problem}</p>
      <div className="proj-metrics">
        {p.metrics.map((m) => (
          <span key={m.label} className="proj-metric">
            <strong>{m.value}</strong>
            {' · '}
            {m.label}
          </span>
        ))}
      </div>
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

function ProjectCompact({ p }: { p: Project }) {
  return (
    <article className="proj-entry proj-compact" aria-label={p.title}>
      <div className="proj-header">
        <span className="proj-title">{p.title}</span>
        <span className="proj-tag">{p.tag}</span>
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
  const featured = PROJECTS.filter((p) => p.featured)
  const archive = PROJECTS.filter((p) => !p.featured)

  return (
    <section id="projects" aria-label="Selected projects">
      <div className="container">
        <ScrollFade>
          <span className="section-label">Projects</span>
        </ScrollFade>

        <ScrollFade>
          <div className="proj-list">
            {featured.map((p) => (
              <ProjectRow key={p.id} p={p} />
            ))}
          </div>
        </ScrollFade>

        {archive.length > 0 && (
          <ScrollFade>
            <div className="proj-archive">
              <h3 className="proj-group-label">More work</h3>
              <div className="proj-archive-grid">
                {archive.map((p) => (
                  <ProjectCompact key={p.id} p={p} />
                ))}
              </div>
            </div>
          </ScrollFade>
        )}

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
