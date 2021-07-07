import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ReactHtmlParser from "react-html-parser";

const QuestionSecondPage = ({ question }) => {
  return <div className="question_font_second_page">{ReactHtmlParser(`${question}`)}</div>;
};

export default QuestionSecondPage;