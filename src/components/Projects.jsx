import { ExternalLink, Github, Gamepad2, Cpu, Bug, Brain } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "6 DOF Robotic ARM",
      description:
        "Designed, assembled, and programmed a 6 DOF robotic arm with stepper calibration and ROS-based control. Built a browser-based control panel with real-time video feedback and WebSocket-based command execution for remote teleoperation.",
      tech: ["Arduino Mega", "ROS", "MoveIt", "Python", "C++", "JavaScript", "WebSockets", "OpenCV"],
      github: "https://github.com/mitanshu-2004",
      live: "https://mitanshu.me",
      icon: <Cpu className="w-6 h-6" />,
      color: "text-blue-400",
      status: "Production",
    },
    {
      title: "HEXAPOD Robot",
      description:
        "Simulated and validated hexapod locomotion in ROS2/Gazebo using inverse kinematics and custom gait algorithms for stable multi-legged walking. Deployed real-time control algorithms on physical hardware via Raspberry Pi.",
      tech: ["ROS2", "Gazebo", "Rviz", "Raspberry Pi", "Docker", "Python", "Fusion 360", "ROS2 Control"],
      github: "https://github.com/mitanshu-2004",
      live: "https://mitanshu.me",
      icon: <Bug className="w-6 h-6" />,
      color: "text-green-400",
      status: "Development",
    },
    {
      title: "Interactive Chess Game",
      description:
        "Developed an interactive browser-based chess game using React with real-time move validations. Integrated UCI-based Stockfish engine for AI gameplay with multiplayer mode and move evaluation on Firebase.",
      tech: ["React", "JavaScript", "Stockfish Engine", "Node.js", "Express", "Firebase", "HTML", "CSS"],
      github: "https://github.com/mitanshu-2004",
      live: "https://mitanshu.me",
      icon: <Gamepad2 className="w-6 h-6" />,
      color: "text-purple-400",
      status: "Live",
    },
    {
      title: "AI Workstation Integration",
      description:
        "Integrated Agentic AI using NVIDIA NEMO locally for TTS and STT with wake-word detection. Developed scalable sensor systems and implemented vision-based package detection for automated sorting tasks.",
      tech: ["NVIDIA NEMO", "Python", "AI/ML", "Computer Vision", "IoT", "Sensor Integration"],
      github: "https://github.com/mitanshu-2004",
      live: "https://mitanshu.me",
      icon: <Brain className="w-6 h-6" />,
      color: "text-orange-400",
      status: "Beta",
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "Production":
        return "bg-green-500/10 text-green-400 border-green-500/20"
      case "Live":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20"
      case "Beta":
        return "bg-orange-500/10 text-orange-400 border-orange-500/20"
      case "Development":
        return "bg-purple-500/10 text-purple-400 border-purple-500/20"
      default:
        return "bg-gray-500/10 text-gray-400 border-gray-500/20"
    }
  }

  return (
    <section id="projects" className="py-24 px-6 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 text-lg">Robotics, AI, and web development projects I've built</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-8 hover:bg-gray-850 transition-all duration-300 border border-gray-800 hover:border-gray-700 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`${project.color} group-hover:scale-110 transition-transform`}>{project.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(project.status)}`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1.5 bg-gray-800 text-gray-300 text-sm rounded-lg border border-gray-700 hover:border-gray-600 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4 border-t border-gray-800">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-medium"
                >
                  <Github size={18} />
                  Source Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 ${project.color} hover:opacity-80 transition-opacity font-medium`}
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}