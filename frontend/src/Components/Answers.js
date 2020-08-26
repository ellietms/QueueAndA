import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import AnswerBoxes from "./AnswerBoxes";

const Answers = ({ questionDetails }) => {
  return (
    <div className="container">
      {questionDetails ? (
        <div>
          {questionDetails.map((answer, index) => {
            return (
              <div className="container" key={index}>
                <div>
                  <AnswerBoxes answer={answer} />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="no_answer">Please Waiting . . . </div>
      )}
    </div>
  );
};

export default Answers;
