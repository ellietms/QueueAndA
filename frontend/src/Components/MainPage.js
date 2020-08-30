import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import MainPageHeader from "./MainPageHeader";
import QuestionCard from "./QuestionCard";

const MainPage = () => {
  const [questions, setQuestions] = useState();
  const [specificModule, setSpecificModule] = useState("");
  const [searchValue,setSearchValue]=useState("");
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
        showSpecificModule={(category) => setSpecificModule(category)}
        value={searchValue}
        handleSearchValue={(newSearchValue) => setSearchValue(newSearchValue)}
      />
      <div className="text container">All Questions</div>
      { questions ? (
        <div>
          <QuestionCard questions={questions}
           specificModule={specificModule} 
           searchValue={searchValue}/>
        </div>
      ) : (
        <div className="loading_text"> Loading... </div>
      )}
    </div>
  );
};

export default MainPage;
