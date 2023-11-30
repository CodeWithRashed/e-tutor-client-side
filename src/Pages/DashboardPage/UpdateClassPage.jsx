import { Avatar, Button, Typography } from "@material-tailwind/react";
import { ButtonArrow } from "../../Components/Shared/Buttons";
import { UploadImage } from "../../utils/ImageUpload";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { GlobalDataContext } from "../../ContextApi/DataContext";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { MdOutlineAddCircle } from "react-icons/md";
import { errorToast, successToast } from "../../utils/Toasts";
import { useLoaderData } from "react-router-dom";

const UpdateClassPage = () => {
    const singleCourseData = useLoaderData();
  const { activeUser, activeUserId, activeUserRole } =
    useContext(GlobalDataContext);
  const axiosSecure = useAxiosSecure();
  console.log(activeUser, activeUserId);



  //Handle Form Submit
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const title = data.title;
    const teacher = singleCourseData[0].teacher._id;
    const price = data.price;
    let thumbnail = singleCourseData[0].thumbnail;
    const description = data.description;
    const duration = await data.duration;
    const level = data.level;
    const language = data.language;
    const enrollCount = singleCourseData[0].enrollCount;
    const isApproved = "Pending"
    const rating = singleCourseData[0].rating;
    const email = (await data.email) || (await activeUser?.email);

    //Uploading Image to IMAGE_BB
    try {
      const userImage = data.image[0];
      const uploadData = await UploadImage(userImage);
      if(uploadData?.data?.data?.display_url){

          thumbnail = uploadData?.data?.data?.display_url ;
      }
    } catch (error) {
    //   console.log(error);
    }

    const courseData = {
      title,
      teacher,
      price,
      thumbnail,
      description,
      duration,
      level,
      language,
      enrollCount,
      isApproved,
      rating,
     
    };

console.log(courseData)
    //Success Message
    try {
      const response = await axiosSecure.patch(`/api/update/course?_id=${singleCourseData[0]._id}`, courseData);
     console.log(response)
     successToast("Course Updated, Wait for approval")
    } catch (error) {
      errorToast("Course Updating failed. Please try again.")
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
              <ButtonArrow>Become Instructor</ButtonArrow>
            )}
          </div>
        </div>
      </div>
      <hr />
      {/* body */}
      <div className="p-8 shadow-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-y-4">
            {/* Form Group title */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm mb-2 dark:text-white"
              >
                Course Title
              </label>
              <div className="relative">
                <input
                defaultValue={singleCourseData[0].title}
                  {...register("title")}
                  placeholder="Course Title..."
                  name="title"
                  type="text"
                  className="py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                />
                {errors.title && (
                  <span className="text-red-500">Name is required</span>
                )}
              </div>
            </div>
            {/* End Form Group */}


            {/* Form Group price */}
            <div>
              <label
                htmlFor="price"
                className="block text-sm mb-2 dark:text-white"
              >
                Course Price
              </label>
              <div className="relative">
                <input
                defaultValue={singleCourseData[0].price}
                  {...register("price")}
                  placeholder="Course Price..."
                  name="price"
                  type="number"
                  className="py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
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
                    defaultValue={activeUser?.email}
                    {...register("email")}
                    type="email"
                    placeholder="Enter Your Email..."
                    name="email"
                    className="py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  />
                </div>

                {errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}
              </div>
            </div>
            {/* End Form Group */}
            

            {/* Form Group duration*/}
            <div>
              <label
                htmlFor="duration"
                className="block text-sm mb-2 dark:text-white"
              >
                Course Duration
              </label>
              <div className="relative">
                <div>
                  <select
                    {...register("duration")}
                    label="Select Experience"
                    className="py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  >
                 
                    <option value={singleCourseData[0].duration}>{singleCourseData[0].duration}</option>
                    <option value="3 Month">3 Month</option>
                    <option value="6 Month">6 Month</option>
                    <option value="1 Year">1 Year</option>
                  </select>
                  {errors.duration && (
                    <p className="text-red-500">Duration is required.</p>
                  )}
                </div>
              </div>
            </div>
            {/* End Form Group */}

            {/* Form Group level*/}
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
                    {...register("level")}
                    label="Select Level"
                    className="py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  >
                    
                    <option value={singleCourseData[0].level}>{singleCourseData[0].level}</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advance">Advance</option>
                  </select>
                  {errors.level && (
                    <p className="text-red-500">Level is required.</p>
                  )}
                </div>
              </div>
            </div>
            {/* End Form Group */}

            {/* Form Group language*/}
            <div>
              <label
                htmlFor="language"
                className="block text-sm mb-2 dark:text-white"
              >
                Course Language
              </label>
              <div className="relative">
                <div>
                  <select
                    {...register("language", { required: true })}
                    label="Select Language"
                    className="py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  >
           
                    <option value={singleCourseData[0].language}>{singleCourseData[0].language}</option>
                    <option value="English">English</option>
                    <option value="Bengali">Bengali</option>
                    <option value="Hindi">Hindi</option>
                  </select>
                  {errors.language && (
                    <p className="text-red-500">Language is required.</p>
                  )}
                </div>
              </div>
            </div>
            {/* End Form Group */}
            {/* Form Group description*/}
            <div>
              <label
                htmlFor="description"
                className="block text-sm mb-2 dark:text-white"
              >
               Course Description
              </label>
              <div className="relative">
                <div>
                  <textarea
                   
                   defaultValue={singleCourseData[0].description}
                    {...register("description")}
                    type="text"
                    placeholder="Type Here..."
                    name="description"
                    className="py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  />
                </div>

                {errors.description && (
                  <span className="text-red-500">Description is required</span>
                )}
              </div>
            </div>
            {/* End Form Group */}
            <div className="flex justify-center items-center">
              <Button
                disabled={activeUserRole == "Admin" || activeUserRole == "User"}
                type="submit"
                className="flex gap-3 w-1/2 text-center  justify-center items-center"
              >
                <MdOutlineAddCircle />
               Update Class
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateClassPage;
