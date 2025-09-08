import { useEffect } from "react"

import SocialBar from "./components/SocialBar"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Footer from "./components/Footer"

function App() {
  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL

    const deviceInfo = {
      screen: {
        width: window.screen.width,
        height: window.screen.height,
        availWidth: window.screen.availWidth,
        availHeight: window.screen.availHeight,
        pixelRatio: window.devicePixelRatio,
      },
      window: {
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
        outerWidth: window.outerWidth,
        outerHeight: window.outerHeight,
      },
      browser: {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        vendor: navigator.vendor,
        language: navigator.language,
        languages: navigator.languages,
      },
      hardware: {
        cpuCores: navigator.hardwareConcurrency || "unknown",
        memoryGB: navigator.deviceMemory || "unknown",
        touchPoints: navigator.maxTouchPoints || 0,
      },
      system: {
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        doNotTrack: navigator.doNotTrack,
      },
      timestamp: new Date().toISOString(),
    }

    // Send log to backend
    fetch(`${apiUrl}/log`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(deviceInfo),
    }).catch((err) => console.error("Log error:", err))
  }, [])

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <SocialBar />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Footer />
    </div>
  )
}

export default App
