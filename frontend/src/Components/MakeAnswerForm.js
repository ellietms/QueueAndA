import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import AnswerForm from "./AnswerForm";



const MakeAnswerForm = ({id}) => {
  return (
    <div className="Answer_form">
      <span className="answer_form_top_text">
        <i className="far fa-lightbulb"></i>
        Your Answer
      </span>
      <AnswerForm id={id} />
    </div>
  );
};

export default MakeAnswerForm;
