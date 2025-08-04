"use client"

import { ArrowRight, Download } from "lucide-react"
import { scrollToSection } from "../utils/helpers"

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative"
    >
      {/* Top-left corner fixed tag */}
      <div className="fixed top-4 left-4 z-50">
        <span className="inline-block px-3 py-1 bg-yellow-500/10 text-yellow-400 rounded-full text-xs font-medium border border-yellow-500/20 shadow-sm">
          Work in progress.....
        </span>
      </div>

      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-8">
          <span className="inline-block px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium border border-blue-500/20">
            Available for new opportunities
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Mitanshu <span className="text-blue-400">Goel</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
          Robotics Software Engineer | IoT & Web Systems Developer
        </p>

        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Tech enthusiast skilled in IoT, Robotics and Web Development. I blend embedded systems with real-world applications—building things like robotic arms, full-stack tools, and sensor-driven systems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={() => scrollToSection("projects")}
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105"
          >
            View My Work
            <ArrowRight size={18} />
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="inline-flex items-center gap-2 border border-gray-600 hover:border-gray-500 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:bg-gray-800"
          >
            Get in Touch
          </button>
          <a
            href="https://mitanshu.me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white px-8 py-4 rounded-lg font-medium transition-colors"
          >
            <Download size={18} />
            Resume
          </a>
        </div>
      </div>
    </section>
  )
}
