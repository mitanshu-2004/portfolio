import { Github, Linkedin, Mail, Instagram, Globe } from "lucide-react"

export default function SocialBar() {
  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/mitanshu-2004",
      label: "GitHub",
      color: "hover:text-white hover:bg-gray-800/80 hover:shadow-lg hover:shadow-white/20",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/mitanshu-goel-177624248",
      label: "LinkedIn",
      color: "hover:text-blue-400 hover:bg-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30",
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:mitanshug2004@gmail.com",
      label: "Email",
      color: "hover:text-green-400 hover:bg-green-500/20 hover:shadow-lg hover:shadow-green-500/30",
    },
    {
      icon: <Instagram size={20} />,
      href: "https://www.instagram.com/mitanshu._.05/",
      label: "Instagram",
      color: "hover:text-pink-400 hover:bg-pink-500/20 hover:shadow-lg hover:shadow-pink-500/30",
    },
  ]

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 bg-black/80 backdrop-blur-md border border-gray-700/50 rounded-full px-2 py-2 shadow-2xl shadow-cyan-500/10">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-sm -z-10"></div>
        
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={`p-3 text-gray-400 rounded-full transition-all duration-300 hover:scale-110 ${link.color}`}
            title={link.label}
            data-analytics-id={`social-${link.label.toLowerCase()}`}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  )
}