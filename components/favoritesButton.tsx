'use client';

import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

type FavoritePokemon = {
    id: number;
    name: string;
    image: string;
}

export function FavoritesButton() {
    return (
        <Link href="/favorites">
            <Button variant="outline" size="lg">
                <Heart />
                <span className="ml-2">Favorites</span>
            </Button>
        </Link>
    );
}

export function DetailPageFavoritesButton({ pokemon }: { pokemon: FavoritePokemon }) {
    // Initialize favorite state by checking localStorage
    // Using lazy initialization to avoid SSR issues
    const [isFavorite, setIsFavorite] = useState(() => {
        if (typeof window !== 'undefined') {
            const favorites = JSON.parse(localStorage.getItem('pokemonFavorites') || '[]') as FavoritePokemon[];
            return favorites.some((fav) => fav.id === pokemon.id);
        }
        return false;
    });

    // Handle adding/removing Pokemon from favorites
    const toggleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('pokemonFavorites') || '[]') as FavoritePokemon[];
        // Filter out if exists, add if doesn't exist
        const newFavorites = isFavorite 
            ? favorites.filter((fav) => fav.id !== pokemon.id)
            : [...favorites, pokemon];
        
        // Update localStorage and state, then show feedback toast
        localStorage.setItem('pokemonFavorites', JSON.stringify(newFavorites));
        setIsFavorite(!isFavorite);
        
        toast(isFavorite ? 'Removed from favorites' : 'Added to favorites', {
            style: isFavorite 
                ? { background: '#FEE2E2', border: '1px solid #FCA5A5', color: '#DC2626' }
                : { background: '#DCFCE7', border: '1px solid #86EFAC', color: '#16A34A' }
        });
    };

    return (
        <Button 
            className="cursor-pointer"
            variant={isFavorite ? "default" : "outline"} 
            size="lg"
            onClick={toggleFavorite}
        >
            <Heart className={isFavorite ? "fill-white" : ""} />
        </Button>
    );
}