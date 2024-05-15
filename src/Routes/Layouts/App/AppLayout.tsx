import { Outlet } from "react-router-dom";
import AppHeader from "../../../Layouts/App/AppHeader/AppHeader";
import AppFooter from "../../../Layouts/App/AppFooter/AppFooter";

export default function AppLayout() {
  return (
    <>
      <AppHeader/>
      <Outlet/>
      <AppFooter/>
    </>
  )
}
