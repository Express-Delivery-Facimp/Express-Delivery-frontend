interface ArticleCardProps {
  icon?: string;
  title: string;
  text: string;
}

export const ArticleCard = ({ icon, title, text }: ArticleCardProps) => {
  return (
    <div className=" h-[314px] w-[300px] bg-[#FFFDFD] rounded-[20px]  pt-5 flex flex-col gap-7 items-center">
      <div className=" flex gap-3 justify-center">
        {icon && <img src={icon} alt={title} className=" w-7 h-6" />}
        <h2 className=" font-bold text-2xl text-black">{title}</h2>
      </div>
      <p className=" font-medium text-xl text-[#6B6B6B] pl-5 pr-3 text-center">{text}</p>
    </div>
  );
};
