//LOCAL COMPONENTS IMPORTS
import PageTitle from "../Components/PageTitle/PageTitle";
import { IconHolderPrimary } from "../Components/Shared/IconHolder";
import bannerImage from "../assets/instructor-banner.png";
import { ButtonPrimary } from "../Components/Shared/Buttons";

//ICONS IMPORTS
import { PiStudentBold } from "react-icons/pi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi";
import { MdClass } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import { IoDocumentAttach, IoTime } from "react-icons/io5";

//REACT AND HOOKS IMPORT
import { useContext, useEffect, useState } from "react";
import { GlobalDataContext } from "../ContextApi/DataContext";
import useAxiosSecure from "../Hooks/useAxiosSecure";

// IMPORTS FROM DEPENDENCIES
import { Typography } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";


//COMPONENTS START FROM HERE
const BecomeInstructor = () => {
//GLOBAL DATA STATES AND HOOKS
const { activeUser } = useContext(GlobalDataContext);
const axiosSecure = useAxiosSecure();

//LOCAL FILE STATES
const [totalTeacher, setTotalTeacher] = useState(0)
const [totalUser, setTotalUser] = useState(0)

useEffect(  ()=>{
  const getTeacherCount = async () => {
    const teacherCountRes  = await axiosSecure.get("/api/get/users?isTeacherRequest=Accepted")
    setTotalTeacher(teacherCountRes.data.length)
  }
  const getUserCount =  async () =>{
  const userCountRes  = await axiosSecure.get("/api/get/usersCount")
    setTotalUser(userCountRes.data.length)
}
  getTeacherCount()
  getUserCount()

},[axiosSecure])

//HANDLE FROM SUBMIT OR BECOME INSTRUCTOR
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const newData = { isTeacherRequest: "Pending", ...data };
    axiosSecure.patch(`/api/update/user?email=${activeUser?.email}`, newData);
  };

  return (
    <div>
      <Helmet>
        <title>E-Tutor | Become an Instructor</title>
        </Helmet>
      <PageTitle>Become an Instructor</PageTitle>
      <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
        <div>
          {/* Banner */}
          <div className="grid grid-cols-2 py-10">
            {/* Text Content */}
            <div className="flex justify-center items-start gap-5 flex-col">
              <h1 className="uppercase text-5xl">Be a part of us</h1>
              <p className="text-color-gray text-lg">
                Become an instructor & start teaching with 26k certified
                instructors. Create a success story with 67.1k Students — Grow
                yourself with 71 countries.
              </p>
            </div>

            {/* Image */}
            <div className="flex justify-end">
              <img
                className="h-[500px] object-cover "
                src={bannerImage}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-color-primary-light py-10">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-10 flex justify-center gap-20 flex-wrap">
          {/* infoCardContainer */}
          <div className="items-container flex gap-3 items-center">
            {/* icon */}
            <div>
              <div className="flex items-center gap-2">
                <IconHolderPrimary>
                <HiUserGroup />
                </IconHolderPrimary>
              </div>
            </div>
            {/* details */}
            <div>
              <h1 className="text-color-black font-medium">{totalUser}</h1>
              <h3 className="text-color-gray">Active User</h3>
            </div>
          </div>

           {/* infoCardContainer */}
           <div className="items-container flex gap-3 items-center">
            {/* icon */}
            <div>
              <div className="flex items-center gap-2">
                <IconHolderPrimary>
                  <PiStudentBold></PiStudentBold>
                </IconHolderPrimary>
              </div>
            </div>
            {/* details */}
            <div>
              <h1 className="text-color-black font-medium">{totalUser - totalTeacher}</h1>
              <h3 className="text-color-gray">Student</h3>
            </div>
          </div>
           {/* infoCardContainer */}
           <div className="items-container flex gap-3 items-center">
            {/* icon */}
            <div>
              <div className="flex items-center gap-2">
                <IconHolderPrimary>
                <FaUserGraduate />
                </IconHolderPrimary>
              </div>
            </div>
            {/* details */}
            <div>
              <h1 className="text-color-black font-medium">{totalTeacher}</h1>
              <h3 className="text-color-gray">Instructor</h3>
            </div>
          </div>
        </div>
        
      </div>

      <div className="bg-section-bg py-12">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-10 ">
          <h1 className="text-color-black text-3xl text-center">
            How you&apos;ll become <br /> successful instructor
          </h1>

          <div className="card-container grid grid-cols-4 gap-5 mt-10">
            <div className="card bg-color-white p-5 flex justify-center items-center flex-col">
              <div className="w-16 h-16 flex  justify-center items-center">
                <IconHolderPrimary>
                  <IoDocumentAttach />
                </IconHolderPrimary>
              </div>

              {/* Text Content */}
              <div>
                <h1 className="text-lg mt-5">Apply</h1>
              </div>
            </div>
            <div className="card bg-color-white p-5 flex justify-center items-center flex-col">
              <div className="w-16 h-16 flex  justify-center items-center">
                <IconHolderPrimary>
                  <IoTime />
                </IconHolderPrimary>
              </div>

              {/* Text Content */}
              <div>
                <h1 className="text-lg mt-5">Wait</h1>
              </div>
            </div>
            <div className="card bg-color-white p-5 flex justify-center items-center flex-col">
              <div className="w-16 h-16 flex  justify-center items-center">
                <IconHolderPrimary>
                  <MdClass />
                </IconHolderPrimary>
              </div>

              {/* Text Content */}
              <div>
                <h1 className="text-lg mt-5">Add Class</h1>
              </div>
            </div>
            <div className="card bg-color-white p-5 flex justify-center items-center flex-col">
              <div className="w-16 h-16 flex  justify-center items-center">
                <IconHolderPrimary>
                  <FaMoneyBillTrendUp />
                </IconHolderPrimary>
              </div>

              {/* Text Content */}
              <div>
                <h1 className="text-lg mt-5">Start Earning</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Apply Form */}
      <div className="py-10">
        <h1 className="text-3xl text-center">Apply to become Instructor</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-1/2 mx-auto space-y-3 mt-8"
        >
          <div className="relative flex justify-between gap-5">
            <div className="w-full">
              <input
                disabled={true}
                defaultValue={activeUser?.displayName}
                type="name"
                className="bg-gray-200 py-3 px-4 ps-11 block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="Enter name"
              />
            </div>

            <div className="flex items-center gap-3 w-full bg-gray-100 rounded-lg">
              <img
                src={activeUser?.photoURL}
                alt={activeUser?.displayName}
                className="rounded-lg h-12 w-12"
              />
              <div className="flex flex-col">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {activeUser?.displayName}
                </Typography>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal opacity-70"
                >
                  {activeUser?.email}
                </Typography>
              </div>
            </div>
          </div>
          <select
            {...register("experience", { required: true })}
            label="Select Experience"
            className="py-3 px-3 pe-9 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
          >
            <option className="text-gray-400" value="">
              Select Experience
            </option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Experienced">Experienced</option>
          </select>
          {errors.experience && (
            <p className="text-red-500">This is required.</p>
          )}
          <select
            {...register("title", { required: true })}
            label="Title"
            className="py-3 px-3 pe-9 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
          >
            <option className="text-gray-400" value="">
              Select Title
            </option>
            <option value="Designer">Designer</option>
            <option value="Developer">Developer</option>
            <option value="Marketer">Marketer</option>
            <option value="Video Editor">Video Editor</option>
          </select>
          {errors.experience && (
            <p className="text-red-500">This is required.</p>
          )}

          <select
            {...register("category", { required: true })}
            className="py-3 px-3 pe-9 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
          >
            <option className="text-gray-400" value="">
              Select Category
            </option>
            <option value="Web Development">Web Development</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Video Editing">Video Editing</option>
            <option value="Graphic Design">Graphic Design</option>
          </select>
          {errors.category && <p className="text-red-500">This is required.</p>}
          <button type="submit">
            <ButtonPrimary>Submit Application</ButtonPrimary>
          </button>
        </form>
      </div>
    </div>
  );
};

export default BecomeInstructor;
