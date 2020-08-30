import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const DropDownCategories = ({showSpecificModule}) => {
  return (
    <div className="dropdown mt-3">
      <select
        className="btn btn-danger dropDown_category"
        onChange={(event) => showSpecificModule(event.target.value)}
      >
        <option value={""}>
            category
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
