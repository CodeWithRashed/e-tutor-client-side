import Ratting from "react-rating";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
const RattingComponent = ({rating}) => {
  return (
    <Ratting
      initialRating={rating}
      readonly
      emptySymbol={
        <FaRegStar href="#icon-star-empty" className="icon text-orange-500" />
      }
      fullSymbol={
        <FaStar href="#icon-star-full" className="icon text-orange-500" />
      }
    />
  );
};

export default RattingComponent;
