import star from '../../../../../assets/icons/star.svg';
import ticket from '../../../../../assets/icons/ticket.svg';
import dot from '../../../../../assets/icons/dot.svg';

interface ItemCardProps {
  image: string;
  partner: string;
  stars: number;
  category: string;
  distance: string;
  ETA: string;
  shipping: 'grátis' | number;
  cupom?: boolean;
  cupomPrice?: number;
}

export default function ItemCard({
  image,
  partner,
  stars,
  category,
  distance,
  ETA,
  shipping,
  cupom,
  cupomPrice,
}: ItemCardProps) {
  return (
    <div className="flex items-center flex-col md:flex-row gap-5 text-[#858585] w-[20em] md:w-[40em] rounded-[10px] border-2 border-yellow-300 p-3 cursor-pointer hover:opacity-85">
      <div>
        <img
          src={image}
          alt={partner}
          className="rounded-3xl w-[200px] md:w-30 h-40"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-lg md:text-xl text-black font-medium">{partner}</h2>
        <div className="flex gap-1 items-center">
          <div className="flex gap-1 items-center">
            <img src={star} alt="estrelas" className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-[#F5C342]">{stars}</span>
          </div>
          <img src={dot} alt="" className="h-1 w-1" />
          <span className="text-sm md:text-base">{category}</span>
          <img src={dot} alt="" className="h-1 w-1" />
          <span className="text-sm md:text-base">{distance} km</span>
        </div>
        <div className="flex gap-1 items-center">
          <span className="text-sm md:text-base">{ETA} min</span>
          <img src={dot} alt="" className="h-1 w-1" />
          <span className="text-sm md:text-base">{shipping}</span>
        </div>
        {cupom && (
          <div className="flex gap-2 items-center bg-emerald-100 px-2 rounded-[10px] text-[#46CC1A] text-sm md:text-base w-fit">
            <img src={ticket} alt="cupom" className="h-4 w-4 md:h-5 md:w-5" />
            <span>Cupom</span>
            <span>de</span>
            <span>R$</span>
            <span>{cupomPrice}</span>
            <span>disponível</span>
          </div>
        )}
      </div>
    </div>
  );
}
