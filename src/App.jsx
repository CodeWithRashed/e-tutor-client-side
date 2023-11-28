import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";
import DataContext from "./ContextApi/DataContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "@material-tailwind/react";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()

function App() {
  return (
    <>
      <div>
      <QueryClientProvider client={queryClient}>
        <ToastContainer></ToastContainer>
        <ThemeProvider>
          <DataContext>
            <RouterProvider router={router}></RouterProvider>
          </DataContext>
        </ThemeProvider>
        </QueryClientProvider>
      </div>
    </>
  );
}

export default App;
