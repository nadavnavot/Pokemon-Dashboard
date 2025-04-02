import { getPokemonByName } from "@/apiConnection";
import { ArrowLeft } from "lucide-react";
import { PokemonDetail } from "@/components/PokemonDetail";
import Link from "next/link";

type DetailPageProps = {
  params: {
    id: string;
  };
}

export default async function DetailPage({ params }: DetailPageProps) {
  const pokemon = await getPokemonByName(params.id);
  return (
    <div>
      <Link href="/" className="absolute top-4 left-4">
        <ArrowLeft className="w-8 h-8" />
      </Link>
      <PokemonDetail pokemon={pokemon} />
    </div>
  );
}
