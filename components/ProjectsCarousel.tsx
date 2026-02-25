'use client'

import { useRef, useEffect, useCallback, useState } from 'react'

type Domain = 'ai' | 'robotics' | 'ds' | 'web'

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
  // ── AI (cards 1–3) ──────────────────────────────────
  {
    id: 'darwin',
    domain: 'ai',
    tag: 'AI',
    title: 'Darwin Studio',
    featured: true,
    problem:
      'Treats SDXL latent tensors as genetic material — mutation and crossover applied between generations. Custom SLERP for geometrically consistent latent interpolation.',
    metrics: [
      { value: '< 4s', label: '1024px generation on T4 GPU' },
      { value: '~23%', label: 'LERP inconsistency eliminated by SLERP' },
    ],
    stack: 'PyTorch · SDXL Lightning · Diffusers · LoRA · Custom SLERP',
    links: { github: 'https://github.com/mitanshu-2004/darwin-studio' },
  },
  {
    id: 'memory-ai',
    domain: 'ai',
    tag: 'AI',
    title: 'Memory Assistant',
    featured: true,
    problem:
      'Privacy-first RAG pipeline running entirely offline. Phi-3 (4-bit quantized) via llama.cpp on CPU-only hardware with hybrid dense-vector and keyword retrieval.',
    metrics: [
      { value: '0', label: 'external API dependencies' },
      { value: 'LRU', label: 'caching reduces repeat-query latency' },
    ],
    stack: 'FastAPI · ChromaDB · Sentence-Transformers · Phi-3 · llama.cpp',
    links: { github: 'https://github.com/mitanshu-2004/memory-assistant' },
  },
  {
    id: 'edge-vision',
    domain: 'ai',
    tag: 'AI',
    title: 'Edge Vision Pipeline',
    problem:
      'Real-time voice pipeline with NVIDIA NeMo STT and custom wake-word detection. YOLOv8 models trained and deployed for human tracking, package classification, and gesture control at the edge.',
    metrics: [
      { value: 'NeMo', label: 'STT with wake-word detection' },
      { value: 'YOLOv8', label: 'multi-task edge vision deployment' },
    ],
    stack: 'NVIDIA NeMo · YOLOv8 · ESP32 · Raspberry Pi · Python',
    links: {},
  },
  // ── Robotics (cards 4–6) ─────────────────────────────
  {
    id: 'hexapod',
    domain: 'robotics',
    tag: 'Robotics',
    title: 'HEXAPOD',
    featured: true,
    problem:
      'Multi-legged locomotion system with ROS2 control stack deployed on Raspberry Pi via Docker. Geometric IK for deterministic real-time execution across six coupled limbs.',
    metrics: [
      { value: '0', label: 'sim-to-real transfer failures' },
      { value: '6-limb', label: 'simultaneous real-time IK' },
    ],
    stack: 'ROS2 · Gazebo · MoveIt · ROS2 Control · Raspberry Pi · Docker',
    links: { github: 'https://github.com/mitanshu-2004/hexapod' },
  },
  {
    id: 'arm',
    domain: 'robotics',
    tag: 'Robotics',
    title: '6-DOF Robotic Arm',
    problem:
      'Full motion planning pipeline with inverse kinematics, trajectory execution, and collision avoidance. Simulation-validated before hardware deployment.',
    metrics: [
      { value: '50%', label: 'faster execution via shortest-path selection' },
      { value: 'C++', label: 'collision-free trajectory scripting' },
    ],
    stack: 'ROS · MoveIt · Gazebo · Python · C++',
    links: { github: 'https://github.com/mitanshu-2004/6dof-arm' },
  },
  {
    id: 'sentinel',
    domain: 'robotics',
    tag: 'Robotics',
    title: 'SENTINEL',
    problem:
      'Offline mesh emergency communication using ESP-NOW — zero infrastructure dependency. Autonomous fall detection and gas hazard sensing with mesh-propagated alerts.',
    metrics: [
      { value: 'ESP-NOW', label: 'zero-association-overhead mesh' },
      { value: 'IMU + gas', label: 'dual-sensor embedded firmware' },
    ],
    stack: 'ESP32 · ESP-NOW · C++ · MPU6050 · Arduino IDE',
    links: { github: 'https://github.com/mitanshu-2004/sentinel' },
  },
  // ── Data Science (cards 7–9) ──────────────────────────
  {
    id: 'retail',
    domain: 'ds',
    tag: 'Data',
    title: 'Retail Performance Engine',
    problem:
      'Store performance forecasting with XGBoost and lag-based feature engineering. K-Means segmentation across 50+ retail locations for supply chain optimization.',
    metrics: [
      { value: '35%', label: 'RMSE reduction vs. moving-average baseline' },
      { value: '4', label: 'strategic clusters from 50+ locations' },
    ],
    stack: 'XGBoost · K-Means · pandas · scikit-learn · Feature Engineering',
    links: { github: 'https://github.com/mitanshu-2004/retail-performance-engine' },
  },
  {
    id: 'stockmetrics',
    domain: 'ds',
    tag: 'Data',
    title: 'StockMetrics Pipeline',
    problem:
      'Multivariate regression on 20 years of Big 5 IT firm data. ETL pipeline aligning daily volatility with quarterly financials. EBITDA Margin Change as statistically significant predictor.',
    metrics: [
      { value: 'p = 0.029', label: 'EBITDA Margin as significant predictor' },
      { value: 'F-test', label: 'validated fundamental driver analysis' },
    ],
    stack: 'pandas · SciPy · statsmodels · ETL · Fisher z-transform',
    links: { github: 'https://github.com/mitanshu-2004/stockmetrics-pipeline' },
  },
  {
    id: 'stockcorr-ds',
    domain: 'ds',
    tag: 'Data',
    title: 'Stock Correlation Platform',
    problem:
      'Time-series alignment with timezone normalisation and market calendar sync. Pearson / Spearman / Kendall correlations with Fisher z-transform confidence intervals.',
    metrics: [
      { value: '3', label: 'correlation methods with statistical validation' },
      { value: 'Chart.js', label: 'heatmaps + synchronised time-series' },
    ],
    stack: 'React · FastAPI · pandas · SciPy · Chart.js',
    links: { github: 'https://github.com/mitanshu-2004/stock-correlation-platform' },
  },
  // ── Web (cards 10–12) ─────────────────────────────────
  {
    id: 'chess',
    domain: 'web',
    tag: 'Web',
    title: 'Chess Platform',
    problem:
      'Real-time multiplayer chess with Firebase Firestore synchronization. Versioned state updates prevent race conditions. Stockfish engine offloaded via FastAPI for deep position analysis.',
    metrics: [
      { value: 'Versioned', label: 'concurrent move conflict resolution' },
      { value: 'Heartbeat', label: 'presence monitoring for lobby system' },
    ],
    stack: 'React · Firebase · FastAPI · Stockfish · Zustand',
    links: { github: 'https://github.com/mitanshu-2004/chess-platform' },
  },
  {
    id: 'stockcorr-web',
    domain: 'web',
    tag: 'Web',
    title: 'Stock Correlation Platform',
    problem:
      'Time-series alignment with timezone normalisation and market calendar sync. Pearson / Spearman / Kendall correlations with Fisher z-transform confidence intervals.',
    metrics: [
      { value: '3', label: 'correlation methods with statistical validation' },
      { value: 'Chart.js', label: 'heatmaps + synchronised time-series' },
    ],
    stack: 'React · FastAPI · pandas · SciPy · Chart.js',
    links: { github: 'https://github.com/mitanshu-2004/stock-correlation-platform' },
  },
  {
    id: 'memory-web',
    domain: 'web',
    tag: 'Web',
    title: 'Memory Assistant',
    problem:
      'Privacy-first RAG pipeline with React frontend and FastAPI backend. Automated ingestion from PDFs, DOCX, images via OCR, and web pages with optimistic UI updates.',
    metrics: [
      { value: 'Dual DB', label: 'SQLAlchemy metadata + ChromaDB vectors' },
      { value: 'OCR', label: 'multi-format document ingestion' },
    ],
    stack: 'React · FastAPI · ChromaDB · SQLAlchemy · llama.cpp',
    links: { github: 'https://github.com/mitanshu-2004/memory-assistant' },
  },
]

