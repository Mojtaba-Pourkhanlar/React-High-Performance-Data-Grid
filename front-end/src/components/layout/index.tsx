import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
