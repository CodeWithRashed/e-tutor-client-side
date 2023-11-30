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
import UpdateClassPage from "../Pages/DashboardPage/UpdateClassPage";
import PaymentPage from "../Pages/PaymentPage";


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
        element: <PrivateRoute><SingleCourseDetails></SingleCourseDetails></PrivateRoute> ,
        loader: ({params})=> fetch(`${import.meta.env.VITE_BACKEND_API}/api/get/courses?_id=${params.id}` , {credentials: "include"})
        
      },
      {
        path: "/courses/payment/:id",
        element: <PrivateRoute><PaymentPage></PaymentPage></PrivateRoute>,
        loader: ({params})=> fetch(`${import.meta.env.VITE_BACKEND_API}/api/get/courses?_id=${params.id}` , {credentials: "include"})
      }
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      // Admin Routes
      {
        path: "/dashboard/manage-users",
        element: <PrivateRoute><ManageUsers></ManageUsers></PrivateRoute>,
      },
      {
        path: "/dashboard/manage-classes",
        element: <PrivateRoute><ManageAllClassPage></ManageAllClassPage></PrivateRoute>,
      },
      {
        path: "/dashboard/orders",
        element: <div>Order</div>,
      },
      {
        path: "/dashboard/teachers-request",
        element: <PrivateRoute><TeachersRequest></TeachersRequest></PrivateRoute>,
      },
      
      //Student Route
      {
        path: "/dashboard/my-enroll-class",
        element:  <PrivateRoute><MyEnrollClass></MyEnrollClass></PrivateRoute>,
      },
      {
        path: "/dashboard/my-enroll-class/:id",
        element: <PrivateRoute><MyEnrollClassDetails></MyEnrollClassDetails></PrivateRoute>,
        
      },
      
      // Teacher Route
      {
        path: "/dashboard/add-class",
        element: <PrivateRoute><AddClassPage></AddClassPage></PrivateRoute>,
      },
      {
        path: "/dashboard/my-class",
        element: <PrivateRoute><ManageMyClass></ManageMyClass></PrivateRoute>,
      },
      {
        path: "/dashboard/my-class/:id",
        element: <PrivateRoute><MyClassDetails></MyClassDetails></PrivateRoute>,
        loader: ({params})=> fetch(`${import.meta.env.VITE_BACKEND_API}/api/get/courses?_id=${params.id}` , {credentials: "include"})
      },
      {
        path: "/dashboard/my-class/update/:id",
        element: <PrivateRoute><UpdateClassPage></UpdateClassPage></PrivateRoute>,
        loader: ({params})=> fetch(`${import.meta.env.VITE_BACKEND_API}/api/get/courses?_id=${params.id}` , {credentials: "include"})
      },
      // Common Routes
      {
        path: "/dashboard/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>,
      },
    ],
  },
]);
