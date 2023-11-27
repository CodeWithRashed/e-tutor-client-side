import { useContext, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { IoMdPower } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import { GlobalDataContext } from "../../ContextApi/DataContext";
import { toast } from "react-toastify";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ProfileNav = () => {
  const { activeUser, userLogout, userPhoto } = useContext(GlobalDataContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const axiosSecure = useAxiosSecure()

  // Manage User Logout
  const doLogout = async () => {
    try {
      axiosSecure.post("/logout", {})
      await userLogout();
    } catch {
      toast.error("Logout failed. Please try again.", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } finally {
      toast.success("Logout Successful", {
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

  const closeMenu = () => setIsMenuOpen(false);
  return (
    <div>
      <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
        <MenuHandler>
          <Button
            variant="text"
            color="blue-gray"
            className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
          >
            <Avatar
              variant="circular"
              size="sm"
              alt={activeUser?.displayName}
              className="border border-gray-900 p-0.5"
              src={userPhoto || activeUser?.photoURL}
            />
            <FaAngleDown
              strokeWidth={2.5}
              className={`h-3 w-3 transition-transform ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            />
          </Button>
        </MenuHandler>
        <MenuList className="p-1">
          <MenuItem
            onClick={closeMenu}
            className={`flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10`}
          >
            <FaUserCircle></FaUserCircle> Profile
          </MenuItem>
          <MenuItem
            onClick={closeMenu}
            className={`flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10`}
          >
            <MdDashboard></MdDashboard> Dashboard
          </MenuItem>
          <MenuItem
            onClick={() => {
              closeMenu();
              doLogout();
            }}
            className={`flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10`}
          >
            <Typography
              as="span"
              variant="small"
              className="font-normal flex gap-2 items-center"
              color="red"
            >
              <IoMdPower className="-translate-y-[1px]"></IoMdPower> Logout
            </Typography>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default ProfileNav;
