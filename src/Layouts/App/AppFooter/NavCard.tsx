interface NavCardProps {
  image: string;
  name: string;
}

export default function NavCard({ image, name }: NavCardProps) {
  return (
    <li className="flex flex-col items-center justify-center gap-1 text-white">
      <img className="w-8 h-8 sm:w-6 sm:h-6 md:w-8 md:h-8" src={image} alt={name} />
      <p className="text-sm sm:text-xs md:text-sm">{name}</p>
    </li>
  );
}
