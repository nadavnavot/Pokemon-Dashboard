import { PokeCard } from "./pokeCard";

type Pokemon = {
  name: string;
  url: string;
}

type PokemonListProps = {
  pokemons: Pokemon[];
}

export function PokemonList({ pokemons }: PokemonListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {pokemons.map((pokemon) => (
        <PokeCard 
          key={pokemon.name} 
          name={pokemon.name} 
          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`}
        />
      ))}
    </div>
  );
} 