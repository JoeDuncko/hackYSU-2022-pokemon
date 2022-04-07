import { useState } from "react";
import "./App.css";
import Pokemon from "./components/Pokemon";
import Pokemons from "./components/Pokemons";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState();

  return (
    <div className="App">
      {selectedPokemon ? (
        <Pokemon
          selectedPokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon}
        />
      ) : (
        <Pokemons setSelectedPokemon={setSelectedPokemon} />
      )}
    </div>
  );
}

export default App;
