import Image from "next/image";
import Link from "next/link";

export function PokeCard({ name, image }: { name: string; image: string }) {
  return (
    <Link href={`/${name}/detailPage`}>
      <div className="transform hover:scale-102 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-gradient-to-br from-sky-100 via-sky-200 to-sky-100">
        <div className="p-4 flex flex-col items-center">
          <Image src={image} alt={name} width={120} height={120} />
          <h2 className="text-xl font-semibold capitalize text-gray-800">{name}</h2>
        </div>
      </div>
    </Link>
  );
}


