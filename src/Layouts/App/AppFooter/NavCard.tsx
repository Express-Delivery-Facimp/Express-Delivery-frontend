interface NavCardProps {
  image: string;
  name: string;
}

export default function NavCard({ image, name }: NavCardProps) {
  return (
    <li className="flex flex-col items-center justify-center gap-1 text-white">
      <img className="w-11 h-11 " src={image} alt={name} />
      <p className="text-lg">{name}</p>
    </li>
  );
}
