import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Category from "./Category";
import TitleOfQuestion from "./TitleOfQuestion";
import "../Components/App.css";
import Question from "./Question";
import AnswerNo from "./AnswerNo";
import QuestionView from "./QuestionView";

const SelectedQs = ({ currentQuestions }) => {
  return currentQuestions.map((question, index) => {
    return (
      <div key={index} className="container question_card">
        <div className="pt-4 pl-3">
          <Category category={question.category} />
        </div>
        <Link
          to={`/questions/${question._id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="d-flex justify-content-between pl-2">
            <TitleOfQuestion title={question.title} />
          </div>
          <div className="pl-3 pb-4">
            <Question question={question.question} />
          </div>
        </Link>
        <div className="d-flex flex-column view_container">
          <AnswerNo answerNo={question.answers.length} />
          <QuestionView question={question.view} />
        </div>
        <div className="d-flex date-main">
          <div className="d-flex justify-content-end secondPage_timeDate">
            <i class="far fa-calendar-alt date">
              {" "}
              {question.createdAt.split("T")[0]}
            </i>
            <i class="far fa-clock date pl-2">
              {question.createdAt
                .split("T")[1]
                .split(".")[0]
                .split(":")
                .slice(0, 2)
                .join(":")}
            </i>
          </div>
        </div>
      </div>
    );
  });
};
export default SelectedQs;
