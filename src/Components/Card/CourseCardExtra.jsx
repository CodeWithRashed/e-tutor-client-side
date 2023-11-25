import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { ButtonPrimary } from "../Shared/Buttons";

const CourseCardExtra = () => {
  return (
    <div>
      <Card className="w-full max-w-[26rem] shadow-lg">
        <CardHeader floated={false} color="blue-gray">
          <img
            src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="ui/ux review check"
          />
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        </CardHeader>
        <CardBody>
          <div className="mb-3 flex items-center justify-between">
            <Typography
              variant="h5"
              color="blue-gray"
              className="font-medium truncate ..."
            >
              <h1 className="truncate ...">
                Wooden House, Florida Wooden House, Florida Wooden House,
                Florida
              </h1>
            </Typography>
            <Typography
              color="blue-gray"
              className="flex items-center gap-1.5 font-normal"
            >
              <h1 className="text-2xl text-color-primary font-bold">75$</h1>
            </Typography>
          </div>
          <Typography color="gray" className="font-medium truncate ...">
            Enter a freshly updated and thoughtfully furnished peaceful home
            surrounded by ancient trees, stone walls, and open meadows.
          </Typography>

          <div className="avatar flex gap-3 mt-3 justify-between items-center">
            <div className="flex justify-between gap-2 items-center w-full">

            <Avatar
              size="lg"
              variant="circular"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              alt="tania andrew"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex flex-col">
                <h1> Tania Andrew</h1>
                <h1>Instructor</h1>
              </div>
            </div>
            </div>
            <div className="w-full">
            <ButtonPrimary>Enroll</ButtonPrimary>
            </div>
          </div>
        </CardBody>
       
      </Card>
    </div>
  );
};

export default CourseCardExtra;
