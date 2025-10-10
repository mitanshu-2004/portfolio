import { Building, Users } from "lucide-react";

export default function Experience() {
  const timeline = [
    {
      year: "2025",
      title: "Robotics and Machine Learning Intern - SarthakAI",
      desc: `Engineered an end-to-end AI system, integrating a custom-trained YOLOv8 model for real-time package conditional analysis and NVIDIA Nemo model for voice control. 
Designed and deployed a real-time IoT data pipeline to collect and analyze environmental telemetry data, enabling predictive analysis of in-transit conditions.`,
      skills: ["YOLOv8", "NVIDIA NeMo", "IoT Data Pipelines", "Computer Vision", "Python", "Voice AI"],
      icon: <Building className="w-5 h-5" />,
      color: "bg-gradient-to-r from-cyan-500 to-blue-500",
      glowColor: "shadow-cyan-500/40",
      borderColor: "border-cyan-500/40",
      bgGradient: "bg-gradient-to-br from-cyan-500/5 to-blue-500/5",
    },
    {
      year: "2024",
      title: "Robotics Intern - Nextup Robotics",
      desc: `Increased execution speed of ongoing robotics project by 50% by developing optimized C++ programs. 
Boosted positional accuracy and system reliability by 15% by implementing advanced control algorithms and statistical validation within ROS.`,
      skills: ["C++", "ROS", "Motion Planning", "Control Algorithms", "Robotics Optimization", "Gazebo", "URDF"],
      icon: <Building className="w-5 h-5" />,
      color: "bg-gradient-to-r from-green-500 to-emerald-500",
      glowColor: "shadow-green-500/40",
      borderColor: "border-green-500/40",
      bgGradient: "bg-gradient-to-br from-green-500/5 to-emerald-500/5",
    },
    {
      year: "2023",
      title: "Core Technical Member - A.T.O.M Robotics",
      desc: `Organized and led technical workshops, project demonstrations, and competitive events for the student community. 
Represented the institute in national-level robotics competitions.`,
      skills: ["Technical Workshops", "Project Demos", "Competition Robotics", "Team Leadership", "Embedded Systems", "ROS"],
      icon: <Users className="w-5 h-5" />,
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      glowColor: "shadow-purple-500/40",
      borderColor: "border-purple-500/40",
      bgGradient: "bg-gradient-to-br from-purple-500/5 to-pink-500/5",
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Neon background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px]"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Experience</span>
          </h2>
        </div>

        <div className="space-y-12">
          {timeline.map((item, index) => (
            <div key={index} className="flex gap-6 items-start group">
              <div className={`flex-shrink-0 w-20 h-20 ${item.color} rounded-full flex items-center justify-center text-white font-bold text-sm border-2 ${item.borderColor} shadow-lg ${item.glowColor} transition-transform duration-300 group-hover:scale-110`}>
                {item.year}
              </div>
              <div className={`flex-1 p-6 rounded-xl border backdrop-blur-sm hover:shadow-2xl ${item.borderColor} ${item.bgGradient} ${item.glowColor} transition-all duration-300 group-hover:scale-[1.02]`}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-gray-400">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-gray-300 mb-3 whitespace-pre-line leading-relaxed">{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-black/40 text-gray-300 text-sm rounded-lg border border-gray-700 hover:border-gray-500 hover:bg-black/60 transition-all duration-200 hover:text-white">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
