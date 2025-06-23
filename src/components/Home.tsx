import Navigation, { SectionName } from './Navigation';
import {motion} from 'framer-motion';

interface PageProps {
  onNavigate: (page: SectionName) => void;
  activePage: SectionName;
}

export default function Home({ onNavigate, activePage }: PageProps) {
  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5}}
                    exit={{opacity: 0, y: -30, transition: {duration: 0.5}}}>
      <div
        className="mt-40 max-w-xl mx-auto text-center"
      >
        <h1 className="text-xl font-bold">John Yoo</h1>
          <p className="mt-2">
            This is my business website, where I tell you barebones what I’ve done, what I’m good at, and where I’d like to be.
          </p>
      </div>
      </motion.div>
        <Navigation onNavigate={onNavigate} variant="home-style" activePage={activePage} />
        <motion.footer initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1, delay: 1.5}}
                      exit={{ opacity: 0, x: -50, transition: {duration: 0.5} }}
                      className="text-center text-xs text-font-colour mt-20">
          This website was created with Next.js (probably overkill)
        </motion.footer>
    </div>
  );
}
