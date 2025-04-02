import Image from "next/image";
import { DetailPageFavoritesButton } from "./favoritesButton";


type PokemonType = {
  slot: number;
  type: { name: string };
}

type Pokemon = {
  name: string;
  image: string;
  moves: { move: { name: string } }[];
  height: number;
  weight: number;
  types: PokemonType[];
  abilities: { ability: { name: string } }[];
  id: number;
  base_experience: number;
}

type PokemonDetailProps = {
  pokemon: Pokemon;
}

function MovesSection({ moves }: { moves: { move: { name: string } }[] }) {
  const displayMoves = moves.slice(0, 6);
  
  return (
    <section className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Signature Moves</h2>
      <div className="grid grid-cols-2 gap-3">
        {displayMoves.map((moveObj, index) => (
          <span 
            key={`move-${index}`} 
            className="px-4 py-2 bg-blue-50 rounded-lg text-center capitalize text-blue-700 font-medium hover:bg-blue-100 transition-colors"
          >
            {moveObj.move.name.replace('-', ' ')}
          </span>
        ))}
      </div>
    </section>
  );
}

function DetailsSection({ height, weight, base_experience }: Pick<Pokemon, 'height' | 'weight' | 'base_experience'>) {
  const details = [
    { label: "Height", value: `${height / 10}m` },
    { label: "Weight", value: `${weight / 10}kg` },
    { label: "Base Experience", value: base_experience }
  ];

  return (
    <section className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Details</h2>
      <div className="grid grid-cols-3 gap-4">
        {details.map((detail, index) => (
          <div key={`detail-${index}`} className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500 mb-1">{detail.label}</p>
            <p className="text-lg font-semibold text-gray-800">{detail.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TypesSection({ types }: { types: string[] }) {
  return (
    <section className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Types</h2>
      <div className="flex gap-3">
        {types.map((type, index) => (
          <span 
            key={`type-${index}`} 
            className="px-6 py-2 bg-purple-100 rounded-full capitalize text-purple-700 font-medium hover:bg-purple-200 transition-colors"
          >
            {type}
          </span>
        ))}
      </div>
    </section>
  );
}

function AbilitiesSection({ abilities }: { abilities: { ability: { name: string } }[] }) {
  return (
    <section className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Abilities</h2>
      <div className="flex flex-wrap gap-3">
        {abilities.map((abilityObj, index) => (
          <span 
            key={`ability-${index}`} 
            className="px-4 py-2 bg-green-50 rounded-lg capitalize text-green-700 font-medium hover:bg-green-100 transition-colors"
          >
            {abilityObj.ability.name}
          </span>
        ))}
      </div>
    </section>
  );
}

export function PokemonDetail({ pokemon }: PokemonDetailProps) {
  const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 shadow-xl">
        <div className="flex flex-col items-center mb-8">
          {pokemon.id && (
            <Image 
              src={spriteUrl}
              alt={pokemon.name} 
              width={300} 
              height={300} 
              priority
              className="drop-shadow-2xl"
            />
          )}
          <div className="flex items-center gap-4 mt-4">
            <h1 className="text-4xl font-bold capitalize text-white">{pokemon.name}</h1>
            <DetailPageFavoritesButton 
              pokemon={{
                id: pokemon.id,
                name: pokemon.name,
                image: spriteUrl
              }} 
            />
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <MovesSection moves={pokemon.moves} />
          <DetailsSection 
            height={pokemon.height}
            weight={pokemon.weight}
            base_experience={pokemon.base_experience}
          />
          <TypesSection types={pokemon.types.map(type => type.type.name)} />
          <AbilitiesSection abilities={pokemon.abilities} />
        </div>
      </div>
    </div>
  );
}