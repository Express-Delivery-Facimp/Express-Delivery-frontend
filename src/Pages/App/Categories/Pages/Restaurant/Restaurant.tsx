import ItemCard from "../../../Components/ItemCard/ItemCard";
import restaurant from '../../../../../../assets/images/restaurantApp.svg';

export default function Restaurant() {
  return (
    <div className="flex flex-col gap-10 w-full h-full pl-2 pr-2 md:mx-5 py-10 bg-white">
      <ItemCard image={restaurant} cupom cupomPrice={5} partner="Forneria" category="Restaurante" shipping='grátis' stars={4.2} distance="2.1" ETA="45"/>
      <ItemCard image={restaurant} cupom cupomPrice={5} partner="Forneria" category="Restaurante" shipping='grátis' stars={4.4} distance="2.1" ETA="45"/>
      <ItemCard image={restaurant} cupom cupomPrice={5} partner="Forneria" category="Restaurante" shipping='grátis' stars={4.1} distance="2.1" ETA="45"/>
      <ItemCard image={restaurant} cupom cupomPrice={5} partner="Forneria" category="Restaurante" shipping='grátis' stars={3.2} distance="2.1" ETA="45"/>
      <ItemCard image={restaurant} cupom cupomPrice={5} partner="Forneria" category="Restaurante" shipping='grátis' stars={4.0} distance="2.1" ETA="45"/>
      <ItemCard image={restaurant} cupom cupomPrice={5} partner="Forneria" category="Restaurante" shipping='grátis' stars={4.9} distance="2.1" ETA="45"/>
      <ItemCard image={restaurant} cupom cupomPrice={5} partner="Forneria" category="Restaurante" shipping="grátis" stars={5} distance="1" ETA="30"/>
      <ItemCard image={restaurant} cupom cupomPrice={5} partner="Forneria" category="Restaurante" shipping={2.0} stars={2.1} distance="1.3" ETA="30"/>
      <ItemCard image={restaurant} cupom cupomPrice={5} partner="Forneria" category="Restaurante" shipping='grátis' stars={3.8} distance="2" ETA="40"/>
      <ItemCard image={restaurant} cupom cupomPrice={5} partner="Forneria" category="Restaurante" shipping={6.0} stars={1.2} distance="4.2" ETA="60"/>
      <ItemCard image={restaurant} cupom cupomPrice={5} partner="Forneria" category="Restaurante" shipping={4.0} stars={5.0} distance="3.1" ETA="50"/>
      <ItemCard image={restaurant} cupom cupomPrice={5} partner="Forneria" category="Restaurante" shipping={10.0} stars={4.9} distance="6" ETA="90"/>
    </div>
  )
}
