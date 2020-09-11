import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ReactHtmlParser from "react-html-parser";

const Question = ({ question }) => {
  return <div className="question_font">{ReactHtmlParser(`${question}`)}</div>;
};

export default Question;
