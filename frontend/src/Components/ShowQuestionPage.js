import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import axios from "axios";
import QuestionBox from "./QuestionBox";
import Answers from "./Answers";
import Checked from "./Checked";

const ShowQuestionPage = (props) => {
  const [specificQuestion, setSpecificQuestions] = useState([]);
  useEffect(() => {
    axios
      .get(`https://queueanda.herokuapp.com/questions/${props.match.params.id}`)
      .then((response) => setSpecificQuestions(response.data.questionWithId))
      .catch((error) => console.log(error));
  }, [props.match.params.id]);
  return (
    <div>
      {specificQuestion ? (
        <div>
          <div>
            <button type="button" className="mx-3 mt-3 button">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Back
              </Link>
            </button>
          </div>
          <div className="container">
            <QuestionBox questionDetails={specificQuestion} />
            <div className="d-flex justify-content-center">
              <Link
                to={`/questions/${props.match.params.id}/answer`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <button type="button" className="button">
                  Answer
                </button>
              </Link>
            </div>
          </div>
          <div>
            <Checked questionDetails={specificQuestion.answers} />
            <Answers questionDetails={specificQuestion.answers} />
          </div>
        </div>
      ) : (
        <div className="loading_text"> Loading page ...</div>
      )}
    </div>
  );
};

export default ShowQuestionPage;
