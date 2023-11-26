import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage";
import AuthPage from "../Pages/AuthPage";
import Error404 from '../Pages/Error404';
import AllClass from "../Pages/AllClass";
import PrivateRoute from './PrivateRoute'
import BecomeInstructor from "../Pages/BecomeInstructor";
import SingleCourseDetails from "../Pages/SingleCourseDetails";


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
      //   loader: ({params})=> fetch(`${import.meta.env.VITE_BACKEND_API}/api/v1/user/get/food/${params.id}` , {credentials: "include"})
      // }
    
    ],
  },
]);
