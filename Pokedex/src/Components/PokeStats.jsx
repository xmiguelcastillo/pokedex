import React, { useEffect, useState } from "react";

export default function PokeStats({ pokemonURL }) {
  const [pokemonStats, setPokemonStats] = useState([]);
  const [error, setError] = useState(null);
  const [pokemonType, setPokemonType] = useState([]); 

  const typeColorClasses = {
    grass: "bg-green-500",
    water: "bg-blue-500",
    fire: "bg-red-500",
    electric: "bg-yellow-500",
    ground: "bg-yellow-700",
    psychic: "bg-pink-500",
    dark: "bg-gray-700",
    ghost: "bg-purple-500",
    fairy: "bg-pink-300",
    steel: "bg-gray-400",
    fighting: "bg-red-700",
    rock: "bg-yellow-800",
    ice: "bg-blue-300",
    flying: "bg-indigo-500",
    poison: "bg-purple-600",
    bug: "bg-[#8e941e]",
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonURL}/`,
        );
        if (!response.ok) {
          throw new Error("Could not fetch Pokémon stats");
        }
        const data = await response.json();

        setPokemonStats(data.stats);

        setPokemonType(data.types.map((typeObj) => typeObj.type.name));
        setError(null);
      } catch (error) {
        setError(error.message);
        console.error(error);
      }
    }
    fetchData();
  }, [pokemonURL]);

  const progressBarColor =
    pokemonType.length > 0 && typeColorClasses[pokemonType[0]]
      ? typeColorClasses[pokemonType[0]]
      : "bg-gray-700";

  return (
    <div className="p-4 text-white bg-[#101010] rounded-lg">
      {error && <p className="text-red-500">{error}</p>}
      <div className="space-y-2 text-sm w-[400px]">
        {pokemonStats.length > 0 ? (
          pokemonStats.map((stat) => (
            <div
              key={stat.stat.name}
              className="font-medium w-full flex items-center"
            >
              {/* Stat Name */}
              <div className="font-medium text-[#626262] w-3/12 p-2 text-center">
                {stat.stat.name.toUpperCase()}
              </div>
              {/* Base Stat Value */}
              <div className="w-3/12 p-2 font-bold text-center">
                {stat.base_stat}
              </div>
              {/* Progress Bar */}
              <div className="w-6/12 p-2">
                <div className="w-full bg-gray-300 h-[10px] rounded-sm ">
                  <div
                    className={`rounded-sm h-[10px] ${progressBarColor}`}
                    style={{
                      width: `${stat.base_stat}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">Loading stats...</p>
        )}
      </div>
    </div>
  );
}
