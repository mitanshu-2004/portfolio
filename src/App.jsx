import SocialBar from "./components/SocialBar"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-gray-950 text-white">
      <SocialBar />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </div>
  )
}

export default App
