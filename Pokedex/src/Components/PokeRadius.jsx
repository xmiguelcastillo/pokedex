import React, { useState, useEffect } from "react";

// Define PokeRadius component
function PokeRadius({ pokemonURL }) {
  const [pokemonType, setPokemonType] = useState("");
  const [loading, setLoading] = useState(true); // Loading state
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
      setLoading(true);
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
        setError(null);
      } catch (error) {
        setError(error.message);
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [pokemonURL]);

  const backGround = loading
    ? "rgba(0, 0, 0, 0.2)"
    : typeColors[pokemonType] || typeColors.default;

  return (
    <>
      {/* Background Effect */}
      <div
        className={`w-[300px] h-[400px] rounded-full absolute lg:top-[35%] top-[30%] lg:top-[20%] left-[50%] translate-x-[-50%] translate-y-[-50%] blur-[150px] z-0 pointer-events-none transition-all duration-1000`}
        style={{
          background: `radial-gradient(circle at center, ${backGround} 0%, transparent 70%)`,
        }}
      ></div>

      {/* Loading Indicator */}
      {loading && (
        <div className="flex justify-center items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
          <div
            className="spinner-border animate-spin inline-block w-16 h-16 border-4 rounded-full border-t-transparent border-blue-500"
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && <p className="text-red-500">{error}</p>}
    </>
  );
}

// Wrap the PokeRadius component with React.memo
export default React.memo(PokeRadius);
