import BigCard from "../../Components/BigCard/BigCard";
import restauranteImage from "../../../../../assets/images/restaurantApp.svg";

export default function BigCardContainer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 sm:row-span-1 md:grid-cols-2 md:grid-rows-2 md:gap-x-20 gap-y-3 mt-6">
      <BigCard to="/app/restaurantes" title="Restaurante" image={restauranteImage} />
      <BigCard to="/app/restaurantes" title="Restaurante" image={restauranteImage} />
      <BigCard to="/app/restaurantes" title="Restaurante" image={restauranteImage} />
      <BigCard to="/app/restaurantes" title="Restaurante" image={restauranteImage} />
    </div>
  );
}
