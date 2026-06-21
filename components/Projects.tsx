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
          'A Meta Quest 3 drives two Elite Robots CS66 arms in real time. Controller pose streams over UDP to a per-arm C++ control loop that maps each hand to its arm by Cartesian servoing, with One-Euro filtering, SE(3) smoothing, and singularity and step-cap guards. The loop runs at real-time priority, with memory locked and the thread pinned to its own core. An anchor-and-clutch model lets the operator release and re-grip without the arm jumping. Built at nFerent.ai.',
        stack: 'C++, real-time Linux, Elite CS SDK, Meta Quest 3, OpenVR, UDP',
        links: {},
      },
      {
        id: 'teleop-franka',
        domain: 'robotics',
        title: 'Franka Teleop + Robot-Learning Data',
        problem:
          'The same teleoperation extended to a Franka Research 3, with a recording pipeline built around it. DROID-style anchor-and-delta control runs behind a layered safety stack of frame-jump rejection, a position and orientation leash, and slew-rate limiting. Every session writes dual RGB-D video and full robot state as episodes for imitation learning. The recorder sits on a CPU-pinned writer thread that drops a whole tick rather than let the queue back up and desync the data. Built at nFerent.ai.',
        stack: 'C++, Python, Franka libfranka, RealSense RGB-D, LeRobot, HDF5',
        links: {},
      },
      {
        id: 'manus-capture',
        domain: 'robotics',
        title: 'MANUS Multi-Sensor Capture',
        problem:
          'A capture tool that records two MANUS gloves and three RealSense cameras onto one hardware clock for robot-learning data. A frame-uniqueness watchdog catches a nasty failure mode where a camera silently repeats a stale frame under USB load, which passes naive frame-count checks but quietly corrupts the dataset. Built at nFerent.ai.',
        stack: 'Python, MANUS SDK, RealSense, multi-stream sync',
        links: {},
      },
      {
        id: 'hexapod',
        domain: 'robotics',
        title: 'Hexapod',
        problem:
          'An 18-DoF hexapod simulated in ROS 2 and Gazebo, built with A.T.O.M. Robotics. A /cmd_vel teleop maps into a tripod gait, and each leg is solved with closed-form analytic inverse kinematics and published through ros2_control. I worked on the control side: the gait and IK node, the ros2_control hardware interface, and the launch wiring. The URDF model is CAD-exported. Team project, simulation only.',
        stack: 'ROS 2 Humble, ros2_control, Gazebo, Python',
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
          'Continued pretraining on a Reddit corpus I scraped and cleaned myself, across three setups: a LoRA adapter on Mistral 7B, a QLoRA adapter on Qwen 2.5, and a small GPT trained from scratch. The Qwen run goes through a distributed training loop I wrote by hand, with token-offset sharding across two GPUs and checkpointing that resumes from the exact token count after a dropped cloud session. These are proof-of-concept runs, stopped early, with no eval yet. The point was the data and training infrastructure, learned from the ground up.',
        stack: 'PyTorch, Unsloth, PEFT, QLoRA, accelerate (DDP), Hugging Face Hub',
        links: {},
      },
      {
        id: 'minirag',
        domain: 'ai',
        title: 'MiniRag-Reranker',
        problem:
          'Hybrid retrieval over 20 industrial-safety PDFs: dense vectors plus BM25, a logistic-regression reranker, and a cross-encoder reference, on FastAPI. The real story is the evaluation. I caught that the original test set reused the training questions, so the headline number was the reranker grading its own homework. I rebuilt the eval around a disjoint held-out set with NDCG, MRR, and Recall@k, and once it was measured honestly the learned reranker did not clearly beat the plain hybrid baseline. The corrected eval is the result, not a leaderboard win.',
        stack: 'FastAPI, ChromaDB, BM25, Sentence-Transformers, scikit-learn',
        links: { github: 'https://github.com/mitanshu-2004/MiniRag-Reranker' },
      },
      {
        id: 'rag-assistant',
        domain: 'ai',
        title: 'RAG Assistant',
        problem:
          'A RAG system where hallucinations are structurally hard. If the model says it fully answered something but cites nothing to back it up, a Pydantic model-validator rejects the response at parse time, before it reaches the user. A retry loop feeds the parse failure back to the model. On a 9-question held-out rubric it returned 0 hallucinations, with 8 of 9 answerability calls correct.',
        stack: 'Llama 3.3 70B, Groq, ChromaDB, Pydantic, FastAPI',
        links: { github: 'https://github.com/mitanshu-2004/RAG-assistant' },
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
          'A Cox proportional-hazards model for churn on about 10,000 Steam reviews, with risk signals pulled from the review text by an LLM. It reached a 0.874 hold-out C-index, but most of that lift came from features that quietly re-encode the outcome. So I decomposed it: separated the leaky polarity features from the forward-looking behaviour, kept the roughly +0.14 that actually predicts ahead of time, and added a contract test to block the leaky features from creeping back in. The smaller honest number is the one I report.',
        stack: 'Cox PH (lifelines), Groq Llama 4 Scout, scikit-learn, instructor',
        links: { github: 'https://github.com/mitanshu-2004/llm-survival-churn' },
      },
      {
        id: 'primetrade',
        domain: 'ds',
        title: 'Primetrade Analysis',
        problem:
          'A trader-behaviour study on 211k trades against the Bitcoin Fear and Greed index, with KMeans segmentation into trader archetypes. The honest centre of the repo is the post-mortem. A next-day classifier landed right at the base rate and caught only 2 of 44 actual loss days, and a follow-on volatility regressor came back worse than predicting the mean. I wrote up why it failed and stopped, instead of tuning a dead signal.',
        stack: 'pandas, scikit-learn, KMeans, XGBoost, matplotlib',
        links: { github: 'https://github.com/mitanshu-2004/Primetrade-Analysis' },
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
          'A deployed full-stack tool for exploring how any uploaded time series tracks a stock price. FastAPI backend, React and Chart.js front end, with Pearson, Spearman, and Kendall correlations and synchronised heatmap and time-series views. The correlation math is all in the code and checkable. It is a correlation explorer, so it reports associations, not proof of cause.',
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
