import PropTypes from "prop-types";
import { FcGoogle } from "react-icons/fc";
import { GlobalDataContext } from "../../ContextApi/DataContext";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { ButtonPrimary } from "../Shared/Buttons";
import { FaEye } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Login = ({ setPageToggle }) => {
  const { loginWithEmail, setUserPhoto, googleLogin } = useContext(GlobalDataContext);
  const axiosSecure = useAxiosSecure()
  const location = useLocation();
  const navigator = useNavigate();
    //Show Password Status
    const [isShowPass, setIsShowPass] = useState(null);

//Handle Form Submit
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();
const onSubmit = async (data) => {
  const {email, password} = data
  try{
    axiosSecure.post("/jwt", {user: email})
   await loginWithEmail(email, password)
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
    }, "2000");
  }catch{
    toast.error("Login failed. Please try again.", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

}

  //Google Login
  const loginWithGoogle = async () => {
    try {
      const userData = await googleLogin();
      const imageUrl = await userData?.user.photoURL;
      setUserPhoto(imageUrl);
      axiosSecure.post("/jwt", {user: userData?.user?.email})

      //Saving Data to Database
      const user = {name:userData?.user?.displayName, email:userData?.user?.email, image:userData?.user?.photoURL, role: "User"}
       axiosSecure.post("/api/add/user", user);
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
        const redirectPath = location.state ? location.state : "/";
        navigator(redirectPath);
      }, 2000);
    } catch {
      toast.error("Login failed. Please try again.", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div>
      <div className="h-full">
        <div className="dark:bg-slate-900 bg-gray-100 flex h-full items-center py-16">
          <div className="w-full max-w-md mx-auto p-6">
            <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <div className="p-4 sm:p-7">
                <div className="text-center">
                  <div className="flex flex-col gap-5"></div>

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
                  <form onSubmit={handleSubmit(onSubmit)}>
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
                             {...register("email", { required: true })}
                            type="email"
                            placeholder="Enter Your Email..."
                            name="email"
                            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
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
                              {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern:
                                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                              })}
                              type={isShowPass ? "text" : "password"}
                              placeholder="Type Your Password..."
                              name="password"
                              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                              required
                            />
                             <div
                              className="absolute cursor-pointer text-gray-500 bg-gray-200 px-1 py-1 translate-y-1/2 -translate-x-1/2  flex justify-center items-center top-0 right-0 rounded-full transition-all ease-in-out"
                              onClick={() => {
                                setIsShowPass(!isShowPass);
                              }}
                            >
                              <FaEye />
                            </div>
                            {errors.password?.type === "required" && (
                            <span className="text-red-500">
                              Password is required
                            </span>
                          )}
                          {errors.password?.type === "maxLength" && (
                            <span className="text-red-500">
                              Password should be less then 20
                            </span>
                          )}
                          {errors.password?.type === "minLength" && (
                            <span className="text-red-500">
                              Password should at least 6 character long
                            </span>
                          )}
                          {errors.password?.type === "pattern" && (
                            <span className="text-red-500">
                              Password should contain at least one lowercase
                              letter, one uppercase letter, one digit, and one
                              special character.
                            </span>
                          )}
                        </div>
                      </div>
                      {/* End Form Group */}
                            <button type="submit">

                      <ButtonPrimary>Sign In</ButtonPrimary>
                            </button>
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
