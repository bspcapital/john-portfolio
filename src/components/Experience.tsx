import Navigation, { SectionName } from './Navigation';

interface PageProps {
  onNavigate: (page: SectionName) => void;
}

export default function Experience({ onNavigate }: PageProps) {
  return (
    <div className="px-4 mt-10 flex gap-8">
              <div className="flex flex-col mt-5">
                <h1 className="mt-10 text-4xl font-bold ml-3">Experience</h1>
              <Navigation onNavigate={onNavigate} variant="page-style" />
              </div>
                <div className="mt-24 max-w-5xl mx-40">
                  <p className="mt-2">
                    User will just see a resume style list of all the shit I've done
                  </p>
                </div>
    </div>  
  );
}