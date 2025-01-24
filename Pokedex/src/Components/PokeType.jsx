import WaterIcon from "../assets/waterIcon";
import FireIcon from "../assets/fireIcon";
import GroundIcon from "../assets/groundIcon";
import PsyhicIcon from "../assets/psychicIcon";
import DarkIcon from "../assets/darkIcon";
import GhostIcon from "../assets/ghostIcon";
import ElectricIcon from "../assets/electricIcon";
import FairyIcon from "../assets/fairyIcon";
import SteelIcon from "../assets/steelIcon";
import FightingIcon from "../assets/fightingIcon";
import RockIcon from "../assets/rockIcon";
import IceIcon from "../assets/iceIcon";
import FlyingIcon from "../assets/flyingIcon";
import GrassIcon from "../assets/grassIcon";
import PoisonIcon from "../assets/poisonIcon";
import NormalIcon from "../assets/normalIcon";
import BugIcon from "../assets/bugIcon";
import React, { useEffect, useState } from "react";

function PokemonType({ pokemonURL }) {
  const [pokemonType, setPokemonType] = useState([]);
  const [error, setError] = useState(null);

  const typeIcons = {
    water: WaterIcon,
    bug: BugIcon,
    normal: NormalIcon,
    poison: PoisonIcon,
    grass: GrassIcon,
    fire: FireIcon,
    ground: GroundIcon,
    psychic: PsyhicIcon,
    dark: DarkIcon,
    ghost: GhostIcon,
    electric: ElectricIcon,
    fairy: FairyIcon,
    steel: SteelIcon,
    fighting: FightingIcon,
    rock: RockIcon,
    ice: IceIcon,
    flying: FlyingIcon,
  };

  const typeColorClasses = {
    grass: "border-green-500",
    water: "border-blue-500",
    fire: "border-red-500",
    electric: "border-yellow-500",
    ground: "border-yellow-700",
    psychic: "border-pink-500",
    dark: "border-gray-700",
    ghost: "border-purple-500",
    fairy: "border-pink-300",
    steel: "border-gray-400",
    fighting: "border-red-700",
    rock: "border-yellow-800",
    ice: "border-blue-300",
    flying: "border-indigo-500",
    poison: " border-purple-600",
    bug: "border-[#8e941e]",
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonURL}`,
        );
        if (!response.ok) {
          throw new Error("Could not fetch Pokémon types");
        }
        const data = await response.json();
        setPokemonType(data.types);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error(err);
      }
    }

    fetchData();
  }, [pokemonURL]);

  return (
    <div className="flex justify-center  flex-row w-[400px] items-center gap-x-2">
      {error ? (
        <span className="text-red-500">{error}</span>
      ) : pokemonType.length > 0 ? (
        pokemonType.map((typeObj, index) => {
          const SelectedIcon = typeIcons[typeObj.type.name];
          const borderColorClass =
            typeColorClasses[typeObj.type.name] || "border-gray-500";

          return (
            <div
              key={index}
              className={`border-[.05px] items-center justify-center rounded-md ${borderColorClass} mt-5 flex text-white bg-[#111111] w-28 h-9 text-xs`}
            >
              {/* Icon Section */}
              <div className="w-1/3 flex justify-center text-black items-center h-full bg-[#111111] rounded-l-md">
                {SelectedIcon && <SelectedIcon />}
              </div>
              {/* Type Section */}
              <div className="w-2/3 flex flex-col font-normal justify-center text-[15px] items-center h-full capitalize">
                {typeObj.type.name}
              </div>
            </div>
          );
        })
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
}

export default PokemonType;
