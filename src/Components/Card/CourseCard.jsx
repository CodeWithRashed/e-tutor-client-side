import classBanner from "../../assets/class-banner.png";
import { LabelMain } from "../Shared/Labels";
import { FaStar } from "react-icons/fa6";

const CourseCard = () => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <div className="w-full">
        <img className="object-cover w-full" src={classBanner} alt="" />
      </div>
      <div className="p-3 flex flex-col gap-3 justify-between">
        <div className="flex justify-between">
          <h3>
            <LabelMain>Design</LabelMain>
          </h3>
          <h3 className="text-2xl text-color-primary font-bold">57$</h3>
        </div>
        <h1 className="text-2xl truncate ...">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ipsam
          consectetur porro repellat, amet enim!
        </h1>
        <hr />
        <div className="flex justify-between">
          <div>
            <div className="flex gap-1 justify-center items-center">
              <FaStar className="text-orange-500 text-xl h-6 w-5 "></FaStar>
              <h1 className="text-xl  h-6 w-5 ">5</h1>
            </div>
          </div>
          <h3>20+ <span className="text-color-gray">enrolled</span></h3>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
