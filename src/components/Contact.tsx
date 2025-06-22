import Navigation, { SectionName } from './Navigation';

interface PageProps {
  onNavigate: (page: SectionName) => void;
}

export default function Contact({ onNavigate }: PageProps) {
  return (
    <div className="px-4 mt-10 flex gap-8">
              <div className="flex flex-col mt-5">
                <h1 className="mt-10 text-4xl font-bold ml-3">Contact Me</h1>
              <Navigation onNavigate={onNavigate} variant="page-style" />
              </div>
                <div className="mt-24 max-w-5xl mx-40">
                  <img src="/contactplaceholder.png" className="ml-50" />
                </div>
    </div>  
  );
}