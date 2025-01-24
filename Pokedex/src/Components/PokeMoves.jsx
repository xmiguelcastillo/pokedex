import React, { useEffect, useState } from "react";

export default function PokeMoves({ pokemonURL }) {
  const [levelUpMoves, setLevelUpMoves] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonURL}/`,
        );
        if (!response.ok) {
          throw new Error("Could not fetch Pokemon moves");
        }
        const data = await response.json();

        const moves = data.moves.filter((move) =>
          move.version_group_details.some(
            (detail) => detail.move_learn_method.name === "level-up",
          ),
        );

        const formattedMoves = moves.map((move) => {
          const levelDetail = move.version_group_details.find(
            (detail) => detail.move_learn_method.name === "level-up",
          );
          return {
            name: move.move.name,
            level: levelDetail.level_learned_at,
          };
        });

        formattedMoves.sort((a, b) => a.level - b.level);

        setLevelUpMoves(formattedMoves);
      } catch (error) {
        setError(error.message);
        console.log(error);
      }
    }
    fetchData();
  }, [pokemonURL]);

  return (
    <div className="flex flex-col items-center">
      <div className="text-l mt-3 font-semibold text-[#6293bf] flex flex-col items-center">
        {error ? (
          <span>Error: {error}</span>
        ) : levelUpMoves.length > 0 ? (
          <div className="flex flex-row flex-wrap justify-center gap-[10px]">
            {levelUpMoves.map((move, index) => (
              <div
                key={index}
                className=" w-[200px] p-2 rounded-md border-[#6293bf] border-[0.05px] text-white flex flex-col items-center"
              >
                <div className="font-bold">{move.name.toUpperCase()}</div>
                <div className="text-sm">LEVEL {move.level}</div>
              </div>
            ))}
          </div>
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
}
