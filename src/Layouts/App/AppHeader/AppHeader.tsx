import { Link } from 'react-router-dom';
import appLogo from '../../../../assets/logos/AppDeliverGuyLogo.svg';
import expressLogo from '../../../../assets/logos/logo-home.svg';
import SearchField from '../../../Components/SearchField/SearchField';

export default function AppHeader() {
  return (
    <header className="md:h-32 h-40 w-full bg-gradient-to-r from-[#fde3e3] to-[#681415]">
      <section className="flex items-center w-full h-full gap-4 flex-col md:flex-row">
        <div className="flex items-end md:flex">
          <img
            src={expressLogo}
            alt="ExpressLogo"
            className="h-9 hidden md:block"
          />
          <img
            src={appLogo}
            alt="AppLogo"
            className="h-8 md:h-auto hidden md:block"
          />
        </div>
        <div className="mt-7  text-[#781A1C] font-medium text-base ">
          <Link to="/App">Ínicio</Link>
        </div>
        <div className=" w-full md:w-[55%] flex items-center mt-4 px-4">
          <SearchField placeholder="Busque por item ou loja" />
        </div>
      </section>
    </header>
  );
}
