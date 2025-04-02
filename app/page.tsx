import { PageHeader } from "@/components/PageHeader";
import { PaginationControls } from "@/components/PaginationControls";
import { getPokemons } from "@/apiConnection";
import { PokemonList } from "@/components/PokemonList";
  
type HomeProps = {
  searchParams: { 
    page?: string 
  };
}

export default async function Home({ searchParams }: HomeProps) {
  const currentPage = Number(searchParams.page) || 1;
  const { results: pokemons, nextPage, prevPage, totalPages } = await getPokemons(currentPage);

  return (
    <div className="container mx-auto py-8">
      <PageHeader />
      <PokemonList pokemons={pokemons} />
      <PaginationControls 
        nextPage={nextPage} 
        prevPage={prevPage} 
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
}

