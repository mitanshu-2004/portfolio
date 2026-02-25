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
const EXP_SARTHAK_AI: ResumeExperience = {
    role: 'AI & Robotics Intern',
    org: 'SarthakAI',
    location: 'Delhi',
    period: 'Jun – Aug 2025',
    bullets: [
        'Engineered a real-time voice pipeline using NVIDIA NeMo STT with custom wake-word detection integrated into a physical robot system.',
        'Trained and deployed custom YOLOv8 models for three production tasks: human tracking, package classification, and gesture-based robot control.',
        'Designed a polling-based fault-tolerant interface layer between robot hardware and an AI inference agent for low-latency query processing.',
        'Built an ESP32/Raspberry Pi hardware telemetry workstation bridging embedded firmware with Python analytics layers.',
    ],
}

const EXP_SARTHAK_ROBOTICS: ResumeExperience = {
    ...EXP_SARTHAK_AI,
    bullets: [
        'Built fault-tolerant robot-AI interface using polling architecture; designed to sustain operation under intermittent hardware responses.',
        'Deployed YOLOv8 on a physical robot for real-time human tracking and gesture-based control — inference pipeline tuned for latency under embedded constraints.',
        'Developed hardware telemetry workstation on ESP32/Raspberry Pi capturing IMU and environmental sensor data for predictive maintenance.',
        'Integrated real-time STT pipeline (NVIDIA NeMo) with wake-word detection into robot communication stack; latency requirements drove all architecture decisions.',
    ],
}

const EXP_SARTHAK_DS: ResumeExperience = {
    ...EXP_SARTHAK_AI,
    bullets: [
        'Developed hardware telemetry workstation on ESP32/Raspberry Pi; environmental sensor data fed into Python predictive analytics pipeline.',
        'Designed YOLOv8-based computer vision pipelines for package classification — treated as an applied ML problem with custom training regime and evaluation metrics.',
        'Built fault-tolerant robot-AI interface; system generated structured event logs used for operational pattern analysis.',
    ],
}

const EXP_NEXTUP: ResumeExperience = {
    role: 'Robotics Intern',
    org: 'Nextup Robotics',
    location: 'Delhi',
    period: 'Jul – Sep 2024',
    bullets: [
        'Configured a 6-DOF robotic arm in ROS/Gazebo; debugged URDF kinematic configurations and resolved simulation-to-real discrepancies blocking stable execution.',
        'Integrated MoveIt for inverse kinematics and collision-aware trajectory planning in C++; achieved 50% reduction in execution time via shortest-path algorithm selection.',
    ],
}

// ── Four domain resumes ───────────────────────────────────────────────────

