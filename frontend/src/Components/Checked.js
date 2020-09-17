import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Loader from "./Loader";

const Checked = ({ questionDetails }) => {
  let answers;
  if (questionDetails) {
        if(questionDetails.length === 0)
        {
          answers = (
          <div className="question_needs_answer">
            This Question Needs &nbsp;Answers{" "}
          </div>
          )
        }
        else if(questionDetails.length === 1)
        {
          answers = (
          <div className="question_has_answer">
            <div className="fas fa-check-square h1 checked rounded" />
            <span className="pl-2">{questionDetails.length} Answer</span>
          </div>
          )
        }
        else
        { 
          answers = (
          <div className="question_has_answer">
            <div className="fas fa-check-square h1 checked rounded" />
            <span className="pl-2">{questionDetails.length} Answers</span>
          </div>
          )
        }
  } 
  else {
    answers = (
      <div>
        <Loader />
      </div>
    );
  }

  return <div className="container">{answers}</div>;
};

export default Checked;
