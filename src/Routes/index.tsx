import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import {Login} from '../Pages/Login/Login'
import Application from "../Pages/App/Application";
import Petshop from "../Pages/App/Categories/Pages/Petshop/Petshop";
import Pharmacy from "../Pages/App/Categories/Pages/Pharmacy/Pharmacy";
import Restaurant from "../Pages/App/Categories/Pages/Restaurant/Restaurant";
import Drinks from "../Pages/App/Categories/Pages/Drinks/Drinks";
import Steakhouses from "../Pages/App/Categories/Pages/Steakhouses/Steakhouses";
import Markets from "../Pages/App/Categories/Pages/Markets/Markets";
import Pizzeries from "../Pages/App/Categories/Pages/Pizzeries/Pizzeries";
import Shopping from "../Pages/App/Categories/Pages/Shopping/Shopping";
import IceCream from "../Pages/App/Categories/Pages/IceCream/IceCream";
import AcaiShop from "../Pages/App/Categories/Pages/AcaiShop/AcaiShop";
import Savory from "../Pages/App/Categories/Pages/Savory/Savory";
import Skewer from "../Pages/App/Categories/Pages/Skewer/Skewer";
import Brazilian from "../Pages/App/Categories/Pages/Brazilian/Brazilian";
import Sushi from "../Pages/App/Categories/Pages/Sushi/Sushi";
import Main from "../Pages/App/Main/Main";

export default function index() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/App" element={<Application/>}>
        <Route path="/App" element={<Main/>}/>
        <Route path="/App/petshop" element={<Petshop/>}/>
        <Route path="/App/farmacias" element={<Pharmacy/>}/>
        <Route path="/App/restaurantes" element={<Restaurant/>}/>
        <Route path="/App/bebidas" element={<Drinks/>}/>
        <Route path="/App/churascarias" element={<Steakhouses/>}/>
        <Route path="/App/mercados" element={<Markets/>}/>
        <Route path="/App/pizzaria" element={<Pizzeries/>}/>
        <Route path="/App/shopping" element={<Shopping/>}/>
        <Route path="/App/sorveterias" element={<IceCream/>}/>
        <Route path="/App/acaiterias" element={<AcaiShop/>}/>
        <Route path="/App/salgadarias" element={<Savory/>}/>
        <Route path="/App/espetaria" element={<Skewer/>}/>
        <Route path="/App/brasileira" element={<Brazilian/>}/>
        <Route path="/App/sushi" element={<Sushi/>}/>
      </Route>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Login" element={<Login/>}/>
    </Routes>
  </BrowserRouter>
)
}
