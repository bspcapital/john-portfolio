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
    'p-4 flex gap-2', // Base classes for both variants
    {
      'flex-row': variant === 'home-style', // Home variant is a horizontal row
      'flex-col border-2 border-orange-500 rounded-lg h-screen w-52': variant === 'page-style', // Page variant is a vertical column with styles
    }
  );


  return (
    <nav className={navClassName}>
      {navItems.map((item) => (
        <button
          key={item.id}
          className="p-3 bg-gray-200 hover:bg-gray-300 rounded-md text-left"
          onClick={() => onNavigate(item.id)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}
