"use client"

import { useState } from "react"
import { Mail, MapPin, Send, Clock } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Form submitted:", formData)
    alert("Thanks. I’ll reply soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-24 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-gray-400 text-lg">
            Have a project or just want to say hi? I’m all ears.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I'm open to freelance work, internships, full-time roles, or collaborations that mix code and creativity. 
              If you think I'd be a good fit—reach out.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-xl border border-gray-800">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <Mail size={20} className="text-blue-400" />
                </div>
                <div>
                  <div className="text-white font-medium">Email</div>
                  <div className="text-gray-400">mitanshugoel@email.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-xl border border-gray-800">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <MapPin size={20} className="text-green-400" />
                </div>
                <div>
                  <div className="text-white font-medium">Location</div>
                  <div className="text-gray-400">Delhi, India</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-xl border border-gray-800">
                <div className="p-3 bg-orange-500/10 rounded-lg">
                  <Clock size={20} className="text-orange-400" />
                </div>
                <div>
                  <div className="text-white font-medium">Response Time</div>
                  <div className="text-gray-400">Within 24 hours</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => handleChange("subject", e.target.value)}
                  className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  rows={6}
                  className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none resize-none transition-colors"
                  placeholder="Tell me about the idea or ask me anything."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-500/50 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 w-full justify-center"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
