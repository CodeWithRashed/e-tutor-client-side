import PageTitle from "../Components/PageTitle/PageTitle";
import { IconHolderPrimary } from "../Components/Shared/IconHolder";
import bannerImage from "../assets/instructor-banner.png";
import { PiStudentBold } from "react-icons/pi";
import {
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { ButtonPrimary } from "../Components/Shared/Buttons";
const BecomeInstructor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
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
        <div className="max-w-[1280px] mx-auto px-5 lg:px-10 flex justify-between">
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
              <h1 className="text-color-black font-medium">67.1k</h1>
              <h3 className="text-color-gray">Students</h3>
            </div>
          </div>
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
              <h1 className="text-color-black font-medium">67.1k</h1>
              <h3 className="text-color-gray">Students</h3>
            </div>
          </div>
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
              <h1 className="text-color-black font-medium">67.1k</h1>
              <h3 className="text-color-gray">Students</h3>
            </div>
          </div>
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
              <h1 className="text-color-black font-medium">67.1k</h1>
              <h3 className="text-color-gray">Students</h3>
            </div>
          </div>
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
              <h1 className="text-color-black font-medium">67.1k</h1>
              <h3 className="text-color-gray">Students</h3>
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
                  <PiStudentBold></PiStudentBold>
                </IconHolderPrimary>
              </div>

              {/* Text Content */}
              <div>
                <h1 className="text-lg mt-5">1. Apply to become instructor.</h1>
              </div>
            </div>
            <div className="card bg-color-white p-5 flex justify-center items-center flex-col">
              <div className="w-16 h-16 flex  justify-center items-center">
                <IconHolderPrimary>
                  <PiStudentBold></PiStudentBold>
                </IconHolderPrimary>
              </div>

              {/* Text Content */}
              <div>
                <h1 className="text-lg mt-5">1. Apply to become instructor.</h1>
              </div>
            </div>
            <div className="card bg-color-white p-5 flex justify-center items-center flex-col">
              <div className="w-16 h-16 flex  justify-center items-center">
                <IconHolderPrimary>
                  <PiStudentBold></PiStudentBold>
                </IconHolderPrimary>
              </div>

              {/* Text Content */}
              <div>
                <h1 className="text-lg mt-5">1. Apply to become instructor.</h1>
              </div>
            </div>
            <div className="card bg-color-white p-5 flex justify-center items-center flex-col">
              <div className="w-16 h-16 flex  justify-center items-center">
                <IconHolderPrimary>
                  <PiStudentBold></PiStudentBold>
                </IconHolderPrimary>
              </div>

              {/* Text Content */}
              <div>
                <h1 className="text-lg mt-5">1. Apply to become instructor.</h1>
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
          className="w-1/2 mx-auto space-y-3"
        >
          <div className="relative flex justify-between gap-5">
            <input
              type="email"
              className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder="Enter name"
            />
            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
              <svg
                className="flex-shrink-0 w-4 h-4 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>

            <div className="flex items-center gap-3">
              <Avatar src={bannerImage} alt={bannerImage} size="md" />
              <div className="flex flex-col">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  Rashed
                </Typography>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal opacity-70"
                >
                  email@gmail.com
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
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="experienced">Experienced</option>
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
            <option value="web-development">Web Development</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="video-editing">Video Editing</option>
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
