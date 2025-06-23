import { motion } from 'framer-motion';
import { SectionName } from './Navigation'; // Or from your types file

interface AnimationCloneProps {
  clone: {
    id: SectionName;
    boundingBox: DOMRect;
  };
}

export default function AnimationClone({ clone }: AnimationCloneProps) {
  // Use a map to get the correct text for the clone
  const textMap: Record<SectionName, string> = {
    about: "About",
    services: "Services",
    experience: "Experience",
    contact: "Contact",
    home: "", // Not used
  };

  return (
    <motion.div
      className="font-bold absolute z-50 pointer-events-none"
      // Start the clone at the exact position and size of the clicked button
      style={{
        top: clone.boundingBox.top,
        left: clone.boundingBox.left,
        width: clone.boundingBox.width,
        height: clone.boundingBox.height,
      }}
      // Use layoutId to animate to the destination on the new page
      layoutId={`${clone.id}-header-transition`}
    >
      {textMap[clone.id]}
    </motion.div>
  );
}