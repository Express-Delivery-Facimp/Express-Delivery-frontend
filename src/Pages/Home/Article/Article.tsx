import articleImage from '../../../../assets/images/articlePartner.svg';
import { ArticleCard } from './ArticleCard/ArticleCard';
import CardsData from './CardsData.json';

export const Article = () => {
  return (
    <article className=" w-full min-h-[724px] h-auto bg-gradient-to-b from-[#C32F26] to-[#A72C2C] rounded-[35px] pb-5">
      <section className=" flex items-center flex-col md:flex-row">
        <img
          src={articleImage}
          alt="as contas subindo sendo nosso parceiro"
          className=" xl:pl-10 w-[150px] sm:w-[200px] md:w-[250px] xl:w-[306px]"
        />
        <h1 className=" font-extrabold text-2xl md:text-3xl lg:text-4xl xl:text-6xl text-[#FAFAFA] drop-shadow-2xl shadow-text-orange">
          Vantagens de ser uma loja parceira
        </h1>
      </section>
      <section className=" flex items-center justify-around gap-8 pt-5 w-ful flex-col lg:flex-row">
        {CardsData.map((card, index) => (
          <ArticleCard
            key={index}
            icon={card.icon}
            title={card.title}
            text={card.text}
          />
        ))}
      </section>
    </article>
  );
};
