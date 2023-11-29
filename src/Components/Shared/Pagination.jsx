
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Pagination = ({ courseDataCount, perPageItems, activePage, setActivePage }) => {
  console.log(courseDataCount)
  const totalItems = courseDataCount ; // I corrected the variable name from totalIteams to totalItems
  const pageSize = parseInt(perPageItems);
  const pagesCount = Math.ceil(parseInt(totalItems) / parseInt(pageSize));
  const numberOfPages = [...Array(pagesCount).keys()].map((page) => page + 1);


  //Pagination Function
  const setPageIndex = (index) => {
    setActivePage(index);
  };

  return (
    <div>
      <div className="flex items-center gap-4">
        <button
          className={`${
            activePage === 1
              ? "bg-gray-200 text-gray-400 flex items-center gap-2 justify-center  px-4 py-4 rounded-full text-xl font-bold"
              : "flex items-center gap-2 justify-center bg-[#FFEEE8] px-4 py-4 rounded-full text-[#FF6636] text-xl font-bold"
          }`}
          onClick={() => {
            setPageIndex(activePage - 1);
          }}
          disabled={activePage === 1}
        >
          <FaArrowLeft strokeWidth={2} className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-2">
          {numberOfPages.map((page, index) => (
            <div key={index}>
              <button
                className={`${
                  activePage === page
                    ? "bg-[#FF6636] text-white"
                    : "bg-[#FFEEE8] text-[#FF6636]"
                } px-4 py-3 rounded-full flex justify-center items-center font-bold`}
                onClick={() => {
                  setPageIndex(page);
                }}
              >
                {`0${page}`}
              </button>
            </div>
          ))}
        </div>
        <button
          className={`${
            activePage === pagesCount
              ? "bg-gray-200 text-gray-400 flex items-center gap-2 justify-center  px-4 py-4 rounded-full text-xl font-bold"
              : "flex items-center gap-2 justify-center bg-[#FFEEE8] px-4 py-4 rounded-full text-[#FF6636] text-xl font-bold"
          }`}
          onClick={() => {
            setPageIndex(activePage + 1);
          }}
          disabled={activePage === pagesCount}
        >
          <FaArrowRight strokeWidth={2} className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
