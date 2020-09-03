import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import AnswerForm from "./AnswerForm";



const MakeAnswerPage = ({id}) => {
  return (
    <div className="Answer_form">
      <label className="title_Answer">
        <i className="far fa-lightbulb"></i>
       <span> Your Answer</span>
      </label>
      <AnswerForm id={id} />
    </div>
  );
};

export default MakeAnswerPage;
