import { Button, IconButton } from "@material-tailwind/react";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Pagination = ({ totalData, itemsPerPage }) => {
  const totalItems = totalData || 77; // I corrected the variable name from totalIteams to totalItems
  const perPageItems = itemsPerPage || 10;
  const pagesCount = Math.ceil(parseInt(totalItems) / parseInt(perPageItems));
  const numberOfPages = [...Array(pagesCount).keys()].map((page) => page + 1);

  const [active, setActive] = useState(1);
  //Pagination Function
  const getItemProps = (index) => ({
    onClick: () => setActive(index),
  });

  const next = () => {
    if (active === pagesCount) return;
    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
  };

  return (
    <div>
      <div className="flex items-center gap-4">
        <button
          className={`${active === 1 ? "bg-gray-200 text-gray-400 flex items-center gap-2 justify-center  px-4 py-4 rounded-full text-xl font-bold"  : "flex items-center gap-2 justify-center bg-[#FFEEE8] px-4 py-4 rounded-full text-[#FF6636] text-xl font-bold" }`}
          onClick={prev}
          disabled={active === 1}
        >
          <FaArrowLeft strokeWidth={2} className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-2">
            {
                numberOfPages.map((page, index) => (
                    <button className={`${active == page ? "bg-[#FF6636] text-white" : "bg-[#FFEEE8] text-[#FF6636]" }  px-4 py-3 rounded-full flex justify-center items-center  font-bold`} key={index} {...getItemProps(page)}>0{page}</button>
                ))
            }

        </div>
        <button
          className={`${active === pagesCount ? "bg-gray-200 text-gray-400 flex items-center gap-2 justify-center  px-4 py-4 rounded-full text-xl font-bold"  : "flex items-center gap-2 justify-center bg-[#FFEEE8] px-4 py-4 rounded-full text-[#FF6636] text-xl font-bold" }`}
          onClick={next}
          disabled={active === pagesCount}
        >
          <FaArrowRight strokeWidth={2} className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
