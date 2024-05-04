import Link from "next/link";
import Image from "next/image";

import { SimplePokemon } from "../interfaces/simple-pokemon";
import { IoHeartOutline } from "react-icons/io5";

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">

          {/* priority (default => false), cuando es true la imagen es considerada con prioridad y será precargada, solo usar si la imágen es detectada como Largest Content Paint (LCP) */}

          <Image
            key={id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            width={100}
            height={100}
            alt={name}
            priority
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
            {name}
          </p>
          <p className="text-sm text-gray-100">John@Doe.com</p>
          <div className="mt-5">
            <Link
              href={`dashboard/pokemon/${id}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              Más información
            </Link>
          </div>
        </div>
        <div className="border-b">
          <Link
            href="/dashboard/main"
            className="px-4 py-2 hover:bg-gray-100 flex items-center"
          >
            <div className="text-red-600">
              <IoHeartOutline />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                No es favorito
              </p>
              <p className="text-xs text-gray-500">View your campaigns</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
