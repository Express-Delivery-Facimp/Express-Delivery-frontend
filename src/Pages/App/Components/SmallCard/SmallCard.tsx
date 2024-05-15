import { Link } from "react-router-dom";

interface SmallCardProps {
  title: string;
  image: string;
  to: string;
}

export default function SmallCard({ title, image, to }: SmallCardProps) {
  return (
    <Link to={to}>
      <div className="flex flex-col items-center gap-2 p-4 sm:p-2 md:p-4">
        <img
          className="w-20 h-20 md:w-24 md:h-24"
          src={image}
          alt={title}
        />
        <span className="text-lg sm:text-base md:text-lg font-medium text-black">{title}</span>
      </div>
    </Link>
  );
}
