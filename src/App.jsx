import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 550);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
    <Footer />
    {showTop && <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top" className="fixed bottom-5 right-5 z-40 rounded-full border border-white/10 bg-violet-500 p-3 text-white shadow-lg shadow-black/30 transition hover:-translate-y-1 hover:bg-violet-400"><ArrowUp size={18}/></button>}
  </>;
}
