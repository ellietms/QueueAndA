import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import MainPageHeader from "./MainPageHeader";
import DropDownAnswered from "./DropDownAnswered";
import QuestionCard from "./QuestionCard";
import DropDownCategories from './DropDownCategories';

const MainPage = () => {
  const [questions, setQuestions] = useState();
  const [specificModule, setSpecificModule] = useState("");
  const [searchValue,setSearchValue]=useState("");
  const [noAnswer,setNoAnswer]=useState("");
  useEffect(() => {
    axios
      .get("https://queueanda.herokuapp.com/questions")
      .then((response) => {
        setQuestions(response.data.questions);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <MainPageHeader
        value={searchValue}
        handleSearchValue={(newSearchValue) => setSearchValue(newSearchValue)}
      />
      { questions ? (
        <div className="container">
          <div className="d-flex">
          <DropDownAnswered 
           showQuestionWithNoAnswer={(question) => setNoAnswer(question)}/>
          <DropDownCategories showSpecificModule={(category) => setSpecificModule(category)}/>
          </div>
          <QuestionCard questions={questions}
           specificModule={specificModule} 
           searchValue={searchValue}
           noAnswer={noAnswer}
           />
        </div>
      ) : (
        <div className="loading_text"> Loading... </div>
      )}
    </div>
  );
};

export default MainPage;
