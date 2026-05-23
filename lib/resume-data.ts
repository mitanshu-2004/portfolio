// lib/resume-data.ts
// Single source of truth for all resume content.
// The on-page renderer and print-to-PDF both use this data.
// Update here → both automatically update.

export type ResumeDomain = 'ai' | 'robotics' | 'ds' | 'web'

export interface ResumeSkillGroup {
    label: string
    items: string[]
}

export interface ResumeExperience {
    role: string
    org: string
    location: string
    period: string
    bullets: string[]
}

export interface ResumeProject {
    name: string
    stack: string
    bullets: string[]
}

export interface ResumeData {
    domain: ResumeDomain
    title: string
    summary: string
    skills: ResumeSkillGroup[]
    experience: ResumeExperience[]
    projects: ResumeProject[]
}

// ── Shared personal info ──────────────────────────────────────────────────
export const RESUME_PERSONAL = {
    name: 'Mitanshu Goel',
    email: 'mitanshug2004@gmail.com',
    github: 'github.com/mitanshu-2004',
    linkedin: 'linkedin.com/in/mitanshugoel',
    location: 'Delhi, India',
} as const

// ── Shared education ──────────────────────────────────────────────────────
export const RESUME_EDUCATION = {
    degree: 'B.Tech — Electronics & Communication Engineering',
    minor: 'Minor: Artificial Intelligence & Machine Learning',
    institution: 'Maharaja Agrasen Institute of Technology (MAIT)',
    location: 'Delhi',
    period: '2022 – 2026 (Expected)',
} as const

// ── Shared experience entries (bullets vary per domain) ───────────────────
const EXP_VARIETY_ROBOTICS: ResumeExperience = {
    role: 'Robotics Software Engineer Intern',
    org: 'Variety Innovation / Enferent.ai',
    location: 'Remote · India',
    period: 'Current',
    bullets: [
        'Building a bimanual VR teleoperation rig: Meta Quest 3 driving Elite Robots CS66 industrial arms over a custom C++17 control loop with real-time Linux scheduling (SCHED_FIFO + CPU pinning + mlockall).',
        'Implemented damped-Jacobian inverse kinematics via Pinocchio with manipulability-adaptive damping and null-space regularisation; ships with three named singularity guards on joint and TCP rotation axes.',
        'Wrote the imitation-learning dataset recorder that captures synchronised left+right arm states, VR headset pose, and TCP poses to disk in a §3.2-style schema for downstream policy training.',
    ],
}

const EXP_VARIETY_AI: ResumeExperience = {
    ...EXP_VARIETY_ROBOTICS,
    bullets: [
        'Built the imitation-learning dataset infrastructure for a bimanual VR teleoperation rig — synchronised state capture (left+right arms, headset, TCP poses), §3.2-compatible recorder, and an at-rest data pipeline for downstream policy training.',
        'Designed the real-time control loop in C++17 with strict scheduling (SCHED_FIFO, mlockall, CPU pinning) so end-to-end VR-to-arm latency stays bounded under load.',
        'Co-developed the perception-side preprocessing for the recorded trajectories: timestamp alignment, sensor-dropout handling, and lossy/lossless mode selection.',
    ],
}

const EXP_SARTHAK_AI: ResumeExperience = {
    role: 'AI & Robotics Intern',
    org: 'SarthakAI',
    location: 'Delhi',
    period: 'Jun – Aug 2025',
    bullets: [
        'Engineered a real-time voice pipeline using NVIDIA NeMo (FastConformer-Transducer) with custom wake-word detection, integrated into a UBTech Yanshee humanoid platform.',
        'Trained and deployed custom YOLOv8 models for three production tasks: human tracking, package classification, and gesture-based robot control.',
        'Designed a polling-based fault-tolerant interface between robot hardware and an AI inference agent to sustain operation under intermittent hardware response.',
        'Built an ESP32 / Raspberry Pi telemetry workstation bridging embedded firmware with Python analytics layers.',
    ],
}

