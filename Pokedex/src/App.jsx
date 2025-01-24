import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokeHome from "../src/Pages/PokeHome";
import PokePage from "../src/Pages/PokePage";

function App() {
  return (
    <Router basename="/pokedex">
      <Routes>
        <Route path="" element={<PokeHome />} />
        <Route path="/:pokemonName" element={<PokePage />} />
      </Routes>
    </Router>
  );
}

export default App;
