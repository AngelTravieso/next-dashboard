import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&ofsset=${offset}`
  ).then((value) => value.json());

  const pokemons = data.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }));

  // Lanzar error
  // throw new Error('Error que no debería suceder')

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">

      <span className="text-5xl my-2">Listado de Pokémons <small>estático</small></span>

      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
