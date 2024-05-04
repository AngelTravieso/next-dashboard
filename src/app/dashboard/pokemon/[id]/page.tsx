interface Props {
  params: { id: string };
}

export default function PokemonPage({ params }: Props) {
  /**
   * Esto muestra el pathVariable y queryParams
   * { params: { id: '1' }, searchParams: { query: 'char', age: '31' } }
   * En las props vienen los params
   */
  // console.log(props);

  return (
    <div>
      <h1>Pokémon {params.id}</h1>
    </div>
  );
}
