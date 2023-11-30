import { useLoaderData } from "react-router-dom";
import { ButtonArrow } from "../../Components/Shared/Buttons";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Tabs,
  Typography,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { TiDocumentAdd } from "react-icons/ti";
import { FaGear } from "react-icons/fa6";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
const MyClassDetails = () => {
  const singleCourseData = useLoaderData();
  const [isModalOpen, setIsModalOpen] = useState(false)
 const axiosSecure = useAxiosSecure()
  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen)
  };
 
  const {
    _id,
    enrollCount,
    } = singleCourseData[0];


    //Handle Form Submit
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();
const onSubmit = async (data) => {

  const assignmentData = {
    assignmentFor: _id,
    assignmentTitle: data.assignmentTitle,
    assignmentDeadline: [new Date(data.assignmentDeadline)],
    assignmentDescription: data.assignmentDescription

  }
  console.log(assignmentData)

  const response = await axiosSecure.post("/api/add/assignment", assignmentData)
  if(response.status == 201){
    console.log("assignment created")
    setIsModalOpen(!isModalOpen)
  }

}
  return (
    <div className="p-5">
      <div className="my-3 flex justify-between pr-5 bg-gray-200 p-3">
        <Button onClick={handleModalOpen}  variant="gradient" className="flex gap-2 items-center ">
          <TiDocumentAdd className="text-white text-2xl" />
          Add Assignment
        </Button>
        <Button variant="gradient" className="flex gap-2 items-center ">
          <FaGear className="text-white text-xl" />
          Manage Class
        </Button>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-8"></div>
        <div className="flex text-center flex-col col-span-4 gap-5">
          <Card
            color="gray"
            variant="gradient"
            className="w-full max-w-[20rem] p-4"
          >
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
            >
              <Typography
                variant="small"
                color="white"
                className="font-normal uppercase"
              >
                Total Enrollment
              </Typography>
              <Typography
                variant="h1"
                color="white"
                className="mt-6 flex justify-center gap-1 text-7xl font-normal"
              >
                <span className="mt-2 text-4xl">{enrollCount}</span>
              </Typography>
            </CardHeader>
          </Card>
          <Card
            color="gray"
            variant="gradient"
            className="w-full max-w-[20rem] p-8"
          >
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
            >
              <Typography
                variant="small"
                color="white"
                className="font-normal uppercase"
              >
                standard
              </Typography>
              <Typography
                variant="h1"
                color="white"
                className="mt-6 flex justify-center gap-1 text-7xl font-normal"
              >
                <span className="mt-2 text-4xl">$</span>29{" "}
                <span className="self-end text-4xl">/mo</span>
              </Typography>
            </CardHeader>
          </Card>
          <Card
            color="gray"
            variant="gradient"
            className="w-full max-w-[20rem] p-8"
          >
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
            >
              <Typography
                variant="small"
                color="white"
                className="font-normal uppercase"
              >
                standard
              </Typography>
              <Typography
                variant="h1"
                color="white"
                className="mt-6 flex justify-center gap-1 text-7xl font-normal"
              >
                <span className="mt-2 text-4xl">$</span>29{" "}
                <span className="self-end text-4xl">/mo</span>
              </Typography>
            </CardHeader>
          </Card>
        </div>
      </div>
      <Dialog
        open={isModalOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Create Assignment</DialogHeader>
        <DialogBody>
       
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-y-4">
        {/* Form Group */}
        <div>
          <label htmlFor="assignmentTitle" className="block text-sm mb-2 dark:text-white">
            Assignment Title
          </label>
          <div className="relative">
            <input
              {...register("assignmentTitle", { required: true })}
              type="text"
              placeholder="Enter Assignment Title..."
              name="assignmentTitle"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            />
            {errors.assignmentTitle && (
              <span className="text-red-500">Assignment Title is required</span>
            )}
          </div>
        </div>
        {/* End Form Group */}

        {/* Form Group */}
        <div>
          <div className="flex justify-between items-center">
            <label htmlFor="assignmentDeadline" className="block text-sm mb-2 dark:text-white">
              Assignment Deadline
            </label>
          </div>
          <div className="relative">
            <input
              {...register("assignmentDeadline", { required: true })}
              type="date"
              placeholder="Assignment Deadline..."
              name="assignmentDeadline"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            />
            {errors.assignmentDeadline && (
              <span className="text-red-500">Assignment Deadline is required</span>
            )}
          </div>
        </div>
        {/* End Form Group */}

        {/* Form Group */}
        <div>
          <div className="flex justify-between items-center">
            <label
              htmlFor="assignmentDescription"
              className="block text-sm mb-2 dark:text-white"
            >
              Assignment Description
            </label>
          </div>
          <div className="relative">
            <textarea
              {...register("assignmentDescription", { required: true })}
              placeholder="Assignment Description..."
              name="assignmentDescription"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            />
            {errors.assignmentDescription && (
              <span className="text-red-500">Assignment Description is required</span>
            )}
          </div>
        </div>
        {/* End Form Group */}

        <button  type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
          Create Assignment
        </button>
      </div>
    </form>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleModalOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
         
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default MyClassDetails;
