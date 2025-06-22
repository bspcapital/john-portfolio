import { AnimatePresence, motion } from "motion/react"
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import NavMenu from "@/components/NavMenu";
import { useState } from "react";

const navItems = [
  { label: "About" },
  { label: "Services" },
  { label: "Contact" },
];
type GeneralProps = {
  navigate: (page: string) => void;
  currentState: string;
};
function Item({ selectedItem }: { selectedItem: string }) {
  console.log("selectedItem in Item:", `"${selectedItem}"`);
  switch (selectedItem) {
    case "About":
      console.log("HERE");
      return <About />;
    case "Services":
      return <Services />;
    case "Contact":
      return <Contact />;
    default:
      return <p>Error</p>;
  }
}

export default function General({ navigate, currentState }: GeneralProps) {
  const [selectedItem, setSelectedItem] = useState(currentState);
  return (
    <div>
    <div className="mt-30 ml-10">
      <h1 className="text-xl font-bold mb-4 ml-3">General</h1>
      <div className="border-2 border-orange-500 rounded-md p-4 inline-block">
        <ul className="space-y-4 font-bold">
          {navItems.map(({ label }) => (
            <li key={label} className="hover:text-gray-400 cursor-pointer" onClick={() => setSelectedItem(label)}>
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
    <main>
      <Item selectedItem={selectedItem}/>
    </main>
    </div>
  );
}

