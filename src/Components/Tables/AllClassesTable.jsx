import {
  Card,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Dialog,
  DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

import { useAdminCourseData } from "../../Hooks/useAdminCourseData";
import { useCourseCount } from "../../Hooks/useCourseCount";
import LoadingScreen from "../Shared/LoadingScreen";

const TABLE_HEAD = [
  "Course Image",
  "Course Title",
  "Teacher Details",
  "Status",
  "Action",
];

const AllClassesTable = () => {
  const [activePage, setActivePage] = useState(1);
  const perPageItems = 2;
  let totalItems = 2; // IF DB TEACHER IS NOT FOUND DEFAULT IS 2
  const { adminCourseData, isLoading } = useAdminCourseData(
    activePage,
    perPageItems
  );
  console.log(adminCourseData);
  const { courseCount } = useCourseCount();
  //Getting Database All User from database
  const axiosSecure = useAxiosSecure();

  if (courseCount?.length) {
    totalItems = courseCount?.length;
  }

  const pagesCount = Math.ceil(parseInt(totalItems) / parseInt(perPageItems));
  const numberOfPages = [...Array(pagesCount).keys()].map((page) => page + 1);
  //Pagination Function
  const setPageIndex = (index) => {
    setActivePage(index);
  };

  //Handle Modal or Dialog Open
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpen = () => setIsModalOpen(!isModalOpen);
  const [currentCourseId, setCurrentCourseId] = useState(null);
  const [currentCourseName, setCurrentCourseName] = useState(null);

  //Handle Make a user admin
  const approveCourse = (state) => {
    let newData;
    if (state == "Approved") {
      newData = { isApproved: "Approved" };
    }
    if (state == "Rejected") {
      newData = { isApproved: "Rejected" };
    }

    axiosSecure.patch(`/api/update/course?_id=${currentCourseId}`, newData);
  };
  return (
    <div className="mt-0 pt-0">
      {courseCount?.length && (
        <Card className="h-full w-full shadow-lg border-none">
          <CardBody className="px-0">
            <table className="w-full table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              {isLoading ? (
                <tbody>
                <div className="flex justify-center items-center h-[200px] w-[100%]" >
                  <LoadingScreen></LoadingScreen>
                </div>
                </tbody>
              ) : (
                <tbody>
                  {adminCourseData?.map(
                    (
                      {
                        _id,
                        title,
                        thumbnail,
                        isApproved,
                        teacher: { name, image },
                      },
                      index
                    ) => {
                      const isLast = index === adminCourseData?.length - 1;
                      const classes = isLast
                        ? "p-2"
                        : "p-2 border-b border-blue-gray-50";

                      return (
                        <tr key={_id}>
                          <td className={classes}>
                            <div className="h-12 w-12">
                              <img
                                className="h-12 w-12 object-cover rounded-lg"
                                src={thumbnail}
                                alt=""
                              />
                            </div>
                          </td>

                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {title}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <div className="flex items-center gap-3">
                              {/* Add teacher to the destructuring assignment */}
                              <Avatar
                                src={image}
                                alt={name} // Assuming teacher is a string, adjust accordingly
                                size="md"
                                className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                              />
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-bold"
                              >
                                {name}
                              </Typography>
                            </div>
                          </td>

                     
                          {/* Status */}
                          <td className={classes}>
                            <div className="w-max">
                              <Chip
                                size="sm"
                                variant="ghost"
                                value={isApproved}
                                color={
                                  isApproved === "Approved"
                                    ? "green"
                                    : isApproved === "Pending"
                                    ? "amber"
                                    : "red"
                                }
                              />
                            </div>
                          </td>
                          <td className={classes}>
                            <Tooltip content="Approve Class">
                              <Button
                                disabled={
                                  isApproved === "Approved" ||
                                  isApproved === "Rejected"
                                }
                                onClick={() => {
                                  setCurrentCourseId(_id);
                                  setCurrentCourseName(title);
                                  handleOpen();
                                }}
                                size="sm"
                              >
                                Edit
                              </Button>
                            </Tooltip>
                          </td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              )}
            </table>
          </CardBody>
          <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
            <Button
              onClick={() => {
                setPageIndex(activePage - 1);
              }}
              disabled={activePage == 1}
              variant="outlined"
              size="sm"
            >
              Previous
            </Button>
            <div className="flex items-center gap-2">
              {numberOfPages.map((page, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setPageIndex(page);
                  }}
                >
                  <IconButton variant={activePage == page ? "" : "outlined"}>
                    {page}
                  </IconButton>
                </button>
              ))}
            </div>
            <Button
              onClick={() => {
                setPageIndex(activePage + 1);
              }}
              disabled={activePage == pagesCount}
              variant="outlined"
              size="sm"
            >
              Next
            </Button>
          </CardFooter>

          {/* Dialog */}
          <Dialog open={isModalOpen} handler={handleOpen}>
            <p className="text-xl flex-col text-color-black mt-5 flex justify-center items-center text-center">
              Are you sure! you want to approved <br />
              <span className="text-color-primary">
              
                {currentCourseName}
              </span>
            </p>

            <DialogFooter className="flex justify-center items-center gap-5">
              <Button
                variant="text"
                color="red"
                onClick={() => {
                  handleOpen();
                  approveCourse("Rejected");
                }}
                className="mr-1 "
              >
                <span>Reject</span>
              </Button>
              <Button
                variant="gradient"
                color="green"
                onClick={() => {
                  handleOpen();
                  approveCourse("Approved");
                }}
              >
                <span>Confirm</span>
              </Button>
            </DialogFooter>
          </Dialog>
        </Card>
      )}
    </div>
  );
};

export default AllClassesTable;
