import { FormEvent } from 'react';
import homeLogo from '../../../../assets/logos/logo-home.svg';
import halfHamburguer from '../../../../assets/images/half-hamburguerHome.svg';
import pan from '../../../../assets/images/panHome.svg';
import { Button } from '../../../Components/Button/Button';
import SearchField from '../../../Components/SearchField/SearchField';

export const Main = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // Lógica para lidar com a submissão da pesquisa aqui
  };

  return (
    <main className="flex justify-between">
      <img
        src={halfHamburguer}
        alt="a half of a hamburguer image"
        className="hidden xl:block"
      />
      <section className="flex flex-col justify-center items-center gap-10 mt-20 w-full ">
        <img
          src={homeLogo}
          alt="ExpressDelivery logo"
          className=" w-[300px] sm:w-[400px]"
        />
        <div className="flex items-center flex-col gap-8 pt-5">
          <h1 className="font-medium xl:text-4xl text-xl">
            Tudo pra facilitar seu dia a dia
          </h1>
          <h2 className="font-medium text-lg xl:text-2xl">
            Descubra restaurantes perto de você
          </h2>
        </div>
        {/* Parte de busca de um estabelecimento proximo */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row items-center gap-3 pt-12 w-full justify-center"
        >
          <div className=" w-[100%] md:w-[50%]">
            <SearchField placeholder={'Buscar endereço'} />
          </div>
          <Button type="submit" variant="searchButton">
            Buscar
          </Button>
        </form>
      </section>
      <img src={pan} alt="pan image" className=" hidden xl:block" />
    </main>
  );
};
