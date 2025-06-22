import Navigation, { SectionName } from './Navigation';

interface PageProps {
  onNavigate: (page: SectionName) => void;
}

export default function Services({ onNavigate }: PageProps) {
  return (
    <div className="px-4 mt-10 flex gap-8">
          <div className="flex flex-col mt-5">
            <h1 className="mt-10 text-4xl font-bold ml-3">Services</h1>
          <Navigation onNavigate={onNavigate} variant="page-style" />
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