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
      <div className="container answer_box my-4 bg-secondary text-white">
        <label className="px-3 nameOfPerson text-success">{answer.userEmail}</label>
        <div className="answer_font px-3 py-2">
          {ReactHtmlParser(`${answer.answer}`)}
        </div>
        <ShowComment commentProps={answer.comments} />
        <button className="btn btn-info mt-5">
          <i
            className="far fa-comment-dots fa-2x "
            onClick={() => setDisplayComponent(!displayComponent)}
          ></i>
        </button>
        <div className="d-flex justify-content-end time py-3">
          Time:{answer.createdAt.split("T")[1].split(".")[0]}
        </div>
      </div>
    );
  } else {
    answerBox = (
      <div>
        <div className="container answer_box my-4 bg-secondary text-white">
          <label className="px-3 nameOfPerson text-success">{answer.userEmail}</label>
          <div className="answer_font px-3 py-2 ">
            {ReactHtmlParser(`${answer.answer}`)}
          </div>
          <ShowComment commentProps={answer.comments} />
          <div className="d-flex justify-content-end time">
            Time:{answer.createdAt.split("T")[1].split(".")[0]}
          </div>
        </div>
        <CommentForm answerId={answer._id} questionId={questionDetails._id} />
      </div>
    );
  }
  return <div>{answerBox}</div>;
};

export default AnswerBoxes;
