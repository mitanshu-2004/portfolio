import Link from 'next/link'

export default function Hero() {
  return (
    <section id="hero" aria-label="Introduction">

      {/* ── Coffee Mug ── */}
      <div className="obj obj-coffee" aria-hidden="true">
        <svg width="120" height="150" viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="mugGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#e8e0d0"/>
              <stop offset="50%" stopColor="#f5f0e8"/>
              <stop offset="100%" stopColor="#d4c8b4"/>
            </linearGradient>
            <linearGradient id="coffeeGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6b3f1f"/>
              <stop offset="100%" stopColor="#3d200a"/>
            </linearGradient>
            <linearGradient id="saucerGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f0ebe0"/>
              <stop offset="100%" stopColor="#d8d0c0"/>
            </linearGradient>
          </defs>
          <path className="hero-steam s1" d="M42 32 Q36 22 42 12" stroke="#8b7355" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5"/>
          <path className="hero-steam s2" d="M57 28 Q51 18 57 8" stroke="#8b7355" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5"/>
          <path className="hero-steam s3" d="M72 32 Q66 22 72 12" stroke="#8b7355" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5"/>
          <ellipse cx="58" cy="134" rx="44" ry="7" fill="#0d0d0d" opacity="0.08"/>
          <ellipse cx="58" cy="130" rx="44" ry="9" fill="url(#saucerGrad)" stroke="#c4b89a" strokeWidth="1.2"/>
          <ellipse cx="58" cy="128" rx="28" ry="5" fill="none" stroke="#c4b89a" strokeWidth="0.8" opacity="0.5"/>
          <path d="M24 42 Q22 95 26 112 Q34 124 58 124 Q82 124 90 112 Q94 95 92 42 Z" fill="url(#mugGrad)" stroke="#b8a882" strokeWidth="1.5"/>
          <ellipse cx="58" cy="42" rx="34" ry="9" fill="#f0ebe0" stroke="#b8a882" strokeWidth="1.5"/>
          <ellipse cx="58" cy="42" rx="28" ry="6.5" fill="url(#coffeeGrad)"/>
          <ellipse cx="50" cy="40" rx="8" ry="2.5" fill="#8b5e3c" opacity="0.4"/>
          <path d="M92 62 Q118 62 118 84 Q118 106 92 106" stroke="#b8a882" strokeWidth="5" fill="none" strokeLinecap="round"/>
          <path d="M92 62 Q112 62 112 84 Q112 106 92 106" stroke="#d4c8b4" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <path d="M25 80 Q93 80 93 80" stroke="#c4b89a" strokeWidth="1" opacity="0.4"/>
          <text x="44" y="98" fontSize="18" opacity="0.18">♥</text>
          <text x="36" y="68" fontSize="7" fill="#8b7355" opacity="0.5" fontFamily="Georgia, serif" letterSpacing="0.1em">COFFEE</text>
        </svg>
      </div>

      {/* ── Vinyl Record ── */}
      <div className="obj obj-vinyl" aria-hidden="true">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="vinylGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#2a2a2a"/>
              <stop offset="35%" stopColor="#1a1a1a"/>
              <stop offset="70%" stopColor="#111"/>
              <stop offset="100%" stopColor="#0d0d0d"/>
            </radialGradient>
            <radialGradient id="labelGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#7c3aed"/>
              <stop offset="100%" stopColor="#5b21b6"/>
            </radialGradient>
          </defs>
          <ellipse cx="60" cy="113" rx="50" ry="6" fill="#0d0d0d" opacity="0.15"/>
          <g className="hero-vinyl-spin" style={{transformOrigin:'60px 60px'}}>
            <circle cx="60" cy="60" r="54" fill="url(#vinylGrad)"/>
            <circle cx="60" cy="60" r="48" fill="none" stroke="#2a2a2a" strokeWidth="0.8"/>
            <circle cx="60" cy="60" r="44" fill="none" stroke="#2a2a2a" strokeWidth="0.8"/>
            <circle cx="60" cy="60" r="40" fill="none" stroke="#2a2a2a" strokeWidth="0.8"/>
            <circle cx="60" cy="60" r="36" fill="none" stroke="#2a2a2a" strokeWidth="0.8"/>
            <circle cx="60" cy="60" r="32" fill="none" stroke="#333" strokeWidth="0.6"/>
            <path d="M20 30 Q60 15 100 40" stroke="#333" strokeWidth="1" fill="none" opacity="0.4"/>
            <circle cx="60" cy="60" r="20" fill="url(#labelGrad)"/>
            <text x="60" y="55" fontSize="5.5" fill="white" fontFamily="monospace" textAnchor="middle" opacity="0.9" letterSpacing="0.05em">lo-fi</text>
            <text x="60" y="63" fontSize="5" fill="white" fontFamily="monospace" textAnchor="middle" opacity="0.7">beats</text>
            <text x="60" y="71" fontSize="4.5" fill="white" fontFamily="monospace" textAnchor="middle" opacity="0.6">to code to</text>
            <circle cx="60" cy="60" r="3" fill="#0d0d0d"/>
            <ellipse cx="38" cy="38" rx="10" ry="6" fill="white" opacity="0.04" transform="rotate(-30 38 38)"/>
          </g>
        </svg>
      </div>

      {/* ── Headphones ── */}
      <div className="obj obj-headphones" aria-hidden="true">
        <svg width="150" height="155" viewBox="0 0 150 155" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="hpBand" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2c2c2c"/>
              <stop offset="100%" stopColor="#1a1a1a"/>
            </linearGradient>
            <linearGradient id="hpCup" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#383838"/>
              <stop offset="100%" stopColor="#1e1e1e"/>
            </linearGradient>
            <linearGradient id="hpPad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3a3028"/>
              <stop offset="100%" stopColor="#1e1810"/>
            </linearGradient>
          </defs>
          <ellipse cx="75" cy="150" rx="50" ry="5" fill="#0d0d0d" opacity="0.1"/>
          <path d="M22 88 Q22 25 75 22 Q128 19 128 88" stroke="url(#hpBand)" strokeWidth="10" fill="none" strokeLinecap="round"/>
          <path d="M26 84 Q26 32 75 29 Q124 26 124 84" stroke="#555" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5"/>
          <rect x="5" y="80" width="36" height="52" rx="16" fill="url(#hpCup)" stroke="#444" strokeWidth="1.5"/>
          <rect x="10" y="86" width="26" height="40" rx="12" fill="url(#hpPad)"/>
          <circle cx="23" cy="106" r="9" fill="#2a2a2a" stroke="#555" strokeWidth="0.8"/>
          <circle cx="23" cy="106" r="4" fill="#333"/>
          <circle cx="23" cy="106" r="1.5" fill="#555"/>
          <rect x="9" y="120" width="28" height="4" rx="2" fill="#7c3aed" opacity="0.8"/>
          <rect x="109" y="80" width="36" height="52" rx="16" fill="url(#hpCup)" stroke="#444" strokeWidth="1.5"/>
          <rect x="114" y="86" width="26" height="40" rx="12" fill="url(#hpPad)"/>
          <circle cx="127" cy="106" r="9" fill="#2a2a2a" stroke="#555" strokeWidth="0.8"/>
          <circle cx="127" cy="106" r="4" fill="#333"/>
          <circle cx="127" cy="106" r="1.5" fill="#555"/>
          <rect x="113" y="120" width="28" height="4" rx="2" fill="#7c3aed" opacity="0.8"/>
          <path d="M23 132 Q23 148 40 152 Q58 155 75 152" stroke="#222" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          <rect x="66" y="142" width="18" height="22" rx="5" fill="#1e1e1e" stroke="#444" strokeWidth="1"/>
          <rect x="70" y="147" width="10" height="2" rx="1" fill="#555"/>
          <rect x="70" y="151" width="10" height="2" rx="1" fill="#555"/>
          <rect x="70" y="155" width="10" height="2" rx="1" fill="#555"/>
          <text x="52" y="30" fontSize="20" fill="#7c3aed" opacity="0.3">♪</text>
          <text x="90" y="22" fontSize="14" fill="#7c3aed" opacity="0.2">♫</text>
        </svg>
      </div>

      {/* ── Laptop ── */}
      <div className="obj obj-laptop" aria-hidden="true">
        <svg width="280" height="195" viewBox="0 0 280 195" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a1a2e"/>
              <stop offset="100%" stopColor="#16213e"/>
            </linearGradient>
            <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#d0cec8"/>
              <stop offset="100%" stopColor="#b8b4ac"/>
            </linearGradient>
            <linearGradient id="lidGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#c8c4bc"/>
              <stop offset="100%" stopColor="#b0aca4"/>
            </linearGradient>
          </defs>
          <rect x="18" y="8" width="244" height="152" rx="10" fill="url(#lidGrad)" stroke="#a0a098" strokeWidth="1.5"/>
          <rect x="26" y="16" width="228" height="136" rx="6" fill="url(#screenGrad)"/>
          <rect x="26" y="16" width="228" height="136" rx="6" fill="#0f3460" opacity="0.3"/>
          <rect x="32" y="22" width="216" height="124" rx="4" fill="#0d1117"/>
          <rect x="32" y="22" width="216" height="18" rx="4" fill="#161b22"/>
          <circle cx="44" cy="31" r="4" fill="#ff5f57"/>
          <circle cx="56" cy="31" r="4" fill="#ffbd2e"/>
          <circle cx="68" cy="31" r="4" fill="#28c840"/>
          <rect x="80" y="25" width="70" height="12" rx="2" fill="#0d1117"/>
          <text x="86" y="34" fontSize="6" fill="#8b949e" fontFamily="monospace">main.py ×</text>
          <text x="38" y="56" fontSize="6.5" fill="#ff7b72" fontFamily="monospace">import</text>
          <text x="72" y="56" fontSize="6.5" fill="#e6edf3" fontFamily="monospace"> torch, rclpy</text>
          <text x="38" y="80" fontSize="6.5" fill="#ff7b72" fontFamily="monospace">def</text>
          <text x="56" y="80" fontSize="6.5" fill="#d2a8ff" fontFamily="monospace"> solve_ik</text>
          <text x="106" y="80" fontSize="6.5" fill="#e6edf3" fontFamily="monospace">(target):</text>
          <text x="38" y="92" fontSize="6.5" fill="#e6edf3" fontFamily="monospace">  θ = </text>
          <text x="62" y="92" fontSize="6.5" fill="#79c0ff" fontFamily="monospace">compute</text>
          <text x="104" y="92" fontSize="6.5" fill="#e6edf3" fontFamily="monospace">(target)</text>
          <text x="38" y="104" fontSize="6.5" fill="#ff7b72" fontFamily="monospace">  return</text>
          <text x="80" y="104" fontSize="6.5" fill="#e6edf3" fontFamily="monospace"> θ<tspan className="hero-caret" fill="#58a6ff">█</tspan></text>
          <rect x="32" y="98" width="216" height="10" fill="#388bfd" opacity="0.1"/>
          <text x="34" y="56" fontSize="6" fill="#484f58" fontFamily="monospace">1</text>
          <text x="34" y="68" fontSize="6" fill="#484f58" fontFamily="monospace">2</text>
          <text x="34" y="80" fontSize="6" fill="#484f58" fontFamily="monospace">3</text>
          <text x="34" y="92" fontSize="6" fill="#484f58" fontFamily="monospace">4</text>
          <text x="34" y="104" fontSize="6" fill="#388bfd" fontFamily="monospace">5</text>
          <text x="34" y="116" fontSize="6" fill="#484f58" fontFamily="monospace">6</text>
          <rect x="32" y="118" width="216" height="28" fill="#0d1117"/>
          <line x1="32" y1="118" x2="248" y2="118" stroke="#30363d" strokeWidth="1"/>
          <text x="38" y="128" fontSize="6" fill="#3fb950" fontFamily="monospace">✓ ROS2 node running</text>
          <text x="38" y="138" fontSize="6" fill="#58a6ff" fontFamily="monospace">$ python train.py --epochs 50<tspan className="hero-caret" fill="#58a6ff">_</tspan></text>
          <circle cx="140" cy="12" r="3" fill="#30363d"/>
          <circle cx="140" cy="12" r="1.5" fill="#21262d"/>
          <path d="M4 162 Q0 170 10 172 L270 172 Q280 170 276 162 L258 158 L22 158 Z" fill="url(#bodyGrad)" stroke="#a0a098" strokeWidth="1"/>
          <g fill="#c0bcb4" opacity="0.6">
            <rect x="22" y="159" width="8" height="5" rx="1.5"/>
            <rect x="32" y="159" width="8" height="5" rx="1.5"/>
            <rect x="42" y="159" width="8" height="5" rx="1.5"/>
            <rect x="52" y="159" width="8" height="5" rx="1.5"/>
            <rect x="62" y="159" width="8" height="5" rx="1.5"/>
            <rect x="72" y="159" width="8" height="5" rx="1.5"/>
            <rect x="82" y="159" width="8" height="5" rx="1.5"/>
            <rect x="92" y="159" width="8" height="5" rx="1.5"/>
            <rect x="175" y="159" width="8" height="5" rx="1.5"/>
            <rect x="185" y="159" width="8" height="5" rx="1.5"/>
            <rect x="195" y="159" width="8" height="5" rx="1.5"/>
            <rect x="205" y="159" width="8" height="5" rx="1.5"/>
            <rect x="215" y="159" width="8" height="5" rx="1.5"/>
            <rect x="225" y="159" width="8" height="5" rx="1.5"/>
            <rect x="235" y="159" width="8" height="5" rx="1.5"/>
            <rect x="245" y="159" width="8" height="5" rx="1.5"/>
            <rect x="105" y="159" width="60" height="5" rx="1.5"/>
          </g>
          <rect x="112" y="164" width="56" height="6" rx="2" fill="#c8c4bc" opacity="0.7"/>
          <ellipse cx="140" cy="185" rx="130" ry="8" fill="#0d0d0d" opacity="0.07"/>
        </svg>
      </div>

      {/* ── Sticky Note ── */}
      <div className="obj obj-sticky" aria-hidden="true">
        <svg width="175" height="175" viewBox="0 0 175 175" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="stickyShad" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="3" dy="4" stdDeviation="4" floodColor="#0d0d0d" floodOpacity="0.15"/>
            </filter>
          </defs>
          <rect x="28" y="22" width="120" height="120" rx="3" fill="#fcd34d" transform="rotate(8 88 82)" filter="url(#stickyShad)" opacity="0.5"/>
          <rect x="12" y="12" width="128" height="128" rx="3" fill="#fef08a" filter="url(#stickyShad)"/>
          <path d="M116 12 L140 12 L140 36 Z" fill="#0d0d0d" opacity="0.08"/>
          <path d="M116 12 L140 36 L116 36 Z" fill="#fde047"/>
          <circle cx="76" cy="15" r="5" fill="#dc2626" opacity="0.8"/>
          <circle cx="76" cy="15" r="2" fill="#ef4444"/>
          <text x="22" y="42" fontSize="9.5" fill="#78350f" fontFamily="Georgia, serif" fontWeight="bold" opacity="0.9">TODO</text>
          <line x1="22" y1="48" x2="130" y2="48" stroke="#a16207" strokeWidth="0.8" opacity="0.3"/>
          <text x="22" y="64" fontSize="7.5" fill="#92400e" fontFamily="monospace" opacity="0.8">✓ IK solver fixed</text>
          <text x="22" y="78" fontSize="7.5" fill="#92400e" fontFamily="monospace" opacity="0.8">✓ YOLO deployed</text>
          <text x="22" y="92" fontSize="7.5" fill="#a16207" fontFamily="monospace" opacity="0.9">→ RAG eval</text>
          <text x="22" y="106" fontSize="7.5" fill="#a16207" fontFamily="monospace" opacity="0.9">→ ROS2 sim test</text>
          <text x="22" y="120" fontSize="7.5" fill="#b45309" fontFamily="monospace" opacity="0.7">→ write docs</text>
          <line x1="22" y1="128" x2="130" y2="128" stroke="#a16207" strokeWidth="0.8" opacity="0.2"/>
          <circle cx="120" cy="108" r="10" stroke="#a16207" strokeWidth="1.2" fill="none" opacity="0.4"/>
          <circle cx="116" cy="105" r="1.5" fill="#a16207" opacity="0.4"/>
          <circle cx="124" cy="105" r="1.5" fill="#a16207" opacity="0.4"/>
          <path d="M116 112 Q120 116 124 112" stroke="#a16207" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.4"/>
        </svg>
      </div>

      {/* ── Hero Content ── */}
      <div className="container hero-content">
        <span className="hero-location">
          <span className="hero-availability-dot" aria-hidden="true" />
          Delhi, India · Actively looking
        </span>
        <h1 className="hero-name">Mitanshu Goel</h1>
        <p className="hero-descriptor">
          AI &amp; robotics systems — from embedded firmware to deployed
          inference pipelines, built under hardware constraints.
        </p>
        <div className="hero-links">
          <a
            href="https://github.com/mitanshu-2004"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
          <a
            href="https://linkedin.com/in/mitanshugoel"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
          <Link href="#chat">Ask the bot ↓</Link>
        </div>
      </div>

    </section>
  )
}
