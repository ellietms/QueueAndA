import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Page.css";
import MainPageHeader from "./MainPageHeader";
import QuestionCard from "./QuestionCard";
import SelectedQs from "./SelectedQs";
import Loader from "./Loader";
import Pagination from "react-js-pagination";


const MainPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQsPage, setCurrentQsPage] = useState(1);
  const [questionsPerPage] = useState(5);
  const [state, setState] = useState({ display: "first" });
  const [clicked, setClicked] = useState(true);

  const [specificModule, setSpecificModule] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [noAnswer, setNoAnswer] = useState("");
  useEffect(() => {
    axios
      .get("https://queueanda.herokuapp.com/questions")
      .then((response) => {
        setQuestions(response.data.questions);
      })
      .catch((error) => console.log(error));
  }, []);

  const indexOfLastQs = currentQsPage * questionsPerPage;
  const indexOfFirstQs = indexOfLastQs - questionsPerPage;
  const currentQuestions = questions.slice(indexOfFirstQs, indexOfLastQs);

  const paginate = (pageNumber) => {setCurrentQsPage(pageNumber)}
  const next = () => setCurrentQsPage(currentQsPage + 1);
  const prev = () => setCurrentQsPage(currentQsPage - 1);

  const changeDisplay = () => {
    setState({ display: state.display === "first" ? "second" : "first" });
  };

  const renderInner = () => {
    if (state.display === "first") {
      return (
        <QuestionCard
          questions={questions}
          specificModule={specificModule}
          searchValue={searchValue}
          noAnswer={noAnswer}
        />
      );
    } else if (state.display === "second") {
      return (
        <div>
          <SelectedQs
            specificModule={specificModule}
            searchValue={searchValue}
            noAnswer={noAnswer}
            currentQuestions={currentQuestions}
          />

                            
          {/* <Pagination
            questionsPerPage={questionsPerPage}
            totalQs={questions.length}
            paginate={paginate}
            next={next}
            prev={prev}
          /> */}
          <div className="pagination">
            <Pagination
                prevPageText='prev'
                nextPageText='next'      
                activePage={ currentQsPage }
                itemsCountPerPage={ questionsPerPage }
                totalItemsCount={ questions.length }
                pageRangeDisplayed={ 3 }
                onChange={ paginate }
            />
         </div>

          
        </div>
      );
    }
  };

  return (
    <div>
      <MainPageHeader
        value={searchValue}
        handleSearchValue={(newSearchValue) => setSearchValue(newSearchValue)}
        setNoAnswer={setNoAnswer}
        setSpecificModule={setSpecificModule}
      />
      {questions ? (
        <div className="container">
          <div className="d-flex">
          </div>
          <div className="d-flex mt-4">
          {clicked ? 
          <div className="container text  my-auto" style={{color:'rgb(150, 158, 231)'}}>{questions.length} Questions</div>
          : <div className="container text  my-auto" style={{color:'rgb(150, 158, 231)'}}>Questions Page By Page</div>
          }
            <div
              className="button pagination_button"
              onClick={() => {
                setClicked(!clicked);
                changeDisplay();
              }}
            >
              {clicked ? "PAGE By PAGE" : "All Questions"}
            </div>
          </div>
          {renderInner()}
        </div>
      ) : (
           <Loader/>
      )}
    </div>
  );
};

export default MainPage;
