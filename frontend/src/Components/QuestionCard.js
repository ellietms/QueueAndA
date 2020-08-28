import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Category from "./Category";
import TitleOfQuestion from "./TitleOfQuestion";
import "../Components/App.css";
import Question from "./Question";
import AnswerNo from "./AnswerNo"

const QuestionCard = () => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://queueanda.herokuapp.com/questions",
    })
      .then((response) => setQuestions(response.data.questions))
      .catch((error) => console.log(error));
  }, []);

  return questions.map((question, index) => {
    return (
      <Link
        to={`/questions/${question._id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div>
        <div key={index} className="container question_card mt-4">
          <div className="pt-4 pl-3">
            <Category category={question.category} />
          </div>
          <div className="d-flex justify-content-between pl-2">
            <TitleOfQuestion title={question.title} />
          </div>
          <div className="pl-3 pb-4">
            <Question question={question.question} />
            <AnswerNo answerNo={question.answers.length}/>
          </div>
           <div className="d-flex date">
            Date:{question.createdAt.split("T")[0]}
          </div>
          <div className="d-flex  time">
            Time:{question.createdAt.split("T")[1].split(".")[0]}
          </div>
          <div className="mb-2" />
        </div>
        </div>
      </Link>
    );
  });
};
export default QuestionCard;
