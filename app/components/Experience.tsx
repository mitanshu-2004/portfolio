import { Calendar, Building, Users, GraduationCap, Code } from "lucide-react"

export default function Experience() {
  const timeline = [
    {
      year: "2025",
      title: "AI and Robotics Intern - SarthakAI",
      desc: "Designing automated sorting systems combining computer vision and robotics for intelligent package handling. Building sensor networks using Raspberry Pi 4 and ESP32 microcontrollers for real-time data collection. Developing voice-controlled AI assistant using NVIDIA NeMo framework for hands-free system commands and task automation.",
      color: "bg-gradient-to-r from-cyan-500 to-blue-500",
      glowColor: "shadow-cyan-500/40",
      borderColor: "border-cyan-500/50",
      bgGradient: "bg-gradient-to-br from-cyan-500/10 to-blue-500/10",
      skills: ["NVIDIA NeMo", "Raspberry Pi", "ESP32", "Computer Vision", "PyTorch", "OpenCV", "YOLO", "Voice AI"],
      icon: <Building className="w-5 h-5" />,
    },
    {
      year: "2024",
      title: "Robotics Intern - Nextup Robotics",
      desc: "Developing advanced motion planning algorithms for 6-DOF robotic manipulators using MoveIt framework and ROS Noetic. Implementing inverse kinematics solutions and trajectory optimization for pick-and-place operations. Targeting 30% reduction in task execution time through optimized path planning and real-time collision avoidance systems.",
      color: "bg-gradient-to-r from-green-500 to-emerald-500",
      glowColor: "shadow-green-500/40",
      borderColor: "border-green-500/50",
      bgGradient: "bg-gradient-to-br from-green-500/10 to-emerald-500/10",
      skills: ["ROS", "MoveIt", "C++", "Motion Planning", "Gazebo", "URDF", "Inverse Kinematics"],
      icon: <Building className="w-5 h-5" />,
    },
    {
      year: "2023",
      title: "Core Member - A.T.O.M Robotics Society",
      desc: "Developed hexapod walking robot with adaptive gait control and 6-DOF robotic arm for precision manipulation. Competed in ABU Robocon and International Rover Challenge (IRC). Organized technical workshops on embedded robotics, ROS development, and AI integration for fellow students, fostering campus-wide technical learning.",
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      glowColor: "shadow-purple-500/40",
      borderColor: "border-purple-500/50",
      bgGradient: "bg-gradient-to-br from-purple-500/10 to-pink-500/10",
      skills: ["Hexapod Design", "6-DOF Robotics", "ROS", "Arduino", "Competition Robotics", "Team Leadership", "Technical Workshops"],
      icon: <Users className="w-5 h-5" />,
    },
    {
      year: "2022",
      title: "Started B.Tech in ECE - MAIT Delhi",
      desc: "Commenced Bachelor of Technology in Electronics & Communication Engineering with AI/ML minor specialization. Focusing on embedded systems, signal processing, and intelligent control systems. Maintaining 8.5+ CGPA while actively participating in technical competitions, hackathons, and research projects.",
      color: "bg-gradient-to-r from-orange-500 to-yellow-500",
      glowColor: "shadow-orange-500/40",
      borderColor: "border-orange-500/50",
      bgGradient: "bg-gradient-to-br from-orange-500/10 to-yellow-500/10",
      skills: ["Digital Signal Processing", "Microprocessors", "AI/ML", "MATLAB", "Embedded C", "Circuit Design"],
      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
      year: "2021",
      title: "Programming Journey Begins",
      desc: "Initiated programming journey with Python, developing sophisticated Discord bots with advanced features including music streaming, moderation tools, and database integration. Successfully delivered 10+ freelance projects on Fiverr and Upwork, earning consistent 5-star ratings while building foundational skills in API development and database management.",
      color: "bg-gradient-to-r from-pink-500 to-red-500",
      glowColor: "shadow-pink-500/40",
      borderColor: "border-pink-500/50",
      bgGradient: "bg-gradient-to-br from-pink-500/10 to-red-500/10",
      skills: ["Python", "Discord.py", "MySQL", "REST APIs", "Asyncio", "Git", "Freelance Development"],
      icon: <Code className="w-5 h-5" />,
    },
  ]

  return (
    <section id="experience" className="py-24 px-6 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">Journey</span>
          </h2>
          <p className="text-gray-400 text-lg">My path from student developer to systems engineer</p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-green-500 via-purple-500 via-orange-500 to-pink-500 rounded-full shadow-lg shadow-cyan-500/20"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-8 items-start group">
                <div
                  className={`flex-shrink-0 w-16 h-16 ${item.color} rounded-full flex items-center justify-center relative z-10 group-hover:scale-110 transition-all duration-300 shadow-lg ${item.glowColor} border-2 border-white/20`}
                >
                  <span className="text-white font-bold text-sm">{item.year}</span>
                </div>
                <div className={`flex-1 pb-8 ${item.bgGradient} rounded-xl p-8 group-hover:scale-[1.02] transition-all duration-300 border ${item.borderColor} backdrop-blur-sm hover:shadow-xl ${item.glowColor}`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-gray-400" />
                      <span className="text-gray-400 text-sm">{item.year}</span>
                    </div>
                    
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="text-gray-400">{item.icon}</div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">{item.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-black/40 text-gray-300 text-sm rounded-lg border border-gray-600 hover:border-gray-500 hover:bg-black/60 transition-all duration-200 hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}