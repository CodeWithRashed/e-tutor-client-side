import { FaEdit as PencilIcon } from "react-icons/fa";
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
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { useEffect, useState } from "react";

const TABLE_HEAD = ["User", "Email", "Role", "Action"];
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const ManageUsersTable = () => {
  const [activePage, setActivePage] = useState(1);
  //Getting Database All User from database
  const axiosSecure = useAxiosSecure();
  const [dbAllUserData, setDbAllUserData] = useState(null);
  const [dbUserCount, setDbUserCount] = useState(null);
  const { isLoading, error, refetch } = useQuery({
    queryKey: ["userData"],
    queryFn: async () => {
      try {
        const responseUserCount = await axiosSecure.get(`/api/get/usersCount`);
        const response = await axiosSecure.get(
          `/api/get/users?page=${activePage}&pageSize=2`
        );
        const userData = response.data;
        const userCountData = responseUserCount.data;
        setDbAllUserData(userData);
        setDbUserCount(userCountData.length);
        return userData;
      } catch (error) {
        console.error("Error fetching user data:", error);
        throw error; // Rethrow the error to be caught by React Query
      }
    },
  });
 
  // refetch table data
  useEffect(() => {
    refetch();
  }, [activePage, refetch]);

  // Handle Table Pagination
  let totalItems = 2;
  if (dbUserCount) {
    totalItems = dbUserCount;
  }
  const perPageItems = 2;
  const pagesCount = Math.ceil(parseInt(totalItems) / parseInt(perPageItems));
  const numberOfPages = [...Array(pagesCount).keys()].map((page) => page + 1);
  //Pagination Function
  const setPageIndex = (index) => {
    setActivePage(index);
  };


  //Handle Modal or Dialog Open
  const [isModalOpen, setIsModalOpen] = useState(true);
  const handleOpen = () => setIsModalOpen(!isModalOpen);
  return (
    <div className="mt-0 pt-0">
      {dbUserCount && (
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
                {dbAllUserData?.map(
                  ({ _id, name, email, image, role }, index) => {
                    const isLast = index === dbAllUserData?.length - 1;
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
                            {email}
                          </Typography>
                        </td>

                        <td className={classes}>
                          <div className="w-max">
                            <Chip
                              size="sm"
                              variant="ghost"
                              value={role}
                              color={
                                role === "Admin"
                                  ? "green"
                                  : role === "User"
                                  ? "amber"
                                  : "red"
                              }
                            />
                          </div>
                        </td>

                        <td className={classes}>
                          <Tooltip content="Make Admin">
                          <Button size="sm">Edit</Button>
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
        </Card>
      )}

      {/* Dialog */}
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody>
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty five years to get these plants, twenty five years of
          blood sweat and tears, and I&apos;m never giving up, I&apos;m just
          getting started. I&apos;m up to something. Fan luv.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default ManageUsersTable;
