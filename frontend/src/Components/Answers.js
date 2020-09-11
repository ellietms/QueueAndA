import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import AnswerBoxes from "./AnswerBoxes";

const Answers = ({ questionDetails, searchValue }) => {
  return (
    <div className="container">
      {questionDetails.answers ? (
        <div>
          {questionDetails.answers
            .filter(
              (answer) =>
                answer.answer
                  .toLowerCase()
                  .includes(searchValue.toLowerCase()) || searchValue === ""
            )
            .map((answer, index) => {
              return (
                <div className="container" key={index}>
                  <div>
                    <AnswerBoxes
                      answer={answer}
                      questionDetails={questionDetails}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      ) : (
        <div className="no_answers">Please Wait . . .</div>
      )}
    </div>
  );
};

export default Answers;
