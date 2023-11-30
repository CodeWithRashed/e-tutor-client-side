import { Avatar, Typography } from "@material-tailwind/react";
import { ButtonArrow } from "../../Components/Shared/Buttons";
import { toast } from "react-toastify";
import { UploadImage } from "../../utils/ImageUpload";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalDataContext } from "../../ContextApi/DataContext";


const Profile = () => {
  const navigator = useNavigate();
  const { activeUser, activeUserRole } = useContext(GlobalDataContext);
  const [isDisable, setIsDisable] = useState(true);


  //Handle Form Submit
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const role = "User";
    let image = null;

    //Uploading Image to IMAGE_BB
    try {
      const userImage = data.image[0];
      const uploadData = await UploadImage(userImage);
      console.log(uploadData?.data.data.display_url);
      image = uploadData?.data?.data?.display_url;
    } catch (error) {
      console.log(error);
    }

    const user = { name, email, password, image, role };
    console.log(user);

    //Creating user
    try {
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
    } catch (error) {
      toast.error("Register failed. Please try again.", {
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
      <div className="p-5 shadow-lg">
        {/* Header */}
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar src={activeUser?.photoURL} alt={activeUser?.displayName} />
            <div>
              <Typography variant="h6">{activeUser?.displayName}</Typography>
              <Typography variant="small" color="gray" className="font-normal">
                {activeUser?.email}
              </Typography>
            </div>
          </div>
          <div>
            {activeUserRole == "User" && (
              <button
                onClick={() => {
                  navigator("/become-instructor");
                }}
              >
                <ButtonArrow>Become Instructor</ButtonArrow>
              </button>
            )}
          </div>
        </div>
      </div>
      <hr />
      {/* body */}
      <div className="p-8 shadow-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
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
                  disabled={true}
                  defaultValue={activeUser?.displayName}
                  {...register("name", { required: true })}
                  placeholder="Type Your Name..."
                  name="name"
                  type="text"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                />
                {errors.name && (
                  <span className="text-red-500">Name is required</span>
                )}
              </div>
            </div>
            {/* End Form Group */}
            {/* Form Group Role */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm mb-2 dark:text-white"
              >
                Your Role
              </label>
              <div className="relative">
                <input
                  disabled={true}
                  defaultValue={activeUserRole}
                  {...register("role", { required: true })}
                 
                  name="role"
                  type="text"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                />
                {errors.role && (
                  <span className="text-red-500">Name is required</span>
                )}
              </div>
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
                <div>
                  <input
                    disabled={true}
                    defaultValue={activeUser?.email}
                    {...register("email", { required: true })}
                    type="email"
                    name="email"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  />
                </div>

                {errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}
              </div>
            </div>
            {/* End Form Group */}

            <button
              disabled={true}
              type="submit"
              className={` ${
                isDisable
                  ? "bg-blue-gray-200 text-gray-500  px-2 py-2 rounded-lg font-bold"
                  : "text-color-white bg-color-primary px-2 py-2 rounded-lg font-bold"
              }`}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
