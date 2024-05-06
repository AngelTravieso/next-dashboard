import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

export const metadata = {
  title: "Favoritos",
  description: "Ut do duis non deserunt officia.",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokémons Favoritos
        <small className="text-blue-500 p">Global State</small>
      </span>

      <PokemonGrid pokemons={[]} />
    </div>
  );
}
