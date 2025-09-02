"use client"

import { useState } from 'react';
import { ArrowRight, ExternalLink, X } from "lucide-react"

// Helper function to scroll to a section smoothly
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const ResumeModal = ({ onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div 
        className="bg-gray-800 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl border border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-white">My Resumes</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>
        <p className="text-gray-300 mb-6">
          My experience spans both software and robotics. To provide the most relevant details for different roles, I've created two focused versions of my resume.
        </p>
        <div className="flex flex-col gap-4">
          <a
            href="/software.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            <ExternalLink size={18} />
            Focus: Software & AI
          </a>
          <a
            href="/robotics.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            <ExternalLink size={18} />
            Focus: Robotics & Hardware
          </a>
        </div>
      </div>
    </div>
  );
};


export default function HeroAbout() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        id="hero-about"
        className="min-h-screen flex flex-col justify-center px-6 py-12 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative"
      >
        <div className="max-w-4xl mx-auto text-center">
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            Mitanshu <span className="text-blue-400">Goel</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            Software Developer | Robotics Engineer
          </p>
          
          <div className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto mt-4">
            <p>
             I am a developer who builds systems that connect software with the physical world. My experience covers full-stack web development with React and FastAPI, as well as programming robotic arms and legged robots using ROS/ROS2. I enjoy using AI to solve practical problems, from creating smart search in web apps to developing control systems for hardware. This allows me to build complete solutions from the user interface down to the embedded device.
            </p>
          </div>
          
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
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <button
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            >
              View My Work <ArrowRight size={18} />
            </button>

            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white px-8 py-4 rounded-lg font-medium transition-colors border border-gray-600 hover:border-gray-500"
            >
              <ExternalLink size={18} />
              View Resume
            </button>
          </div>
        </div>
      </section>

      {isModalOpen && <ResumeModal onClose={() => setIsModalOpen(false)} />}
    </>
  )
}

