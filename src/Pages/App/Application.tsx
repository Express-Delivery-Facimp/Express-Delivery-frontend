import { Outlet } from "react-router-dom";
import AppFooter from "../../Layouts/App/AppFooter/AppFooter";
import AppHeader from "../../Layouts/App/AppHeader/AppHeader";

export default function Application() {
  return (
  <div className="h-full w-screen">
    <AppHeader/>
    <Outlet/>
    <AppFooter/>
  </div>
  )
}
