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

import { useTeacherData } from "../../Hooks/useTeacherData";
import { useTeacherCount } from "../../Hooks/useTeacherCount";

const TABLE_HEAD = [
  "Teacher",
  "Experience",
  "Title",
  "Category",
  "Status",
  "Action",
];

const TeachersRequestTable = () => {
  const [activePage, setActivePage] = useState(1);
  const perPageItems = 2;
  let totalItems = 2; // IF DB TEACHER IS NOT FOUND DEFAULT IS 2
  const { teachersData } = useTeacherData(activePage, perPageItems);
  const { teachersCount } = useTeacherCount();
  //Getting Database All User from database
  const axiosSecure = useAxiosSecure();

  if (teachersCount?.length) {
    totalItems = teachersCount?.length;
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
  const [currentUserId, setCurrentUserId] = useState(null);
  const [currentUserName, setCurrentUserName] = useState(null);

  //Handle Make a user admin
  const makeTeacher = (state) => {
    let newData;
    if (state == "Accepted") {
      newData = { role: "Teacher", isTeacherRequest: "Accepted" };
    }
    if (state == "Rejected") {
      newData = { role: "User", isTeacherRequest: "Rejected" };
    }

    axiosSecure.patch(`/api/update/user?_id=${currentUserId}`, newData);
  };
  return (
    <div className="mt-0 pt-0">
      {teachersCount?.length && (
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
              <tbody>
                {teachersData?.map(
                  (
                    {
                      _id,
                      name,
                      image,
                      experience,
                      title,
                      category,
                      isTeacherRequest,
                    },
                    index
                  ) => {
                    const isLast = index === teachersData?.length - 1;
                    const classes = isLast
                      ? "p-2"
                      : "p-2 border-b border-blue-gray-50";

                    return (
                      <tr key={_id}>
                        <td className={classes}>
                          <div className="flex items-center gap-3">
                            <Avatar
                              src={image}
                              alt={name}
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
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {experience}
                          </Typography>
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
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {category}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <div className="w-max">
                            <Chip
                              size="sm"
                              variant="ghost"
                              value={isTeacherRequest}
                              color={
                                isTeacherRequest === "Accepted"
                                  ? "green"
                                  : isTeacherRequest === "Pending"
                                  ? "amber"
                                  : "red"
                              }
                            />
                          </div>
                        </td>

                        <td className={classes}>
                          <Tooltip content="Make Teacher">
                            <Button
                              disabled={
                                isTeacherRequest == "Accepted" ||
                                isTeacherRequest == "Rejected"
                              }
                              onClick={() => {
                                setCurrentUserId(_id);
                                setCurrentUserName(name);
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
              Are you sure! you want to promote <br />
              <span className="text-color-primary"> {currentUserName}</span> to
              an Instructor?
            </p>

            <DialogFooter className="flex justify-center items-center gap-5">
              <Button
                variant="text"
                color="red"
                onClick={() => {
                  handleOpen();
                  makeTeacher("Rejected");
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
                  makeTeacher("Accepted");
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

export default TeachersRequestTable;
