import { Sidebar } from "@/components";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="flex">
        <Sidebar />

        <div className="p-2 w-full text-slate-900">
          <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
            <h1 className="text-9xl font-extrabold text-white tracking-widest">
              404
            </h1>
            <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
              Page Not Found
            </div>
            <button className="mt-5">
              <div className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
                <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                  <Link href="/dashboard/pokemons">Ver Pokémons</Link>
                </span>
              </div>
            </button>
          </main>
        </div>
      </div>
    </div>
  );
}
