import { Code, Cpu, Globe, Zap, Users, Award } from "lucide-react"

export default function About() {
  const highlights = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Robotics & ROS",
      description: "6 DOF arms, hexapods, MoveIt",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "IoT Systems",
      description: "ESP32, Raspberry Pi, sensors",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "React, Node.js, real-time apps",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Embedded Systems",
      description: "Arduino, C++, hardware control",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Leadership",
      description: "A.T.O.M Robotics Society core member",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Competitions",
      description: "Robocon, International Rover Challenge",
    },
  ]

  return (
    <section id="about" className="py-24 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-gray-400 text-lg">Tech enthusiast bridging robotics and web development</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              I'm a passionate Robotics Software Engineer and IoT developer currently pursuing B.Tech in ECE at Maharaja Agrasen Institute of Technology with a minor in AI/ML. I specialize in creating intelligent systems that bridge the physical and digital worlds.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              From developing 6 DOF robotic arms with ROS control to building interactive web applications, I enjoy tackling complex challenges that require both hardware expertise and software innovation. My experience ranges from motion planning algorithms to real-time multiplayer applications.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "3+", label: "Major Projects", color: "text-blue-400" },
                { number: "2+", label: "Years Experience", color: "text-green-400" },
                { number: "10+", label: "Technologies", color: "text-orange-400" },
                { number: "85%", label: "Academic Score", color: "text-purple-400" },
              ].map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gray-800 rounded-xl hover:bg-gray-750 transition-colors">
                  <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800 rounded-xl hover:bg-gray-750 transition-all duration-300 group"
              >
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}