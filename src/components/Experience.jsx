import { Calendar } from "lucide-react"

export default function Experience() {
  const timeline = [
    {
      year: "2025",
      title: "Project Intern - SarthakAI",
      desc: "Deployed and integrated three intelligent workstations with Agentic AI using NVIDIA NEMO, developed scalable sensor systems with Raspberry Pi and ESP32, and implemented robotic motion planning with vision-based package detection.",
      color: "bg-blue-500",
      skills: ["NVIDIA NEMO", "Raspberry Pi", "ESP32", "Computer Vision", "AI/ML"],
    },
    {
      year: "2024",
      title: "ROS Developer Intern - Nextup Robotics",
      desc: "Worked on controlling robotic arms using MoveIt and ROS, developed motion planning and control algorithms for real-time tasks, and tested robotic movements for smooth and accurate performance.",
      color: "bg-green-500",
      skills: ["ROS", "MoveIt", "Motion Planning", "C++", "Robotics"],
    },
    {
      year: "2023",
      title: "Core Member - A.T.O.M Robotics Society",
      desc: "Worked on robotics projects and represented college in national and international competitions like Robocon and International Rover Design Challenge. Organized workshops and tech events on campus.",
      color: "bg-purple-500",
      skills: ["Leadership", "Robotics", "Event Management", "Project Development"],
    },
    {
      year: "2022",
      title: "Started B.Tech Journey",
      desc: "Began pursuing B.Tech in Electronics and Communication Engineering at Maharaja Agrasen Institute of Technology with a minor specialization in AI/ML.",
      color: "bg-orange-500",
      skills: ["ECE", "AI/ML", "Academic Excellence", "Tech Foundations"],
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