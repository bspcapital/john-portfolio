import Navigation, { SectionName } from './Navigation';
import { motion } from 'framer-motion';

interface PageProps {
  onNavigate: (page: SectionName) => void;
  activePage: SectionName;
}

export default function Contact({ onNavigate, activePage }: PageProps) {
  return (
    <div className="px-4 mt-10 flex gap-8">
              <div className="flex flex-col mt-5">
                <motion.h1 
              layoutId="contact-header-transition"
              className="mt-10 text-4xl font-bold ml-3"
            >
              Contact
            </motion.h1>
              <Navigation onNavigate={onNavigate} variant="page-style" activePage={activePage}/>
              </div>
                <div className="mt-24 max-w-5xl mx-40">
                  <img src="/contactplaceholder.png" className="ml-50" />
                </div>
    </div>  
  );
}