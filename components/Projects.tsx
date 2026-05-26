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
          'Team-built 18-DoF hexapod ROS 2 stack at atom-robotics-lab. URDF xacro model, ros2_control hardware interface, Dockerised NVIDIA + CycloneDDS runtime, and the Gazebo Classic to Ignition Fortress migration.',
        stack: 'ROS 2 Humble, ros2_control, Pinocchio, Docker',
        links: { github: 'https://github.com/atom-robotics-lab/Hexapod' },
      },
      {
        id: 'arm',
        domain: 'robotics',
        title: '6-DOF Robotic Arm',
        problem:
          'Full motion-planning pipeline with inverse kinematics, collision-aware trajectory planning, and sim-to-real validation. Resolved URDF kinematic mismatches blocking stable trajectory execution.',
        stack: 'ROS, MoveIt, Gazebo, C++, Python',
        links: { github: 'https://github.com/mitanshu-2004/6dof-arm' },
      },
      {
        id: 'sentinel',
        domain: 'robotics',
        title: 'Sentinel',
        problem:
          'Offline mesh emergency communication using ESP-NOW — no infrastructure required. Fall detection via MPU6050 and dual-axis threshold analysis, with mesh-propagated alerts and gas hazard sensing in the same firmware layer.',
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
          'Continued pretraining on a self-scraped Reddit corpus. Mistral 7B (r=128, r=256), Qwen 2.5 (7B, 3B, 1.5B), and a from-scratch nanoGPT. Full data pipeline — libtorrent Pushshift download, zstandard decompression, thread joining, Wilson-score ranking, and tokenisation with packing.',
        stack: 'Unsloth, TRL, PEFT, LoRA, rsLoRA, Mistral 7B, Qwen 2.5, nanoGPT, A100',
        links: {},
      },
      {
        id: 'darwin',
        domain: 'ai',
        title: 'Darwin Studio',
        problem:
          'Treats SDXL latent tensors as genetic material. Mutation and crossover applied between generations. Custom moment-preserving SLERP does spherical interpolation, then restores the weighted target mean and std — keeping child latents on the unit-norm noise manifold.',
        stack: 'PyTorch, SDXL Lightning, Diffusers, custom SLERP',
        links: { github: 'https://github.com/mitanshu-2004/Darwin-Studio' },
      },
      {
        id: 'memory-ai',
        domain: 'ai',
        title: 'Memory Assistant',
        problem:
          'Offline memory store with hybrid dense and keyword retrieval. Phi-3 (4-bit GGUF) runs at ingest time for metadata. /api/v1/ask is the real RAG path — retrieve, format cited context, generate via llama.cpp, return a source-grounded answer with citations.',
        stack: 'FastAPI, ChromaDB, Sentence-Transformers, Phi-3 GGUF, llama.cpp',
        links: { github: 'https://github.com/mitanshu-2004/memory-assistant' },
      },
      {
        id: 'rag-assistant',
        domain: 'ai',
        title: 'RAG Assistant',
        problem:
          'Pydantic cross-field model_validator refuses to parse "Fully Answered" responses when the citations list is empty — a structural anti-hallucination guard enforced at parse time. V3 prompt with explicit constraint extraction, an exception hierarchy, and a retry-with-error-feedback loop. 9-question eval: 6 pass, 0 hallucinations.',
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
          'Cox proportional hazards model with six LLM-extracted risk signals from Steam review text. Explicit removal of covariates that leak the survival time. Hold-out C-index 0.874 vs 0.640 behavioural-only baseline.',
        stack: 'Cox PH (lifelines), Groq Llama 4 Scout, scikit-learn',
        links: { github: 'https://github.com/mitanshu-2004/llm-survival-churn' },
      },
      {
        id: 'stockmetrics',
        domain: 'ds',
        title: 'StockMetrics Pipeline',
        problem:
          'Tested 25 company-variable pairs (5 fundamentals × 5 Indian IT firms, 2005–2025) for predictive power on annual stock returns. One pair reached significance — Wipro EBITDA margin change (p=0.029). 24 others non-significant, framed as power-limited.',
        stack: 'pandas, scikit-learn, F-test, statsmodels',
        links: { github: 'https://github.com/mitanshu-2004/StockMetrics' },
      },
      {
        id: 'stockcorr',
        domain: 'ds',
        title: 'Stock-Influence Platform',
        problem:
          'Full-stack app correlating user-uploaded time-series against Yahoo Finance stock history. Three correlation methods (Pearson, Spearman, Kendall), each returned with 95% Fisher z-transform confidence intervals. The math is implemented in code and verifiable.',
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
          'Real-time multiplayer chess with Firestore onSnapshot and a monotonic version counter for idempotent dedup. Server-authoritative game-over with client fallback. Presence heartbeats with 15 s liveness window. Stockfish engine deployed as a separate FastAPI service with cold-start health ping.',
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
