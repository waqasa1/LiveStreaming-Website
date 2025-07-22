import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Outlet/>
      <div className="footer" >
        <Footer />
      </div>
    </>
  );
};

export default Layout;
