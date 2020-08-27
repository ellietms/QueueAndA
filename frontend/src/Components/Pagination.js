import React from "react";

const Pagination = ({
  questionsPerPage,
  totalQs,
  paginate,
  previousPage,
  nextPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalQs / questionsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="container mt-4">
      <ul className="pagination">
      <a
              onClick={() => previousPage(pageNumbers[1])}
              class="page-link"
              href="#"
              aria-label="Previous"
            >
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>

        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
            
          </li>

        ))}
        <a
              onClick={() => nextPage(pageNumbers.length-1)}
              class="page-link"
              href="#"
              aria-label="Next"
            >
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
      </ul>
    </nav>
  );
};

export default Pagination;
