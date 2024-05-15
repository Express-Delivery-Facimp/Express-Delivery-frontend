import articleImage from "../../../../assets/images/articlePartner.svg";
import { ArticleCard } from "./ArticleCard/ArticleCard";
import CardsData from './CardsData.json'

export const Article = () => {
  return (
    <article className=" w-full h-[724px] bg-gradient-to-b from-[#C32F26] to-[#A72C2C] rounded-[100px] p-5">
      <section className=" flex items-center">
        <img src={articleImage} alt="as contas subindo sendo nosso parceiro" className=" pl-10" />
        <h1 className=" font-extrabold text-6xl text-[#FAFAFA] drop-shadow-2xl shadow-text-orange">
          Vantagens de ser uma loja parceira
        </h1>
      </section>
      <section className=" flex items-center justify-around gap-8 pt-5">
        {CardsData.map((card, index)=>(
          <ArticleCard
            key={index}
            icon={card.icon}
            title={card.title}
            text={card.text}         
          />
        ))
        }
      </section>
    </article>
  );
};
