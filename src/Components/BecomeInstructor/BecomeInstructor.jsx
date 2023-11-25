import instructorImage from "../../assets/instructor.png";
import { ButtonArrow } from "../Shared/Buttons";

const ApplySteps = ({children}) => {
    return (
        <div>
            <div className="bg-color-primary-light p-3 flex justify-center items-center w-10 h-10 text-color-primary font-bold text-2xl rounded-full">
                {children}
            </div>
        </div>
    )
}

const BecomeInstructor = () => {
  return (
    <div className="grid lg:grid-cols-2 py-16">
      <div className="grid grid-cols-3  bg-color-primary px-5 items-center relative">
        <div className="col-span-2 space-y-3">
          <h1 className="text-3xl text-white font-bold">
            Become an instructor
          </h1>
          <p className="text-gray-200">
            Instructors from around the world teach millions of students on
            E-Tutor. We provide the tools and skills to teach what you love.
          </p>
          <button>
            <ButtonArrow>Start Teaching</ButtonArrow>
          </button>
        </div>
        <div className="bottom-0 right-0  absolute ">
          <img src={instructorImage} alt="" />
        </div>
      </div>
      <div className="bg-white p-8 space-y-5">
        <h1 className="text-2xl">Your Teaching and Earning Steps</h1>
        <div className="space-y-2">
            <div className="flex items-center gap-3 text-xl text-color-gray"> <ApplySteps>1</ApplySteps>Apply to become instructor</div>
            <div className="flex items-center gap-3 text-xl text-color-gray"> <ApplySteps>2</ApplySteps>Build & edit your profile</div>
            <div className="flex items-center gap-3 text-xl text-color-gray"> <ApplySteps>3</ApplySteps>Create your new course</div>
            <div className="flex items-center gap-3 text-xl text-color-gray"> <ApplySteps>4</ApplySteps>Start teaching & earning</div>
        </div>
      </div>
    </div>
  );
};

export default BecomeInstructor;
