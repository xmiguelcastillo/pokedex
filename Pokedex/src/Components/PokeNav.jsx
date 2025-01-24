import React, { useState } from "react";
import PokeStats from "./PokeStats";
import PokeMoves from "./PokeMoves";
import PokeAbout from "./PokeAbout";
import { useParams } from "react-router-dom";
export default function PokeNav() {
  const { pokemonName } = useParams();
  const [activeSection, setActiveSection] = useState("About");

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="flex flex-col items-center w-full bg-[#101010] py-4">
      {/* Navigation Bar */}
      <nav className="flex space-x-6 mb-6">
        {["About", "Stats", "Moves", "Evolution", "Location"].map((section) => (
          <span
            key={section}
            className={`text-white text-lg font-semibold cursor-pointer hover:text-gray-300 ${activeSection === section ? "text-yellow-400" : ""
              }`}
            onClick={() => handleNavClick(section)}
          >
            {section}
          </span>
        ))}
      </nav>

      {/* Section Content */}
      <div className="w-full flex justify-center">
        {activeSection === "About" && <PokeAbout pokemonURL={pokemonName} />}
        {activeSection === "Stats" && <PokeStats pokemonURL={pokemonName} />}
        {activeSection === "Moves" && <PokeMoves pokemonURL={pokemonName} />}
        {activeSection === "Evolution" && (
          <div className="text-white">Evolution Component Placeholder</div>
        )}
        {activeSection === "Location" && (
          <div className="text-white">Location Component Placeholder</div>
        )}
      </div>
    </div>
  );
}
