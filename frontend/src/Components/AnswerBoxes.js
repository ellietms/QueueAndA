import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const AnswerBoxes = ({ answer }) => {
  return (
    <div className="container answer_box my-4">
      <label className="px-3 nameOfPerson">{answer.userEmail}</label>
      <div className="answer_font px-3 py-2">{answer.answer}</div>
      <div className="d-flex justify-content-end date">
        Date:{answer.createdAt.split("T")[0]}
      </div>
      <div className="d-flex justify-content-end time">
        Time:{answer.createdAt.split("T")[1].split(".")[0]}
      </div>
    </div>
  );
};

export default AnswerBoxes;
