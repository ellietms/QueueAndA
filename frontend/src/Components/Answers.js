import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import AnswerBoxes from "./AnswerBoxes";

const Answers = ({questionDetails,searchValue}) => {
  return (
    <div className="container">
      {questionDetails ? (
        <div>
          {questionDetails.filter(answer => answer.answer.toLowerCase().includes(searchValue.toLowerCase()) || searchValue === "" ).map((answer, index) => {
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
        <div className="no_answers">Please Wait . . .</div>
      )}
    </div>
  );
};

export default Answers;
