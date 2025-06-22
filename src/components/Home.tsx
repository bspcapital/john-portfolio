import { useState } from 'react';
import Navigation, { SectionName } from './Navigation';

interface PageProps {
  onNavigate: (page: SectionName) => void;
}

export default function Home({ onNavigate }: PageProps) {
  const [activePage, setActivePage] = useState("home");
  return (
    <>
                        <div className="mt-40 max-w-xl mx-auto text-center">
                      <h1 className="text-xl font-bold">John Yoo</h1>
                      <p className="mt-2">
                        This is my business website, where I tell you barebones what I’ve done,
                        what I’m good at, and where I’d like to be.
                      </p>
                    </div>
                    <Navigation onNavigate={onNavigate} variant="home-style" />
                    <footer className="text-center text-xs text-font-colour mt-20">
                      This website was created with Next.js (probably overkill)
                    </footer>
    </>
  );
}
