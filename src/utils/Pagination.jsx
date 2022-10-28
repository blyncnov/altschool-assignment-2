import React from "react";

import { GrNext, GrPrevious } from "react-icons/gr";

const Pagination = ({
  resultFromApi,
  postPerPage,
  currentPage,
  setcurrentPage,
}) => {
  const PaginationNumber = [];

  for (let i = 1; i < Math.ceil(resultFromApi.length / postPerPage); i++) {
    PaginationNumber.push(i);
  }

  const PageGetUrl = (val) => {
    setcurrentPage(val);
  };

  const PageGetUrlByArrow = (num) => {
    if (num <= PaginationNumber.length && num > 0) {
      setcurrentPage(num);
    } else {
      return;
    }
  };

  return (
    <div className="pagination-flex-box">
      <div className="pagination-button-controls">
        <h2
          style={{ cursor: "pointer" }}
          onClick={() => PageGetUrlByArrow(currentPage - 1)}
        >
          <GrPrevious />
        </h2>
      </div>
      {PaginationNumber.map((data, index) => {
        return (
          <li
            className="pagination-boxes"
            onClick={() => PageGetUrl(data)}
            key={index}
          >
            {data}
          </li>
        );
      })}

      <div className="pagination-button-controls">
        <h2
          style={{ cursor: "pointer" }}
          onClick={() => PageGetUrlByArrow(currentPage + 1)}
        >
          <GrNext />
        </h2>
      </div>
    </div>
  );
};

export default Pagination;
