import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../Components/Button/Button";
import miniLogo from "../../../../assets/icons/favicon.svg";
import navArrow from "../../../../assets/icons/navArrow.svg";

export const HomeHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <header className="relative flex w-screen justify-between gap-10 mt-6 items-center">
      {/* Navegação de hambúrguer em telas pequenas */}
      <div className="ml-6 md:hidden">
        <button className="block" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      {/* Menu lateral em telas pequenas */}
      {showMenu && (
        <div className="fixed inset-y-0 left-0 w-64 bg-gray-200 z-50 overflow-y-auto md:hidden">
          <div className="flex justify-between items-center p-4">
            <img src={miniLogo} alt="" className="w-[50px] h-auto" />
            <button
              onClick={closeMenu}
              className="font-semibold text-3xl font-mono"
            >
              x
            </button>
          </div>
          <nav className="p-4">
            <ul className="flex flex-col gap-4">
              <li className="text-black font-normal text-xl">
                <Link to="/register-partner" onClick={toggleMenu}>
                  Cadastrar loja
                </Link>
              </li>
              <li className="text-black font-normal text-xl flex gap-2">
                <span className="flex items-center">
                  <span>Como funciona</span>
                  <img src={navArrow} alt="" />
                </span>
              </li>
              <li className="text-black font-normal text-xl flex gap-2">
                <span>Ajuda</span>
                <img src={navArrow} alt="" />
              </li>
            </ul>
          </nav>
        </div>
      )}

      {/* Navegação principal em telas médias e grandes */}
      <nav className="hidden md:flex gap-28 ml-80">
        <ul className="flex gap-28">
          <li>
            <Link to="/register-partner">Cadastrar loja</Link>
          </li>
          <li className="relative ">
            <span className="flex items-center">
              <span>Como funciona</span>
              <img src={navArrow} alt="" />
            </span>
          </li>
          <li className="relative">
            <span className="flex items-center">
              <span>Ajuda</span>
              <img src={navArrow} alt="" />
            </span>
          </li>
        </ul>
      </nav>

      {/* Botões de login/cadastro */}
      <div className="flex gap-6 mr-32">
        <div>
          <Link to="/login">
            <Button variant="whiteNred">Entrar</Button>
          </Link>
        </div>
        <div>
          <Link to="/register">
            <Button variant="redNwhite">Cadastrar</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
