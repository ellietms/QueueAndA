import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Category from "./Category";
import TitleOfQuestion from "./TitleOfQuestion";
import "../Components/App.css";
import Question from "./Question";
import AnswerNo from "./AnswerNo";
import QuestionView from "./QuestionView";
import DataTime from "./DataTime";

const SelectedQs = ({
  questions,
  specificModule,
  searchValue,
  noAnswer,
  currentQuestions,
}) => {
  return currentQuestions
    .filter(
      (question) =>
        question.category === specificModule || specificModule === ""
    )
    .filter(
      (question) =>
        searchValue === "" ||
        question.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        question.question.toLowerCase().includes(searchValue.toLowerCase()) ||
        question.category.toLowerCase().includes(searchValue.toLowerCase())
    )
    .filter(
      (question) =>
        question.answers.length.toString(10) === noAnswer || noAnswer === ""
    )
    .map((question, index) => {
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
          <AnswerNo answerNo={question.answers.length} />
          <QuestionView question={question.view} />
          <div className="d-flex date-main">
            <DataTime datatime={question.createdAt} />
          </div>
        </div>
      );
    });
};
export default SelectedQs;
