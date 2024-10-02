import deliverGuy from '../../../../../assets/images/deliverGuyHome.svg';

export default function SectionYourBusiness() {
  return (
    <section className=" flex w-full mt-[5.3rem] flex-col md:flex-row md:items-start items-center justify-center sm:gap-10 xl:gap-60 mb-20">
      <img
        className=""
        src={deliverGuy}
        alt="deliver guy with milkshake in hands"
      />
      <div className=" flex flex-col md:items-start items-center gap-14 mt-14 md:text-left text-center">
        <div>
          <span className=" font-extrabold text-xl xl:text-4xl text-[#3D3C3C]">
            Seu negocio em boas mãos
            <br />
            ganhando visibilidade para
            <br />
            vender mais
          </span>
        </div>
        <div>
          <span className=" font-medium text-base xl:text-xl text-[#6B6B6B] ">
            Com ExpressDelivery você se conecta há <br />
            uma infinita possibilidades de capitar novos clientes <br />e
            aumentar sua renda, expandindo a sua área de entrega
          </span>
        </div>
      </div>
    </section>
  );
}
