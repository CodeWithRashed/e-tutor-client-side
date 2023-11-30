import { Link } from "react-router-dom";
import classBanner from "../../assets/class-banner.png";
import { LabelMain } from "../Shared/Labels";
import { FaStar } from "react-icons/fa6";

const CourseCard = (courseData) => {
  const {title, _id, thumbnail, enrollCount, level, price, rating} = courseData.courseData
  console.log(courseData)
  return (
    <Link to={`/courses/${_id}`}>
    <div className="rounded-lg overflow-hidden shadow-lg">
      <div className="w-full">
        <img className="object-cover w-full" src={thumbnail} alt={title} />
      </div>
      <div className="p-3 flex flex-col gap-3 justify-between">
        <div className="flex justify-between">
          <h3>
            <LabelMain>{level}</LabelMain>
          </h3>
          <h3 className="text-2xl text-color-primary font-bold">{parseFloat(price).toFixed(0) -(parseFloat(price).toFixed(0) * parseFloat(price).toFixed(0)/100) }$ <span className="text-base text-color-gray line-through">
                      {parseFloat(price).toFixed(0)}$
                      </span></h3>
        </div>
        <h1 className="text-2xl truncate ...">
         {title}
        </h1>
        <hr />
        <div className="flex justify-between">
          <div>
            <div className="flex gap-1 justify-center items-center">
              <FaStar className="text-orange-500 text-xl h-6 w-5 "></FaStar>
              <h1 className="text-xl  h-6 w-5 ">{rating}</h1>
            </div>
          </div>
          <h3>{enrollCount}+ <span className="text-color-gray">enrolled</span></h3>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default CourseCard;
