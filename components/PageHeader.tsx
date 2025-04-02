import { FavoritesButton } from "./favoritesButton";

export function PageHeader() {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">My Pokémon List</h1>
      <FavoritesButton />
    </div>
  );
} 