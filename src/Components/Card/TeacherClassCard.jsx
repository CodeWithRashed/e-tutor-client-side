import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";

const TeacherClassCard = () => {
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
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              alt="tania andrew"
            />
            <div className="flex flex-col text-sm">
              <div className="flex items-center justify-between">
                <h1>Rashed</h1>
              </div>
              <p>Frontend Lead @ Google</p>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="ui/ux review check"
          />
        </CardHeader>
        <CardBody className="p-3">
          <h1 className="text-xl text-color-black font-medium  truncate ...">Lorem ipsum dolor sit amet.</h1>
          <Typography variant="sm" color="gray" className="mt-1 font-normal line-clamp-2">
            Because it&apos;s about motivating the doers. Because I&apos;m here
            to follow my dreams and inspire others.
          </Typography>
        </CardBody>
        <div className="px-3 pb-3 flex items-center justify-between">
        <button>Edit</button>
        <button>Delete</button>
        <button>Details</button>
        </div>
      </Card>
    </div>
  );
};

export default TeacherClassCard;
