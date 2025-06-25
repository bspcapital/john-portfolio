import Navigation, { SectionName } from './Navigation';
import ParallaxCards from './ParallaxCards';
import { motion } from 'framer-motion';
import { useState} from 'react';

interface PageProps {
  onNavigate: (page: SectionName) => void;
  activePage: SectionName;
}

export default function Experience({ onNavigate, activePage }: PageProps) {
  const [isPCardsOpen, setIsPCardsOpen] = useState(false);

  const openCards = () => setIsPCardsOpen(true);
  const closeCards = () => setIsPCardsOpen(false);
  return (
    <>
    <div className="px-4 mt-10 flex gap-8">
              <div className="flex flex-col mt-5">
                <motion.h1 
              layoutId="experience-header-transition"
              className="mt-10 text-4xl font-bold ml-3"
            >
              Experience
            </motion.h1>
              <Navigation onNavigate={onNavigate} variant="page-style" activePage={activePage}/>
              </div>
                  <button onClick={openCards}>
                    Open Parallax Window
                  </button>
                  <ParallaxCards isOpen={isPCardsOpen} onClose={closeCards}/>
    </div>  
    </>
  );
}