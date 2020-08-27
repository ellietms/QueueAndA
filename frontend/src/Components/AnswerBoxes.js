import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const AnswerBoxes = ({ answer }) => {

  const timeStamp = (date, locale) => {
    const event = (date===undefined) ? new Date() : new Date(date);
    return event.toLocaleDateString(locale) + " " + event.toLocaleTimeString(locale)
  };
  
  return (
    <div className="container answer_box my-4">
      <label className="px-3 nameOfPerson">{answer.userEmail}</label>
      <div className="answer_font px-3 py-2">{answer.answer}</div>
      <div>{answer.createdAt}</div>
    </div>
  );
};

export default AnswerBoxes;
