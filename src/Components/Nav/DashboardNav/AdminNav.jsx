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

import { MdDashboard, MdInbox, MdManageAccounts } from "react-icons/md";

import { PiDatabaseFill } from "react-icons/pi";

//Functions Components
export function AdminNav() {
  const [open, setOpen] = useState(0);

  const handleOpenAccordion = (value) => {
    setOpen(open === value ? 0 : value);
  };
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
          <Accordion
            open={open === 1}
            icon={
              <FaAngleDown
                strokeWidth={2.5}
                className={`mx-auto  h-4 w-4 transition-transform ${
                  open === 1 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 1}>
              <AccordionHeader
                onClick={() => handleOpenAccordion(1)}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  <MdManageAccounts className="h-5 w-5" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                  Manage
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <button
                  onClick={() => {
                    let location = "/dashboard/manage-students";
                    NavigateUsers(location);
                  }}
                >
                  <ListItem>
                    <ListItemPrefix>
                      <FaAngleRight strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Mange Student 
                  </ListItem>
                </button>
                <button
                  onClick={() => {
                    let location = "/dashboard/manage-teachers";
                    NavigateUsers(location);
                  }}
                >
                  <ListItem>
                    <ListItemPrefix>
                      <FaAngleRight strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Manage Teachers
                  </ListItem>
                </button>
                <button
                  onClick={() => {
                    let location = "/dashboard/manage-classes";
                    NavigateUsers(location);
                  }}
                >
                  <ListItem>
                    <ListItemPrefix>
                      <FaAngleRight strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Manage Classes
                  </ListItem>
                </button>
              </List>
            </AccordionBody>
          </Accordion>
          {/* //ORDERS// */}
          <button
            onClick={() => {
              let location = "/dashboard/orders";
              NavigateUsers(location);
            }}
          >
            <ListItem>
              <ListItemPrefix>
                <FaShoppingCart className="h-5 w-5" />
              </ListItemPrefix>
              Orders
            </ListItem>
          </button>

          {/* //Support Inbox// */}
          <button
            onClick={() => {
              let location = "/dashboard/teachers-request";
              NavigateUsers(location);
            }}
          >
            <ListItem>
              <ListItemPrefix>
                <MdInbox className="h-5 w-5" />
              </ListItemPrefix>
              Teacher Request
              <ListItemSuffix>
                <Chip
                  value="0"
                  size="sm"
                  variant="ghost"
                  color="blue-gray"
                  className="rounded-full"
                />
              </ListItemSuffix>
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
