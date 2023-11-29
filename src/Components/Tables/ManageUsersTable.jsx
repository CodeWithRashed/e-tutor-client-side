// LOCAL FILE IMPORTS



// IMPORTS FROM REACT
import { useState } from "react";


// IMPORT FOR DEPENDENCIES
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



// LOCAL GLOBAL VARIABLE
const TABLE_HEAD = ["User", "Email", "Role", "Action"];


// LOCAL HOOKS IMPORTS
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useUserCount } from "../../Hooks/useUserCount";
import { useUserData } from "../../Hooks/useUserData";


//MAIN COMPONENT START HERE
const ManageUsersTable = () => {
  //HOOKS DATA
  const axiosSecure = useAxiosSecure();
  const {userCount, refetch} = useUserCount()

  //LOCAL STATES
  const [activePage, setActivePage] = useState(1);
  const pageSize = 2;
  //Getting Database All User from database
  const {userData} = useUserData(activePage, 2)


  // Handle Table Pagination
  let totalItems = 2;
  if (userCount) {
    totalItems = userCount;
  }
  const pagesCount = Math.ceil(parseInt(totalItems) / parseInt(pageSize));
  const numberOfPages = [...Array(pagesCount).keys()].map((page) => page + 1);
  //Pagination Function
  const setPageIndex = (index) => {
    setActivePage(index);
  };


  //Handle Modal or Dialog Open
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpen = () => setIsModalOpen(!isModalOpen);
  const [currentUserId, setCurrentUserId] = useState(null)
  const [currentUserName, setCurrentUserName] = useState(null)

  //Handle Make a user admin
  const makeAdmin = async () =>{
    const newData = {role:"Admin"}
    await axiosSecure.patch(`/api/update/user?_id=${currentUserId}`, newData )
    refetch()
  }
  return (
    <div className="mt-0 pt-0">
      {userCount && (
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
                {userData?.map(
                  ({ _id, name, email, image, role }, index) => {
                    const isLast = index === userData?.length - 1;
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
                          <Button onClick={() =>{
                            setCurrentUserId(_id)
                            setCurrentUserName(name)
                            handleOpen()
                          }} size="sm">Edit</Button>
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
      <Dialog open={isModalOpen} handler={handleOpen} >
        <p className="text-xl flex-col text-color-black mt-5 flex justify-center items-center text-center">Are you sure! you want to promote <br /><span className="text-color-primary"> {currentUserName}</span> to an admin?</p>
        
        <DialogFooter className="flex justify-center items-center gap-5">
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1 "
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={()=>{
            handleOpen()
            makeAdmin()
            }}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
        </Card>
      )}

     
    </div>
  );
};

export default ManageUsersTable;
