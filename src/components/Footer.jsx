"use client"

import { Mail, MapPin, Phone } from "lucide-react"
import { scrollToSection } from "../utils/helpers"

export default function Footer() {
  return (
    <footer section id="footer" className="bg-gray-900 border-t border-gray-800 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Mitanshu<span className="text-blue-400">.</span>
            </h3>
            <p className="text-gray-400">
              Full-stack developer focused on writing useful code and building real systems—both web and hardware.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Experience", "Projects", "Skills"].map((item) => (
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

          {/* Get in Touch */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-blue-400" />
                <span>mitanshug2004@email.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-green-400" />
                <span>Delhi, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-orange-400" />
                <span>+91 8595657583</span> {/* Replace with actual number if needed */}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">© 2025 Mitanshu Goel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
