import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const DropDownAnswered = ({showQuestionWithNoAnswer}) => {
  return (
    <div className="container">
      <select
        className="btn header_button py-2"
        onChange={(event) => showQuestionWithNoAnswer(event.target.value)}
      >
        <option value={""}>All Questions</option>
        <option value={"0"}> No answer</option>
      </select>
    </div>
  );
};

export default DropDownAnswered;
