import { Calendar } from "lucide-react"

export default function Experience() {
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
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Professional Journey</h2>
          <p className="text-gray-400 text-lg">My path in robotics and software development</p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-green-500 via-purple-500 to-orange-500"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-8 items-start group">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}