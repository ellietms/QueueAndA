import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import QuestionCard from "./QuestionCard";
import Answers from "./Answers";
import Checked from './Checked';
import { Link } from "react-router-dom";

const ShowQuestionPage = (props) => {
  console.log(props.match.params.id);
  return (
    <div>
      <div>
        <button type="button" className="mx-3 mt-3">
          <Link to="/" style={{ textDecoration: 'none',color: 'black'}}>Back</Link>
        </button>
      </div>
      <div className="container">
        <QuestionCard />
        <div className="d-flex justify-content-center">
          <Link to={`/questions/${props.match.params.id}/answer`} style={{ textDecoration: 'none',color: 'black'}}>
            <button type="button" className="buttonColor">
              Answer
            </button>
          </Link>
          </div>  
        <div>
          <label className="title_font pl-2 d-flex m-3">
              <Checked/>
              Answers
          </label>
          <Answers />
          <Answers />
        </div>
      </div>
    </div>
  );
};

export default ShowQuestionPage;
