'use client';

import { useEffect, useState } from "react";
import { PokeCard } from "@/components/pokeCard";

type FavoritePokemon = {
  id: number;
  name: string;
  image: string;
}

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<FavoritePokemon[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('pokemonFavorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">My Favorite Pokémon</h1>
      {favorites.length === 0 ? (
        <p className="text-gray-500">No favorite Pokémon added yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favorites.map((pokemon) => (
            <PokeCard
              key={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
            />
          ))}
        </div>
      )}
    </div>
  );
}