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
        id: 'teleop-elite',
        domain: 'robotics',
        title: 'Dual-Arm VR Teleoperation',
        problem:
          'A Meta Quest 3 drives two Elite Robots CS66 arms in real time. Controller pose streams over UDP to a per-arm C++ control loop that maps each hand to its arm by Cartesian servoing, with One-Euro filtering, SE(3) smoothing, and singularity and step-cap guards. An anchor-and-clutch model lets the operator release and re-grip without the arm jumping. Built at nFerent.ai.',
        stack: 'C++, Meta Quest 3, OpenVR, Elite CS SDK, real-time Linux, UDP',
        links: {},
      },
      {
        id: 'teleop-franka',
        domain: 'robotics',
        title: 'Franka Teleop + Imitation Dataset',
        problem:
          'The same teleoperation extended to a Franka Research 3 with DROID-style anchor-and-delta control and a layered safety stack: frame-jump rejection, a position and orientation leash, and slew-rate limiting. Every session records dual RGB-D video and full robot state as an imitation-learning dataset. Built at nFerent.ai.',
        stack: 'C++, Franka libfranka, RealSense RGB-D, DROID-style control, HDF5',
        links: {},
      },
      {
        id: 'manus-capture',
        domain: 'robotics',
        title: 'MANUS Multi-Sensor Capture',
        problem:
          'A capture tool that records two MANUS gloves and three RealSense cameras onto one hardware clock for robot-learning data. A frame-uniqueness watchdog catches a nasty failure mode where a camera silently repeats a stale frame under USB load, which passes naive frame-count checks but quietly corrupts the dataset. Built at nFerent.ai.',
        stack: 'Python, C++, MANUS SDK, RealSense, multi-stream sync',
        links: {},
      },
      {
        id: 'hexapod',
        domain: 'robotics',
        title: 'Hexapod',
        problem:
          '18-DoF hexapod simulated in ROS 2 and Gazebo. I wrote the URDF xacro model and the full ros2_control hardware interface, and Dockerised the runtime with NVIDIA GPU support. A /cmd_vel teleop maps into a tripod gait and per-leg analytic inverse kinematics. Team project with A.T.O.M. Robotics; the gait and IK math were a collaborator\'s.',
        stack: 'ROS 2 Humble, ros2_control, Gazebo, Docker, Python',
        links: { github: 'https://github.com/atom-robotics-lab/Hexapod' },
      },
      {
        id: 'arm-web',
        domain: 'robotics',
        title: 'Robotic-Arm Web Control',
        problem:
          'A browser interface to drive a robotic arm over the web. The page talks to the arm\'s ROS stack through a rosbridge WebSocket and streams the arm\'s live camera feed back into the UI. The web side is deliberately simple. The work is the ROS integration, the remote-control path, and the live feed. Built with A.T.O.M. Robotics.',
        stack: 'ROS, rosbridge, JavaScript, HTML, CSS, WebSocket',
        links: {},
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
          'Six continued-pretraining runs on a Reddit corpus I scraped and processed myself. Mistral 7B at two ranks, Qwen 2.5 at three scales, and a nanoGPT built from scratch to feel training from the ground up. The pipeline runs from raw Pushshift dumps through filtering and Wilson-score ranking to packed tokenisation, with choices that are not tutorial defaults: a smaller embedding learning rate, rsLoRA at high ranks, and hub checkpointing so a dropped cloud session never loses progress.',
        stack: 'Unsloth, TRL, PEFT, LoRA, rsLoRA, Mistral 7B, Qwen 2.5, nanoGPT, A100',
        links: {},
      },
      {
        id: 'minirag',
        domain: 'ai',
        title: 'MiniRag-Reranker',
        problem:
          'Hybrid retrieval over 20 industrial-safety PDFs: dense vectors plus BM25, a learned reranker, and score-gated abstention on FastAPI. The real story is the evaluation. I caught that the original test set reused the training questions, so the headline number was the reranker grading its own homework. I rebuilt it around a disjoint held-out set with NDCG, MRR, and Recall@k, plus a cross-encoder as a reference baseline.',
        stack: 'FastAPI, ChromaDB, BM25, Sentence-Transformers, scikit-learn',
        links: { github: 'https://github.com/mitanshu-2004/MiniRag-Reranker' },
      },
      {
        id: 'rag-assistant',
        domain: 'ai',
        title: 'RAG Assistant',
        problem:
          'A RAG system where hallucinations are structurally hard. If the model claims "Fully Answered" but has no citations to back it up, a Pydantic model-validator rejects the response at parse time, before it reaches the user. A retry loop feeds parse failures back to the model. On a 9-question held-out rubric it returned 0 hallucinations, with 8 of 9 answerability calls correct.',
        stack: 'Llama 3.3 70B, Groq, ChromaDB, Pydantic, FastAPI',
        links: { github: 'https://github.com/mitanshu-2004/RAG-assistant' },
      },
      {
        id: 'memory-ai',
        domain: 'ai',
        title: 'Memory Assistant',
        problem:
          'An offline personal memory store that never leaves the machine. A local Phi-3, run through llama.cpp, tags and summarises each note at ingest, and search is hybrid dense plus keyword retrieval over ChromaDB and SQLite. The point was to see how far a useful knowledge tool gets with no cloud and no API key.',
        stack: 'FastAPI, ChromaDB, Sentence-Transformers, Phi-3 GGUF, llama.cpp',
        links: { github: 'https://github.com/mitanshu-2004/memory-assistant' },
      },
      {
        id: 'darwin',
        domain: 'ai',
        title: 'Darwin Studio',
        problem:
          'Image generation treated like evolution. SDXL latent tensors are the genetic material: mutate them, cross two together, iterate across generations. A custom moment-preserving SLERP does the interpolation and restores the parent mean and variance, so a child latent stays on the noise manifold instead of decoding to grey mush. The diffusion loop is hand-written so bred latents can be fed straight in as initial noise.',
        stack: 'PyTorch, SDXL Lightning, Diffusers, custom SLERP',
        links: { github: 'https://github.com/mitanshu-2004/Darwin-Studio' },
      },
    ],
  },
  {
    domain: 'ds',
    label: 'Data Science',
    projects: [
      {
        id: 'churn',
        domain: 'ds',
        title: 'Churn Survival Model',
        problem:
          'A Cox proportional-hazards model for churn on about 10,000 Steam reviews, with risk signals pulled from the review text by an LLM. The interesting part was not the 0.874 hold-out C-index, it was taking it apart. Most of the lift came from features that re-encode the outcome, so I separated those out and kept the roughly +0.14 that actually looks forward, guarded by a contract test that blocks the leaky features from creeping back in.',
        stack: 'Cox PH (lifelines), Groq Llama 4 Scout, scikit-learn, instructor',
        links: { github: 'https://github.com/mitanshu-2004/llm-survival-churn' },
      },
      {
        id: 'primetrade',
        domain: 'ds',
        title: 'Primetrade Analysis',
        problem:
          'A trader-behaviour study on 211k trades against the Bitcoin Fear and Greed index, with KMeans segmentation into trader archetypes. The honest centre of the repo is the post-mortem. A next-day classifier scored 63% accuracy but caught only 2 of 44 actual loss days, and a follow-on volatility regressor came back worse than predicting the mean. I wrote up why it failed and stopped, instead of tuning a dead signal.',
        stack: 'pandas, scikit-learn, KMeans, XGBoost, matplotlib',
        links: { github: 'https://github.com/mitanshu-2004/Primetrade-Analysis' },
      },
      {
        id: 'stockmetrics',
        domain: 'ds',
        title: 'StockMetrics',
        problem:
          'Tested 25 fundamental-versus-return variable pairs across five Indian IT firms over twenty years, by linear regression with F-tests. Almost nothing came back significant, and with seventeen annual observations per firm the study is power-limited by design. The README leads with the null result, because a clean null is the finding, not something to hide.',
        stack: 'pandas, scikit-learn, F-test, statsmodels',
        links: { github: 'https://github.com/mitanshu-2004/StockMetrics' },
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
          'Real-time multiplayer chess on Firestore. Moves sync through a versioned write protocol so duplicate snapshots never double-apply. Presence runs on heartbeats with a 15-second liveness window. If the moving player crashes mid-move, the opponent\'s client detects the finished position locally and writes the resolution back, so a game never hangs half-done. Stockfish runs as a separate FastAPI service with a cold-start wake-up ping.',
        stack: 'React 19, Firebase Firestore, FastAPI, Stockfish, Vite',
        links: { github: 'https://github.com/mitanshu-2004/chess', demo: 'https://chesstra.vercel.app' },
      },
      {
        id: 'stock-influence',
        domain: 'web',
        title: 'Stock-Influence',
        problem:
          'A deployed full-stack tool for exploring how any uploaded time series tracks a stock price. FastAPI backend, React and Chart.js front end, with Pearson, Spearman, and Kendall correlations and synchronised heatmap and time-series views. The correlation math is all in the code and checkable.',
        stack: 'FastAPI, React, pandas, SciPy, yfinance, Chart.js',
        links: { github: 'https://github.com/mitanshu-2004/Stock-Influence', demo: 'https://stock-influence.vercel.app' },
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
