import BigCardContainer from "../Layouts/BigCardContainer/BigCardContainer";
import SmallCardContainer from "../Layouts/SmallCardContainer/SmallCardContainer";

export default function Main() {
  return (
    <div className="flex flex-col md:flex-row justify-around">
      <section className="flex-1 mx-2">
        <BigCardContainer />
        <div className="h-16 mt-14">
          <h2 className="font-medium text-black text-xl">Cupom e entrega grátis!</h2>
          <p className="font-medium text-lg text-[#BDBDBD]">Use seu cupom aqui!</p>
        </div>
        <SmallCardContainer />
      </section>
      <section className="flex-1 mx-2 mt-10 md:mt-0">
        <BigCardContainer />
        <div className="h-16 mt-14"></div>
        <SmallCardContainer />
      </section>
    </div>
  );
}
