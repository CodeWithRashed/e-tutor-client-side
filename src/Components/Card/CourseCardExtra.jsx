import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { ButtonPrimary } from "../Shared/Buttons";
import { Link } from "react-router-dom";

const CourseCardExtra = (singleCourse) => {
  const {title, thumbnail, teacher, price, description, _id} = singleCourse.singleCourse
  console.log(singleCourse)

  return (
    <div>
      <Card className="w-full shadow-lg">
        <CardHeader floated={false} color="blue-gray">
          <img
            src={thumbnail}
            alt={title}
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
               {title}
              </h1>
            </Typography>
            <Typography
              color="blue-gray"
              className="flex items-center gap-1.5 font-normal"
            >
              <h1 className="text-2xl text-color-primary font-bold">{price}$</h1>
            </Typography>
          </div>
          <Typography color="gray" className="font-medium truncate ...">
           {description}
          </Typography>

          <div className="avatar flex gap-3 mt-3 justify-between items-center">
            <div className="flex justify-between gap-2 items-center w-full">

            <Avatar
              size="sm"
              variant="circular"
              src={teacher?.image}
              alt="tania andrew"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex flex-col text-xs">
                <h1> {teacher?.name}</h1>
                <h1>{teacher?.title}</h1>
              </div>
            </div>
            </div>
            <div className="w-full">
            
              <Link to={`/courses/${_id}`}>
                
              <ButtonPrimary>Enroll</ButtonPrimary>
                
                </Link>
            
            </div>
          </div>
        </CardBody>
       
      </Card>
    </div>
  );
};

export default CourseCardExtra;
