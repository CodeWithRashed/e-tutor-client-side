import { useNavigate } from "react-router-dom";
import { useState } from "react";

//Material Tailwind Components
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Dialog,
  DialogFooter,
  Button,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

//React Icons
import {
  FaRegUserCircle,
  FaAngleDown,
  FaAngleRight,
  FaShoppingCart,
} from "react-icons/fa";

import { MdClass, MdDashboard, MdInbox, MdManageAccounts } from "react-icons/md";

import { PiDatabaseFill } from "react-icons/pi";

//Functions Components
export function TeacherNav() {
  const [open, setOpen] = useState(0);


  const navigator = useNavigate();
  const [size, setSize] = useState(null);
  const handleOpen = (value) => setSize(value);

  const NavigateUsers = (location) => {
    navigator(location);

    handleOpen("sm");
  };

  return (
    <div className="flex justify-center items-start p-2 h-full">
      <Card className=" w-full h-full  shadow-xl shadow-blue-gray-900/5">
        <List>
          {/* //Dashboard// */}
          <button
            onClick={() => {
              let location = "/dashboard";
              NavigateUsers(location);
            }}
          >
            <ListItem>
              <ListItemPrefix>
                <MdDashboard className="h-5 w-5" />
              </ListItemPrefix>
              Dashboard
            </ListItem>
          </button>
          <hr className="mb-3" />

          {/* //Add Class// */}
          <button
            onClick={() => {
              let location = "/dashboard/add-class";
              NavigateUsers(location);
            }}
          >
            <ListItem>
              <ListItemPrefix>
                <MdClass className="h-5 w-5" />
              </ListItemPrefix>
              Add Class
            </ListItem>
          </button>


          {/* //ORDERS// */}
          <button
            onClick={() => {
              let location = "/dashboard/my-class";
              NavigateUsers(location);
            }}
          >
            <ListItem>
              <ListItemPrefix>
                <MdClass className="h-5 w-5" />
              </ListItemPrefix>
              My Class
            </ListItem>
          </button>



          {/* //Profile// */}
          <button
            onClick={() => {
              let location = "/dashboard/profile";
              NavigateUsers(location);
            }}
          >
            <ListItem>
              <ListItemPrefix>
                <FaRegUserCircle className="h-5 w-5" />
              </ListItemPrefix>
              Profile
            </ListItem>
          </button>
        </List>
      </Card>
    </div>
  );
}
