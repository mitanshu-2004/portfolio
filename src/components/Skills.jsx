export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "c++", "Python", "SQL"],
      color: "border-blue-500/20 bg-blue-500/5",
      iconColor: "text-blue-400",
    },
    {
      title: "Full-Stack Development",
      skills: ["React", "Next.js", "Tailwind CSS", "FastAPI", "Express.js"],
      color: "border-green-500/20 bg-green-500/5",
      iconColor: "text-green-400",
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "Redis"],
      color: "border-yellow-500/20 bg-yellow-500/5",
      iconColor: "text-yellow-400",
    },
    
    {
      title: "Others",
      skills: ["Git", "Docker","Linux"],
      color: "border-pink-500/20 bg-pink-500/5",
      iconColor: "text-pink-400",
    },
  ]

  return (
    <section id="skills" className="py-24 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-gray-400 text-lg">
            Core technologies and tools I use to build full-stack applications,
            manage data, and deploy cloud-native solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl border ${category.color} hover:border-opacity-40 transition-all duration-300 group`}
            >
              <h3
                className={`text-lg font-semibold mb-4 ${category.iconColor} group-hover:scale-105 transition-transform`}
              >
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
