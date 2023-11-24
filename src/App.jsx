import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";
import DataContext from "./ContextApi/DataContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "@material-tailwind/react";

function App() {
  return (
    <>
      <div>
        <ToastContainer></ToastContainer>
        <ThemeProvider>
          <DataContext>
            <RouterProvider router={router}></RouterProvider>
          </DataContext>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
