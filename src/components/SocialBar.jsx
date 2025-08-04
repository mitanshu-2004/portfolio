import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

export default function SocialBar() {
  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/mitanshu-2004",
      label: "GitHub",
      color: "hover:text-white hover:bg-gray-800",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com/in/mitanshugoel",
      label: "LinkedIn",
      color: "hover:text-blue-400 hover:bg-blue-500/10",
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:mitanshugoel@email.com",
      label: "Email",
      color: "hover:text-green-400 hover:bg-green-500/10",
    },
    {
      icon: <ExternalLink size={20} />,
      href: "/resume.pdf",
      label: "Resume",
      color: "hover:text-purple-400 hover:bg-purple-500/10",
    },
  ]

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-full px-2 py-2 shadow-xl">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={`p-3 text-gray-400 rounded-full transition-all duration-300 ${link.color}`}
            title={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  )
}
