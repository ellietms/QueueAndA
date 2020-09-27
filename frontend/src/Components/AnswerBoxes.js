import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ReactHtmlParser from "react-html-parser";
import ShowComment from "./ShowComment";
import CommentForm from "./CommentForm";

const AnswerBoxes = ({ answer, questionDetails }) => {

  return (
      <div>
        <div className="container answer_box">
          <label className="px-3 nameOfPerson">{answer.userEmail}</label>
          <div className="answer_font px-3 py-2 ">
            {ReactHtmlParser(`${answer.answer}`)}
          </div>
          <ShowComment commentProps={answer.comments} />
          <div className="d-flex justify-content-end mt-5">
          <i class="far fa-calendar-alt date"> {answer.createdAt.split("T")[0]}</i>
            <i class="far fa-clock date pl-2">
                {answer.createdAt.split("T")[1].split(".")[0].split(":").slice(0,2).join(':')}
            </i>
          </div>
      </div>
      <div className="mb-4 commentForm_container">
       <CommentForm answerId={answer._id} questionId={questionDetails._id} />
       </div>
      </div> 
    );
 
};

export default AnswerBoxes;
