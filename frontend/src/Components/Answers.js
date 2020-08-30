import React, {useContext} from "react";
import "bootstrap/dist/css/bootstrap.css";
import AnswerBoxes from "./AnswerBoxes";
import {UserContext} from "./UserContext";


const Answers = ({ questionDetails }) => {
  const {searchValue, setSearchValue} = useContext(UserContext);

  const filterAnswer = questionDetails && questionDetails.filter(answer => {
    return answer.answer.toLowerCase().includes(searchValue.toLowerCase())
  })

  return (
    <div className="container">
      {filterAnswer ? (
        <div>
          {filterAnswer.map((answer, index) => {
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
        <div className="no_answer">Please Waiting . . .</div>
      )}
    </div>
  );
};

export default Answers;
