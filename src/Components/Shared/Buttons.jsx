import { FaArrowRight, FaSpinner} from "react-icons/fa6";
import PropTypes from "prop-types";

const ButtonPrimary = ({children}) => {
  return (
    <div className="bg-[#FF6636] flex justify-center items-center px-3 py-2 text-white font-bold rounded-lg hover:bg-[#CC522B] shadow-sm transition-all ease-in-out">
      {children}
    </div>
  )
}

const ButtonSecondary = ({children}) => {
    return (
      <div className="bg-[#FFEEE8] px-3 py-2 text-[#FF6636] font-bold rounded-lg hover:bg-[#FFDDD1] shadow-sm transition-all ease-in-out">
        {children}
      </div>
    )
  }

  const ButtonArrow = ({children}) => {
    return (
      <div className="bg-[#FFEEE8] px-3 py-2 text-[#FF6636] font-bold rounded-lg hover:bg-[#FFDDD1] shadow-sm transition-all ease-in-out">
        <div className="flex gap-5 justify-center items-center">{children} <FaArrowRight /></div>
      </div>
    )
  }

  const ButtonLoading = ({children, isLoading}) => {
    return (
      <div className="px-3 py-2 bg-[#FF6636] font-bold rounded-lg hover:bg-[#CC522B] text-white shadow-sm transition-all ease-in-out">
        <div className="flex gap-5 justify-center items-center">
            {isLoading ? <FaSpinner className="animate-spin text-2xl" /> :  children }
           
            </div>
      </div>
    )
  }
  ButtonPrimary.propTypes = {
    children: PropTypes.func,
  };
  ButtonSecondary.propTypes = {
    children: PropTypes.func,
  };
  ButtonArrow.propTypes = {
    children: PropTypes.func,
  };
  ButtonLoading.propTypes = {
    children: PropTypes.func,
    isLoading: PropTypes.bool
  };
  
export {ButtonPrimary, ButtonSecondary, ButtonArrow, ButtonLoading}
