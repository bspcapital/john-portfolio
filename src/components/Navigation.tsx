import React from 'react';
import clsx from 'clsx'; 
import {motion} from 'framer-motion';

export type SectionName = "home" | "about" | "services" | "experience" | "contact";

interface NavigationProps {
  onNavigate: (page: SectionName) => void;
  variant?: 'home-style' | 'page-style';
  activePage: SectionName;
}

const navItems: { id: SectionName, label: string }[] = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export default function Navigation({ onNavigate, variant = 'page-style', activePage }: NavigationProps) {
  const navClassName = clsx(
    'p-4 flex gap-2 font-bold', // Base classes for both variants
    {
      'flex-col items-center': variant === 'home-style',
      'flex-col border-2 border-orange-500 rounded-lg w-52 mt-10 text-xl gap-6': variant === 'page-style',
    }
  );

  return (
    <motion.nav 
    className={navClassName}
      initial={{opacity: 0, scale: 0 }}
      animate={{opacity: 1, scale: 1, transition: { duration: variant === 'page-style' ? 0.2 : 0}}} //when navigating home via home button it doesnt animate appropriately (per initial load of home page)
      transition={{ type: 'spring', stiffness: 300, damping: 30, delay: variant === 'page-style' ? 0.25 : 0 }}
      exit={variant === 'home-style' ? { opacity: 0, scale: 0.8, transition: { duration: 0.2 } } : {}}
    >
      {navItems.map((item) => {
        if (variant === 'page-style' && activePage === item.id) {
          return null;
        }
        return (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, transition:{delay: variant === 'page-style' ? 0: 1} }}
            key={item.id}
            layoutId={`${item.id}-header-transition`}
            className="hover:bg-gray-300 rounded-md text-left"
            onClick={() => onNavigate(item.id)}
            transition={{ duration: 0.5 }}
          >
            {item.label}
          </motion.button>
        );
        })}
    </motion.nav>
  );
}
