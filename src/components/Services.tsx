import Navigation, { SectionName } from './Navigation';
import { motion } from 'framer-motion';

interface PageProps {
  onNavigate: (page: SectionName) => void;
  activePage: SectionName;
}

export default function Services({ onNavigate, activePage }: PageProps) {
  return (
    <div className="px-4 mt-10 flex gap-8">
          <div className="flex flex-col mt-5">
            <motion.h1 
              layoutId="services-header-transition"
              className="mt-10 text-4xl font-bold ml-3"
            >
              Services
            </motion.h1>
          <Navigation onNavigate={onNavigate} variant="page-style" activePage={activePage}/>
          </div>
            <div className="mt-24 max-w-5xl mx-40">
              <p className="mt-2">
               Gonna have three boxes: Bots, Web3, and Web Dev. 
               User will be able to click into each of these which loads a window explaining what I can do in relation to the topic, and what I've done to prove im capable.
              </p>
            </div>
      </div>  
  );
}