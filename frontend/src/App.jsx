import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-[#080d19] text-slate-900 dark:text-white transition-colors duration-300">
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />

        <main>
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
