import { Alert } from "@material-tailwind/react";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const SuccessAlert = () => {
  const [alartOpen, setAlertOpen] = useState(false);
  {
    /* Alert */
  }

  return (
    <Alert
      className="w-full"
      open={true}
      color="green"
      icon={<FaCheckCircle className="text-white" />}
      onClose={() => setAlertOpen(false)}
    //   animate={{
    //     mount: { y: 600 },
    //     unmount: { y: 50 },
    //   }}
    >
      A dismissible alert with custom animation.
    </Alert>
  );
};

export { SuccessAlert };
