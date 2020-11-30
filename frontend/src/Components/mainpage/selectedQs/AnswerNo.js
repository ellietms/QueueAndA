import React from "react";

const AnswerNo = ({answerNo}) => {
  let NumAnswers;
  if (answerNo === 1) {
    NumAnswers = (
      <div className="has_answers">
        <span>{answerNo} Answer</span>
      </div>
    );
  } else if (answerNo > 1) {
    NumAnswers = (
      <div className="has_answers">
        <span>{answerNo} Answers</span>
      </div>
    );
  } else {
    NumAnswers = (
      <div className="no_answers">
        <span>Needs Answer</span>
      </div>
    );
  }
  return <div>{NumAnswers}</div>;
};

export default AnswerNo;
