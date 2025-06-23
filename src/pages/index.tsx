import { useState } from 'react';
import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Home from "@/components/Home";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import { SectionName } from '@/components/Navigation'; 

export default function Index() {
  const [activePage, setActivePage] = useState<SectionName>("home");

  const handleNavigate = (page: SectionName) => {
    setActivePage(page);
  };

  const sections: Record<SectionName, React.ReactElement> = {
    home: <Home key="home" onNavigate={handleNavigate} activePage={activePage} />,
    about: <About key="about" onNavigate={handleNavigate} activePage={activePage} />,
    services: <Services key="services" onNavigate={handleNavigate} activePage={activePage} />,
    experience: <Experience key="experience" onNavigate={handleNavigate} activePage={activePage} />,
    contact: <Contact key="contact" onNavigate={handleNavigate} activePage={activePage} />,
  };
  
  return (
    <div>
      <nav className="p-2 font-bold text-sm fixed top-0 left-0 w-full z-50 nav-custom cursor-pointer" 
      onClick={() => setActivePage('home')}>
        home
      </nav>
    <main className="bg-background text-font-colour">
      <AnimatePresence mode="wait">
      {sections[activePage]}
      </AnimatePresence>
    </main>
    </div>
  );
}
