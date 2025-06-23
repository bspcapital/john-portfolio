import Navigation, { SectionName } from './Navigation';
import {motion} from 'framer-motion';

interface PageProps {
  onNavigate: (page: SectionName) => void;
  activePage: SectionName;
}

export default function About({ onNavigate, activePage }: PageProps) {
  return (
    <div 
      className="px-4 mt-10 flex gap-8"
    >
      <div className="flex flex-col mt-5">
        <motion.h1 
          layoutId="about-header-transition"
          className="mt-10 text-4xl font-bold ml-3"
        >
          About
        </motion.h1>
      <Navigation onNavigate={onNavigate} variant="page-style" activePage={activePage} />
      </div>
      <motion.div className="mt-24 max-w-5xl mx-40" initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 2, delay: 0.2 } }}>
        <p className="mt-2">
            While I believe nurture plays a huge role in defining your character, genetics especially from your immediate parents play a significant role in determining your approach to life, and how you choose to be nurtured [1].  

  My mom is a very likeable, breadth-first left leaning right brained intellectually curious, introverted extrovert with feminine traits.
  My dad is a stoic, depth-first left brained intellectually curious, introvert with masculine traits and principles.

  Lucky for me I get the best of both worlds, with an emphasis on breadth and depth-first intellectual curiosity. Basically I know a little about a lot, and a lot about a few specific things. 

  I went to school, learned that P does and does not equal NP, worked as a software developer at big firms, optimized memory allocation in C, learned how to shoot 5.56 and 7.62 rounds in the army, wrote music and poetry, coded twitter bots, loved, and lost. One that I had loved (and lost), was far more intellectually curious than I; she put my semen under a microscope to verify I had swimmers (I do).  

  There are stereotypes about Asians (and Koreans specifically for me), but while I’m subtly aligned with some you’ll find I do not conform to these like you’d expect. I don’t know if it’s the Alberta beef I’ve been fed since I was a baby, or the pot I smoked in the 9th grade, growing up in a Canadian hippie cosmopolitan yet smallish community tucked in a valley, being friends with nerds, tough guys, and nerdy tough guys. I don’t know. I still don’t know my identity fully compared to those yokles but I’m getting close. And my journey to self-discovery has led me to learn a lot and master skills that may be useful for your business. (click for services)
        </p>
      </motion.div>
    </div>
  );
}