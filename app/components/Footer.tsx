"use client"

import { Mail, MapPin, Phone, GraduationCap } from "lucide-react"

const scrollToSection = (sectionId: string) => {
  setTimeout(() => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }, 100);
}

export default function Footer() {
  return (
    <footer id="footer" className="bg-black border-t border-gray-800/50 py-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Mitanshu<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">.</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Systems engineer focused on building integrated solutions that bridge hardware and software—from embedded robotics to AI-powered applications.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">Quick Navigation</h4>
            <div className="space-y-2">
              {[
                { name: "About", id: "hero-about" },
                { name: "Experience", id: "experience" },
                { name: "Projects", id: "projects" },
                { name: "Skills", id: "skills" }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm hover:translate-x-1 transition-transform duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Get in Touch</h4>
            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex items-center gap-3 group hover:text-cyan-400 transition-colors">
                <Mail size={18} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>mitanshug2004@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 group hover:text-green-400 transition-colors">
                <MapPin size={18} className="text-green-400 group-hover:scale-110 transition-transform" />
                <span>Delhi, India</span>
              </div>
              <div className="flex items-center gap-3 group hover:text-orange-400 transition-colors">
                <Phone size={18} className="text-orange-400 group-hover:scale-110 transition-transform" />
                <span>+91 8595657583</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}