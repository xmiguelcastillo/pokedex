import React, { useState, useEffect } from "react";
import PokeSpecies from "./PokeSpecies";

export default function PokeColor({ pokemonURL }) {
  const [pokemonType, setPokemonType] = useState("");
  const [error, setError] = useState(null);

  const typeColors = {
    Fire: "#FF5733",
    Water: "#1b3e66",
    Grass: "#4CAF50",
    Electric: "#FFD700",
    Bug: "#afb71f", 
    Normal: "#c0bdb6",
    Psychic: "#f02c96",
    Fighting: "#8e3605",
    Rock: "#bfa742",
    Ground: "#deb24e",
    Flying: "#8ba2f4",
    Poison: "#6f3564",
    Dark: "#444e4d",
    Ghost: "#6d6eb5",
    Ice: "#59e0ff",
    Steel: "#bcbbd1",
    Dragon: "#856bf2",
    Fairy: "#ffb3e9",
    default: "#1b3e66",
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonURL}`,
        );
        if (!response.ok) {
          throw new Error("Could not fetch Pokemon Type");
        }
        const data = await response.json();
        const pokeType =
          data.types[0].type.name.charAt(0).toUpperCase() +
          data.types[0].type.name.slice(1);

        setPokemonType(pokeType);
      } catch (error) {
        setError(error.message);
        console.error(error);
      }
    }
    fetchData();
  }, [pokemonURL]);

  const backGround = typeColors[pokemonType];

  return (
    <>
      <PokeSpecies
        pokemonURL={pokemonURL}
        pokeType={pokemonType}
        error={error}
        backGround={backGround}
        typeColors={typeColors}
      />
    </>
  );
}
