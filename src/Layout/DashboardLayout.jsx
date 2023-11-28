import { Outlet } from "react-router-dom";
import { ComplexNavbar } from "../Components/Nav/Nav";
import { AdminNav } from "../Components/Nav/DashboardNav/AdminNav";
import { StudentNav } from "../Components/Nav/DashboardNav/StudentNav";
import { TeacherNav } from "../Components/Nav/DashboardNav/TeacherNav";
import { useContext, useEffect, useState } from "react";
import { GlobalDataContext } from "../ContextApi/DataContext";
import useAxiosSecure from "../Hooks/useAxiosSecure";


const DashboardLayout =  () => {
  const { activeUser } = useContext(GlobalDataContext);
  const axiosSecure = useAxiosSecure();
  const [dbUser, setDbUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (activeUser?.email) {
        try {
          const userEmail = activeUser.email;
          const response = await axiosSecure.get(`/api/get/user?email=${userEmail}`);
          setDbUser(response.data[0]);
        } catch (error) {
          
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchData();
  }, [activeUser, axiosSecure]);
  return (
    <div>
      <div className="font-rubik">
        <div>
          <ComplexNavbar></ComplexNavbar>
          <div className="grid grid-cols-12  mt-20">
            <div className=" col-span-3">
              {dbUser ? (
                <div>
                  {dbUser?.role == "User" && <StudentNav></StudentNav>}
                  {dbUser?.role == "Admin" && <AdminNav></AdminNav>}
                  {dbUser?.role == "Teacher" && <TeacherNav></TeacherNav>}
                </div>
              ) : (
                <div> Loading...</div>
              )}
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
