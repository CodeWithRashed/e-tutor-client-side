import { Outlet } from "react-router-dom";
import { ComplexNavbar } from "../Components/Nav/Nav";
import FooterSection from "../Components/Footer/FooterSection";

const MainLayout = () => {
  return (
    <div className="font-rubik">
      <div>
        <ComplexNavbar></ComplexNavbar>
        <Outlet></Outlet>
        <FooterSection></FooterSection>
      </div>
    </div>
  );
};

export default MainLayout;
