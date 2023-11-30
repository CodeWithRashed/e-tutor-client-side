import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage";
import AuthPage from "../Pages/AuthPage";
import Error404 from "../Pages/Error404";
import AllClass from "../Pages/AllClass";
import PrivateRoute from "./PrivateRoute";
import BecomeInstructor from "../Pages/BecomeInstructor";
import SingleCourseDetails from "../Pages/SingleCourseDetails";
import DashboardLayout from "../Layout/DashboardLayout";
import TeachersRequest from "../Pages/DashboardPage/TeachersRequest";
import MyEnrollClass from "../Pages/DashboardPage/MyEnrollClass";
import MyEnrollClassDetails from "../Pages/DashboardPage/MyEnrollClassDetails";
import Profile from "../Pages/DashboardPage/Profile";
import ManageUsers from "../Pages/DashboardPage/ManageUsers";
import ManageAllClassPage from "../Pages/DashboardPage/ManageAllClassPage";
import AddClassPage from "../Pages/DashboardPage/AddClassPage";
import ManageMyClass from "../Pages/DashboardPage/ManageMyClass";
import MyClassDetails from "../Pages/DashboardPage/MyClassDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error404></Error404>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },

      {
        path: "/login",
        element: <AuthPage></AuthPage>,
      },
      {
        path: "/courses",
        element: <AllClass></AllClass>,
      },
      {
        path: "/become-instructor",
        element: <BecomeInstructor></BecomeInstructor>,
      },
      {
        path: "/courses/:id",
        element: <SingleCourseDetails></SingleCourseDetails>,
        loader: ({params})=> fetch(`${import.meta.env.VITE_BACKEND_API}/api/get/courses?_id=${params.id}` , {credentials: "include"})
        // element: <PrivateRoute><FoodDetails></FoodDetails></PrivateRoute>,
        // loader: ({params})=> fetch(`${import.meta.env.VITE_BACKEND_API}/api/v1/user/get/food/${params.id}`, {credentials: "include"})
      },
      // {
      //   path: "/food/manage/:id",
      //   element: <PrivateRoute><ManageSingleRequest></ManageSingleRequest></PrivateRoute>,
      //   loader: ({params})=> fetch(`${import.meta.env.VITE_BACKEND_API}/api/v1/user/get/request/${params.id}`)
      // },
      // {
      //   path: "/request/food/manage/:id",
      //   element: <PrivateRoute><ManageSingleRequest></ManageSingleRequest></PrivateRoute>,
      //   loader: ({params})=> fetch(`${import.meta.env.VITE_BACKEND_API}/api/v1/user/get/request/${params.id}`)
      // },
      // {
      //   path: "/food/update/:id",
      //   element: <PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>,
      // }
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      // Admin Routes
      {
        path: "/dashboard/manage-users",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "/dashboard/manage-classes",
        element: <ManageAllClassPage></ManageAllClassPage>,
      },
      {
        path: "/dashboard/orders",
        element: <div>Order</div>,
      },
      {
        path: "/dashboard/teachers-request",
        element: <TeachersRequest></TeachersRequest>,
      },
      
      //Student Route
      {
        path: "/dashboard/my-enroll-class",
        element: <MyEnrollClass></MyEnrollClass>,
      },
      {
        path: "/dashboard/my-enroll-class/:id",
        element: <MyEnrollClassDetails></MyEnrollClassDetails>,
        
      },
      
      // Teacher Route
      {
        path: "/dashboard/add-class",
        element: <AddClassPage></AddClassPage>,
      },
      {
        path: "/dashboard/my-class",
        element: <ManageMyClass></ManageMyClass>,
      },
      {
        path: "/dashboard/my-class/:id",
        element: <MyClassDetails></MyClassDetails>,
        loader: ({params})=> fetch(`${import.meta.env.VITE_BACKEND_API}/api/get/courses?_id=${params.id}` , {credentials: "include"})
      },

      // Common Routes
      {
        path: "/dashboard/profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);
