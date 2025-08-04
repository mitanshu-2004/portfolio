"use client"

import { scrollToSection } from "../utils/helpers"

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Mitanshu<span className="text-blue-400">.</span>
            </h3>
            <p className="text-gray-400">
              Full-stack developer focused on writing useful code and building real systems—both web and hardware.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Let's Connect</h4>
            <p className="text-gray-400 text-sm">
              Open to new roles, freelance work, or team-ups. If it’s worth building, I’m interested.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">© 2025 Mitanshu Goel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
