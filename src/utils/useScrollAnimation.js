// utils/useScrollAnimation.js
"use client"
import { useEffect, useRef, useState } from 'react'

export const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold])

  return [ref, isVisible]
}

// Updated Experience.jsx with scroll animations
"use client"
import { Calendar } from "lucide-react"
import { useScrollAnimation } from "../utils/useScrollAnimation"

export default function Experience() {
  const [sectionRef, sectionVisible] = useScrollAnimation(0.1)
  
  const timeline = [
    {
      year: "2025",
      title: "Project Intern - SarthakAI",
      desc: "Leading deployment of three autonomous AI workstations powered by NVIDIA NeMo framework for intelligent task automation. Architected IoT sensor networks using Raspberry Pi 4 and ESP32 microcontrollers for real-time data collection and processing. Implemented computer vision algorithms for robotic package detection and sorting, achieving 95% accuracy in object recognition.",
      color: "bg-blue-500",
      skills: ["NVIDIA NeMo", "Raspberry Pi", "ESP32", "Computer Vision", "PyTorch", "OpenCV"],
    },
    {
      year: "2024",
      title: "ROS Developer Intern - Nextup Robotics",
      desc: "Developed advanced motion planning algorithms for 6-DOF robotic manipulators using MoveIt framework and ROS Noetic. Implemented inverse kinematics solutions and trajectory optimization for pick-and-place operations. Reduced task execution time by 30% through optimized path planning and real-time collision avoidance systems.",
      color: "bg-green-500",
      skills: ["ROS", "MoveIt", "C++", "Motion Planning", "Gazebo", "URDF"],
    },
    {
      year: "2023",
      title: "Core Member - A.T.O.M Robotics Society",
      desc: "Developed hexapod walking robot with adaptive gait control and 6-DOF robotic arm for precise manipulation tasks. Participated in ABU Robocon, International Rover Challenge (IRC), and multiple national hackathons. Worked together in organizing technical workshops on embedded robotics and other various topics for students.",
      color: "bg-purple-500",
      skills: ["Hexapod Design", "6-DOF Robotics", "ROS", "Arduino", "Hackathons", "Team Leadership"],
    },
    {
      year: "2022",
      title: "Started B.Tech Journey",
      desc: "Commenced Bachelor of Technology in Electronics & Communication Engineering at Maharaja Agrasen Institute of Technology, Delhi. Specialized in AI/ML minor with focus on embedded systems and signal processing. Maintained 8.5+ CGPA while actively participating in technical competitions and research projects.",
      color: "bg-orange-500",
      skills: ["Digital Signal Processing", "Microprocessors", "AI/ML", "MATLAB", "Embedded C"],
    },
    {
      year: "2021",
      title: "Started Coding Journey",
      desc: "Initiated programming journey with Python, developing custom Discord bots with advanced features like music streaming, moderation tools, and database integration. Successfully delivered 10+ freelance projects on Fiverr and Upwork, earning 5-star ratings and building foundational skills in API development and database management.",
      color: "bg-cyan-500",
      skills: ["Python", "Discord.py", "MySQL", "REST APIs", "Asyncio", "Git"],
    },
  ]

  return (
    <section id="experience" className="py-24 px-6 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Professional Journey</h2>
          <p className="text-gray-400 text-lg">My path in robotics and software development</p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-green-500 via-purple-500 to-orange-500"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const [itemRef, itemVisible] = useScrollAnimation(0.2)
              
              return (
                <div 
                  key={index} 
                  ref={itemRef}
                  className={`flex gap-8 items-start group transition-all duration-700 ${
                    itemVisible 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div
                    className={`flex-shrink-0 w-16 h-16 ${item.color} rounded-full flex items-center justify-center relative z-10 group-hover:scale-110 transition-all duration-300 shadow-lg`}
                  >
                    <span className="text-white font-bold text-sm">{item.year}</span>
                  </div>
                  <div className="flex-1 pb-8 bg-gray-800 rounded-xl p-8 group-hover:bg-gray-750 transition-all duration-300 border border-gray-700 group-hover:border-gray-600">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar size={16} className="text-gray-400" />
                      <span className="text-gray-400 text-sm">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">{item.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-lg border border-gray-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

// Updated Projects.jsx with scroll animations
"use client"
import { ExternalLink, Github, Gamepad2, Cpu, Bug, Zap } from "lucide-react"
import { useScrollAnimation } from "../utils/useScrollAnimation"

export default function Projects() {
  const [sectionRef, sectionVisible] = useScrollAnimation(0.1)
  
  const projects = [
    {
      title: "6 DOF Robotic ARM",
      description: "Designed, assembled, and programmed a 6 DOF robotic arm with stepper calibration and ROS-based control. Built a browser-based control panel with real-time video feedback and WebSocket-based command execution, enabling remote teleoperation and real-time diagnostics.",
      tech: ["Arduino Mega", "ROS", "MoveIt", "Python", "C++", "JavaScript", "WebSockets", "OpenCV"],
      github: "https://github.com/mitanshu-2004",
      hasGithub: true,
      hasLive: false,
      icon: <Cpu className="w-6 h-6" />,
      color: "text-blue-400",
    },
    {
      title: "HEXAPOD",
      description: "Simulated and validated hexapod locomotion in ROS2/Gazebo using inverse kinematics and custom gait algorithms for stable multi-legged walking. Deployed real-time control algorithms on physical hardware via Raspberry Pi and Dockerized ROS2 environments.",
      tech: ["ROS2", "Gazebo", "Rviz", "Raspberry Pi", "Docker", "Python", "Fusion 360", "ROS2 Control"],
      github: "https://github.com/atom-robotics-lab/Hexapod",
      hasGithub: true,
      hasLive: false,
      icon: <Bug className="w-6 h-6" />,
      color: "text-green-400",
    },
    {
      title: "Interactive Chess Game",
      description: "Developed an interactive browser-based chess game using React, with real-time move validations. Integrated UCI-based Stockfish engine for AI gameplay with real-time multiplayer mode and move evaluation, achieving seamless play with low-latency feedback on Firebase.",
      tech: ["React", "JavaScript", "HTML", "CSS", "Stockfish Engine (UCI)", "Node.js", "Express", "Firebase"],
      github: "https://github.com/mitanshu-2004/chess",
      live: "https://chess-two-black.vercel.app/",
      hasGithub: true,
      hasLive: true,
      icon: <Gamepad2 className="w-6 h-6" />,
      color: "text-purple-400",
    },
    {
      title: "Scalable IoT Sensor System",
      description: "Developed a fully scalable sensor system using Raspberry Pi and multiple ESP32 via client-server architecture to collect particular and precise data and send it to a platform for analysis. Features real-time data processing and remote monitoring capabilities.",
      tech: ["Raspberry Pi", "ESP32", "Python", "Client-Server Architecture", "IoT", "Data Analytics", "REST APIs"],
      hasGithub: false,
      hasLive: false,
      icon: <Zap className="w-6 h-6" />,
      color: "text-orange-400",
    },
  ]

  return (
    <section id="projects" className="py-24 px-6 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 text-lg">Robotics, IoT, and web development projects I've built</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const [projectRef, projectVisible] = useScrollAnimation(0.2)
            
            return (
              <div
                key={index}
                ref={projectRef}
                className={`bg-gray-900 rounded-xl p-8 hover:bg-gray-850 transition-all duration-700 border border-gray-800 hover:border-gray-700 group ${
                  projectVisible 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
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
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Updated Skills.jsx with scroll animations
"use client"
import { useScrollAnimation } from "../utils/useScrollAnimation"

export default function Skills() {
  const [sectionRef, sectionVisible] = useScrollAnimation(0.1)
  
  const skillCategories = [
    {
      title: "IoT & Robotics",
      skills: ["Arduino", "Arduino Mega", "ESP32", "Raspberry Pi", "ROS", "ROS2", "MoveIt", "Sensor Integration", "Fusion 360"],
      color: "border-blue-500/20 bg-blue-500/5",
      iconColor: "text-blue-400",
    },
    {
      title: "Programming Languages",
      skills: ["Python", "C++", "JavaScript"],
      color: "border-green-500/20 bg-green-500/5",
      iconColor: "text-green-400",
    },
    {
      title: "Web Development",
      skills: ["React", "Node.js", "Express", "Firebase", "REST APIs", "WebSockets", "HTML", "CSS", "Stockfish Engine (UCI)"],
      color: "border-purple-500/20 bg-purple-500/5",
      iconColor: "text-purple-400",
    },
    {
      title: "Development Tools & Platforms",
      skills: ["Git", "Docker", "Linux", "Gazebo", "Rviz", "ROS2 Control", "OpenCV"],
      color: "border-orange-500/20 bg-orange-500/5",
      iconColor: "text-orange-400",
    },
  ]

  return (
    <section id="skills" className="py-24 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-gray-400 text-lg">Technologies and tools I work with in robotics and software development</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => {
            const [categoryRef, categoryVisible] = useScrollAnimation(0.3)
            
            return (
              <div
                key={index}
                ref={categoryRef}
                className={`p-6 rounded-xl border ${category.color} hover:border-opacity-40 transition-all duration-700 group ${
                  categoryVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <h3 className={`text-lg font-semibold mb-4 ${category.iconColor} group-hover:scale-105 transition-transform`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 bg-gray-800 text-gray-300 text-sm rounded-lg border border-gray-700 hover:border-gray-600 hover:bg-gray-750 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// CSS additions for smooth scrolling (add to your global CSS)
/*
html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
*/