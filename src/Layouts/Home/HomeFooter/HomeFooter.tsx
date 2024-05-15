import twitterLogo from "../../../../assets/logos/twitterLogo.svg";
import youtubeLogo from "../../../../assets/logos/youtubeLogo.svg";
import instagramLogo from "../../../../assets/logos/instagramLogo.svg";

export const HomeFooter = () => {
  return (
    <footer className=" w-full h-[450px]">
      <section className=" flex gap-52 pt-20 pl-16">
        <div>
          <h3 className=" font-bold text-xl text-black">Express Delivery</h3>
          <div className=" flex flex-col gap-3 pt-5">
            <p className=" font-medium text-base text-[#6B6B6B] cursor-pointer hover:opacity-90">
              Portal do Parceiro
            </p>
            <p className=" font-medium text-base text-[#6B6B6B] cursor-pointer hover:opacity-90">
              Carreiras na ExpressDeliery
            </p>
            <p className=" font-medium text-base text-[#6B6B6B] cursor-pointer hover:opacity-90">
              Blog para Parceiros
            </p>
          </div>
        </div>
        <div>
          <h3 className=" font-bold text-xl text-black">Descubra </h3>
          <div className=" flex flex-col gap-3 pt-5">
            <p className=" font-medium text-base text-[#6B6B6B] cursor-pointer hover:opacity-90">
              Cadastre seu restaurante
            </p>
            <p className=" font-medium text-base text-[#6B6B6B] cursor-pointer hover:opacity-90">
              Cadastre seu mercado
            </p>
          </div>
        </div>
        <div>
          <h3 className=" font-bold text-xl text-black">Social</h3>
          <div className=" flex pl-20 gap-8 pt-5">
            <img
              src={twitterLogo}
              alt="twitter"
              className=" cursor-pointer hover:opacity-90"
            />
            <img
              src={youtubeLogo}
              alt="youtube"
              className=" cursor-pointer hover:opacity-90"
            />
            <img
              src={instagramLogo}
              alt="instagram"
              className=" cursor-pointer hover:opacity-90"
            />
          </div>
        </div>
      </section>
      {/* SEPARATOR */}
      <div className=" flex justify-center">
        <div className=" h-[1px] w-[92%] bg-[#6B6B6B] mt-12"></div>
      </div>
      <section className=" flex gap-24 pl-16 pt-16">
        <div>
          <p className=" font-normal text-xs text-black">
            Copyright 2024 - ExpressDelivery - Todos os direitos <br />
            reservados ExpressDelivery com Agência de Restaurantes <br />
            Online S.A,
          </p>
        </div>
        <div>
          <p className=" font-normal text-xs text-black">
            CNPJ 34.155.253/0001-53 / Avenida Pernambuco <br />
            nº 1170, Bairro Vila Nova Imperatriz/MA <br />
            CEP 65912-180
          </p>
        </div>
        <div>
          <p className=" font-normal text-sm text-black">Privacidade</p>
        </div>
        <div>
          <p className=" font-normal text-sm text-black">Código de conduta</p>
        </div>
      </section>
    </footer>
  );
};
