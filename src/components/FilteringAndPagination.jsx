import React from "react";

const FilteringAndPagination = () => {
  return (
    <>
      <div className="py-5 flex items-center space-x-1 sm:space-x-4">
        <div className=" text-headingText flex items-center space-x-2 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          <span className="button-text hidden sm:block">Previous</span>
        </div>
        <div className=" text-headingText flex items-center space-x-2  cursor-pointer">
          <span className="button-text hidden sm:block">Next</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default FilteringAndPagination;