export const RESUMES: Record<ResumeDomain, ResumeData> = {
    ai: {
        domain: 'ai',
        title: 'AI / ML Research',
        summary:
            'AI systems engineer building inference pipelines and generative models under hardware constraints. Experience deploying quantized LLMs on CPU-only hardware, evolving diffusion model latent spaces, and shipping YOLOv8 perception pipelines on physical robots. Focused on the gap between benchmark performance and production reliability.',
        skills: [
            { label: 'AI / ML', items: ['PyTorch', 'SDXL Lightning', 'Diffusers', 'LoRA', 'llama.cpp', 'ONNX', 'NVIDIA NeMo', 'YOLOv8', 'Sentence-Transformers', 'ChromaDB', 'scikit-learn', 'XGBoost'] },
            { label: 'Inference & Deployment', items: ['4-bit quantization', 'Edge inference', 'FastAPI', 'Docker', 'LRU caching', 'RAG pipelines'] },
            { label: 'Languages', items: ['Python', 'TypeScript', 'C++', 'SQL'] },
            { label: 'Systems', items: ['Linux', 'Git', 'Raspberry Pi', 'ESP32'] },
        ],
        experience: [EXP_SARTHAK_AI, EXP_NEXTUP],
        projects: [
            {
                name: 'Darwin Studio',
                stack: 'PyTorch · SDXL Lightning · Diffusers · LoRA · Custom SLERP',
                bullets: [
                    'Treats SDXL latent tensors as genetic material — mutation and crossover applied across generations for evolutionary image synthesis.',
                    'Implemented custom SLERP for geometrically consistent interpolation in latent space; eliminated ~23% LERP inconsistency at generation boundaries.',
                    'Achieves 1024px generation in under 4 seconds on T4 GPU (16GB VRAM) with SDXL Lightning distillation.',
                ],
            },
            {
                name: 'Memory Assistant — Local RAG Pipeline',
                stack: 'FastAPI · ChromaDB · Sentence-Transformers · Phi-3 · llama.cpp',
                bullets: [
                    'Privacy-first RAG system running entirely offline: Phi-3 (4-bit quantized) via llama.cpp on CPU-only hardware — zero external API dependency.',
                    'Hybrid dense-vector (ChromaDB) + BM25 keyword retrieval with weighted scoring for higher recall than either method alone.',
                    'LRU caching layer reduces repeat-query latency significantly for frequently accessed document segments.',
                ],
            },
        ],
    },

    robotics: {
        domain: 'robotics',
        title: 'Robotics Engineering',
        summary:
            'Robotics software engineer specializing in ROS2 systems, geometric kinematics, and embedded firmware for physical platforms. Built multi-legged locomotion systems with sim-to-real transfer, collision-aware 6-DOF arm motion planning, and offline mesh emergency communication on ESP32. Work starts from hardware constraints.',
        skills: [
            { label: 'Robotics', items: ['ROS2', 'ROS', 'MoveIt', 'Gazebo', 'RViz', 'ROS2 Control', 'URDF', 'Inverse Kinematics', 'Trajectory Planning'] },
            { label: 'Embedded Systems', items: ['ESP32', 'Raspberry Pi', 'Arduino IDE', 'ESP-NOW', 'MPU6050 IMU', 'C++ Firmware', 'Sensor Fusion'] },
            { label: 'AI on Hardware', items: ['YOLOv8', 'NVIDIA NeMo', 'Edge Inference', 'Docker on ARM'] },
            { label: 'Languages', items: ['C++', 'Python', 'TypeScript'] },
        ],
        experience: [EXP_SARTHAK_ROBOTICS, EXP_NEXTUP],
        projects: [
            {
                name: 'HEXAPOD',
                stack: 'ROS2 · Gazebo · MoveIt · ROS2 Control · Raspberry Pi · Docker',
                bullets: [
                    'Multi-legged locomotion system: full ROS2 control stack deployed on Raspberry Pi via Docker with zero environment configuration on target hardware.',
                    'Geometric inverse kinematics for deterministic real-time execution across six coupled limbs — no numerical solver, guaranteed convergence.',
                    'Simulation-verified gaits (Gazebo) transferred to hardware without modification: zero sim-to-real transfer failures.',
                ],
            },
            {
                name: 'SENTINEL — Offline Mesh Emergency Network',
                stack: 'ESP32 · ESP-NOW · C++ · MPU6050 · Arduino IDE',
                bullets: [
                    'Peer-to-peer emergency mesh using ESP-NOW across ESP32 nodes — zero infrastructure dependency at any layer, operates without WiFi or cellular.',
                    'Embedded fall detection using MPU6050 IMU and dual-axis threshold analysis with mesh-propagated alerts.',
                    'Gas hazard sensing integrated into the same firmware layer; alert propagation tested across multi-hop mesh topologies.',
                ],
            },
            {
                name: '6-DOF Robotic Arm',
                stack: 'ROS · MoveIt · Gazebo · C++ · Python',
                bullets: [
                    'Full motion planning pipeline: URDF configuration, MoveIt inverse kinematics, collision-aware trajectory planning, and hardware execution.',
                    'Achieved 50% reduction in trajectory execution time through shortest-path algorithm selection and MoveIt parameter tuning in C++.',
                ],
            },
        ],
    },

    ds: {
        domain: 'ds',
        title: 'Data Science / Analytics',
        summary:
            'Data scientist and ML engineer with hands-on experience in time-series forecasting, statistical modeling, and production ETL pipelines. Built XGBoost forecasting systems with 35% RMSE improvement, performed 20-year multivariate regression on financial data, and designed K-Means segmentation across 50+ retail locations.',
        skills: [
            { label: 'ML / Modeling', items: ['XGBoost', 'scikit-learn', 'Regression', 'K-Means', 'Time-Series Forecasting', 'Feature Engineering', 'Lag Features'] },
            { label: 'Statistics', items: ['SciPy', 'statsmodels', 'Fisher z-transform', 'F-test', 'Pearson / Spearman / Kendall', 'Hypothesis Testing'] },
            { label: 'Data Engineering', items: ['pandas', 'ETL Pipelines', 'Timezone Normalisation', 'Market Calendar Sync', 'SQLAlchemy', 'SQL'] },
            { label: 'Visualization', items: ['Chart.js', 'Matplotlib', 'Seaborn'] },
            { label: 'Languages', items: ['Python', 'SQL', 'TypeScript'] },
        ],
        experience: [EXP_SARTHAK_DS, EXP_NEXTUP],
        projects: [
            {
                name: 'Retail Performance Engine',
                stack: 'XGBoost · K-Means · pandas · scikit-learn · Feature Engineering',
                bullets: [
                    'Store performance forecasting using XGBoost with lag-based feature engineering — 35% RMSE reduction vs. moving-average baseline.',
                    'K-Means segmentation across 50+ retail locations produced 4 strategic clusters for differentiated supply chain optimization strategies.',
                    'End-to-end pipeline: raw sales data ingestion → feature construction → model training → cluster assignment → business recommendation output.',
                ],
            },
            {
                name: 'StockMetrics Pipeline',
                stack: 'pandas · SciPy · statsmodels · ETL · Fisher z-transform',
                bullets: [
                    'Multivariate regression on 20 years of Big 5 IT firm data; ETL pipeline aligns daily price volatility with quarterly financial filings.',
                    'EBITDA Margin Change identified as statistically significant predictor (p = 0.029) of stock return variance via F-test validated driver analysis.',
                    'Fisher z-transform applied to Pearson/Spearman/Kendall correlations for confidence intervals across time-series windows.',
                ],
            },
        ],
    },

    web: {
        domain: 'web',
        title: 'Full-Stack / Web',
        summary:
            'Fullstack engineer building real-time web applications with React, FastAPI, and Firebase. Designed versioned concurrent state systems for multiplayer chess, multi-method statistical correlation platforms, and ML model serving APIs. Comfortable across the full stack from React state management to FastAPI backend design.',
        skills: [
            { label: 'Frontend', items: ['React', 'TypeScript', 'Zustand', 'Chart.js', 'Next.js', 'CSS'] },
            { label: 'Backend', items: ['FastAPI', 'Firebase Firestore', 'REST API Design', 'SQLAlchemy', 'Node.js'] },
            { label: 'Systems', items: ['Docker', 'Linux', 'Git', 'WebSockets', 'Versioned State Sync', 'Heartbeat Presence'] },
            { label: 'Languages', items: ['TypeScript', 'Python', 'SQL'] },
        ],
        experience: [
            {
                role: 'AI & Robotics Intern',
                org: 'SarthakAI',
                location: 'Delhi',
                period: 'Jun – Aug 2025',
                bullets: [
                    'Designed polling-based robot-AI interface architecture for low-latency command/response cycles; built for fault tolerance under intermittent hardware.',
                    'Built YOLOv8 inference pipeline with FastAPI serving layer for real-time video stream processing; integrated with web-based operator dashboard.',
                    'Developed ESP32/Raspberry Pi telemetry workstation; sensor data streamed to Python backend for real-time monitoring interface.',
                ],
            },
            EXP_NEXTUP,
        ],
        projects: [
            {
                name: 'Chess Platform',
                stack: 'React · Firebase Firestore · FastAPI · Stockfish · Zustand',
                bullets: [
                    'Real-time multiplayer chess with Firebase Firestore synchronization; versioned state updates prevent race conditions from concurrent moves.',
                    'Stockfish engine offloaded to FastAPI backend for deep position analysis — avoids blocking the main thread during computationally intensive evaluation.',
                    'Heartbeat-based presence monitoring for lobby system; disconnected players are detected and games gracefully terminated.',
                ],
            },
            {
                name: 'Stock Correlation Platform',
                stack: 'React · FastAPI · pandas · SciPy · Chart.js',
                bullets: [
                    'Time-series alignment with timezone normalisation and market calendar synchronisation across international exchanges.',
                    'Three correlation methods (Pearson, Spearman, Kendall) with Fisher z-transform confidence intervals for statistical validation.',
                    'Synchronized Chart.js heatmaps and time-series visualizations with shared time-axis scrubbing across correlation views.',
                ],
            },
        ],
    },
}
