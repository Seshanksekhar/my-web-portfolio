import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <div className="relative selection:bg-brand-primary selection:text-white cursor-none">
      <CustomCursor />
      <Background />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Custom Cursor / Glow Effect following mouse could be added here if requested for extra creativity */}
      {/* For now, the Background handles the immersive feel sufficiently */}
    </div>
  );
}
