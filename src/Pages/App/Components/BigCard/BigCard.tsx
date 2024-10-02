import { Link } from 'react-router-dom';

interface BigCardProps {
  title: string;
  image: string;
  to: string;
}

export default function BigCard({ title, image, to }: BigCardProps) {
  return (
    <Link to={to}>
      <div className="p-4 sm:p-2 md:p-4">
        <span className="text-lg sm:text-base md:text-lg font-medium text-black">
          {title}
        </span>
        <img
          className="w-full h-auto sm:w-full sm:h-auto md:w-full md:h-auto"
          src={image}
          alt={title}
        />
      </div>
    </Link>
  );
}
