import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import AnswerForm from "./AnswerForm";
import { Link } from "react-router-dom";

const MakeAnswerPage = ({match}) => {
  return (
    <div className="mt-2">
      <div>
        <button type="button" className="m-3">
          <Link to="/" style={{ textDecoration: 'none',color: 'black'}}>Back</Link>
        </button>
      </div>
      <label className="title_font m-4 pl-5">
        <i className="far fa-lightbulb"></i>
        Answer a Question
      </label>
      <AnswerForm match={match}/>
    </div>
  );
};

export default MakeAnswerPage;
