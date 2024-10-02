import { Link } from 'react-router-dom';
import back from '../../../assets/icons/arrow-back.svg';
import sectionimage from '../../../assets/images/loginBackground.svg';
import logo from '../../../assets/logos/logo-home.svg';
import girl from '../../../assets/images/loginGirl.svg';
import LoginForm from './Form/LoginForm';

export const Login = () => {
  return (
    <main data-testid="login-page">
      <Link to="/" data-testid="go-back-link">
        <img src={back} alt="go back" className="h-8 w-3 mt-5 ml-5" />
      </Link>
      <div className=" flex gap-2 justify-center">
        <div className="  ">
          <img
            src={logo}
            alt="express delivery logo"
            className=" w-72 h-14 ml-8 sm:ml-16 xl:ml-28 z-10 absolute"
          />
          <img
            src={sectionimage}
            alt="deliver guy"
            className=" hidden xl:block w-[1025px] h-[800px] z-0"
          />
        </div>
        <section className=" flex flex-col items-center justify-center mt-40 pb-10 sm:pb-0">
          <div className="flex justify-center items-center mt-10">
            <img
              src={girl}
              alt="girl with a hamburguer"
              className=" z-10 absolute sm:w-[450px] w-[350px] mb-[-52px] sm:mb-0"
            />
          </div>
          <div className=" bg-[#FE3C3E] h-[530px] w-[20em] sm:w-[24em] z-0 mt-[111px] rounded-[10px] pl-7 pt-14 flex items-start flex-col gap-5">
            <h2 className=" text-xl font-medium text-white">Faça seu login</h2>
            <p className=" text-sm font-normal text-white">
              Nosso delivery está pronto pra melhor te atender
            </p>
            <LoginForm data-testid="login-form" />
          </div>
        </section>
      </div>
    </main>
  );
};
