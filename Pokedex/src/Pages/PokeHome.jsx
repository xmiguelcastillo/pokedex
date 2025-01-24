import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
import { useParams } from "react-router-dom";
import { Wartortle } from "../Models/Wartortle";
import { Squirtle } from "../Models/Squirtle";
import { Blastoise } from "../Models/Blastoise";
import { Bulbasaur } from "../Models/Bulbasaur";
import { Ivysaur } from "../Models/Ivysaur";
import { Venusaur } from "../Models/Venusaur";
import { Charmander } from "../Models/Charmander";
import { Pikachu } from "../Models/Pikachu";
import { Butterfree } from "../Models/Butterfree";
import { Metapod } from "../Models/Metapod";
import { Caterpie } from "../Models/Caterpie";
import { Charmeleon } from "../Models/Charmeleon";
import { Charizard } from "../Models/Charizard";
import { Kakuna } from "../Models/Kakuna";
import { Beedrill } from "../Models/Beedrill";
import { Pidgeotto } from "../Models/Pidgeotto";
import { Pidgeot } from "../Models/Pidgeot";
import { Sandslash } from "../Models/Sandslash";
import { Sandshrew } from "../Models/Sandshrew";
import { Spearow } from "../Models/Spearow";
import { Fearow } from "../Models/Fearow";
import { Weedle } from "../Models/Weedle";
import { Pidgey } from "../Models/Pidgey";
import { Rattata } from "../Models/Rattata";
import { Raticate } from "../Models/Raticate";
import { Raichu } from "../Models/Raichu";
import { Arbok } from "../Models/Arbok";
import { Ekans } from "../Models/Ekans";
import { Nidorina } from "../Models/Nidorina";
import { Nidoqueen } from "../Models/Nidoqueen";
import { Nidorino } from "../Models/Nidorino";
import { Nidoking } from "../Models/Nidoking";
import { Vulpix } from "../Models/Vulpix";
import { Ninetales } from "../Models/Ninetales";
import { Jigglypuff } from "../Models/Jigglypuff";
import { Wigglytuff } from "../Models/Wigglytuff";
import { Clefable } from "../Models/Clefable";
import { Golbat } from "../Models/Golbat";
import { Zubat } from "../Models/Zubat";
import { Oddish } from "../Models/Oddish";
import { Gloom } from "../Models/Gloom";
import { Vileplume } from "../Models/Vileplume";
import { Paras } from "../Models/Paras";
import { Parasect } from "../Models/Parasect";
import { Venonat } from "../Models/Venonat";
import { Venomoth } from "../Models/Venomoth";
import { Diglett } from "../Models/Diglett";
import { Link } from "react-router-dom";
import { Dugtrio } from "../Models2/Dugtrio";
export default function PokeHome() {
  const { pokemonName } = useParams();

  const [pokeMons, setPokeMons] = useState([]);
  const [pokeNum, setPokeNum] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const PokemonComponents = {
    squirtle: Squirtle,
    wartortle: Wartortle,
    blastoise: Blastoise,
    bulbasaur: Bulbasaur,
    ivysaur: Ivysaur,
    venusaur: Venusaur,
    ekans: Ekans,
    arbok: Arbok,
    pikachu: Pikachu,
    raichu: Raichu,
    butterfree: Butterfree,
    caterpie: Caterpie,
    metapod: Metapod,
    charmander: Charmander,
    charmeleon: Charmeleon,
    charizard: Charizard,
    weedle: Weedle,
    kakuna: Kakuna,
    beedrill: Beedrill,
    pidgey: Pidgey,
    pidgeotto: Pidgeotto,
    pidgeot: Pidgeot,
    rattata: Rattata,
    raticate: Raticate,
    spearow: Spearow,
    fearow: Fearow,
    sandslash: Sandslash,
    sandshrew: Sandshrew,
    nidorina: Nidorina,
    nidoqueen: Nidoqueen,
    nidorino: Nidorino,
    nidoking: Nidoking,
    vulpix: Vulpix,
    ninetales: Ninetales,
    jigglypuff: Jigglypuff,
    wigglytuff: Wigglytuff,
    clefable: Clefable,
    zubat: Zubat,
    golbat: Golbat,
    oddish: Oddish,
    gloom: Gloom,
    vileplume: Vileplume,
    paras: Paras,
    parasect: Parasect,
    venonat: Venonat,
    venomoth: Venomoth,
    diglett: Diglett,
    dugtrio: Dugtrio,
  };

  const renderModels = () => {
    return (
      <div className="grid grid-cols-2 gap-4">
        {pokeMons.map((name, index) => {
          const SelectedPokemon = PokemonComponents[name.toLowerCase()];
          return (
            <Link
              key={index}
              to={`/${name.toLowerCase()}`}
              className="flex bg-[#0f0f0f]  border-[#6366f1] border-2 rounded-xl flex-col items-center cursor-pointer"
            >
              {SelectedPokemon ? (
                <div className="w-full h-36 pointer-events-none">
                  <Canvas shadows camera={{ position: [80, 1, 1] }}>
                    <Environment preset="city" />
                    <PerspectiveCamera
                      makeDefault={true}
                      far={1000}
                      fov={10.598}
                      position={[500, 1, 1]}
                      rotation={[0, 0, 0]}
                    />
                    <SelectedPokemon
                      scale={[1, 1, 1]}
                      position={[10, -22, 0]}
                      rotation={[0, -Math.PI / 2, 0]}
                      castShadow
                      receiveShadow
                    />
                    <OrbitControls enableZoom={false} autoRotate={false} />
                  </Canvas>
                </div>
              ) : (
                <div className="w-full h-40 flex items-center justify-center bg-gray-200">
                  Model not available
                </div>
              )}
              <div className="text-center text-xl -mt-5 font-bold text-white">
                {name}
              </div>
            </Link>
          );
        })}
      </div>
    );
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const pokeData = [];
        const pokeNumbers = [];

        for (let i = 1; i <= 9; i++) {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon-species/${i}/`,
          );
          if (!response.ok) {
            throw new Error("Could not fetch Pokémon species");
          }
          const data = await response.json();
          const capitalized =
            data.name.charAt(0).toUpperCase() + data.name.slice(1);

          pokeData.push(capitalized);
          pokeNumbers.push(data.id);
        }

        setPokeMons(pokeData);
        setPokeNum(pokeNumbers);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
        console.error(error);
      }
    }

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="text-white flex justify-center items-center p-2">
      <div
        className="bg-[#0f0f0f] p-2"
        style={{ width: "400px", height: "auto", overflowY: "auto" }}
      >
        {renderModels()}
      </div>
    </div>
  );
}
