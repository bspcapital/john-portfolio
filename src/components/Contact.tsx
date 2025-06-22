import Navigation, { SectionName } from './Navigation';

interface PageProps {
  onNavigate: (page: SectionName) => void;
}

export default function Contact({ onNavigate }: PageProps) {
  return (
    <>
      <div className="mt-24 max-w-xl mx-auto text-center">
        <h1 className="text-xl font-bold">CONTACT</h1>
        <Navigation onNavigate={onNavigate} variant="page-style" />
      </div>
  </>
  );
}