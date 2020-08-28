import React from "react";
import { useState, useEffect } from "react";
import AskButton from "./AskButton";
import QuestionCard from "./QuestionCard";
import axios from "axios";
import Pagination from "./Pagination";

const MainPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQsPage, setCurrentQsPage] = useState(1);
  const [questionsPerPage] = useState(5);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://queueanda.herokuapp.com/questions",
    })
      .then((response) => setQuestions(response.data.questions))
      .catch((error) => console.log(error));
  }, []);

  const indexOfLastQs = currentQsPage * questionsPerPage;
  const indexOfFirstQs = indexOfLastQs - questionsPerPage;
  const currentQuestions = questions.slice(indexOfFirstQs, indexOfLastQs);

  const paginate = (pageNumber) => setCurrentQsPage(pageNumber);

  return (
    <div>
      <AskButton />
      <QuestionCard currentQuestions={currentQuestions} />
      <Pagination
        questionsPerPage={questionsPerPage}
        totalQs={questions.length}
        paginate={paginate}
      />
    </div>
  );
};

export default MainPage;
