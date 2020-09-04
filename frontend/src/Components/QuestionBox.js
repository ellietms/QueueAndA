import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Category from "./Category";
import TitleOfQuestion from "./TitleOfQuestion";
import "../Components/App.css";
import Question from "./Question";

const QuestionBox = ({ questionDetails }) => {

  return (
    <div>
      <span className="text" style={{color:'rgb(32, 23, 138)'}}>Question : </span>
      <div className="container question_box mt-4">
        <div className="pt-4 pl-3">
          <Category category={questionDetails.category} />
        </div>
        <div className="d-flex justify-content-between pl-2">
          <TitleOfQuestion title={questionDetails.title} />
        </div>
        <div className="pl-3 pb-4">
          <Question question={questionDetails.question} />
        </div>
        <div className="mb-2"></div>
      </div>
    </div>
  );
};

export default QuestionBox;
