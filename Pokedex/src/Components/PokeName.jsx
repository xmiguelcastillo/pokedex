import React, { useState, useEffect } from "react";

export default function PokeName({ pokemonURL }) {
  const [pokemonName, setPokemonName] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonURL}`,
        );

        if (!response.ok) {
          throw new Error("Could not fetch Pokémon name");
        }

        const data = await response.json();
        const capitalized =
          data.name.charAt(0).toUpperCase() + data.name.slice(1);
        setPokemonName(capitalized);
      } catch (error) {
        setError(error.message);
        console.error(error);
      }
    }

    fetchData();
  }, [pokemonURL]);

  return (
    <div className="flex flex-col -mt-16 items-center">
      <div className="text-5xl font-extrabold text-white flex flex-col items-center ">
        {error ? <span>Error: {error}</span> : pokemonName || "Loading..."}
      </div>
    </div>
  );
}
