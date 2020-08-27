import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Category from "./Category";
import TitleOfQuestion from "./TitleOfQuestion";
import "../Components/App.css";
import Question from "./Question";


const QuestionCard = ({currentQuestions}) => {
  
  return currentQuestions.map((question, index) => {
    return (
      
      <Link
        to={`/questions/${question._id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div>
        <div key={index} className="container question_card mt-4">
          <div className="pt-4 pl-3">
            <Category category={question.category} />
          </div>
          <div className="d-flex justify-content-between pl-2">
            <TitleOfQuestion title={question.title} />
          </div>
          <div className="pl-3 pb-4">
            <Question question={question.question} />
          </div>
          <div className="mb-2" />
          {question.createdAt}
        </div>
        </div>
      </Link>
      
    );
  });
};
export default QuestionCard;
