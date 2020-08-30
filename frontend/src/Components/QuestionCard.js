import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Category from "./Category";
import TitleOfQuestion from "./TitleOfQuestion";
import "../Components/App.css";
import Question from "./Question";
import AnswerNo from "./AnswerNo"
import {UserContext} from "./UserContext";

const QuestionCard = () => {
  const [questions, setQuestions] = useState([]);
  const {searchValue, setSearchValue} = useContext(UserContext)
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://queueanda.herokuapp.com/questions",
    })
      .then((response) => setQuestions(response.data.questions))
      .catch((error) => console.log(error));
  }, []);

  const filterQuestions = questions.filter(question => {
	return question.question.toLowerCase().includes(searchValue.toLowerCase())
  })

  return filterQuestions.map((question, index) => {
    return (
      <Link
        to={`/questions/${question._id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div key={index} className="">
        <div  className="container question_card">
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
           <div className="d-flex date-main">
            Date:{question.createdAt.split("T")[0]}
          </div>
          <div className="mb-2" />
        </div>
        </div>
      </Link>
    );
  });
};
export default QuestionCard;
