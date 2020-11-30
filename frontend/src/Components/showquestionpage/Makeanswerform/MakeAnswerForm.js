import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import AnswerForm from "./AnswerForm";

const MakeAnswerForm = ({ id }) => {
  return (
    <div className="Answer_form">
      <AnswerForm id={id} />
    </div>
  );
};

export default MakeAnswerForm;
