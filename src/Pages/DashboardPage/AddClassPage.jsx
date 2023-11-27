import { Avatar, Typography } from "@material-tailwind/react";
import { ButtonArrow } from "../../Components/Shared/Buttons";
import { toast } from "react-toastify";
import { UploadImage } from "../../utils/ImageUpload";
import { useForm } from "react-hook-form";
import { useState } from "react";

const AddClassPage = () => {
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
            <Avatar
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              alt="avatar"
            />
            <div>
              <Typography variant="h6">Tania Andrew</Typography>
              <Typography variant="small" color="gray" className="font-normal">
                Web Developer
              </Typography>
            </div>
          </div>
          <div>
            <ButtonArrow>Become Instructor</ButtonArrow>
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
                htmlFor="title"
                className="block text-sm mb-2 dark:text-white"
              >
                Course Title
              </label>
              <div className="relative">
                <input
                  {...register("title", { required: true })}
                  placeholder="Course Title..."
                  name="title"
                  type="text"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                />
                {errors.title && (
                  <span className="text-red-500">Name is required</span>
                )}
              </div>
            </div>
            {/* End Form Group */}
            {/* Form Group Image URL */}
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="image"
              >
                Upload Course Thumbnail
              </label>
              <input
                {...register("image", { required: true })}
                className="file:border-0
                          !file:bg-gray-100 !file:me-4
                          !file:py-3 file:px-4
                          dark:file:bg-gray-700 dark:file:text-gray-400"
                type="file"
              />
              {errors.image && (
                <span className="text-red-500">
                  Course Thumbnail is required
                </span>
              )}
            </div>
            {/* End Form Group */}

            {/* Form Group Role */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm mb-2 dark:text-white"
              >
                Course Price
              </label>
              <div className="relative">
                <input
                  {...register("price", { required: true })}
                  placeholder="Course Price..."
                  name="price"
                  type="number"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                />
                {errors.price && (
                  <span className="text-red-500">Course Price is required</span>
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
                Instructor Email
              </label>
              <div className="relative">
                <div>
                  <input
                    disabled={true}
                    defaultValue="demo@gmail.com"
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="Enter Your Email..."
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

            {/* Form Group Email*/}
            <div>
              <label
                htmlFor="email"
                className="block text-sm mb-2 dark:text-white"
              >
                Course Duration
              </label>
              <div className="relative">
                <div>
                  <select
                    {...register("duration", { required: true })}
                    label="Select Experience"
                    className="py-3 px-3 pe-9 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
                  >
                    <option className="text-gray-400" value="">
                      Select Duration
                    </option>
                    <option value="3M">3 Month</option>
                    <option value="6M">6 Month</option>
                    <option value="12M">1 Year</option>
                  </select>
                  {errors.duration && (
                    <p className="text-red-500">Duration is required.</p>
                  )}
                </div>
              </div>
            </div>
            {/* End Form Group */}

            {/* Form Group Email*/}
            <div>
              <label
                htmlFor="level"
                className="block text-sm mb-2 dark:text-white"
              >
                Course Level
              </label>
              <div className="relative">
                <div>
                  <select
                    {...register("level", { required: true })}
                    label="Select Level"
                    className="py-3 px-3 pe-9 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
                  >
                    <option className="text-gray-400" value="">
                      Select Level
                    </option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advance">Advance</option>
                  </select>
                  {errors.level && (
                    <p className="text-red-500">Level is required.</p>
                  )}
                </div>
              </div>
            </div>
            {/* End Form Group */}


             {/* Form Group Email*/}
             <div>
              <label
                htmlFor="level"
                className="block text-sm mb-2 dark:text-white"
              >
                Course Language
              </label>
              <div className="relative">
                <div>
                  <select
                    {...register("language", { required: true })}
                    label="Select Language"
                    className="py-3 px-3 pe-9 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
                  >
                    <option className="text-gray-400" value="">
                      Select Language
                    </option>
                    <option value="english">English</option>
                    <option value="bengali">Bengali</option>
                    <option value="hindi">Hindi</option>
                  </select>
                  {errors.language && (
                    <p className="text-red-500">Language is required.</p>
                  )}
                </div>
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

export default AddClassPage;
