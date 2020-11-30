import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Category = ({ category }) => {
  return (
    <div className="">
      <div className="shadow px-2 mb-2 rounded category">{category}</div>
    </div>
  );
};

export default Category;
