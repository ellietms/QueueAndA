import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import Header from "../../Components/showquestionpage/header/Header.js";
import QuestionBox from "../../Components/showquestionpage/question/QuestionBox.js";
import Answers from "../../Components/showquestionpage/answers/Answers.js";
import Checked from "../../Components/showquestionpage/Checked.js";
import MakeAnswerForm from "./Makeanswerform/MakeAnswerForm";
import Footer from "../../Components/Footer.js";

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
        <Answers questionDetails={specificQuestion} searchValue={searchValue} />
      </div>
      <div>
        <MakeAnswerForm id={props.match.params.id} />
      </div>
      <Footer/>
    </div>
  );
};

export default ShowQuestionPage;
