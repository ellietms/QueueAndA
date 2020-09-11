import React from "react";

const Pagination = ({ questionsPerPage, totalQs, paginate, next, prev }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalQs / questionsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="container mt-4">
      <ul className="pagination pagination-lg">
        <span
          onClick={() => paginate(pageNumbers[0])}
          className="page-link"
          aria-label="Previous"
        >
          <span aria-hidden="true">&laquo;</span>
          <span className="sr-only">First Page</span>
        </span>
        <li className="page-item">
          <span
            onClick={(e) => {
              e.preventDefault();
              prev();
            }}
            className="page-link"
          >
            Previous
          </span>
        </li>

        {pageNumbers.map((number, index) => (
          <li key={index} className="page-item ">
            <span
              onClick={(e) => {
                e.preventDefault();
                paginate(number);
              }}
              className="page-link "
            >
              {number}
            </span>
          </li>
        ))}

        <li className="page-item">
          <span
            onClick={(e) => {
              e.preventDefault();
              next();
            }}
            className="page-link"
          >
            Next
          </span>
        </li>
        <span
          onClick={() => paginate(pageNumbers.length)}
          className="page-link"
          aria-label="Next"
        >
          <span aria-hidden="true">&raquo;</span>
          <span className="sr-only">Last Page</span>
        </span>
      </ul>
    </nav>
  );
};

export default Pagination;
