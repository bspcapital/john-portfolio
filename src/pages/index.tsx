import { useState } from 'react';
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
    home: <Home onNavigate={handleNavigate} />,
    about: <About onNavigate={handleNavigate} />,
    services: <Services onNavigate={handleNavigate} />,
    experience: <Experience onNavigate={handleNavigate} />,
    contact: <Contact onNavigate={handleNavigate} />,
  };

  return (
    <div>
      <nav className="p-2 font-bold text-sm fixed top-0 left-0 w-full z-50 nav-custom cursor-pointer" onClick={() => setActivePage('home')}>
        home
      </nav>
    <main className="bg-background text-font-colour">
      {sections[activePage]}
    </main>
    </div>
  );
}
