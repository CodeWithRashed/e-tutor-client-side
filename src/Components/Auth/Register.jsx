import PropTypes from "prop-types";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { GlobalDataContext } from "../../ContextApi/DataContext";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";
import { AiOutlineLoading } from "react-icons/ai";
import { ButtonLoading, ButtonPrimary } from "../Shared/Buttons";

const Register = ({ setPageToggle }) => {
  const [creatingAccount, setCreatingAccount] = useState(false);
  const location = useLocation();

  const { createEmailUser, googleLogin, userInfoUpdate, setUserPhoto } =
    useContext(GlobalDataContext);
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])(?=.*[a-zA-Z\d@#$%^&+=!]).{8,}$/;
  const [passError, setPassError] = useState(null);

  const navigator = useNavigate();
  //Handle Submit Info
  const handleSubmit = async (event) => {
    setCreatingAccount(true);
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const imageUrl = form.imageUrl.value;

    //User Data
    const user = { name, email, imageUrl };

    const isValidPassword = passwordRegex.test(password);
    //Password Error Message
    if (!isValidPassword) {
      const invalidMessage =
        "Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, and one digit.";
      setPassError(invalidMessage);
      setCreatingAccount(false);
      return;
    }

    //Send User Data to Database
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_API}/api/v1/add/user`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );

      if (response.ok) {
        await response.json();
        setPassError(null);
        setUserPhoto(imageUrl);

        await createEmailUser(email, password);
        // Email And Password Registration

        await userInfoUpdate(name, imageUrl);

        //Toast Alert
        toast.success("Account Created, Redirecting", {
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
      }
    } finally {
      setCreatingAccount(false);
      form.reset();
    }
  };

  //Google Login
  const loginWithGoogle = () => {
    googleLogin()
      .then(async (user) => {
        const name = await user.user.displayName;
        const email = await user.user.email;
        const imageUrl = await user.user.photoURL;
        setUserPhoto(imageUrl);
        const googleUser = { name, email, imageUrl };

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
      .then();
  };

  return (
    <div className="">
      {/* Resposive Form */}
      <div className="h-full">
        <div className="dark:bg-slate-900 bg-gray-100 flex h-full items-center py-16">
          <div className="w-full max-w-md mx-auto p-6">
            <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <div className="p-4 sm:p-7">
                <div className="text-center">
                  <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                    Sign Up
                  </h1>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Already have an account?
                    <button
                      onClick={() => {
                        setPageToggle(false);
                      }}
                      className="ml-2 text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      Sign in here
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
                  <form onSubmit={handleSubmit}>
                    <div className="grid gap-y-4">
                      {/* Form Group Name */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm mb-2 dark:text-white"
                        >
                          Your Name
                        </label>
                        <div className="relative">
                          <input
                            placeholder="Type Your Name..."
                            name="name"
                            type="text"
                            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                            required
                          />
                        </div>
                      </div>
                      {/* End Form Group */}
                      {/* Form Group Image URL */}
                      <div>
                        <label
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          htmlFor="file_input"
                        >
                          Upload file
                        </label>
                        <input
                          className="file:border-0
                          !file:bg-gray-100 !file:me-4
                          !file:py-3 file:px-4
                          dark:file:bg-gray-700 dark:file:text-gray-400"
                       
                          type="file"
                        />
                      </div>
                      {/* End Form Group */}

                      {/* Form Group Email*/}
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
                          {passError && (
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
                      {passError && (
                        <p className="text-xs text-red-600 mt-2 text-center">
                          {passError}
                        </p>
                      )}
                      {/* display login error */}

                      <ButtonLoading isLoading={false} size="md" type="submit">
                       Sign Up
                      </ButtonLoading>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Resposive Form */}
    </div>
  );
};

Register.propTypes = {
  setPageToggle: PropTypes.func,
};

export default Register;
