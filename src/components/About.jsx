"use client"

import { ArrowRight, Download, Mail } from "lucide-react"
import { scrollToSection } from "../utils/helpers"

export default function HeroAbout() {
  return (
    <section
      id="hero-about"
      className="min-h-screen flex flex-col justify-center px-6 py-12 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Tagline */}
        <span className="inline-block mb-4 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium border border-blue-500/20">
          Open to Robotics & Software Roles
        </span>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
          Mitanshu <span className="text-blue-400">Goel</span>
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
          Robotics Software Engineer | IoT + Web Developer
        </p>

        {/* About Paragraph */}
        <div className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto mt-4">
          <p>
            I'm a robotics and IoT enthusiast with a passion for building systems that connect the physical and digital world. Currently pursuing B.Tech in ECE with a minor in AI/ML, I enjoy working on projects that blend hardware like robotic arms and embedded sensors with full-stack web development. Whether it's motion planning with ROS or crafting interactive user interfaces, I love solving real-world problems using code and circuits.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-8 mb-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">1+</div>
            <div className="text-sm text-gray-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">4</div>
            <div className="text-sm text-gray-400">Major Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">2</div>
            <div className="text-sm text-gray-400">Internships</div>
          </div>
        </div>

        {/* Buttons Below About */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <button
            onClick={() => scrollToSection("projects")}
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105"
          >
            View My Work <ArrowRight size={18} />
          </button>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white px-8 py-4 rounded-lg font-medium transition-colors border border-gray-600 hover:border-gray-500"
          >
            <Download size={18} />
            Resume
          </a>

          
        </div>
      </div>
    </section>
  )
}