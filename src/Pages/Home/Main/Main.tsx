import { FormEvent } from "react";
import homeLogo from "../../../../assets/logos/logo-home.svg";
import halfHamburguer from "../../../../assets/images/half-hamburguerHome.svg"
import pan from "../../../../assets/images/panHome.svg";
import { Button } from "../../../Components/Button/Button";
import SearchField from "../../../Components/SearchField/SearchField";

export const Main = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // Lógica para lidar com a submissão da pesquisa aqui
  };

  return (
    <main className="flex justify-between">
      <img src={halfHamburguer} alt="a half of a hamburguer image" className="hidden md:block lg:block xl:block" />
      <section className="flex flex-col items-center gap-10 mt-20">
      <img src={homeLogo} alt="ExpressDelivery logo" className=" sm:w-32 sm:h-2 md:w-96 lg:w-96 xl:w-96 md:h-16 lg:h-16 xl:h-16" />
        <div className="flex items-center flex-col gap-8 pt-5">
          <h1 className="font-medium text-4xl">
            Tudo pra facilitar seu dia a dia
          </h1>
          <h2 className="font-medium text-2xl">
            Descubra restaurantes perto de você
          </h2>
        </div>
        {/* Parte de busca de um estabelecimento proximo */}
        <form onSubmit={handleSubmit} className="flex items-center gap-3 pt-12">
          <div className=" w-[30em]">
            <SearchField placeholder={"Buscar endereço"} />
          </div>
          <Button type="submit" variant="searchButton">
            Buscar
          </Button>
        </form>
      </section>
      <img src={pan} alt="pan image" className=" hidden md:block lg:block xl:block"/>
    </main>
  );
};
