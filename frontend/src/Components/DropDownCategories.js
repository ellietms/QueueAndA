import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const DropDownCategories = ({showSpecificModule}) => {
  return (
      <select
        className="border-0 bg-transparent ml-2 text-dark"
        onChange={(event) => showSpecificModule(event.target.value)}
      >
        <option value={""} className='text-white bg-dark'>
         All Categories
        </option>
        <option value={"Html"} className='text-white bg-dark'>
          Html
        </option>
        <option value={"Css"} className='text-white bg-dark'>
          Css
        </option>
        <option value={"Javascript"} className='text-white bg-dark'>
          Javascript
        </option>
        <option value={"React"} className='text-white bg-dark'>
          React
        </option>
        <option value={"Node"} className='text-white bg-dark'>
          Node
        </option>
        <option value={"Express"} className='text-white bg-dark'>
          Express
        </option>
        <option value={"MongoDB"} className='text-white bg-dark'>
          MongoDB
        </option>
        <option value={"other"} className='text-white bg-dark'>
          other
        </option>
    </select>
  );
};

export default DropDownCategories;
