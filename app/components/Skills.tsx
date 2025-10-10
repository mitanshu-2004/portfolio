import { Code, Cpu, Database, Wrench, Brain, Globe } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "C++", "JavaScript", "SQL", "Embedded C"],
      color: "border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/10",
      iconColor: "text-cyan-400",
      glowColor: "hover:shadow-cyan-500/30",
    },
    {
      title: "Robotics & Computer Vision",
      icon: <Cpu className="w-6 h-6" />,
      skills: ["ROS/ROS2", "MoveIt", "Gazebo", "ROS2 Control", "OpenCV", "YOLO", ],
      color: "border-green-500/30 bg-gradient-to-br from-green-500/10 to-emerald-500/10",
      iconColor: "text-green-400",
      glowColor: "hover:shadow-green-500/30",
    },
    {
      title: "Web Development",
      icon: <Globe className="w-6 h-6" />,
      skills: ["React", "FastAPI", "Express", "Tailwind CSS"],
      color: "border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-pink-500/10",
      iconColor: "text-purple-400",
      glowColor: "hover:shadow-purple-500/30",
    },
    {
      title: "Data Science and ML",
      icon: <Brain className="w-6 h-6" />,
      skills: ["Pandas", "NumPy", "SciPy", "RAG", "Scikit-learn", "seaborn"],
      color: "border-indigo-500/30 bg-gradient-to-br from-indigo-500/10 to-violet-500/10",
      iconColor: "text-indigo-400",
      glowColor: "hover:shadow-indigo-500/30",
    },
    
    {
      title: "Databases & Data",
      icon: <Database className="w-6 h-6" />,
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Firebase", "ChromaDB"],
      color: "border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 to-orange-500/10",
      iconColor: "text-yellow-400",
      glowColor: "hover:shadow-yellow-500/30",
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Git", "Docker", "Linux", "Google Colab", "Fusion 360"],
      color: "border-pink-500/30 bg-gradient-to-br from-pink-500/10 to-purple-500/10",
      iconColor: "text-pink-400",
      glowColor: "hover:shadow-pink-500/30",
    },
  ]

  return (
    <section id="skills" className="py-24 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(34,211,238,0.05),transparent_50%),radial-gradient(circle_at_75%_75%,rgba(168,85,247,0.05),transparent_50%)]"></div>
      <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-300"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">Skills</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl border ${category.color} ${category.glowColor} hover:border-opacity-60 transition-all duration-500 group backdrop-blur-sm hover:scale-[1.02] hover:shadow-2xl`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`${category.iconColor} group-hover:scale-110 transition-all duration-300`}>
                  {category.icon}
                </div>
                <h3
                  className={`text-lg font-semibold ${category.iconColor} group-hover:text-white transition-colors duration-300`}
                >
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-black/60 text-gray-300 text-sm rounded-lg border border-gray-700 hover:border-gray-500 hover:bg-black/80 hover:text-white transition-all duration-200 hover:shadow-lg hover:shadow-white/10"
                  >
                    {skill}
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