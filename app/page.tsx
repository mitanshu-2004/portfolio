import SocialBar from "./components/SocialBar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <SocialBar />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}
