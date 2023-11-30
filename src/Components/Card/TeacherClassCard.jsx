import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  ButtonGroup,
  Button,
  Chip,
} from "@material-tailwind/react";
import { LabelMain } from "../Shared/Labels";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { errorToast, successToast } from "../../utils/Toasts";

const TeacherClassCard = (singleCourseData) => {
  const axiosSecure = useAxiosSecure()

  const { title, thumbnail, teacher, price, description, _id, isApproved } =
    singleCourseData.singleCourseData;

  const navigator = useNavigate();

const handleDelete = async () => {
  const response = await axiosSecure.delete(`/api/delete/course?_id=${_id}`)
  console.log(response)
  if(response.status == 200){
    successToast("Course Delete Successful")
  }else{
    errorToast("Error Deleting! Try Again")
  }
}

  return (
    <div>
      <Card className="overflow-hidden">
        <CardHeader
          floated={false}
          shadow={true}
          color="transparent"
          className="m-0 rounded-none"
        >
          <div className="flex gap-2 mb-2">
            <Avatar
              size="sm"
              variant="circular"
              src={teacher?.image}
              alt={teacher?.name}
            />
            <div className="flex flex-col text-sm">
              <div className="flex items-center justify-between">
                <h1>{teacher?.name}</h1>
              </div>
              <p>{teacher?.title}</p>
            </div>
          </div>
          <div className="relative">
            <img src={thumbnail} alt={title} />
            <div className="flex gap-2 py-3 pl-2">
              <Chip
                size="sm"
                variant="ghost"
                value={isApproved}
                color={
                  isApproved === "Approved"
                    ? "green"
                    : isApproved === "Pending"
                    ? "amber"
                    : "red"
                }
              />
              <LabelMain>{price}$</LabelMain>
            </div>
          </div>
        </CardHeader>
        <CardBody className="p-3">
          <h1 className="text-xl text-color-black font-medium  truncate ...">
            {title}
          </h1>
          <Typography
            variant="sm"
            color="gray"
            className="mt-1 font-normal line-clamp-2"
          >
            {description}
          </Typography>
        </CardBody>
        <div className="px-3 pb-3 flex items-center justify-center">
          <ButtonGroup size="sm">
            <Button
              onClick={() => {
                navigator(`/dashboard/my-class/${_id}`);
              }}
              disabled={isApproved == "Pending" || isApproved == "Rejected"}
            >
              See Details
            </Button>
            <Button>Edit</Button>
            <Button onClick={()=>{
              handleDelete()
            }}>Delete</Button>
          </ButtonGroup>
        </div>
      </Card>
    </div>
  );
};

export default TeacherClassCard;
