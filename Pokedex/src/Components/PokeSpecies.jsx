import React, { useState, useEffect } from "react";

export default function PokeSpecies({
  pokemonURL,
  pokeType,
  error,
  backGround,
}) {
  const [pokemonGenus, setPokemonGenus] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${pokemonURL}/`,
        );
        if (!response.ok) {
          throw new Error("Could not fetch Genus");
        }
        const data = await response.json();
        const pokeGenus = data.genera.find(
          (g) => g.language.name === "en",
        ).genus;

        setPokemonGenus(pokeGenus);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [pokemonURL, pokeType]);

  const textColor = backGround || "#8f9ba2";

  return (
    <div className="flex flex-col items-center">
      <div
        className="text-l mt-3 font-semibold flex flex-col items-center"
        style={{ color: textColor }} // Apply the fallback color if backGround is undefined
      >
        {error ? <span>Error: {error}</span> : pokemonGenus || "Loading..."}
      </div>
    </div>
  );
}
