import backgroundimage from '../../../assets/images/registerBackground.svg';
import back from '../../../assets/icons/arrow-back.svg';
import freeDelivery from '../../../assets/logos/freeDelivery-image.svg';
import { Link } from 'react-router-dom';
import RegisterForm from './Form/RegisterForm';

export default function Register() {
  const divStyle = {
    backgroundImage: `url(${backgroundimage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };

  return (
    <main style={divStyle} className="flex flex-col gap-4">
      <Link to="/">
        <img
          src={back}
          alt="go back"
          className="h-8 w-3 mt-5 ml-5"
          data-testid="back-button"
        />
      </Link>
      <div className="flex flex-col m-auto md:ml-16 mb-32 pl-6 pt-2 bg-[#E4E4E4] bg-opacity-80 w-[23] md:w-[27em] h-[1020px] rounded-[10px]">
        <img
          src={freeDelivery}
          alt="free delivery"
          className="w-60"
          data-testid="free-delivery-image"
        />
        <p className="font-bold text-black pt-12 pb-8">
          Cadastre-se e aproveite 30 dias grátis.
        </p>
        <RegisterForm data-testid="register-form" />
      </div>
    </main>
  );
}
