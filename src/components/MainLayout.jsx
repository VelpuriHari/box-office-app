import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import AppTitle from "./AppTitle";

const MainLayout = () => {
  return (
    <dev>
      <Nav />
      <Outlet />
      <AppTitle title="Bahubali" subtitle="Prabhas" />
    </dev>
  );
};
export default MainLayout;
