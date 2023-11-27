import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Avatar,
} from "@material-tailwind/react";

const MyEnrollClass = () => {
  return (
    <div>
      <div className="grid grid-cols-3">
        <Card className="">
          <CardHeader shadow={false} floated={false}>
            <div className="flex items-center gap-4 mb-3">
              <Avatar
                src="https://docs.material-tailwind.com/img/face-2.jpg"
                alt="avatar"
              />
              <div>
                <Typography variant="h6">Tania Andrew</Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  Web Developer
                </Typography>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
              alt="card-image"
              className="h-[200px] w-full object-cover rounded-lg"
            />
          </CardHeader>
          <CardBody>
            <div className="flex items-center w-full">
              <Typography color="blue-gray" className="font-medium">
                Marketing Mastermind
              </Typography>
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              ripple={false}
              fullWidth={true}
              className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            >
              continue
            </Button>
          </CardFooter>
        </Card>
        <Card className="">
          <CardHeader shadow={false} floated={false}>
            <div className="flex items-center gap-4 mb-3">
              <Avatar
                src="https://docs.material-tailwind.com/img/face-2.jpg"
                alt="avatar"
              />
              <div>
                <Typography variant="h6">Tania Andrew</Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  Web Developer
                </Typography>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
              alt="card-image"
              className="h-[200px] w-full object-cover rounded-lg"
            />
          </CardHeader>
          <CardBody>
            <div className="flex items-center w-full">
              <Typography color="blue-gray" className="font-medium">
                Marketing Mastermind
              </Typography>
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              ripple={false}
              fullWidth={true}
              className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            >
              continue
            </Button>
          </CardFooter>
        </Card>
        <Card className="">
          <CardHeader shadow={false} floated={false}>
            <div className="flex items-center gap-4 mb-3">
              <Avatar
                src="https://docs.material-tailwind.com/img/face-2.jpg"
                alt="avatar"
              />
              <div>
                <Typography variant="h6">Tania Andrew</Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  Web Developer
                </Typography>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
              alt="card-image"
              className="h-[200px] w-full object-cover rounded-lg"
            />
          </CardHeader>
          <CardBody>
            <div className="flex items-center w-full">
              <Typography color="blue-gray" className="font-medium">
                Marketing Mastermind
              </Typography>
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              ripple={false}
              fullWidth={true}
              className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            >
              continue
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default MyEnrollClass;
