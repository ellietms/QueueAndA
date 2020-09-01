import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import MainPageHeader from "./MainPageHeader";
import DropDownAnswered from "./DropDownAnswered";
import QuestionCard from "./QuestionCard";
import DropDownCategories from './DropDownCategories';
import useInfiniteScroll from "./useInfiniteScroll";
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from "./Loader";

const MainPage = () => {
  const [questions, setQuestions] = useState([]);
  const [specificModule, setSpecificModule] = useState("");
  const [searchValue,setSearchValue]=useState("");
  const [noAnswer,setNoAnswer]=useState("");

  //const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  

  useEffect(() => {
    fetchQs();
    
  }, []);

  // function fetchMoreListItems() {
  //   setTimeout(() => {
  //     setQuestions();
  //     setIsFetching(false);
  //   }, 2000);
  // }

  const fetchQs = () => {
    axios
      .get("https://queueanda.herokuapp.com/questions")
      .then((response) => {
        setQuestions(response.data.questions);
      })
      .catch((error) => console.log(error));

  }

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
          <InfiniteScroll
            dataLength={questions.length}
            next={fetchQs}
            hasMore={true}
            //loader={<Loader/>}

          >
          
          </InfiniteScroll>
          <QuestionCard questions={questions}
           specificModule={specificModule} 
           searchValue={searchValue}
           noAnswer={noAnswer}
           
           />
          
        </div>
      ) : (
        <Loader/>
      )}
    </div>
  );
};

export default MainPage;
