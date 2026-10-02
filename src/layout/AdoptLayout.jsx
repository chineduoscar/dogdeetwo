import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const AdoptLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default AdoptLayout;
