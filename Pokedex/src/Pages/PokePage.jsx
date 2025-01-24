import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
import PokeNav from "../Components/PokeNav";
import PokeSpecies from "../Components/PokeSpecies";
import PokeName from "../Components/PokeName";
import PokeNumber from "../Components/PokeNumber";
import PokeType from "../Components/PokeType";
import PokeRadius from "../Components/PokeRadius";
import { useParams } from "react-router-dom";
import { Wartortle } from "../Models/Wartortle";
import { Squirtle } from "../Models/Squirtle";
import { Blastoise } from "../Models/Blastoise";
import RightIcon from "../assets/rightIcon";
import LeftIcon from "../assets/leftIcon";
import { Link } from "react-router-dom";
import { Bulbasaur } from "../Models/Bulbasaur";
import { Ivysaur } from "../Models/Ivysaur";
import { Venusaur } from "../Models/Venusaur";
import { Charmander } from "../Models/Charmander";
import { Pikachu } from "../Models/Pikachu";
import { Butterfree } from "../Models/Butterfree";
import { Metapod } from "../Models/Metapod";
import PokeColor from "../Components/PokeColor";
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
import { NidoranF } from "../Models/NidoranF";
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
import { Dugtrio } from "../Models2/Dugtrio";
import { Meowth } from "../Models2/Meowth";
import { Abra } from "../Models2/Abra";
import { Alakazam } from "../Models2/Alakazam";
import { Arcanine } from "../Models2/Arcanine";
import { Bellsprout } from "../Models2/Bellsprout";
import { Cloyster } from "../Models2/Cloyster";
import { Dewgong } from "../Models2/Dewgong";
import { Dodrio } from "../Models2/Dodrio";
import { Doduo } from "../Models2/Doduo";
import { Drowzee } from "../Models2/Drowzee";
import { Farfetch } from "../Models2/Farfetch";
import { Gengar } from "../Models2/Gengar";
import { Geodude } from "../Models2/Geodude";
import { Golduck } from "../Models2/Golduck";
import { Golem } from "../Models2/Golem";
import { Graveler } from "../Models2/Graveler";
import { Grimer } from "../Models2/Grimer";
import { Growlithe } from "../Models2/Growlithe";
import { Haunter } from "../Models2/Haunter";
import { Kadabra } from "../Models2/Kadabra";
import { Krabby } from "../Models2/Krabby";
import { Kingler } from "../Models2/Kingler";
import { Machamp } from "../Models2/Machamp";
import { Machoke } from "../Models2/Machoke";
import { Machop } from "../Models2/Machop";
import { Magnemite } from "../Models2/Magnemite";
import { Magneton } from "../Models2/Magneton";
import { Mankey } from "../Models2/Mankey";
import { Muk } from "../Models2/Muk";
import { Onix } from "../Models2/Onix";
import { Persian } from "../Models2/Persian";
import { Poliwhirl } from "../Models2/Poliwhirl";
import { Poliwag } from "../Models2/Poliwag";
import { Poliwrath } from "../Models2/Poliwrath";
import { Ponyta } from "../Models2/Ponyta";
import { Primeape } from "../Models2/Primeape";
import { Psyduck } from "../Models2/Psyduck";
import { Rapidash } from "../Models2/Rapidash";
import { Seel } from "../Models2/Seel";
import { Shellder } from "../Models2/Shellder";
import { Slowbro } from "../Models2/Slowbro";
import { Slowpoke } from "../Models2/Slowpoke";
import { Tentacool } from "../Models2/Tentacool";
import { Tentacruel } from "../Models2/Tentacruel";
import { Victreebel } from "../Models2/Victreebel";
import { Voltorb } from "../Models2/Voltorb";
import { Weepinbell } from "../Models2/Weepinbell";
import { NidoranM } from "../Models/NidoranM";
import { Electrode } from "../Models3/Electrode";
import { Exeggcute } from "../Models3/Exeggcute";
import { Exeggutor } from "../Models3/Exeggutor";
import { Cubone } from "../Models3/Cubone";
import { Marowak } from "../Models3/Marowak";
import { Hitmonlee } from "../Models3/Hitmonlee";
import { Hitmonchan } from "../Models3/Hitmonchan";
import { Lickitung } from "../Models3/Lickitung";
import { Koffing } from "../Models3/Koffing";
import { Weezing } from "../Models3/Weezing";
import { Rhyhorn } from "../Models3/Rhyhorn";
import { Chansey } from "../Models3/Chansey";
import { Tangela } from "../Models3/Tangela";
import { Kangaskhan } from "../Models3/Kangaskhan";
import { Horsea } from "../Models3/Horsea";
import { Seadra } from "../Models3/Seadra";
import { Goldeen } from "../Models3/Goldeen";
import { Seaking } from "../Models3/Seaking";
import { Staryu } from "../Models3/Staryu";
import { Starmie } from "../Models3/Starmie";
import { MrMime } from "../Models3/MrMime";
import { Scyther } from "../Models3/Scyther";
import { Jynx } from "../Models3/Jynx";
import { Electabuzz } from "../Models3/Electabuzz";
import { Magmar } from "../Models3/Magmar";
import { Pinsir } from "../Models3/Pinsir";
import { Tauros } from "../Models3/Tauros";
import { Magikarp } from "../Models3/Magikarp";
import { Gyarados } from "../Models3/Gyarados";
import { Lapras } from "../Models3/Lapras";
import { Ditto } from "../Models3/Ditto";
import { Eevee } from "../Models3/Eevee";
import { Vaporeon } from "../Models3/Vaporeon";
import { Jolteon } from "../Models3/Jolteon";
import { Flareon } from "../Models3/Flareon";
import { Porygon } from "../Models3/Porygon";
import { Omanyte } from "../Models3/Omanyte";
import { Omastar } from "../Models3/Omastar";
import { Kabuto } from "../Models3/Kabuto";
import { Aerodactyl } from "../Models3/Aerodactyl";
import { Snorlax } from "../Models3/Snorlax";
import { Articuno } from "../Models3/Articuno";
import { Zapdos } from "../Models3/Zapdos";
import { Moltres } from "../Models3/Moltres";
import { Dratini } from "../Models3/Dratini";
import { Dragonair } from "../Models3/Dragonair";
import { Dragonite } from "../Models3/Dragonite";
import { Mewtwo } from "../Models3/Mewtwo";
import { Mew } from "../Models3/Mew";
import { Rhydon } from "../Models3/Rhydon";
import { Hypno } from "../Models2/Hypno";
import { Clefairy } from "../Models/Clefairy";
import { Gastly } from "../Models2/Gastly";
import { Kabutops } from "../Models3/Kabutops";
export default function PokePage() {
  const { pokemonName } = useParams();

  const [pokeMons, setPokeMons] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const pokeData = [];

        for (let i = 1; i <= 151; i++) {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon-species/${i}/`,
          );
          if (!response.ok) {
            throw new Error("Could not fetch Pokémon species");
          }
          const data = await response.json();
          pokeData.push(data.name);
          console.log(data.name);
        }

        setPokeMons(pokeData);
      } catch (error) {
        setError(error.message);
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const handleNextPokemon = () => {
    const currentIndex = pokeMons.indexOf(pokemonName.toLowerCase());
    const nextIndex = (currentIndex + 1) % pokeMons.length;
    const nextPokemon = pokeMons[nextIndex];
    return (
      <Link to={`/${nextPokemon}`}>
        <RightIcon />
      </Link>
    );
  };

  const handlePreviousPokemon = () => {
    const currentIndex = pokeMons.indexOf(pokemonName.toLowerCase());
    if (currentIndex === 0) {
      return null;
    }
    const prevIndex = (currentIndex - 1) % pokeMons.length;
    const prevPokemon = pokeMons[prevIndex];
    return (
      <Link to={`/${prevPokemon}`}>
        <LeftIcon />
      </Link>
    );
  };

  const PokemonComponents = {
    squirtle: Squirtle,
    wartortle: Wartortle,
    blastoise: Blastoise,
    bulbasaur: Bulbasaur,
    ivysaur: Ivysaur,
    ekans: Ekans,
    arbok: Arbok,
    pikachu: Pikachu,
    caterpie: Caterpie,
    metapod: Metapod,
    charmander: Charmander,
    charmeleon: Charmeleon,
    weedle: Weedle,
    kakuna: Kakuna,
    sandslash: Sandslash,
    "nidoran-f": NidoranF,
    nidorina: Nidorina,
    "nidoran-m": NidoranM,
    nidorino: Nidorino,
    vulpix: Vulpix,
    jigglypuff: Jigglypuff,
    wigglytuff: Wigglytuff,
    clefable: Clefable,
    zubat: Zubat,
    oddish: Oddish,
    gloom: Gloom,
    paras: Paras,
    parasect: Parasect,
    venonat: Venonat,
    venomoth: Venomoth,
    diglett: Diglett,
    dugtrio: Dugtrio,
    meowth: Meowth,
    abra: Abra,
    bellsprout: Bellsprout,
    dewgong: Dewgong,
    drowzee: Drowzee,

    grimer: Grimer,
    haunter: Haunter,
    krabby: Krabby,
    magnemite: Magnemite,

    persian: Persian,
    psyduck: Psyduck,
    shellder: Shellder,
    slowbro: Slowbro,
    slowpoke: Slowpoke,
    tentacool: Tentacool,
    tentacruel: Tentacruel,
    voltorb: Voltorb,
    electrode: Electrode,
    exeggcute: Exeggcute,
    cubone: Cubone,
    marowak: Marowak,
    hitmonchan: Hitmonchan,
    lickitung: Lickitung,
    koffing: Koffing,
    rhyhorn: Rhyhorn,
    chansey: Chansey,
    tangela: Tangela,
    kangaskhan: Kangaskhan,
    horsea: Horsea,
    seadra: Seadra,
    goldeen: Goldeen,
    seaking: Seaking,
    staryu: Staryu,
    starmie: Starmie,
    jynx: Jynx,
    magmar: Magmar,
    tauros: Tauros,
    magikarp: Magikarp,
    ditto: Ditto,
    eevee: Eevee,
    vaporeon: Vaporeon,
    jolteon: Jolteon,
    flareon: Flareon,
    porygon: Porygon,
    omanyte: Omanyte,
    omastar: Omastar,
    kabuto: Kabuto,
    dratini: Dratini,
    dragonair: Dragonair,
    mew: Mew,
  };

  const PokemonComponentsMedium = {
    venusaur: Venusaur,
    raticate: Raticate,
    nidoqueen: Nidoqueen,
    nidoking: Nidoking,

    dugtrio: Dugtrio,

    //fix bug
    gengar: Gengar,
    onix: Onix,

    hitmonlee: Hitmonlee,
    weezing: Weezing,
    farfetchd: Farfetch,
    seel: Seel,

    doduo: Doduo,
    muk: Muk,
    cloyster: Cloyster,
    rhydon: Rhydon,

    electabuzz: Electabuzz,
    snorlax: Snorlax,
    golbat: Golbat,
    kabutops: Kabutops,
    clefairy: Clefairy,
    gastly: Gastly,
    golduck: Golduck,

    kadabra: Kadabra,
  };
  const PokemonComponentsLarge = {
    charizard: Charizard,
    pidgey: Pidgey,
    beedrill: Beedrill,
    hypno: Hypno,
    spearow: Spearow,
    fearow: Fearow,
    sandshrew: Sandshrew,
    rattata: Rattata,
    "mr-mime": MrMime,
    pinsir: Pinsir,
    scyther: Scyther,
    mankey: Mankey,
    growlithe: Growlithe,
    poliwhirl: Poliwhirl,
    machoke: Machoke,
    machop: Machop,
    raichu: Raichu,

    zapdos: Zapdos,
  };
  const PokemonComponentsHigh = {
    dodrio: Dodrio,
    butterfree: Butterfree,
    primeape: Primeape,
    mewtwo: Mewtwo,
    machamp: Machamp,
    articuno: Articuno,
  };
  const PokemonComponentsXlarge = {
    arcanine: Arcanine,
    ponyta: Ponyta,
    rapidash: Rapidash,
    dragonite: Dragonite,
    exeggutor: Exeggutor,
    moltres: Moltres,

    gyarados: Gyarados,

    poliwag: Poliwag,
    lapras: Lapras,
    ninetales: Ninetales,
    alakazam: Alakazam,
  };
  const PokemonComponentsXxlarge = {
    geodude: Geodude,
    golem: Golem,
    graveler: Graveler,
    weepinbell: Weepinbell,
    poliwrath: Poliwrath,
    vileplume: Vileplume,
    magneton: Magneton,
    aerodactyl: Aerodactyl,
    kingler: Kingler,
    pidgeot: Pidgeot,
    pidgeotto: Pidgeotto,
    victreebel: Victreebel,
  };
  const renderModel = () => {
    const SelectedPokemonSmall = PokemonComponents[pokemonName.toLowerCase()];

    const SelectedPokemonMedium =
      PokemonComponentsMedium[pokemonName.toLowerCase()];

    const SelectedPokemonLarge =
      PokemonComponentsLarge[pokemonName.toLowerCase()];

    const SelectedPokemonXlarge =
      PokemonComponentsXlarge[pokemonName.toLowerCase()];

    const SelectedPokemonHigh =
      PokemonComponentsHigh[pokemonName.toLowerCase()];

    const SelectedPokemonXxlarge =
      PokemonComponentsXxlarge[pokemonName.toLowerCase()];
    if (SelectedPokemonSmall) {
      return (
        <Canvas shadows camera={{ position: [80, 1, 1] }}>
          <Environment preset="city" />
          <PerspectiveCamera
            makeDefault={true}
            far={1000}
            fov={10.598}
            position={[500, 1, 1]}
            //Camera(zoom,idk,idk)
            rotation={[0, 0, 0]}
          />

          <SelectedPokemonSmall
            scale={[1, 1, 1]}
            position={[10, -22, 0]}
            rotation={[0, -Math.PI / 2, 0]}
            castShadow
            receiveShadow
          />
          <OrbitControls enableZoom={true} autoRotate={false} />
        </Canvas>
      );
    } else if (SelectedPokemonMedium) {
      return (
        <Canvas shadows camera={{ position: [80, 1, 1] }}>
          <Environment preset="city" />
          <PerspectiveCamera
            makeDefault={true}
            far={1000}
            fov={10.598}
            position={[630, 1, 1]}
            //Camera(zoom,idk,idk)
            rotation={[0, 0, 0]}
          />

          <SelectedPokemonMedium
            scale={[1, 1, 1]}
            position={[10, -22, 0]}
            rotation={[0, -Math.PI / 2, 0]}
            castShadow
            receiveShadow
          />
          <OrbitControls enableZoom={true} autoRotate={false} />
        </Canvas>
      );
    } else if (SelectedPokemonLarge) {
      return (
        <Canvas shadows camera={{ position: [80, 1, 1] }}>
          <Environment preset="city" />
          <PerspectiveCamera
            makeDefault={true}
            far={1000}
            fov={10.598}
            position={[700, 1, 1]}
            //Camera(zoom,idk,idk)
            rotation={[0, 0, 0]}
          />

          <SelectedPokemonLarge
            scale={[1, 1, 1]}
            position={[10, -22, 0]}
            rotation={[0, -Math.PI / 2, 0]}
            castShadow
            receiveShadow
          />
          <OrbitControls enableZoom={true} autoRotate={false} />
        </Canvas>
      );
    } else if (SelectedPokemonHigh) {
      return (
        <Canvas shadows camera={{ position: [80, 1, 1] }}>
          <Environment preset="city" />
          <PerspectiveCamera
            makeDefault={true}
            far={1000}
            fov={10.598}
            position={[800, 1, 1]}
            //Camera(zoom,idk,idk)
            rotation={[0, 0, 0]}
          />

          <SelectedPokemonHigh
            scale={[1, 1, 1]}
            position={[10, -22, 0]}
            rotation={[0, -Math.PI / 2, 0]}
            castShadow
            receiveShadow
          />
          <OrbitControls enableZoom={true} autoRotate={false} />
        </Canvas>
      );
    } else if (SelectedPokemonXlarge) {
      return (
        <Canvas shadows camera={{ position: [150, 50, 400] }}>
          <Environment preset="city" />
          <PerspectiveCamera
            makeDefault={true}
            far={1000}
            fov={14.598}
            position={[700, 100, 1]}
            //Camera(zoom,idk,idk)
            rotation={[0, 0, 0]}
          />

          <SelectedPokemonXlarge
            scale={[1, 1, 1]}
            position={[10, -22, 0]}
            rotation={[0, -Math.PI / 2, 0]}
            castShadow
            receiveShadow
          />
          <OrbitControls enableZoom={true} autoRotate={false} />
        </Canvas>
      );
    } else if (SelectedPokemonXxlarge) {
      return (
        <Canvas shadows camera={{ position: [150, 50, 400] }}>
          <Environment preset="city" />
          <PerspectiveCamera
            makeDefault={true}
            far={1000}
            fov={15.598}
            position={[1000, 100, 1]}
            //Camera(zoom,idk,idk)
            rotation={[0, 0, 0]}
          />

          <SelectedPokemonXxlarge
            scale={[1, 1, 1]}
            position={[10, -22, 0]}
            rotation={[0, -Math.PI / 2, 0]}
            castShadow
            receiveShadow
          />
          <OrbitControls enableZoom={true} autoRotate={false} />
        </Canvas>
      );
    }

    return null;
  };

  return (
    <div className="text-white flex flex-col items-center bg-[#101010] relative -mt-10">
      {/* Glowing Circle */}
      <PokeRadius pokemonURL={pokemonName} />

      {/* 3D Model Section */}
      <PokeNumber pokemonURL={pokemonName} />
      <div className="relative z-10 w-full -mt-10 lg:w-[1000px] pt-20 pb-10 h-[450px] lg:h-[500px]">
        <div className="flex flex-row h-full">
          {/* Left Section */}
          <div className="w-2/12 flex items-center justify-center">
            {pokeMons.length > 0 && handlePreviousPokemon()}
          </div>

          {/* Middle Section */}
          <div className="w-8/12 flex items-center justify-center h-full">
            <div className="w-full h-full">{renderModel()}</div>
          </div>

          {/* Right Section */}
          <div className="w-2/12 flex items-center justify-center">
            {pokeMons.length > 0 && handleNextPokemon()}
          </div>
        </div>
      </div>

      {/* Pokemon Information Section */}
      <div className="relative z-50 w-full flex flex-col items-center justify-center">
        <PokeName pokemonURL={pokemonName} />
        <PokeSpecies pokemonURL={pokemonName} />
        <PokeType pokemonURL={pokemonName} />
      </div>

      <PokeNav pokemonURL={pokemonName} />
    </div>
  );
}
