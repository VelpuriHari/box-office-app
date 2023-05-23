import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import AppTitle from "./AppTitle";

const MainLayout = () => {
  return (
    <dev>
      <Nav />
      <AppTitle title="Bahubali" subtitle="Prabhas" />
      <Outlet />
    </dev>
  );
};
export default MainLayout;
