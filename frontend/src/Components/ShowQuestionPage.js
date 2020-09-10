import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import Header from "./Header";
import QuestionBox from "./QuestionBox";
import Answers from "./Answers";
import Checked from "./Checked";
import MakeAnswerForm from './MakeAnswerForm'

const ShowQuestionPage = (props) => {
  const [specificQuestion, setSpecificQuestions] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    axios
      .get(`https://queueanda.herokuapp.com/questions/${props.match.params.id}`)
      .then((response) => setSpecificQuestions(response.data.questionWithId))
      .catch((error) => console.log(error));
  }, [props.match.params.id]);
  
  return (
    <div>
      <Header
        value={searchValue}
        handleSearchValue={(newSearchValue) => setSearchValue(newSearchValue)}
      />
        <div className="container mt-5 mb-2">
          <QuestionBox questionDetails={specificQuestion} />
        </div>
        <div>
          <Checked questionDetails={specificQuestion.answers} />
          <Answers questionDetails={specificQuestion} 
          searchValue={searchValue}/>
        </div>
        <div>
        <MakeAnswerForm id={props.match.params.id}/>
        </div>
        </div>
  );
};

export default ShowQuestionPage;
