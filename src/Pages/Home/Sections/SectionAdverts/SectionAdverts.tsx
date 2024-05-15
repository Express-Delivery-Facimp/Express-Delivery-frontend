import plateHome1 from "../../../../../assets/images/plateHome1.svg";
import plateHome2 from "../../../../../assets/images/plateHome2.svg";
import star from "../../../../../assets/icons/star.svg";

export default function SectionAdverts(){
  // Função para gerar as estrelas com base na classificação
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <img
        key={index}
        src={star}
        alt="estrela"
        className={index < rating ? "w-6 h-6" : "hidden"}
      />
    ));
  };

  return (
    <>
      <section className="flex sm:items-center flex-col gap-20 mt-32 justify-around sm:flex-row sm:flex-wrap w-full sm:mx-auto mb-[5.3rem]">
        {/* CARD 1 */}
        <div className="flex w-80 h-40 bg-gradient-to-b from-[#F5C342] to-[#F59842] rounded-[10px]">
          <div className="w-full h-full pl-12 pt-6 font-semibold">
            <p className="text-4xl text-[#DD2F32]">ALMOÇO</p>
            <p className="font-semibold text-black text-2xl">A PARTIR DE</p>
            <p className="pl-5 text-[#DD2F32] text-3xl">RS$ 9,99</p>
          </div>
          <img src={plateHome1} alt="Plate of food" className="w-28 h-32" />
        </div>

        {/* CARD 2 */}
        <div className="flex w-80 h-40 bg-gradient-to-b from-[#FD2F48] to-[#971C2B] rounded-[10px]">
          <div className="font-semibold pl-5 pt-5">
            <p className="text-4xl text-[#F5C342]">PRATOS</p>
            <p className="text-3xl text-[#F5C342]">COM ATÉ</p>
            <p className="pl-8 text-3xl text-white">
              70% <span className="text-xl">OFF</span>
            </p>
          </div>
          <img
            src={plateHome2}
            alt="Plate of food"
            className="w-40 h-24 pl-3"
          />
        </div>

        {/* CARD 3 */}
        <div className="flex flex-col w-80 h-40 px-8 pt-5 bg-gradient-to-b from-[#ff5f1a] to-[#FD2F48] rounded-[10px]">
          <div className="font-semibold">
            <p className="text-3xl text-white">MELHORES RESTAURANTES</p>
          </div>
          <div className="flex">{renderStars(5)}</div>
        </div>
      </section>
      
      {/* SEPARATOR */}
      <div className=" h-2 w-full bg-gradient-to-r from-[#E94545] to-[#F4846C]"></div>
    </>
  );
}
