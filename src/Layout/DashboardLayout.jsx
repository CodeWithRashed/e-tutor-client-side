import { Outlet } from "react-router-dom";
import { ComplexNavbar } from "../Components/Nav/Nav";
import { AdminNav } from "../Components/Nav/DashboardNav/AdminNav";

const DashboardLayout = () => {
  return (
    <div>
      <div className="font-rubik">
        <div>
          <ComplexNavbar></ComplexNavbar>
          <div className="grid grid-cols-12  mt-20">
            <div className=" col-span-3">
                <AdminNav></AdminNav>
            </div>
            <div className=" col-span-9">
            <Outlet></Outlet>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
