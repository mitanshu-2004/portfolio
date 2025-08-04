import { ExternalLink, Github, Gamepad2, Cpu, Bug, Zap } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "6 DOF Robotic ARM",
      description:
        "Designed, assembled, and programmed a 6 DOF robotic arm with stepper calibration and ROS-based control. Built a browser-based control panel with real-time video feedback and WebSocket-based command execution, enabling remote teleoperation and real-time diagnostics.",
      tech: ["Arduino Mega", "ROS", "MoveIt", "Python", "C++", "JavaScript", "WebSockets", "OpenCV"],
      github: "https://github.com/mitanshu-2004",
      hasGithub: true,
      hasLive: false,
      icon: <Cpu className="w-6 h-6" />,
      color: "text-blue-400",
      status: "Production",
    },
    {
      title: "HEXAPOD",
      description:
        "Simulated and validated hexapod locomotion in ROS2/Gazebo using inverse kinematics and custom gait algorithms for stable multi-legged walking. Deployed real-time control algorithms on physical hardware via Raspberry Pi and Dockerized ROS2 environments.",
      tech: ["ROS2", "Gazebo", "Rviz", "Raspberry Pi", "Docker", "Python", "Fusion 360", "ROS2 Control"],
      github: "https://github.com/atom-robotics-lab/Hexapod",
      hasGithub: true,
      hasLive: false,
      icon: <Bug className="w-6 h-6" />,
      color: "text-green-400",
      status: "Development",
    },
    {
      title: "Interactive Chess Game",
      description:
        "Developed an interactive browser-based chess game using React, with real-time move validations. Integrated UCI-based Stockfish engine for AI gameplay with real-time multiplayer mode and move evaluation, achieving seamless play with low-latency feedback on Firebase.",
      tech: ["React", "JavaScript", "HTML", "CSS", "Stockfish Engine (UCI)", "Node.js", "Express", "Firebase"],
      github: "https://github.com/mitanshu-2004/chess",
      live: "https://chess-two-black.vercel.app/",
      hasGithub: true,
      hasLive: true,
      icon: <Gamepad2 className="w-6 h-6" />,
      color: "text-purple-400",
      status: "Live",
    },
    {
      title: "Scalable IoT Sensor System",
      description:
        "Developed a fully scalable sensor system using Raspberry Pi and multiple ESP32 via client-server architecture to collect particular and precise data and send it to a platform for analysis. Features real-time data processing and remote monitoring capabilities.",
      tech: ["Raspberry Pi", "ESP32", "Python", "Client-Server Architecture", "IoT", "Data Analytics", "REST APIs"],
      hasGithub: false,
      hasLive: false,
      icon: <Zap className="w-6 h-6" />,
      color: "text-orange-400",
      status: "Production",
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
          <p className="text-gray-400 text-lg">Robotics, IoT, and web development projects I've built</p>
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
                    <div className="flex gap-2 mt-2">
                      {project.hasGithub && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 text-xs font-medium rounded-full border bg-gray-800/60 text-gray-300 border-gray-700 hover:bg-gray-700/80 hover:text-white hover:border-gray-600 transition-all inline-flex items-center gap-1.5"
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
                          className="px-3 py-1 text-xs font-medium rounded-full border bg-blue-500/10 text-blue-400 border-blue-500/30 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all inline-flex items-center gap-1.5"
                        >
                          <ExternalLink size={12} />
                          Live
                        </a>
                      )}
                      
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1.5 bg-gray-800 text-gray-300 text-sm rounded-lg border border-gray-700 hover:border-gray-600 transition-colors"
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