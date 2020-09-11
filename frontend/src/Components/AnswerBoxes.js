import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import ReactHtmlParser from "react-html-parser";
import ShowComment from "./ShowComment";
import CommentForm from "./CommentForm";

const AnswerBoxes = ({ answer, questionDetails }) => {
  let [displayComponent, setDisplayComponent] = useState(false);
  let answerBox;
  if (displayComponent === false) {
    answerBox = (
      <div className="container answer_box my-4">
        <label className="px-3 nameOfPerson">{answer.userEmail}</label>
        <div className="answer_font px-3 py-2">
          {ReactHtmlParser(`${answer.answer}`)}
        </div>
        <ShowComment commentProps={answer.comments} />
        <div
          className="comment_button py-1 pl-2"
          onClick={() => setDisplayComponent(!displayComponent)}
        >
          add comment
        </div>
        <div className="d-flex justify-content-end time py-3">
          <i class='far fa-clock'>{answer.createdAt.split("T")[1].split(".")[0]}</i>
          <i class='far fa-calendar-alt'> {answer.createdAt.split("T")[0]}</i>
        </div>
      </div>
    );
  } else {
    answerBox = (
      <div>
        <CommentForm answerId={answer._id} questionId={questionDetails._id} />
      </div>
    );
  }
  return <div>{answerBox}</div>;
};

export default AnswerBoxes;
