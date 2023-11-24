import { useState } from "react";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
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

const ProfileNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const profileMenuItems = [
        {
          label: "My Profile",
          icon: FaUserCircle,
        },
        {
          label: "Edit Profile",
          icon: FaGear,
        },
        {
          label: "Dashboard",
          icon: MdDashboard,
        },
       
        {
          label: "Sign Out",
          icon: IoMdPower,
        },
      ];
       
 
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
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
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
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
      
    </div>
  )
}

export default ProfileNav
