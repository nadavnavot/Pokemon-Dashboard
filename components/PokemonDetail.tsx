import Image from "next/image";
import { DetailPageFavoritesButton } from "./favoritesButton";

type Pokemon = {
  id: number;
  name: string;
  moves: { move: { name: string } }[];
  height: number;
  weight: number;
  types: { type: { name: string } }[];
  abilities: { ability: { name: string } }[];
  base_experience: number;
}

type SectionProps = {
  title: string;
  children: React.ReactNode;
}

function Section({ title, children }: SectionProps) {
  return (
    <section className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
      {children}
    </section>
  );
}

export function PokemonDetail({ pokemon }: { pokemon: Pokemon }) {
  const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 shadow-xl">
        <div className="flex flex-col items-center mb-8">
          <Image 
            src={spriteUrl}
            alt={pokemon.name} 
            width={300} 
            height={300} 
            priority
            className="drop-shadow-2xl"
          />
          <div className="flex items-center gap-4 mt-4">
            <h1 className="text-4xl font-bold capitalize text-white">{pokemon.name}</h1>
            <DetailPageFavoritesButton pokemon={{ id: pokemon.id, name: pokemon.name, image: spriteUrl }} />
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Section title="Signature Moves">
            <div className="grid grid-cols-2 gap-3">
              {pokemon.moves.slice(0, 6).map((move, index) => (
                <span key={index} className="px-4 py-2 bg-blue-50 rounded-lg text-center capitalize text-blue-700 font-medium">
                  {move.move.name.replace('-', ' ')}
                </span>
              ))}
            </div>
          </Section>
          <Section title="Details">
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Height", value: `${pokemon.height / 10}m` },
                { label: "Weight", value: `${pokemon.weight / 10}kg` },
                { label: "Base XP", value: pokemon.base_experience }
              ].map((detail, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">{detail.label}</p>
                  <p className="text-lg font-semibold text-gray-800">{detail.value}</p>
                </div>
              ))}
            </div>
          </Section>
          <Section title="Types">
            <div className="flex gap-3">
              {pokemon.types.map((type, index) => (
                <span key={index} className="px-6 py-2 bg-purple-100 rounded-full capitalize text-purple-700 font-medium">
                  {type.type.name}
                </span>
              ))}
            </div>
          </Section>
          <Section title="Abilities">
            <div className="flex flex-wrap gap-3">
              {pokemon.abilities.map((ability, index) => (
                <span key={index} className="px-4 py-2 bg-green-50 rounded-lg capitalize text-green-700 font-medium">
                  {ability.ability.name}
                </span>
              ))}
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}