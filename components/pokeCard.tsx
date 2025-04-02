import Image from "next/image";

interface PokeCardProps {
  name: string;
  image: string;
}



export function PokeCard({ name, image }: PokeCardProps) {
  return (
    <div className="transform hover:scale-102 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:bg-gray-100 cursor-pointer">
      <div className="p-4 flex flex-col items-center">
          <Image 
            src={image} 
            alt={name} 
            width={120} 
            height={120}
          />
        <h2 className="text-xl font-semibold capitalize text-gray-800">
          {name}
        </h2>
      </div>
    </div>
  );
}

