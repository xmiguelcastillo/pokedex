import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokePage from "./Pages/PokePage";
import PokeHome from "./Pages/PokeHome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:pokemonName" element={<PokePage />} />
        <Route path="/" element={<PokeHome />} />
      </Routes>
    </Router>
  );
}

export default App;
