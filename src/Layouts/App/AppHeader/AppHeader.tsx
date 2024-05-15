import { Link } from 'react-router-dom';
import appLogo from '../../../../assets/logos/AppDeliverGuyLogo.svg';
import expressLogo from '../../../../assets/logos/logo-home.svg';
import SearchField from '../../../Components/SearchField/SearchField';

export default function AppHeader() {
  return (
    <header className="md:h-32 h-36 w-full bg-gradient-to-r from-[#fde3e3] to-[#681415]">
      <section className="flex flex-col md:flex-row items-center ml-4 md:ml-14 w-full h-full gap-4 md:gap-10">
        <div className="flex items-end md:flex">
          <img src={expressLogo} alt="ExpressLogo" className="h-9 hidden md:block" />
          <img src={appLogo} alt="AppLogo" className="h-8 md:h-auto hidden md:block" />
        </div>
        <div className="mt-4 md:mt-7 text-[#781A1C] font-medium text-base md:text-lg">
          <Link to="/App">Ínicio</Link>
        </div>
        <div className="w-full md:w-[48%] flex items-center mt-4 md:mt-7">
          <SearchField placeholder="Busque por item ou loja" />
        </div>
      </section>
    </header>
  );
}
