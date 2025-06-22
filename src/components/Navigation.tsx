import React from 'react';
import clsx from 'clsx'; 

export type SectionName = "home" | "about" | "services" | "experience" | "contact";

// The props for our Navigation component
interface NavigationProps {
  onNavigate: (page: SectionName) => void;
  // We can add a prop for styling variations!
  variant?: 'home-style' | 'page-style';
}

// An array to define our navigation items in one place
const navItems: { id: SectionName, label: string }[] = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export default function Navigation({ onNavigate, variant = 'page-style' }: NavigationProps) {
  const navClassName = clsx(
    'p-4 flex gap-2 font-bold', // Base classes for both variants
    {
      'flex-col items-center': variant === 'home-style',
      'flex-col border-2 border-orange-500 rounded-lg w-52 mt-10 text-xl gap-6': variant === 'page-style',
    }
  );


  return (
    <nav className={navClassName}>
      {navItems.map((item) => (
        <button
          key={item.id}
          className="hover:bg-gray-300 rounded-md text-left"
          onClick={() => onNavigate(item.id)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}
