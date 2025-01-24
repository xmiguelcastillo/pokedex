import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokeHome from "../src/Pages/PokeHome";
import PokePage from "../src/Pages/PokePage";
import ScrollToTop from "./Components/ScrollToTop";

function RootLayout({ children }) {
  return (
    <>
      <ScrollToTop />
      {children}
    </>
  );
}

function App() {
  return (
    <Router basename="/pokedex">
      <RootLayout>
        <Routes>
          <Route path="" element={<PokeHome />} />
          <Route path="/:pokemonName" element={<PokePage />} />
        </Routes>
      </RootLayout>
    </Router>
  );
}

export default App;
