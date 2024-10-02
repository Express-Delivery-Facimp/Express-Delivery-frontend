import SmallCard from '../../Components/SmallCard/SmallCard';
import sorvetes from '../../../../../assets/images/iceCreamApp.svg';

export default function SmallCardContainer() {
  return (
    <div className="flex flex-col sm:flex-row  justify-center gap-10 mb-10">
      <SmallCard to="/app/restaurantes" title="Sorvetes" image={sorvetes} />
      <SmallCard to="/app/restaurantes" title="Sorvetes" image={sorvetes} />
      <SmallCard to="/app/restaurantes" title="Sorvetes" image={sorvetes} />
    </div>
  );
}
