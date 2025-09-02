import { useEffect } from "react"

import SocialBar from "./components/SocialBar"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Footer from "./components/Footer"

function App() {
  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL  // <- use env variable
    fetch(`${apiUrl}/log`, { method: "POST" })
      .catch((err) => console.error("Log error:", err))
  }, [])

  return (
    <div className="bg-gray-950 text-white">
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
