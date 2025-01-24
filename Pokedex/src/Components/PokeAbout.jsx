import React, { useEffect, useState } from "react";

export default function PokeAbout({ pokemonURL }) {
  const [pokemonAbout, setPokemonAbout] = useState(null);
  const [error, setError] = useState(null);
  const [pokemonInfo, setPokemonInfo] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonURL}/`,
        );
        if (!response.ok) {
          throw new Error("Could not fetch Pokemon stats");
        }
        const data = await response.json();

        const speciesResponse = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${pokemonURL}/`,
        );
        if (!speciesResponse.ok) {
          throw new Error("Could not fetch Pokemon species info");
        }
        const speciesData = await speciesResponse.json();

        const aboutInfo = {
          name: data.name,
          height: `${Math.floor(data.height * 0.328084)}'${Math.round(((data.height * 0.328084) % 1) * 12)}"`,
          height_m: (data.height * 0.1).toFixed(1),
          weight: ((data.weight / 10) * 2.2).toFixed(1),
          weight_kg: (data.weight / 10).toFixed(1),
          abilities: data.abilities.map((ability) => ability.ability.name),
        };
        const descInfo = {
          info:
            speciesData?.flavor_text_entries?.find(
              (entry) => entry.language.name === "en",
            )?.flavor_text || "No description available.",
        };

        console.log();
        setPokemonAbout(aboutInfo);
        setPokemonInfo(descInfo);
      } catch (error) {
        setError(error.message);
        console.error(error);
      }
    }

    fetchData();
  }, [pokemonURL]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!pokemonAbout) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center">
      {error ? (
        <div className="text-red-500">{error}</div>
      ) : pokemonAbout ? (
        <div className="text-md mt-3 w-[400px] font-medium text-[#6293bf]  flex flex-col items-center">
          <h2 className="text-md  mb-4 text-[#d2d2d2] w-[400px]">
            {pokemonInfo.info}
          </h2>
          <div className="bg-[#151515] p-1  shadow shadow-black rounded-lg text-white w-[400px] mb-10 h-[100px] flex flex-row">
            <div className="w-1/3 flex flex-col">
              <div className="text-sm flex items-center justify-center  h-[50%]">
                {pokemonAbout.weight} lbs ({pokemonAbout.weight_kg} kg)
              </div>
              <div className="flex items-center justify-center text-[#b6b6b6]  pb-4 h-[50%]">
                Weight
              </div>
            </div>
            <div className="border-l-2 border-r-2 border-[#282828] w-1/3 flex flex-col">
              <div className="flex items-center justify-center  h-[50%]">
                {pokemonAbout.height} ft ({pokemonAbout.height_m} m)
              </div>
              <div className="flex items-center text-[#b6b6b6] justify-center pb-4 h-[50%]">
                Height
              </div>
            </div>
            <div className="w-1/3 flex flex-col">
              <div className="flex items-center justify-center  h-[50%]">
                <ul className="text-sm">
                  {pokemonAbout.abilities.map((ability, index) => (
                    <li key={index}>
                      {ability.charAt(0).toUpperCase() + ability.slice(1)}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center text-[#b6b6b6] justify-center pb-4 h-[50%]">
                Abilities
              </div>
            </div>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
