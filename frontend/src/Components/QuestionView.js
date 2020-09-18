import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const QuestionView = ({ question }) => {
  return (
    <div className="view">
      <p><span className="No_view">{question}</span>View</p>
    </div>
  );
};
export default QuestionView;
