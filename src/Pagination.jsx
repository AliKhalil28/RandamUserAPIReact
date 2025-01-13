import React from "react";

function Pagination({ setPage, currentPage, totalPage }) {
  const handleNext = () => {
    setPage(currentPage + 1);
  };

  const handlePrevious = () => {
    setPage(currentPage - 1);
  };

  return (
    <div className="flex justify-center mt-6">
      <div className="flex items-center space-x-4 mb-4">
        <button
          onClick={handlePrevious}
          className={`${
            currentPage === 1 ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-600"
          } text-white px-4 py-2 rounded-lg`}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-lg">
          Page {currentPage} of {totalPage}
        </span>
        <button
          onClick={handleNext}
          className={`${
            currentPage === totalPage
              ? "bg-blue-300"
              : "bg-blue-500 hover:bg-blue-600"
          } text-white px-4 py-2 rounded-lg`}
          disabled={currentPage === totalPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default Pagination;
