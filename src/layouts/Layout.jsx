import { Outlet } from "react-router-dom";
import Navbar from "../componenets/Navbar";
import Footer from "../ui/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
