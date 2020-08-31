import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const DropDownCategories = ({showSpecificModule}) => {
  return (
    <div>
      <select
        className="btn dropDown_category"
        onChange={(event) => showSpecificModule(event.target.value)}
      >
        <option value={""}>
         All Categories
        </option>
        <option value={"Html"}>
          Html
        </option>
        <option value={"Css"}>
          Css
        </option>
        <option value={"Javascript"}>
          Javascript
        </option>
        <option value={"React"}>
          React
        </option>
        <option value={"Node"}>
          Node
        </option>
        <option value={"Express"}>
          Express
        </option>
        <option value={"MongoDB"}>
          MongoDB
        </option>
        <option value={"other"}>
          other
        </option>
    </select>
    </div>
  );
};

export default DropDownCategories;
