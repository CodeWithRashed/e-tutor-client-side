import { Outlet } from "react-router-dom";
import { ComplexNavbar } from "../Components/Nav/Nav";
import FooterSection from "../Components/Footer/FooterSection";

const MainLayout = () => {
  return (
    <div className="font-rubik">
      <div>
        <div className="mt-5 w-full max-w-[1280px] mx-auto px-5 lg:px-10">
          <ComplexNavbar></ComplexNavbar>
        </div>
        <Outlet></Outlet>
        <FooterSection></FooterSection>
      </div>
    </div>
  );
};

export default MainLayout;
