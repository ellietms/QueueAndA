import React from "react";
import styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.css";

const Select = styled.select`     
  cursor:pointer;
  margin-right:20px;
  font-weight:bold;
  color:#a31607;
}
  &:hover {
    color: red;
    border-top:1px solid #ed4343;;
  }`


const DropDownCategories = ({ showSpecificModule }) => {
  return (
    <Select
      className="border-0 bg-transparent ml-2"
      onChange={(event) => showSpecificModule(event.target.value)}
    >
      <option value={""} className="text-white bg-dark">
        All Categories
      </option>
      <option value={"Html"} className="text-white bg-dark">
        Html
      </option>
      <option value={"Css"} className="text-white bg-dark">
        Css
      </option>
      <option value={"Javascript"} className="text-white bg-dark">
        Javascript
      </option>
      <option value={"React"} className="text-white bg-dark">
        React
      </option>
      <option value={"Node"} className="text-white bg-dark">
        Node
      </option>
      <option value={"Express"} className="text-white bg-dark">
        Express
      </option>
      <option value={"MongoDB"} className="text-white bg-dark">
        MongoDB
      </option>
      <option value={"other"} className="text-white bg-dark">
        other
      </option>
    </Select>
  );
};

export default DropDownCategories;
