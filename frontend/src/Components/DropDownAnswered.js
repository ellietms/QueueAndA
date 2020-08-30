import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const DropDownAnswered = ({showQuestionWithNoAnswer}) => {
  return (
    <div className="container mr-3 d-flex">
    <div className="text container ml-2">All Questions</div>
      <select
        className="btn has_NoAnswer"
        onChange={(event) => showQuestionWithNoAnswer(event.target.value)}
      >
        <option value={""}>All Questions</option>
        <option value={"0"}> No answer</option>
      </select>
    </div>
  );
};

export default DropDownAnswered;
