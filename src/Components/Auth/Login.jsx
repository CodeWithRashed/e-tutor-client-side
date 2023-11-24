import PropTypes from "prop-types";
import { FcGoogle } from "react-icons/fc";
import { GlobalDataContext } from "../../ContextApi/DataContext";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";
import { ButtonArrow, ButtonLoading, ButtonPrimary, ButtonSecondary } from "../Shared/Buttons";
import Pagination from "../Shared/Pagination";

const Login = ({ setPageToggle }) => {
  const location = useLocation();
  const { googleLogin, loginWithEmail, setUserPhoto } =
    useContext(GlobalDataContext);
  const [loginError, setLoginError] = useState(null);
  const navigator = useNavigate();
  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginWithEmail(email, password)
      .then(() => {
        form.reset();
        toast.success("Login Successful, Redirecting", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setLoginError(null);
        setTimeout(() => {
          navigator(location.state ? location.state : "/");
        }, "2000");
      })
      .catch((error) => {
        if (error) {
          setLoginError("Invalid login credentials");
        }
      });
  };

  //Google Login
  const loginWithGoogle = () => {
    googleLogin()
      .then(async (user) => {
        const name = await user.user.displayName;
        const email = await user.user.email;
        const imageUrl = await user.user.photoURL;

        const googleUser = { name, email, imageUrl };
        setUserPhoto(imageUrl);

        await fetch(`${import.meta.env.VITE_BACKEND_API}/api/v1/add/user`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(googleUser),
        });
        toast.success("Login Successful, Redirecting", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        setTimeout(() => {
          navigator(location.state ? location.state : "/");
        }, 2000);
      })
      .catch((err) => {
        if (err) {
          setLoginError("Invalid login credentials");
        }
      });
  };

  return (
    <div>
   
      <div className="h-full">
        <div className="dark:bg-slate-900 bg-gray-100 flex h-full items-center py-16">
          <div className="w-full max-w-md mx-auto p-6">
            <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <div className="p-4 sm:p-7">
                <div className="text-center">
                  <div className="flex flex-col gap-5">

                  </div>

                  <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                    Sign in
                  </h1>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Don&apos;t have an account yet?
                    <button
                      onClick={() => {
                        setPageToggle(true);
                      }}
                      className="ml-2 text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      Sign up here
                    </button>
                  </p>
                </div>

                <div className="mt-5">
                  <button
                    type="button"
                    onClick={() => {
                      loginWithGoogle();
                    }}
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                   <FcGoogle className="text-xl" />
                    Sign in with Google
                  </button>

                  <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
                    Or
                  </div>

                  {/* <!-- Form --> */}
                  <form onSubmit={handleLoginSubmit}>
                    <div className="grid gap-y-4">
                      {/* Form Group */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm mb-2 dark:text-white"
                        >
                          Email address
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            placeholder="Enter Your Email..."
                            name="email"
                            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                            required
                          />

                          {/* Display on Login Error */}
                          {loginError && (
                            <div className=" absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                              <svg
                                className="h-5 w-5 text-red-500"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                                aria-hidden="true"
                              >
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                              </svg>
                            </div>
                          )}
                          {/* Display on Login Error */}
                        </div>
                      </div>
                      {/* End Form Group */}

                      {/* Form Group */}
                      <div>
                        <div className="flex justify-between items-center">
                          <label
                            htmlFor="password"
                            className="block text-sm mb-2 dark:text-white"
                          >
                            Password
                          </label>
                        </div>
                        <div className="relative">
                          <input
                            type="password"
                            placeholder="Type Your Password..."
                            name="password"
                            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                            required
                          />
                          {loginError && (
                            <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                              <svg
                                className="h-5 w-5 text-red-500"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                                aria-hidden="true"
                              >
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                              </svg>
                            </div>
                          )}
                        </div>
                      </div>
                      {/* End Form Group */}

                      {/* display login error */}
                      {loginError && (
                        <p className="text-xs text-red-600 mt-2 text-center">
                          Invalid login credentials
                        </p>
                      )}
                      {/* display login error */}
                      <ButtonPrimary>Sign In</ButtonPrimary>
                      
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
Login.propTypes = {
  setPageToggle: PropTypes.func,
};

export default Login;
