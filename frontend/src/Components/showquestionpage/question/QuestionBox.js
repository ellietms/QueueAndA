import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Category from "../../mainpage/selectedQs/Category";
import TitleOfQuestion from "../../mainpage/selectedQs/TitleOfQuestion";
import "../../App.css";
import QuestionSecondPage from "../question/QuestionSecondPage";

const QuestionBox = ({ questionDetails }) => {
  return (
    <div>
      <div className="container question_box mt-4">
        <div className="pt-4 pl-3">
          <Category category={questionDetails.category} />
        </div>
        <div className="d-flex justify-content-between pl-2 ">
          <TitleOfQuestion title={questionDetails.title} />
        </div>
        <div className="pl-3 pb-4">
          <QuestionSecondPage question={questionDetails.question} />
        </div>
        <div className="mb-2"></div>
      </div>
    </div>
  );
};

export default QuestionBox;
