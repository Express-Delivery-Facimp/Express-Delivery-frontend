import NavCard from "./NavCard";
import profileIcon from '../../../../assets/icons/profileIcon.svg';
import search from '../../../../assets/icons/searchIcon.svg';
import home from '../../../../assets/icons/HomeIcon.svg';
import request from '../../../../assets/icons/requestsIcon.svg';

export default function AppFooter() {
  return (
    <footer className="h-32 w-full bg-gradient-to-r from-[#DD2F2F] to-[#941313] flex flex-col justify-center">
      <ul className="flex justify-around items-center ">
        <NavCard image={home} name="Início" />
        <NavCard image={search} name="Buscar" />
        <NavCard image={request} name="Pedidos" />
        <NavCard image={profileIcon} name="Perfil" />
      </ul>
    </footer>
  );
}
