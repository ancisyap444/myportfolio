import React from 'react';
import { BackgroundGrid } from './components/BackgroundGrid';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-text-primary relative selection:bg-primary/20 selection:text-primary">
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-[#06090A] focus:font-semibold focus:rounded-lg focus:shadow-glow-primary"
      >
        Skip to main content
      </a>

      <BackgroundGrid />
      <Navbar />

      <main id="main-content" className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
