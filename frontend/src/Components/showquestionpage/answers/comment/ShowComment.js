import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ReactHtmlParser from "react-html-parser";


const ShowComment = ({ commentProps }) => {
  return (
    <div>
      {commentProps.map((comment, index) => {
        console.log(comment.createdAt.split("T")[1].split(".")[0].split(":").slice(0,2).join(':'))
        return (
          <div key={index} className="comment">
            <i className="fas fa-comments pr-1"></i>
            {ReactHtmlParser(`${comment.userName}`)}
            {ReactHtmlParser(`${comment.comment}`)}
            <div className="d-flex justify-content-end secondPage_timeDate">
              <i class="far fa-calendar-alt date"> {comment.createdAt.split("T")[0]}</i>
              <i class="far fa-clock date pl-2">
                {comment.createdAt.split("T")[1].split(".")[0].split(":").slice(0,2).join(':')}
              </i>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShowComment;
