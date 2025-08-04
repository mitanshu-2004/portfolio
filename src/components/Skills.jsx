export default function Skills() {
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
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-gray-400 text-lg">Technologies and tools I work with in robotics and software development</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl border ${category.color} hover:border-opacity-40 transition-all duration-300 group`}
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
          ))}
        </div>
      </div>
    </section>
  )
}