const EXP_SARTHAK_ROBOTICS: ResumeExperience = {
    ...EXP_SARTHAK_AI,
    bullets: [
        'Built a fault-tolerant robot-AI interface using a polling architecture sized to survive intermittent embedded hardware responses.',
        'Deployed YOLOv8 on a UBTech Yanshee humanoid for real-time human tracking and gesture-based control — inference pipeline tuned for latency under embedded constraints.',
        'Developed a hardware telemetry workstation on ESP32 / Raspberry Pi capturing IMU + environmental sensor data for predictive maintenance.',
        'Integrated a real-time STT pipeline (NVIDIA NeMo FastConformer-Transducer) with wake-word detection into the robot communication stack.',
    ],
}

const EXP_SARTHAK_DS: ResumeExperience = {
    ...EXP_SARTHAK_AI,
    bullets: [
        'Developed a hardware telemetry workstation on ESP32 / Raspberry Pi; sensor data fed into a Python predictive-analytics pipeline.',
        'Built YOLOv8 computer-vision pipelines for package classification — framed as an applied ML problem with custom training regime, augmentation strategy, and evaluation metrics.',
        'Designed a fault-tolerant robot-AI interface; the system produced structured event logs used for operational pattern analysis.',
    ],
}

const EXP_NEXTUP: ResumeExperience = {
    role: 'Robotics Intern',
    org: 'Nextup Robotics',
    location: 'Delhi',
    period: 'Jul – Sep 2024',
    bullets: [
        'Configured a 6-DOF robotic arm in ROS/Gazebo; debugged URDF kinematic configurations and resolved sim-to-real discrepancies that were blocking stable trajectory execution.',
        'Integrated MoveIt for inverse kinematics and collision-aware trajectory planning in C++; achieved ~50% reduction in execution time by selecting a more appropriate planner and tuning its parameters.',
    ],
}

// ── Four domain resumes ───────────────────────────────────────────────────

