import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../Page.css";
import MainPageHeader from "../mainpage/mainpageheader/MainPageHeader";
import SelectedQs from "./selectedQs/SelectedQs";
import Loader from "./Loader";
import Pagination from "react-js-pagination";
import Footer from "../Footer";

const MainPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQsPage, setCurrentQsPage] = useState(1);

  const [isLoading, setIsLoading] = useState(false);

  //filtering drop downs and search bar
  const [specificModule, setSpecificModule] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [noAnswer, setNoAnswer] = useState(false);

  let questionsPerPage = 5;

  //fetch all the questions
  useEffect(() => {
    setIsLoading(true);
    const baseUrl = "https://queueanda.herokuapp.com";

    //ask johnnie
    axios
      .get(`${baseUrl}/questions`, {
        params: { category: specificModule, searchValue, noAnswer },
      })
      .then((response) => {
        setQuestions(response.data.questions);
        setIsLoading(false);
        setCurrentQsPage(1);
      })
      .catch((error) => console.log(error));
  }, [specificModule, searchValue, noAnswer]);

  //pagination
  const indexOfLastQs = currentQsPage * questionsPerPage; //index of last question in each page  it always is  one more than
  const indexOfFirstQs = indexOfLastQs - questionsPerPage; //index of first question in each page
  const currentQuestions = questions.slice(indexOfFirstQs, indexOfLastQs); // cut questions for each page

  const paginate = (pageNumber) => {
    setCurrentQsPage(pageNumber);
  };

  const handleSearchValue = (event) => {
    event.preventDefault();
    setSearchValue(event.target.value);
  };

  return (
    <div>
      <MainPageHeader
        value={searchValue}
        setNoAnswer={setNoAnswer}
        setSpecificModule={setSpecificModule}
        handleSearchValue={handleSearchValue}
      />
      {isLoading ? (
        <Loader />
      ) : (
        //when isLoading is true means it is fetching
        <div>
          <div className="container main_page">
            <div className="container my-auto Questions_amount">
              {questions.length} Questions
            </div>

            <SelectedQs currentQuestions={currentQuestions} />

            <div className="pagination">
              <Pagination
                prevPageText="prev"
                nextPageText="next"
                activePage={currentQsPage}
                itemsCountPerPage={questionsPerPage}
                totalItemsCount={questions.length}
                pageRangeDisplayed={3}
                onChange={paginate}
              />
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default MainPage;
