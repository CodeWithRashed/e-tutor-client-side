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
} from "@material-tailwind/react";

//React Icons
import { FaRegUserCircle } from "react-icons/fa";
import { MdSummarize, MdDashboard, MdInbox } from "react-icons/md";
import { IoCodeWorking } from "react-icons/io5";
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import { BiSolidNoEntry } from "react-icons/bi";
import { SiAudiomack } from "react-icons/si";
import { TbPhotoCog } from "react-icons/tb";

//Shared Components
import ProTag from "../../Shared/ProTag";
import aiGenieIcon from "../../../assets/favicon.png";

//Functions Components
export function UserDashNav() {
  const navigator = useNavigate();
  const [isPro, setIsPro] = useState(true);
  const [size, setSize] = useState(null);
  const handleOpen = (value) => setSize(value);

  //Handle PRO user navigation
  const navigatePros = (location) => {
    if (isPro) {
      navigator(location);
    } else {
      console.log("You are not pro");
      handleOpen("sm");
    }
  };

  return (
    <div className="flex justify-center items-start p-2 h-full">
      <Card className=" w-full h-full  shadow-xl shadow-blue-gray-900/5">
        <List>
          {/* //Dashboard// */}
          <button
            onClick={() => {
              let location = "/dashboard";
              navigatePros(location);
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

          {/* //Image Generation// */}
          <button
            onClick={() => {
              let location = "/dashboard/generate-image";
              navigatePros(location);
            }}
          >
            <ListItem>
              <ListItemPrefix>
                <TbPhotoCog className="h-5 w-5" />
              </ListItemPrefix>
              Image Generation
            </ListItem>
          </button>

          {/* //Code Generation// */}
          <button
            onClick={() => {
              let location = "/dashboard/generate-code";
              navigatePros(location);
            }}
          >
            <ListItem>
              <ListItemPrefix>
                <IoCodeWorking className="h-5 w-5" />
              </ListItemPrefix>
              Code Generation
            </ListItem>
          </button>

          {/* //Summarizer Content*/}
          <button
            onClick={() => {
              let location = "/dashboard/summarize-content";
              navigatePros(location);
            }}
          >
            <ListItem>
              <ListItemPrefix>
                <MdSummarize className="h-5 w-5" />
              </ListItemPrefix>
              Summarize
              {!isPro && (
                <ListItemSuffix>
                  <ProTag></ProTag>
                </ListItemSuffix>
              )}
            </ListItem>
          </button>

          {/* //Chat with Ai// */}
          <button
            onClick={() => {
              let location = "/dashboard/chat-with-ai";
              navigatePros(location);
            }}
          >
            <ListItem>
              <ListItemPrefix>
                <IoChatboxEllipsesSharp className="h-5 w-5" />
              </ListItemPrefix>
              AI Chat
            </ListItem>
          </button>

          {/* //Text to Speech// */}
          <button
            onClick={() => {
              let location = "/dashboard/text-to-speech";
              navigatePros(location);
            }}
          >
            <ListItem>
              <ListItemPrefix>
                <SiAudiomack className="h-5 w-5" />
              </ListItemPrefix>
              Text to Speech
              {!isPro && (
                <ListItemSuffix>
                  <ProTag></ProTag>
                </ListItemSuffix>
              )}
            </ListItem>
          </button>
          <hr className="mt-3" />

          {/* //Support Inbox// */}
          <button
            onClick={() => {
              let location = "/dashboard/inbox-support";
              navigatePros(location);
            }}
          >
            <ListItem>
              <ListItemPrefix>
                <MdInbox className="h-5 w-5" />
              </ListItemPrefix>
              Support Inbox
              {!isPro && (
                <ListItemSuffix>
                  <ProTag></ProTag>
                </ListItemSuffix>
              )}
              {isPro && (
                <ListItemSuffix>
                  <Chip
                    value="0"
                    size="sm"
                    variant="ghost"
                    color="blue-gray"
                    className="rounded-full"
                  />
                </ListItemSuffix>
              )}
            </ListItem>
          </button>

          {/* //Profile// */}
          <button
            onClick={() => {
              let location = "/dashboard/profile";
              navigatePros(location);
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

        {/* //Upgrade Card// */}
        {!isPro && (
          <Card className="relative mt-10 mx-auto rounded-main  bg-color-primary bg-gradient-to-t  from-[#4A25E1]  to-color-primary p-5 text-white text-center">
            <div className="absolute top-[-20%] translate-x-full translate-y-[-5%] border-2 border-white p-2 bg-color-primary rounded-full">
              <img className="h-10 w-10" src={aiGenieIcon} alt="" />
            </div>
            <Typography variant="h6" className="mb-1">
              Go unlimited with PRO
            </Typography>
            <Typography variant="small" className="font-normal opacity-80">
              Get your Project to another level and start doing more with AI
              Genie PRO!
            </Typography>
            <div className="mt-4 flex gap-3 mx-auto">
              <button className="bg-color-primary rounded-main px-3 py-2">
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  className="font-medium"
                >
                  Upgrade Now
                </Typography>
              </button>
            </div>
          </Card>
        )}
      </Card>

      {/* modal */}
      <Dialog
        open={size === "sm"}
        size={size || "sm"}
        handler={handleOpen}
        className="rounded-main"
      >
        <div className="p-10">
          <BiSolidNoEntry className="text-5xl text-center w-full text-red-800"></BiSolidNoEntry>
          <p className="mt-5 text-color-title text-center text-xl">
            This Feature is Only Available for Pro Users
          </p>
        </div>

        <DialogFooter className="flex justify-center items-center gap-5">
          <Button
            variant="black"
            color="Black"
            onClick={handleOpen}
            className="mr-1 rounded-main"
          >
            <span>Cancel</span>
          </Button>
          <Button
            className="bg-color-primary rounded-main"
            onClick={handleOpen}
          >
            <span>Upgrade</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