// All domains have exactly 3 cards — static totals
const DOMAIN_TOTALS: Record<Domain, number> = {
  ai: 3,
  robotics: 3,
  ds: 3,
  web: 3,
}

const DOMAIN_LABELS: Record<string, string> = {
  ai: 'AI Engineer',
  robotics: 'Robotics Engineer',
  ds: 'Data Scientist',
  web: 'Web Developer',
  mixed: 'Full-Stack Engineer',
}

const DOMAINS = ['ai', 'robotics', 'ds', 'web'] as const
const DOMAIN_DISPLAY: Record<Domain, string> = {
  ai: 'AI',
  robotics: 'Robotics',
  ds: 'Data',
  web: 'Web',
}

function getCardWidth(track: HTMLDivElement): number {
  const firstCard = track.querySelector<HTMLElement>('.proj-card')
  const gap = parseInt(getComputedStyle(track).gap || '24')
  return firstCard ? firstCard.getBoundingClientRect().width + gap : 364
}

// ── Animated SVG background constants ────────────────────────────────────────

const BG_AI = (
  <svg viewBox="0 0 540 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <style>{`
      @keyframes ai-signal-flow {
        0%   { stroke-dashoffset: 200; opacity: 0; }
        10%  { opacity: 1; }
        90%  { opacity: 1; }
        100% { stroke-dashoffset: 0; opacity: 0; }
      }
      @keyframes ai-node-breathe {
        0%, 100% { opacity: 0.2; }
        50%       { opacity: 0.55; }
      }
      .ai-sig { animation: ai-signal-flow 3s ease-in-out infinite; stroke-dasharray: 12 188; }
      .ai-node { animation: ai-node-breathe 4s ease-in-out infinite; fill: #2d5a3d; }
    `}</style>
    {/* Static connection lines — IN→H1 */}
    {[80,160,240,320].map(y => [60,140,220,300].map(hy =>
      <line key={`in-h1-${y}-${hy}`} x1={40} y1={y} x2={160} y2={hy} stroke="#2d5a3d" strokeWidth="0.8" strokeOpacity="0.07"/>
    ))}
    {/* H1→H2 */}
    {[60,140,220,300].map(y => [90,180,270,350].map(hy =>
      <line key={`h1-h2-${y}-${hy}`} x1={160} y1={y} x2={270} y2={hy} stroke="#2d5a3d" strokeWidth="0.8" strokeOpacity="0.07"/>
    ))}
    {/* H2→H3 */}
    {[90,180,270,350].map(y => [60,180,300].map(hy =>
      <line key={`h2-h3-${y}-${hy}`} x1={270} y1={y} x2={380} y2={hy} stroke="#2d5a3d" strokeWidth="0.8" strokeOpacity="0.07"/>
    ))}
    {/* H3→OUT */}
    {[60,180,300].map(y =>
      <line key={`h3-out-${y}`} x1={380} y1={y} x2={490} y2={200} stroke="#2d5a3d" strokeWidth="0.8" strokeOpacity="0.07"/>
    )}
    {/* Animated signal lines */}
    {[
      {x1:40,y1:160,x2:160,y2:140,d:0},
      {x1:160,y1:140,x2:270,y2:90,d:0.3},
      {x1:270,y1:90,x2:380,y2:180,d:0.6},
      {x1:380,y1:180,x2:490,y2:200,d:0.9},
      {x1:40,y1:240,x2:160,y2:300,d:1.2},
      {x1:160,y1:300,x2:270,y2:270,d:1.5},
      {x1:270,y1:270,x2:380,y2:300,d:1.8},
      {x1:40,y1:80,x2:160,y2:60,d:2.1},
      {x1:160,y1:60,x2:270,y2:180,d:2.4},
      {x1:270,y1:180,x2:380,y2:60,d:2.7},
    ].map((s,i) => (
      <line key={i} x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2}
        stroke="#2d5a3d" strokeWidth="2" className="ai-sig"
        style={{animationDelay:`${s.d}s`}}/>
    ))}
    {/* Nodes — IN */}
    {[80,160,240,320].map((y,i) => <circle key={`in-${i}`} cx={40} cy={y} r={4} className="ai-node" style={{animationDuration:`${4+i*0.3}s`,animationDelay:`${i*0.4}s`}}/>)}
    {/* Nodes — H1 (large) */}
    {[60,140,220,300].map((y,i) => <circle key={`h1-${i}`} cx={160} cy={y} r={7} className="ai-node" style={{animationDuration:`${5+i*0.2}s`,animationDelay:`${i*0.5}s`}}/>)}
    {/* Nodes — H2 */}
    {[90,180,270,350].map((y,i) => <circle key={`h2-${i}`} cx={270} cy={y} r={5} className="ai-node" style={{animationDuration:`${3.5+i*0.3}s`,animationDelay:`${0.2+i*0.3}s`}}/>)}
    {/* Nodes — H3 */}
    {[60,180,300].map((y,i) => <circle key={`h3-${i}`} cx={380} cy={y} r={5} className="ai-node" style={{animationDuration:`${4+i*0.4}s`,animationDelay:`${0.1+i*0.6}s`}}/>)}
    {/* OUT node */}
    <circle cx={490} cy={200} r={8} className="ai-node" style={{animationDuration:'5s'}}/>
    {/* Layer labels */}
    {[{x:40,t:'IN'},{x:160,t:'H1'},{x:270,t:'H2'},{x:380,t:'H3'},{x:490,t:'OUT'}].map(l =>
      <text key={l.t} x={l.x} y={390} textAnchor="middle" fontFamily="monospace" fontSize={7} fill="#2d5a3d" opacity={0.18}>{l.t}</text>
    )}
  </svg>
)

const BG_ROBOTICS = (
  <svg viewBox="0 0 540 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <style>{`
      @keyframes pcb-trace-pulse {
        0%, 100% { stroke-opacity: 0.12; }
        50%       { stroke-opacity: 0.3; }
      }
      @keyframes pcb-led-blink {
        0%, 84%, 100% { opacity: 0.6; }
        88%            { opacity: 0.05; }
      }
      .pcb-trace { animation: pcb-trace-pulse 4s ease-in-out infinite; stroke: #1a3a28; }
      .pcb-led   { animation: pcb-led-blink 3s ease-in-out infinite; }
    `}</style>
    {/* Power buses */}
    <line x1={0} y1={30} x2={540} y2={30} stroke="#1a3a28" strokeWidth={3} strokeOpacity={0.18}/>
    <line x1={0} y1={370} x2={540} y2={370} stroke="#1a3a28" strokeWidth={3} strokeOpacity={0.18}/>
    {/* Primary traces */}
    <path d="M30 30 V80 H100 V120 H60 V200 H130 V170 H200" fill="none" strokeWidth={1.4} className="pcb-trace" style={{animationDelay:'0s'}}/>
    <path d="M200 170 H260 V130 H340 V80 H420 V30" fill="none" strokeWidth={1.4} className="pcb-trace" style={{animationDelay:'0.5s'}}/>
    <path d="M60 200 V280 H120 V310 H200 V260 H280 V310 H360 V280 H440 V370" fill="none" strokeWidth={1.4} className="pcb-trace" style={{animationDelay:'1s'}}/>
    <path d="M130 170 V130 H180" fill="none" strokeWidth={1.4} className="pcb-trace" style={{animationDelay:'1.5s'}}/>
    <path d="M260 130 V80" fill="none" strokeWidth={1.4} className="pcb-trace" style={{animationDelay:'2s'}}/>
    <path d="M200 260 V220 H160 V170" fill="none" strokeWidth={1.4} className="pcb-trace" style={{animationDelay:'0.8s'}}/>
    <path d="M280 310 V360 H350 V370" fill="none" strokeWidth={1.4} className="pcb-trace" style={{animationDelay:'1.3s'}}/>
    <path d="M360 280 V240 H410 V200 H460 V160 H510 V30" fill="none" strokeWidth={1.4} className="pcb-trace" style={{animationDelay:'0.3s'}}/>
    <path d="M440 200 V160" fill="none" strokeWidth={1.4} className="pcb-trace" style={{animationDelay:'1.8s'}}/>
    <path d="M340 80 V40" fill="none" strokeWidth={1.4} className="pcb-trace" style={{animationDelay:'2.3s'}}/>
    <path d="M180 130 V80 H240" fill="none" strokeWidth={1.4} className="pcb-trace" style={{animationDelay:'0.6s'}}/>
    <path d="M100 280 V370" fill="none" strokeWidth={1.4} className="pcb-trace" style={{animationDelay:'1.1s'}}/>
    <path d="M460 200 H510 V320 H480 V370" fill="none" strokeWidth={1.4} className="pcb-trace" style={{animationDelay:'1.6s'}}/>
    {/* Junction dots */}
    {[{cx:100,cy:120},{cx:60,cy:200},{cx:200,cy:170},{cx:260,cy:130},{cx:340,cy:80},{cx:80,cy:280},{cx:180,cy:130},{cx:260,cy:310},{cx:200,cy:260},{cx:280,cy:260},{cx:360,cy:280},{cx:440,cy:280},{cx:420,cy:80},{cx:510,cy:160},{cx:350,cy:370},{cx:480,cy:320}].map((d,i) =>
      <circle key={i} cx={d.cx} cy={d.cy} r={3.5} fill="#1a3a28" opacity={0.4}/>
    )}
    {/* MCU chip */}
    <rect x={150} y={150} width={80} height={60} rx={3} stroke="#1a3a28" strokeWidth={1.4} opacity={0.35} fill="none"/>
    <text x={190} y={185} textAnchor="middle" fontFamily="monospace" fontSize={8} fill="#1a3a28" opacity={0.3}>MCU</text>
    {[-1,0,1,2].map(i => <rect key={`mcu-l-${i}`} x={143} y={163+i*13} width={7} height={5} rx={1} fill="#1a3a28" opacity={0.25}/>)}
    {[-1,0,1,2].map(i => <rect key={`mcu-r-${i}`} x={230} y={163+i*13} width={7} height={5} rx={1} fill="#1a3a28" opacity={0.25}/>)}
    {[-1,0,1,2].map(i => <rect key={`mcu-t-${i}`} x={163+i*13} y={143} width={5} height={7} rx={1} fill="#1a3a28" opacity={0.25}/>)}
    {/* ESP32 chip */}
    <rect x={300} y={240} width={70} height={50} rx={3} stroke="#1a3a28" strokeWidth={1.2} opacity={0.3} fill="none"/>
    <text x={335} y={270} textAnchor="middle" fontFamily="monospace" fontSize={7} fill="#1a3a28" opacity={0.25}>ESP32</text>
    {/* Passive components */}
    <rect x={88} y={268} width={12} height={20} rx={2} fill="#1a3a28" opacity={0.3}/>
    <rect x={140} y={118} width={20} height={12} rx={2} fill="#1a3a28" opacity={0.3}/>
    <rect x={400} y={148} width={20} height={12} rx={2} fill="#1a3a28" opacity={0.3}/>
    {/* Connector J1 */}
    <rect x={460} y={140} width={40} height={40} rx={2} stroke="#1a3a28" strokeWidth={1} opacity={0.28} fill="none"/>
    {[0,1,2].map(r => [0,1,2].map(c =>
      <circle key={`j1-${r}-${c}`} cx={469+c*10} cy={149+r*10} r={2} fill="#1a3a28" opacity={0.2}/>
    ))}
    <text x={480} y={135} textAnchor="middle" fontFamily="monospace" fontSize={6} fill="#1a3a28" opacity={0.2}>J1</text>
    {/* LED indicators */}
    <circle cx={80} cy={80} r={4} fill="#22c55e" className="pcb-led" style={{animationDelay:'0s'}}/>
    <circle cx={240} cy={80} r={4} fill="#22c55e" className="pcb-led" style={{animationDelay:'1.1s'}}/>
    <circle cx={100} cy={310} r={3} fill="#f59e0b" className="pcb-led" style={{animationDelay:'2.3s'}}/>
    <circle cx={380} cy={160} r={3} fill="#ef4444" className="pcb-led" style={{animationDelay:'0.7s'}}/>
    {/* Silkscreen */}
    <text x={35} y={22} fontFamily="monospace" fontSize={6} fill="#1a3a28" opacity={0.2}>VCC</text>
    <text x={35} y={390} fontFamily="monospace" fontSize={6} fill="#1a3a28" opacity={0.2}>GND</text>
    <text x={308} y={233} fontFamily="monospace" fontSize={6} fill="#1a3a28" opacity={0.2}>U2</text>
  </svg>
)

const BG_DS = (
  <svg viewBox="0 0 540 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <style>{`
      @keyframes ds-dot-appear {
        0%   { r: 0; opacity: 0; }
        100% { opacity: 0.22; }
      }
      @keyframes ds-line-draw {
        from { stroke-dashoffset: 600; }
        to   { stroke-dashoffset: 0; }
      }
      @keyframes ds-label-float {
        0%, 100% { transform: translateY(0px); opacity: 0.15; }
        50%       { transform: translateY(-3px); opacity: 0.28; }
      }
      .ds-dot { animation: ds-dot-appear 0.6s ease-out forwards; fill: #5a3a1a; }
      .ds-axis { animation: ds-line-draw 1.2s ease-out forwards; stroke: #5a3a1a; stroke-dasharray: 600; stroke-dashoffset: 600; }
    `}</style>
    {/* Grid lines */}
    {[80,150,220,290,360,430,500].map(x => <line key={`vg-${x}`} x1={x} y1={40} x2={x} y2={340} stroke="#5a3a1a" strokeWidth={0.4} opacity={0.07}/>)}
    {[60,120,180,240,300].map(y => <line key={`hg-${y}`} x1={60} y1={y} x2={520} y2={y} stroke="#5a3a1a" strokeWidth={0.4} opacity={0.07}/>)}
    {/* Axes */}
    <line x1={60} y1={340} x2={520} y2={340} strokeWidth={1.5} opacity={0.3} className="ds-axis"/>
    <line x1={60} y1={40} x2={60} y2={340} strokeWidth={1.5} opacity={0.3} className="ds-axis" style={{animationDelay:'0.2s'}}/>
    {/* Ticks */}
    {[140,220,300,380,460].map((x,i) => <line key={`xt-${i}`} x1={x} y1={338} x2={x} y2={344} stroke="#5a3a1a" strokeWidth={1} opacity={0.2}/>)}
    {[80,140,200,260,320].map((y,i) => <line key={`yt-${i}`} x1={58} y1={y} x2={64} y2={y} stroke="#5a3a1a" strokeWidth={1} opacity={0.2}/>)}
    {/* Confidence band */}
    <path d="M70,330 L510,90 L510,62 L70,295 Z" fill="#5a3a1a" opacity={0.04}/>
    {/* Regression line */}
    <line x1={70} y1={315} x2={510} y2={75} stroke="#5a3a1a" strokeWidth={1.2} opacity={0.25} strokeDasharray="6 4"
      style={{strokeDashoffset:600, animation:'ds-line-draw 1.5s ease-out 0.5s forwards'}}/>
    {/* Scatter dots — 5 clusters following the trend */}
    {[
      {cx:88,cy:308,r:3.5,d:0.1},{cx:100,cy:298,r:4,d:0.25},{cx:112,cy:302,r:3,d:0.4},{cx:124,cy:290,r:3.5,d:0.55},{cx:130,cy:295,r:3,d:0.7},
      {cx:162,cy:268,r:3.5,d:0.85},{cx:175,cy:258,r:4,d:1.0},{cx:188,cy:264,r:3,d:1.15},{cx:205,cy:252,r:3.5,d:1.3},
      {cx:237,cy:218,r:4,d:1.45},{cx:250,cy:210,r:3.5,d:1.6},{cx:264,cy:222,r:3,d:1.75},{cx:278,cy:205,r:4,d:1.9},{cx:293,cy:215,r:3.5,d:2.05},
      {cx:322,cy:168,r:3.5,d:2.2},{cx:338,cy:158,r:4,d:2.35},{cx:352,cy:162,r:3,d:2.5},{cx:368,cy:148,r:3.5,d:2.65},
      {cx:400,cy:122,r:4,d:2.8},{cx:415,cy:112,r:3.5,d:2.95},{cx:428,cy:118,r:3,d:3.1},{cx:446,cy:105,r:4,d:3.25},{cx:462,cy:98,r:3.5,d:3.4},
      {cx:180,cy:310,r:2.5,d:3.55},{cx:400,cy:55,r:2.5,d:3.7},{cx:90,cy:180,r:2.5,d:3.85},{cx:470,cy:200,r:2.5,d:4.0},
    ].map((dot,i) => (
      <circle key={i} cx={dot.cx} cy={dot.cy} r={dot.r} className="ds-dot"
        style={{animationDelay:`${dot.d}s`, opacity: i > 22 ? 0.1 : 0.22}}/>
    ))}
    {/* Annotations */}
    <text x={480} y={360} textAnchor="end" fontFamily="monospace" fontSize={9} fill="#5a3a1a" opacity={0.18}>R²=0.91</text>
    <text x={480} y={372} textAnchor="end" fontFamily="monospace" fontSize={7} fill="#5a3a1a" opacity={0.12}>p=0.029</text>
    {/* Axis labels */}
    <text x={290} y={380} textAnchor="middle" fontFamily="monospace" fontSize={8} fill="#5a3a1a" style={{animation:'ds-label-float 4s ease-in-out infinite'}}>Quarter</text>
    <text x={20} y={190} textAnchor="middle" fontFamily="monospace" fontSize={8} fill="#5a3a1a" transform="rotate(-90,20,190)" style={{animation:'ds-label-float 4.5s ease-in-out 0.5s infinite'}}>Revenue</text>
  </svg>
)

const BG_WEB = (
  <svg viewBox="0 0 540 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <style>{`
      @keyframes web-packet-travel {
        0%   { stroke-dashoffset: 300; opacity: 0; }
        5%   { opacity: 1; }
        95%  { opacity: 1; }
        100% { stroke-dashoffset: 0; opacity: 0; }
      }
      @keyframes web-node-ping {
        0%, 100% { r: 6; opacity: 0.15; }
        50%       { r: 14; opacity: 0.04; }
      }
      @keyframes web-code-flicker {
        0%, 89%, 100% { opacity: 0.07; }
        92%            { opacity: 0.16; }
      }
      .web-pkt  { animation: web-packet-travel 4s ease-in-out infinite; stroke-dasharray: 8 292; stroke: #1a2a4a; stroke-width: 1.8; }
      .web-ping { animation: web-node-ping 3s ease-in-out infinite; stroke: #1a2a4a; stroke-width: 1; fill: none; }
      .web-code { animation: web-code-flicker 5s ease-in-out infinite; fill: #1a2a4a; font-family: monospace; font-size: 9px; }
    `}</style>
    {/* Static connection lines */}
    {[
      {x1:108,y1:80,x2:192,y2:120},{x1:108,y1:80,x2:332,y2:80},{x1:288,y1:120,x2:332,y2:80},
      {x1:288,y1:120,x2:332,y2:200},{x1:288,y1:120,x2:452,y2:200},{x1:408,y1:80,x2:452,y2:200},
      {x1:80,y1:300,x2:240,y2:140},{x1:388,y1:300,x2:288,y2:140},{x1:508,y1:200,x2:408,y2:80},
    ].map((l,i) => <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="#1a2a4a" strokeWidth={0.8} opacity={0.1}/>)}
    {/* Animated packet lines */}
    {[
      {x1:108,y1:80,x2:508,y2:200,d:0},{x1:508,y1:200,x2:80,y2:80,d:0.8},
      {x1:80,y1:80,x2:408,y2:80,d:1.6},{x1:408,y1:80,x2:240,y2:120,d:2.4},
      {x1:240,y1:120,x2:508,y2:200,d:3.2},{x1:80,y1:300,x2:240,y2:120,d:0.4},
      {x1:388,y1:300,x2:508,y2:200,d:1.2},{x1:360,y1:200,x2:240,y2:120,d:2.0},
    ].map((p,i) => (
      <line key={i} x1={p.x1} y1={p.y1} x2={p.x2} y2={p.y2} className="web-pkt" style={{animationDelay:`${p.d}s`}}/>
    ))}
    {/* Ping rings */}
    {[
      {cx:80,cy:80,d:0},{cx:508,cy:200,d:1},{cx:240,cy:120,d:2},{cx:408,cy:80,d:0.5}
    ].map((n,i) => <circle key={i} cx={n.cx} cy={n.cy} r={6} className="web-ping" style={{animationDelay:`${n.d}s`}}/>)}
    {/* Service boxes */}
    {[
      {x:52,y:60,w:56,h:40,name:'CLIENT',tech:'React'},
      {x:192,y:100,w:96,h:40,name:'API GW',tech:'FastAPI'},
      {x:332,y:60,w:76,h:40,name:'DATABASE',tech:'Firebase'},
      {x:332,y:180,w:56,h:40,name:'CACHE',tech:'Redis'},
      {x:52,y:300,w:56,h:40,name:'AUTH',tech:'JWT'},
      {x:332,y:300,w:56,h:40,name:'ENGINE',tech:'Stockfish'},
      {x:452,y:180,w:56,h:40,name:'SERVER',tech:'Node.js'},
    ].map((b,i) => (
      <g key={i}>
        <rect x={b.x} y={b.y} width={b.w} height={b.h} rx={4} fill="none" stroke="#1a2a4a" strokeWidth={1.2} opacity={0.22}/>
        <text x={b.x+b.w/2} y={b.y+15} textAnchor="middle" fontFamily="monospace" fontSize={7} fill="#1a2a4a" opacity={0.28}>{b.name}</text>
        <text x={b.x+b.w/2} y={b.y+27} textAnchor="middle" fontFamily="monospace" fontSize={6} fill="#1a2a4a" opacity={0.18}>{b.tech}</text>
      </g>
    ))}
    {/* Code snippet labels */}
    <text x={80} y={370} className="web-code" style={{animationDelay:'0s'}}>POST /api/move</text>
    <text x={230} y={370} className="web-code" style={{animationDelay:'1.5s'}}>200 OK</text>
    <text x={370} y={370} className="web-code" style={{animationDelay:'3s'}}>ws://sync</text>
  </svg>
)

export default function ProjectsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const domainLabelRef = useRef<HTMLSpanElement>(null)
  const countRefs = useRef<Record<Domain, HTMLSpanElement | null>>({
    ai: null, robotics: null, ds: null, web: null,
  })
  const countRowRefs = useRef<Record<Domain, HTMLDivElement | null>>({
    ai: null, robotics: null, ds: null, web: null,
  })
  const tallyRefs = useRef<Record<Domain, HTMLDivElement | null>>({
    ai: null, robotics: null, ds: null, web: null,
  })
  const dotGroupRefs = useRef<Record<Domain, HTMLDivElement | null>>({
    ai: null, robotics: null, ds: null, web: null,
  })
  const dotRefs = useRef<Record<Domain, HTMLDivElement | null>>({
    ai: null, robotics: null, ds: null, web: null,
  })
  // Improvement 3: track animationend handler to prevent listener stacking
  const animEndHandlerRef = useRef<(() => void) | null>(null)

  const currentDomain = useRef<string>('ai')
  const visibleCards = useRef<Set<HTMLElement>>(new Set())
  const [cardIndex, setCardIndex] = useState(1)
  const [scrollHintText, setScrollHintText] = useState('scroll to explore')
  // Improvement 2: hide scroll hint after first scroll
  const [hintVisible, setHintVisible] = useState(true)
  const [activeBg, setActiveBg] = useState<string>('ai')

  const updateDomainState = useCallback(() => {
    const tally: Record<Domain, number> = { ai: 0, robotics: 0, ds: 0, web: 0 }
    visibleCards.current.forEach((card) => {
      const d = card.dataset.domain as Domain
      if (d) tally[d]++
    })
    const total = Object.values(tally).reduce((a, b) => a + b, 0)

    DOMAINS.forEach((d) => {
      const countEl = countRefs.current[d]
      const rowEl = countRowRefs.current[d]
      const tallyEl = tallyRefs.current[d]
      if (countEl) countEl.textContent = String(tally[d])
      if (rowEl) rowEl.classList.toggle('has-visible', tally[d] > 0)
      if (tallyEl)
        tallyEl.style.width = total > 0 ? `${(tally[d] / total) * 100}%` : '0%'
    })

    if (total === 0) return
    let maxCount = 0
    let dominant: string = 'mixed'
    let tied = false

    DOMAINS.forEach((d) => {
      if (tally[d] > maxCount) {
        maxCount = tally[d]
        dominant = d
        tied = false
      } else if (tally[d] === maxCount && tally[d] > 0) {
        tied = true
      }
    })

    const newDomain = tied ? 'mixed' : dominant

    if (newDomain !== currentDomain.current) {
      currentDomain.current = newDomain
      setActiveBg(newDomain)
      const labelEl = domainLabelRef.current
      if (labelEl) {
        labelEl.className = `carousel-identity-domain morphing domain-${newDomain}`
        labelEl.textContent = DOMAIN_LABELS[newDomain]
        labelEl.setAttribute('aria-label', `Currently viewing: ${DOMAIN_LABELS[newDomain]}`)

        // Improvement 3: remove previously queued handler before adding new one
        if (animEndHandlerRef.current) {
          labelEl.removeEventListener('animationend', animEndHandlerRef.current)
        }
        const handler = () => {
          labelEl.classList.remove('morphing')
          animEndHandlerRef.current = null
        }
        animEndHandlerRef.current = handler
        labelEl.addEventListener('animationend', handler, { once: true })
      }

      DOMAINS.forEach((d) => {
        const groupEl = dotGroupRefs.current[d]
        const dotEl = dotRefs.current[d]
        const isActive = newDomain === 'mixed' ? tally[d] > 0 : d === newDomain
        groupEl?.classList.toggle('active', isActive)
        dotEl?.classList.toggle('active', isActive)
      })
    }
  }, [])

  const scrollBy = useCallback((dir: -1 | 1) => {
    const track = trackRef.current
    if (!track) return
    const cardWidth = getCardWidth(track)
    track.scrollBy({ left: dir * cardWidth, behavior: 'smooth' })
  }, [])

  // Jump to first card of a domain
  const jumpToDomain = useCallback((domain: Domain) => {
    const track = trackRef.current
    if (!track) return
    const target = track.querySelector<HTMLElement>(`.proj-card[data-domain="${domain}"]`)
    if (!target) return
    const trackRect = track.getBoundingClientRect()
    const cardRect = target.getBoundingClientRect()
    const offset = cardRect.left - trackRect.left + track.scrollLeft - 24
    track.scrollTo({ left: offset, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    if ('ontouchstart' in window) {
      setScrollHintText('swipe to explore')
    }

    const cards = track.querySelectorAll<HTMLElement>('.proj-card')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const card = entry.target as HTMLElement
          if (entry.isIntersecting && entry.intersectionRatio >= 0.45) {
            visibleCards.current.add(card)
            card.classList.add('in-view')
          } else {
            visibleCards.current.delete(card)
            card.classList.remove('in-view')
          }
        })
        updateDomainState()
      },
      { root: track, threshold: [0, 0.45, 1.0] }
    )

    cards.forEach((c) => observer.observe(c))
    setTimeout(updateDomainState, 100)

    const onScroll = () => {
      setHintVisible(false) // Improvement 2: hide hint on first scroll
      const cardWidth = getCardWidth(track)
      const idx = Math.round(track.scrollLeft / cardWidth) + 1
      setCardIndex(Math.min(Math.max(idx, 1), PROJECTS.length))
    }
    track.addEventListener('scroll', onScroll, { passive: true })

    let isDown = false
    let startX = 0
    let scrollLeft = 0

    const onMouseDown = (e: MouseEvent) => {
      isDown = true
      startX = e.pageX - track.offsetLeft
      scrollLeft = track.scrollLeft
    }
    const onMouseUp = () => { isDown = false }
    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - track.offsetLeft
      track.scrollLeft = scrollLeft - (x - startX) * 1.4
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') scrollBy(1)
      if (e.key === 'ArrowLeft') scrollBy(-1)
    }

    track.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mouseup', onMouseUp)
    track.addEventListener('mousemove', onMouseMove)
    document.addEventListener('keydown', onKeyDown)

    return () => {
      observer.disconnect()
      track.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mouseup', onMouseUp)
      track.removeEventListener('mousemove', onMouseMove)
      track.removeEventListener('scroll', onScroll)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [updateDomainState, scrollBy, jumpToDomain])

  return (
    <>
      <div className="carousel-page-header-outer">
        <div className="carousel-page-header container">
          <h2 className="carousel-eyebrow">Projects</h2>
          <div className="carousel-identity">
            <span className="carousel-identity-prefix">currently viewing</span>
            <span
              ref={domainLabelRef}
              className="carousel-identity-domain domain-ai"
              aria-live="polite"
              aria-label={`Currently viewing: ${DOMAIN_LABELS['ai']}`}
            >
              AI Engineer
            </span>
          </div>
          <div className="carousel-dots">
            {/* Improvement 1: dot groups are now buttons that jump to domain */}
            {DOMAINS.map((d, i) => (
              <button
                key={d}
                ref={(el) => { dotGroupRefs.current[d] = el as unknown as HTMLDivElement }}
                className={`carousel-dot-group${i === 0 ? ' active' : ''}`}
                data-domain={d}
                onClick={() => jumpToDomain(d)}
                aria-label={`Jump to ${DOMAIN_DISPLAY[d]} projects`}
                title={`Jump to ${DOMAIN_DISPLAY[d]} projects`}
              >
                <div
                  ref={(el) => { dotRefs.current[d] = el }}
                  className={`carousel-dot${i === 0 ? ' active' : ''}`}
                  data-domain={d}
                />
                <span className="carousel-dot-label">{DOMAIN_DISPLAY[d]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        {/* Count strip */}
        <div className="carousel-count-strip">
          {DOMAINS.map((d) => (
            <div
              key={d}
              ref={(el) => { countRowRefs.current[d] = el }}
              className="carousel-count-item"
              data-domain={d}
            >
              <span
                ref={(el) => { countRefs.current[d] = el }}
                className="carousel-count-num"
              >
                {DOMAIN_TOTALS[d]}
              </span>
              <span className="carousel-count-lbl">{DOMAIN_DISPLAY[d]}</span>
            </div>
          ))}
        </div>

        {/* Tally bar */}
        <div className="carousel-tally-wrap">
          <div className="carousel-tally-bar">
            {DOMAINS.map((d) => (
              <div
                key={d}
                ref={(el) => { tallyRefs.current[d] = el }}
                className="carousel-tally-seg"
                data-domain={d}
                style={{ width: '0%' }}
              />
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className={`carousel-scroll-hint${hintVisible ? '' : ' carousel-scroll-hint--hidden'}`}
          aria-hidden="true"
        >
          <span>{scrollHintText}</span>
          <span className="carousel-scroll-arrow">→</span>
        </div>

        {/* Carousel */}
        <div className="carousel-bg-wrap">
          <div className="carousel-bg-stage" aria-hidden="true">
            <div className={`carousel-bg carousel-bg--ai${activeBg === 'ai' ? ' carousel-bg--active' : ''}`}>{BG_AI}</div>
            <div className={`carousel-bg carousel-bg--robotics${activeBg === 'robotics' ? ' carousel-bg--active' : ''}`}>{BG_ROBOTICS}</div>
            <div className={`carousel-bg carousel-bg--ds${activeBg === 'ds' ? ' carousel-bg--active' : ''}`}>{BG_DS}</div>
            <div className={`carousel-bg carousel-bg--web${activeBg === 'web' ? ' carousel-bg--active' : ''}`}>{BG_WEB}</div>
          </div>
          <div className="carousel-wrap">
            <div
              className="carousel-track"
              ref={trackRef}
              tabIndex={0}
              aria-label="Projects carousel — use arrow keys or swipe to navigate"
            >
              {PROJECTS.map((p) => (
                <div
                  key={p.id}
                  className="proj-card"
                  data-domain={p.domain}
                  data-project={p.id}
                >
                  <div className="proj-card-header">
                    <h3 className="proj-card-title">{p.title}</h3>
                    <div className="proj-card-badges">
                      {p.featured && <span className="proj-card-featured">Featured</span>}
                      <span className="proj-card-tag">{p.tag}</span>
                    </div>
                  </div>
                  <p className="proj-card-problem">{p.problem}</p>
                  <div className="proj-card-metrics">
                    {p.metrics.map((m) => (
                      <div key={m.label} className="proj-card-metric">
                        <span className="proj-card-metric-value">{m.value}</span>
                        {m.label}
                      </div>
                    ))}
                  </div>
                  <div className="proj-card-stack">{p.stack}</div>
                  <div className="proj-card-links">
                    {p.links.github && (
                      <a href={p.links.github} target="_blank" rel="noopener noreferrer" className="proj-card-link">
                        GitHub ↗
                      </a>
                    )}
                    {p.links.demo && (
                      <a href={p.links.demo} target="_blank" rel="noopener noreferrer" className="proj-card-link">
                        Demo ↗
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> {/* end carousel-bg-wrap */}

        {/* Nav arrow buttons */}
        <div className="carousel-nav">
          <button className="carousel-nav-btn" onClick={() => scrollBy(-1)} aria-label="Previous project">
            ← prev
          </button>
          <span className="carousel-nav-sep">{cardIndex} / {PROJECTS.length}</span>
          <button className="carousel-nav-btn" onClick={() => scrollBy(1)} aria-label="Next project">
            next →
          </button>
        </div>

        {/* View all on GitHub */}
        <div className="carousel-github-link">
          <a
            href="https://github.com/mitanshu-2004"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View all projects on GitHub"
          >
            View all projects on GitHub ↗
          </a>
        </div>
      </div>
    </>
  )
}