export const RESUMES: Record<ResumeDomain, ResumeData> = {
    ai: {
        domain: 'ai',
        title: 'AI / ML Engineering',
        summary:
            'AI / ML engineer focused on foundation-model adaptation, retrieval systems, and deployable inference under hardware constraints. Built continued-pretraining runs across Mistral, Qwen, and nanoGPT tracks; implemented rigorous RAG evaluation and validation loops; and shipped perception + voice pipelines on physical robots. Bias toward code-verifiable claims, checkpoint survivability, and honest failure analysis.',
        skills: [
            { label: 'AI / ML', items: ['PyTorch', 'Unsloth', 'TRL', 'PEFT / LoRA', 'rsLoRA', 'SDXL Lightning', 'Diffusers', 'NVIDIA NeMo', 'YOLOv8', 'llama.cpp (Phi-3)', 'Sentence-Transformers', 'ChromaDB', 'scikit-learn', 'XGBoost'] },
            { label: 'Inference & Deployment', items: ['4-bit quantisation', 'LoRA adapters', 'Edge inference', 'FastAPI', 'Docker', 'Content-hash dedup', 'RAG pipelines', 'Pydantic structured output'] },
            { label: 'Languages', items: ['Python', 'TypeScript', 'C++', 'SQL'] },
            { label: 'Systems', items: ['Linux', 'Git', 'Raspberry Pi', 'ESP32', 'Hugging Face Hub'] },
        ],
        experience: [EXP_VARIETY_AI, EXP_SARTHAK_AI, EXP_NEXTUP],
        projects: [
            {
                name: 'LLM Continued-Pretraining on Reddit (5 model-training tracks)',
                stack: 'Unsloth · TRL · PEFT · LoRA / rsLoRA · Mistral 7B · Qwen 2.5 3B/7B · nanoGPT · self-collected Reddit corpus',
                bullets: [
                    'Ran CPT/adaptation work across five recovered model tracks: Mistral 7B v0.3 (r=128), Mistral 7B (r=256 on Lightning L4), Qwen 2.5 3B (r=16), Qwen 2.5 7B (r=128 on A100), and a Karpathy-style nanoGPT trained from scratch on the same corpus.',
                    'Strongest run: Mistral 7B v0.3 via Unsloth 4-bit + TRL + LoRA r=128 + rsLoRA, training attention + MLP + lm_head + embed_tokens with FlashAttention 2; 2,200 steps logged with per-100-step Hub checkpoints. Public at huggingface.co/mitanshugoel/mistral-7b-reddit-cpt.',
                    'Built supporting datasets: a raw-text Reddit corpus and a pre-tokenized + packed variant. Recurring CPT-specific choices: embedding LR 5–10× smaller than main LR, lm_head + embed_tokens in target_modules, adamw_8bit, Hugging Face hub_strategy="checkpoint" + a custom HFCheckpointCallback for session-interruption survivability.',
                    'Kept incomplete runs visible: the Mistral r=256 Lightning L4 run failed after an empty dataset snapshot — framed as recovered experiment infrastructure, not a completed model claim.',
                ],
            },
            {
                name: 'RAG Assistant — Grounded QA with strict validation',
                stack: 'Llama 3.3 70B · Groq · ChromaDB · Pydantic structured output · Hybrid retrieval',
                bullets: [
                    'Built a retrieval-grounded QA assistant whose Pydantic cross-field validators refuse to parse "Fully Answered" responses when the citations list is empty — a structural anti-hallucination guard enforced at parse time, not as a soft check.',
                    'V3 prompt performs explicit constraint extraction and exception-hierarchy handling ("defective overrides discount", "state overrides time"); a retry-with-error-feedback loop pushes Pydantic validation failures back into the model rather than silently accepting malformed JSON.',
                    'Audited eval on 9 questions: 6 PASS, 1 PARTIAL, 2 FAIL; 8/9 answerability correct; 0 hallucinated answers across the run.',
                ],
            },
            {
                name: 'MiniRag-Reranker — Retrieval evaluation, repaired',
                stack: 'Sentence-Transformers (MiniLM) · BM25 · 6-feature LR reranker · cross-encoder baseline · NDCG / MRR / Recall@k',
                bullets: [
                    'Built hybrid dense + BM25 retrieval over 20 industrial-safety PDFs with a 6-feature logistic-regression reranker.',
                    'Identified and documented the original evaluation flaw: the same 8 questions were used for training labels and reporting, so the 0.41 → 0.69 number was the LR\'s self-confidence on its training data, not retrieval quality.',
                    'Re-engineered evaluation around a 10-question held-out set, a cross-encoder baseline (ms-marco-MiniLM-L-6-v2), and proper Recall@k / MRR / NDCG@k metrics — committed as eval/heldout_questions.py + eval/metrics.py + eval/run_evals.py.',
                ],
            },
            {
                name: 'Memory Assistant — Hybrid retrieval + local RAG ask endpoint',
                stack: 'FastAPI · ChromaDB · Sentence-Transformers · Phi-3 (4-bit GGUF) · llama.cpp · SQLAlchemy · React',
                bullets: [
                    'Offline memory store with hybrid retrieval (dense ChromaDB + SQLite keyword scan). The main query path uses retrieval only — no LLM at query time.',
                    'Phi-3 runs at ingest time to generate title / tags / category / summary metadata that feeds the search ranking; not RAG in the strict sense at the search endpoint.',
                    'Added /api/v1/ask as the real RAG path: retrieve memories → format cited context with explicit source delimiters → generate with local Phi-3 via llama.cpp → return source-grounded answer with citations.',
                    'Added a `_sanitize` guard that strips Phi-3 chat-control tokens (`<|user|>`, `<|end|>`) and length-caps untrusted memory bodies before they enter the prompt template, reducing prompt-injection risk from retrieved content.',
                ],
            },
            {
                name: 'Darwin Studio — SDXL latent-tensor laboratory',
                stack: 'PyTorch · SDXL Lightning · Diffusers · custom moment-preserving SLERP',
                bullets: [
                    'Experimental latent-tensor lab that treats SDXL latents as DNA — mutation and crossover applied across generations of (1, 4, 128, 128) tensors for evolutionary image synthesis.',
                    'Implemented custom moment-preserving SLERP: spherical interpolation followed by z-score normalisation and restoration of weighted target mean and std — keeps the child latent on the unit-norm noise manifold without the variance collapse that plain LERP produces.',
                    'Removed unsupported "23% LERP improvement" claim until GPU-backed benchmarks rerun; benchmark_slerp.py is staged for reproducible LERP-vs-SLERP comparison via CLIP-similarity and variance-ratio metrics.',
                ],
            },
        ],
    },

    robotics: {
        domain: 'robotics',
        title: 'Robotics Engineering',
        summary:
            'Robotics software engineer specialising in ROS 2 systems, real-time control on industrial arms, and embedded firmware. Built bimanual VR teleoperation with strict RT scheduling on Elite CS66 arms, sole-authored the ROS 2 / Ignition Fortress simulation infrastructure for an 18-DoF hexapod, and shipped YOLOv8 perception on physical humanoid hardware. Work starts from hardware constraints.',
        skills: [
            { label: 'Robotics', items: ['ROS 2 Humble', 'ROS', 'MoveIt', 'Pinocchio', 'Ignition Gazebo Fortress', 'RViz', 'ros2_control', 'URDF', 'Inverse Kinematics', 'Trajectory Planning', 'Elite Robots CS SDK (RTSI / EliteDriver)'] },
            { label: 'Embedded + Hardware', items: ['ESP32 (Arduino + ESP-IDF)', 'Raspberry Pi', 'ESP-NOW', 'MPU6050 IMU', 'C++17 firmware', 'Sensor Fusion', 'Meta Quest 3 + ALVR + OpenVR'] },
            { label: 'Real-time + Systems', items: ['SCHED_FIFO', 'mlockall', 'CPU pinning', 'Docker (NVIDIA runtime, CycloneDDS)', 'Linux RT'] },
            { label: 'AI on Hardware', items: ['YOLOv8', 'NVIDIA NeMo', 'Edge Inference', 'Docker on ARM'] },
            { label: 'Languages', items: ['C++17', 'Python', 'URScript', 'Bash'] },
        ],
        experience: [EXP_VARIETY_ROBOTICS, EXP_SARTHAK_ROBOTICS, EXP_NEXTUP],
        projects: [
            {
                name: 'Hexapod (atom-robotics-lab)',
                stack: 'ROS 2 Humble · Ignition Fortress · ros2_control · Docker (NVIDIA + CycloneDDS)',
                bullets: [
                    'Built the ROS 2 simulation/control stack for an 18-DoF hexapod: sole author of the URDF xacro (533/569 lines), the complete ros2_control hardware interface (305 lines), the Dockerised runtime, and the Gazebo Classic → Ignition Fortress migration.',
                    'Designed for deterministic execution: 1000 Hz Ignition physics under a 5 Hz JointTrajectory publisher, with asymmetric coxa joint limits encoded in the URDF.',
                    'Analytic IK and tripod gait were written by collaborator AkshatSharma05; Mitanshu owned the description, hardware-interface, infrastructure, and platform-migration layers.',
                ],
            },
            {
                name: 'SENTINEL — offline mesh emergency network',
                stack: 'ESP32 · ESP-NOW · C++ · MPU6050 · Arduino IDE',
                bullets: [
                    'Peer-to-peer emergency mesh using ESP-NOW across ESP32 nodes — no Wi-Fi or cellular infrastructure required at any layer.',
                    'Embedded fall detection via MPU6050 IMU + dual-axis threshold analysis with mesh-propagated alerts.',
                    'Gas-hazard sensing integrated into the same firmware layer; alert propagation tested across multi-hop mesh topologies.',
                ],
            },
            {
                name: '6-DOF Robotic Arm (Nextup)',
                stack: 'ROS · MoveIt · Gazebo · C++ · Python',
                bullets: [
                    'Full motion-planning pipeline: URDF configuration, MoveIt inverse kinematics, collision-aware trajectory planning, and hardware execution.',
                    '~50% reduction in trajectory execution time achieved by selecting a more appropriate planner and tuning its parameters in C++.',
                ],
            },
        ],
    },

    ds: {
        domain: 'ds',
        title: 'Data Science / Analytics',
        summary:
            'Data science / ML engineer focused on statistically honest modelling, leakage checks, and postmortem-driven analysis. Built Cox proportional-hazards survival modelling with LLM-extracted churn signals, published the failed-prediction postmortem on a trading model instead of hiding it, and validated financial correlations with proper confidence intervals. Strongest signal is disciplined evaluation rather than inflated metrics.',
        skills: [
            { label: 'ML / Modelling', items: ['XGBoost', 'scikit-learn', 'Cox Proportional Hazards (lifelines)', 'Regression', 'K-Means', 'Time-Series Forecasting', 'Feature Engineering', 'Lag Features'] },
            { label: 'Statistics', items: ['SciPy', 'statsmodels', 'Fisher z-transform', 'F-test', 'Likelihood-Ratio test', 'Pearson / Spearman / Kendall', 'Hypothesis Testing'] },
            { label: 'Data Engineering', items: ['pandas', 'ETL Pipelines', 'Timezone Normalisation', 'Market Calendar Sync', 'SQLAlchemy', 'SQL'] },
            { label: 'LLM-as-feature', items: ['Groq Llama 4 Scout / 3.3 70B', 'Structured-JSON extraction', 'Instructor', 'Pydantic'] },
            { label: 'Visualisation', items: ['Chart.js', 'Matplotlib', 'Seaborn', 'Streamlit'] },
            { label: 'Languages', items: ['Python', 'SQL', 'TypeScript'] },
        ],
        experience: [EXP_SARTHAK_DS, EXP_NEXTUP],
        projects: [
            {
                name: 'RetainIQ — LLM-augmented churn survival model',
                stack: 'Cox Proportional Hazards (lifelines) · Groq Llama 4 Scout · scikit-learn · Streamlit',
                bullets: [
                    'Combined Cox PH survival modelling with LLM-extracted risk signals from free-text Steam review bodies (frustration_level, technical_issue, engagement_dropped, positive_signal, …).',
                    '5-fold CV C-index improved from 0.60 (behavioural features only) to 0.87 with LLM features added; Δ = +0.26. Likelihood-ratio χ² = 1553 (df = 6, p ≈ 0).',
                    'Explicitly removed `log_duration` and `playtime_2wk_ratio` as covariates because they leak the survival time; the README acknowledges the remaining LLM-may-be-reading-the-label residual risk and that no held-out test set exists yet.',
                ],
            },
            {
                name: 'Primetrade Analysis — failed-prediction postmortem',
                stack: 'KMeans · pandas · scikit-learn · Fear & Greed Index · regression diagnostics',
                bullets: [
                    'Analysed trader behaviour and market sentiment using KMeans segmentation (High Roller / Skilled Contrarian / Typical Trader) plus a Fear & Greed correlation overlay.',
                    'Rejected the original 63% accuracy framing after auditing loss-day capture: the model caught only 2 of 44 actual loss days — a 95% miss rate on the signal that actually matters.',
                    'Volatility regressor returned R² = -0.385 (worse than predicting the mean) with MAE $7,838; the project\'s value is the postmortem discipline, not a predictive trading claim.',
                ],
            },
            {
                name: 'Retail Performance Engine (Store-Performance-Dashboard)',
                stack: 'XGBoost · K-Means · pandas · scikit-learn · Feature Engineering',
                bullets: [
                    'XGBoost regressor with two-month lag features + one-hot Store + Branch for one-month-ahead Attach-Percentage forecasting across 163 retail stores.',
                    'K-Means segmentation (k = 4) on `(mean_attach_pct, std_attach_pct)` for a performance × stability tag per store.',
                    'README reports the runtime RMSE from the actual run rather than a stale headline number; flags the five-months-per-store data thinness as the binding limitation.',
                ],
            },
            {
                name: 'Stock-Influence Platform',
                stack: 'FastAPI · React · pandas · SciPy · yfinance',
                bullets: [
                    'Deployed full-stack app at stock-influence.vercel.app that correlates user-uploaded time-series data against Yahoo Finance stock history.',
                    'Three correlation methods (Pearson, Spearman, Kendall) — each returned with proper 95% Fisher z-transform confidence intervals computed via SciPy.',
                ],
            },
            {
                name: 'StockMetrics Pipeline',
                stack: 'pandas · scikit-learn · F-test · 20 years × Big 5 IT firms',
                bullets: [
                    'Tested 25 company-variable pairs (5 fundamentals × 5 Indian IT firms 2005–2025) for predictive power on annual stock returns via linear regression.',
                    'Only one pair reached statistical significance: Wipro EBITDA margin change (p = 0.029); framed as power-limited (17 obs per firm), not broadly predictive.',
                ],
            },
        ],
    },

    web: {
        domain: 'web',
        title: 'Full-Stack / Web Systems',
        summary:
            'Full-stack engineer building real-time web applications with React, Next.js, FastAPI, and Firebase. Shipped a multi-key Groq circuit-breaker with round-robin failover for the production portfolio, idempotent version-counter Firestore sync for a multiplayer chess app, and a Fisher-z statistics REST API. Comfortable across the full stack from React state management to FastAPI backend design — focused on resilience and edge-runtime efficiency.',
        skills: [
            { label: 'Frontend', items: ['React 19', 'Next.js 15', 'TypeScript strict', 'Zustand', 'Chart.js', 'Tailwind CSS'] },
            { label: 'Backend', items: ['FastAPI', 'Firebase Firestore', 'REST API design', 'SQLAlchemy', 'Node.js'] },
            { label: 'Edge & Resilience', items: ['Vercel Edge Runtime', 'Circuit-breaker patterns', 'AbortController', 'CSP + HSTS preload', 'Versioned state sync', 'Heartbeat presence'] },
            { label: 'Systems', items: ['Docker', 'Linux', 'Git', 'WebSockets'] },
            { label: 'Languages', items: ['TypeScript', 'Python', 'SQL'] },
        ],
        experience: [
            {
                role: 'AI & Robotics Intern',
                org: 'SarthakAI',
                location: 'Delhi',
                period: 'Jun – Aug 2025',
                bullets: [
                    'Designed a polling-based robot-AI interface architecture for low-latency command / response cycles; built for fault tolerance under intermittent hardware.',
                    'Built a YOLOv8 inference pipeline with a FastAPI serving layer for real-time video stream processing; integrated with a web-based operator dashboard.',
                    'Developed an ESP32 / Raspberry Pi telemetry workstation; sensor data streamed to a Python backend for a real-time monitoring interface.',
                ],
            },
            EXP_NEXTUP,
        ],
        projects: [
            {
                name: 'mitanshu.me — production portfolio + RAG chatbot',
                stack: 'Next.js 15 · Edge Runtime · Groq · TypeScript strict · CSP + HSTS preload',
                bullets: [
                    'Multi-key Groq failover with a 3-strike circuit-breaker + round-robin selection + 8 s `AbortController` per request + graceful degradation when all keys are tripped.',
                    'RAG-grounded `/api/chat` Edge endpoint with content-hashed cache, CSP + HSTS preload, 48 ARIA attributes, and 4 JSON-LD schemas for SEO.',
                    'Single source of truth (`resume-data.ts` + `knowledge.ts`) drives both the on-page renderer and the chatbot knowledge base — fixing one place fixes both.',
                ],
            },
            {
                name: 'Chesstra — multiplayer chess on Firestore',
                stack: 'React 19 · Firebase Firestore · FastAPI · Stockfish · Vite',
                bullets: [
                    'Real-time multiplayer chess with Firestore `onSnapshot` listeners + a monotonic `version` counter for idempotent dedup — each client tracks the last-seen version and skips re-processing matching snapshots, eliminating duplicate move-handling during rapid bursts.',
                    'Server-authoritative game-over with client fallback: if the moving player crashes before writing the end-state, the opponent\'s client detects it locally via chess.js and writes the resolution back.',
                    'Presence heartbeats (5 s write / 15 s liveness window), throttled timer writes (every 3 s), optimistic UI rollback on Firestore failure, and a separate Stockfish FastAPI engine with a cold-start health ping.',
                ],
            },
            {
                name: 'Stock-Influence Platform',
                stack: 'React · FastAPI · pandas · SciPy · Chart.js',
                bullets: [
                    'Time-series alignment system handling timezone normalisation and market-calendar synchronisation across international exchanges.',
                    'Three correlation methods (Pearson, Spearman, Kendall) returned with 95% Fisher z-transform confidence intervals computed via SciPy — math-correct, code-verifiable.',
                    'Synchronised Chart.js heatmap + time-series overlay with shared time-axis scrubbing across correlation views.',
                ],
            },
        ],
    },
}
