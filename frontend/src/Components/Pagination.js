import React from "react";

const Pagination = ({ questionsPerPage, totalQs, paginate, next, prev }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalQs / questionsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="container mt-4">
      <ul className="pagination pagination-lg">
        <a
          onClick={() => paginate(pageNumbers[0])}
          class="page-link"
          href="#"
          aria-label="Previous"
        >
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">First Page</span>
        </a>
        <li className="page-item">
          <a  onClick={(e) => {e.preventDefault(); prev()}} className="page-link" href="#">
            Previous
          </a>
        </li>

        {pageNumbers.map((number) => (
          <li key={number} className="page-item ">
            <a
              onClick={(e) => {
                e.preventDefault();
                paginate(number);
              }}
              className="page-link "
            >
              {number}
            </a>
          </li>
        ))}

        <li className="page-item">
          <a onClick={(e) => {e.preventDefault(); next()}} className="page-link" href="#">
            Next
          </a>
        </li>
        <a
          onClick={() => paginate(pageNumbers.length)}
          class="page-link"
          href="#"
          aria-label="Next"
        >
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only">Last Page</span>
        </a>
      </ul>
    </nav>
  );
};

export default Pagination;