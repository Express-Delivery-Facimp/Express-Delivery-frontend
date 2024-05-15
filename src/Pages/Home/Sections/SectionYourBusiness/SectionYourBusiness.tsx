import deliverGuy from "../../../../../assets/images/deliverGuyHome.svg";

export default function SectionYourBusiness() {
  return (
    <section className=" flex w-full mt-[5.3rem] items-start justify-center gap-60 mb-20">
      <img src={deliverGuy} alt="deliver guy with milkshake in hands" />
      <div className=" flex flex-col gap-14 mt-14">
        <div>
          <span className=" font-extrabold text-4xl text-[#3D3C3C]">
            Seu negocio em boas mãos
            <br />
            ganhando visibilidade para
            <br />
            vender mais
          </span>
        </div>
        <div>
          <span className=" font-medium text-xl text-[#6B6B6B]">
            Com ExpressDelivery você se conecta há <br />
            uma infinita possibilidades de capitar novos clientes <br />e
            aumentar sua renda, expandindo a sua área de entrega
          </span>
        </div>
      </div>
    </section>
  );
}
