import { HomeFooter } from "../../Layouts/Home/HomeFooter/HomeFooter";
import { HomeHeader } from "../../Layouts/Home/HomeHeader/HomeHeader";
import SectionAdverts from "./Sections/SectionAdverts/SectionAdverts";
import { Main } from "./Main/Main";
import SectionYourBusiness from "./Sections/SectionYourBusiness/SectionYourBusiness";
import { Article } from "./Article/Article";

export default function Home() {
  return (
    <div className=" h-full w-screen">
      <HomeHeader />
      <Main />
      <SectionAdverts />
      <SectionYourBusiness />
      <Article />
      <HomeFooter />
    </div>
  );
}
