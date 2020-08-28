import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import AnswerForm from "./AnswerForm";
import { Link } from "react-router-dom";

const MakeAnswerPage = (props) => {
  return (
    <div className="mt-2">
      <div>
        <button type="button" className="m-3 button">
          <Link
            to={`/questions/${props.match.params.id}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            Back
          </Link>
        </button>
      </div>
      <label className="title_Answer">
        <i className="far fa-lightbulb"></i>
       <span> Answer a Question</span>
      </label>
      <AnswerForm id={props.match.params.id} />
    </div>
  );
};

export default MakeAnswerPage;
