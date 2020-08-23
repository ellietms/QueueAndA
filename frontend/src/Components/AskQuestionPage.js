import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import QuestionForm from "./QuestionForm";
import { Link } from "react-router-dom";

const AskQuestionPage = () => {
  return (
    <div className="mt-2">
        <div>
        <button type="button" className="ml-3">
        <Link to="/" style={{ textDecoration: 'none',color: 'black'}}>Back</Link>
         </button>
        </div>
      <label className="title_font m-4 pl-5">
        <i className="fas fa-question-circle"></i>
        Ask a Question
      </label>
      <QuestionForm />
    </div>
  );
};

export default AskQuestionPage;
