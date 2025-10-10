import { ExternalLink, Github, Gamepad2, Cpu, Bug, Zap, Shield, TrendingUp } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "6 DOF Robotic ARM",
      description:
        "Designed, assembled, and programmed a complete 6-DOF robotic arm system from scratch. ROS-based motion planning with MoveIt, and a custom web interface for remote teleoperation. Includes real-time video feedback via OpenCV and WebSocket-based command execution for seamless human-robot interaction.",
      tech: ["Arduino Mega", "ROS", "MoveIt", "Gazebo", "Python", "C++", "JavaScript", "WebSockets", "OpenCV"],
      hasGithub: false,
      hasLive: false,
      icon: <Cpu className="w-6 h-6" />,
      color: "text-cyan-400",
      glowColor: "shadow-cyan-500/30",
      borderColor: "border-cyan-500/30",
      bgGradient: "bg-gradient-to-br from-cyan-500/5 to-blue-500/5",
    },
    {
      title: "MiniRAG",
      description:
        "Built an intelligent question-answering system for industrial safety documents, architecting a complete Retrieval-Augmented Generation (RAG) pipeline. Increased answer relevance by training and deploying a logistic regression re-ranker with Scikit-learn, combining semantic similarity, keyword matching, and custom features.",
      tech: ["FastAPI", "Python", "ChromaDB", "Sentence Transformer", "SQLite", "Scikit-learn"],
      hasGithub: true,
      github: "https://github.com/mitanshu-2004/MiniRag-Reranker",
      hasLive: false,
      icon: <Zap className="w-6 h-6" />,
      color: "text-purple-400",
      glowColor: "shadow-purple-500/30",
      borderColor: "border-purple-500/30",
      bgGradient: "bg-gradient-to-br from-purple-500/5 to-pink-500/5",
    },
    
    {
      title: "HEXAPOD Walking Robot",
      description:
        "Developed stable locomotion algorithms for a six-legged robot using inverse kinematics and custom gait patterns. Simulated in ROS2/Gazebo environment, then deployed on physical hardware via Raspberry Pi using Dockerized ROS2 systems. Features adaptive gait control for various terrains and real-time stability monitoring.",
      tech: ["ROS2", "Gazebo", "Rviz", "Raspberry Pi", "Docker", "Python", "Fusion 360", "ROS2 Control", "Inverse Kinematics"],
      github: "https://github.com/atom-robotics-lab/Hexapod",
      hasGithub: true,
      hasLive: false,
      icon: <Bug className="w-6 h-6" />,
      color: "text-green-400",
      glowColor: "shadow-green-500/30",
      borderColor: "border-green-500/30",
      bgGradient: "bg-gradient-to-br from-green-500/5 to-emerald-500/5",
    },
    {
      title: "StockMetrics",
      description:
        "Built an analytics tool to study correlations between IT stock prices and financial indicators using Pandas and NumPy. Implemented multiple linear regression models and visualized results with Scikit-learn and Seaborn to evaluate factor significance.",
      tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "statsmodels", "Matplotlib", "Seaborn"],
      hasGithub: true,
      github: "https://github.com/mitanshu-2004/StockMetrics",
      hasLive: false,
      icon: <TrendingUp className="w-6 h-6" />,
      color: "text-yellow-400",
      glowColor: "shadow-yellow-500/30",
      borderColor: "border-yellow-500/30",
      bgGradient: "bg-gradient-to-br from-yellow-500/5 to-orange-500/5",
    },
    
    {
      title: "Interactive Chess Platform",
      description:
        "Built a real-time multiplayer chess game with AI integration. Features move validation, Stockfish engine integration for AI gameplay, Firebase real-time synchronization for multiplayer matches, and Express backend for game state management. Includes move evaluation and analysis features for player improvement.",
      tech: ["React", "JavaScript", "Stockfish Engine (UCI)", "Node.js", "Express", "Firebase", "Real-time APIs"],
      github: "https://github.com/mitanshu-2004/chess",
      live: "https://chess-two-black.vercel.app/",
      hasGithub: true,
      hasLive: true,
      icon: <Gamepad2 className="w-6 h-6" />,
      color: "text-pink-400",
      glowColor: "shadow-pink-500/30",
      borderColor: "border-pink-500/30",
      bgGradient: "bg-gradient-to-br from-pink-500/5 to-purple-500/5",
    },
    {
      title: "MEMORY VAULT - AI Assistant",
      description:
        "Built an intelligent personal memory assistant using semantic search capabilities. Features FastAPI backend with ChromaDB vector database for AI-powered note retrieval using Sentence Transformers. React frontend provides intuitive organization, tagging, and natural language search through personal memories and documents.",
      tech: ["FastAPI", "Python", "ChromaDB", "Sentence Transformers", "React", "JavaScript", "Vector Search", "AI/ML"],
      hasGithub: true,
      github: "https://github.com/mitanshu-2004/memory-assistant",
      hasLive: false,
      icon: <Zap className="w-6 h-6" />,
      color: "text-purple-400",
      glowColor: "shadow-purple-500/30",
      borderColor: "border-purple-500/30",
      bgGradient: "bg-gradient-to-br from-purple-500/5 to-pink-500/5",
    },
    
    
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Projects</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${project.bgGradient} rounded-xl p-8 hover:scale-[1.02] transition-all duration-500 border ${project.borderColor} hover:border-opacity-60 group backdrop-blur-sm hover:shadow-2xl ${project.glowColor}`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`${project.color} group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                      {project.title}
                    </h3>
                    <div className="flex gap-2 mt-2">
                      {project.hasGithub && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 text-xs font-medium rounded-full border bg-black/60 text-gray-300 border-gray-700 hover:bg-gray-800/80 hover:text-white hover:border-gray-500 transition-all inline-flex items-center gap-1.5 hover:shadow-lg hover:shadow-white/10"
                        >
                          <Github size={12} />
                          GitHub
                        </a>
                      )}
                      {project.hasLive && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 text-xs font-medium rounded-full border bg-cyan-500/20 text-cyan-400 border-cyan-500/50 hover:bg-cyan-500/30 hover:border-cyan-500/70 transition-all inline-flex items-center gap-1.5 hover:shadow-lg hover:shadow-cyan-500/20"
                        >
                          <ExternalLink size={12} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1.5 bg-black/40 text-gray-300 text-sm rounded-lg border border-gray-700 hover:border-gray-500 hover:bg-black/60 transition-all duration-200 hover:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
