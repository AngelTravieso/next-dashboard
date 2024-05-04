import { Pokemon } from "@/pokemons";

interface Props {
  params: { id: string };
}

const getPokemon = async (id: string): Promise<Pokemon> => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: "force-cache", // TODO cambiar esto en un futuro
  }).then((resp) => resp.json());

  console.log('Se cargó:', pokemon.name);

  return pokemon;
};

export default async function PokemonPage({ params }: Props) {
  const pokemon = await getPokemon(params.id);

  /**
   * Esto muestra el pathVariable y queryParams
   * { params: { id: '1' }, searchParams: { query: 'char', age: '31' } }
   * En las props vienen los params
   */
  // console.log(props);

  return (
    <div>
      <h1>Pokémon {params.id}</h1>
      <div>
        {
            JSON.stringify(pokemon)
        }
      </div>
    </div>
  );
}
