import { useEffect, useState } from "react";

const pageLimit = 20;

function Pokemons() {
  const [pokemonsResponse, setPokemonsResponse] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchPokemons = async () => {
      const rawPokemonsResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${pageLimit}&offset=${
          pageLimit * page
        }`
      );
      const pokemonsResponse = await rawPokemonsResponse.json();

      setPokemonsResponse(pokemonsResponse);
    };

    fetchPokemons();
  }, [page]);

  return (
    <div>
      <h1>Pokemons</h1>
      {pokemonsResponse.results?.map((pokemon) => (
        <Pokemon key={pokemon.name} pokemon={pokemon} />
      )) ?? "Loading..."}
      <button disabled={page === 0} onClick={() => setPage(page - 1)}>
        Previous
      </button>{" "}
      {page} <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
}

const Pokemon = ({ pokemon }) => {
  return (
    <div>
      <p>{pokemon.name}</p>
    </div>
  );
};

export default Pokemons;
