import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import QuestionForm from "./QuestionForm";
// import QuestionCard from "./QuestionCard";

const AskQuestionPage = () => {
  // const [showMainPage,setShowMainPage]=useState(false);
  // const [showForm,setShowForm]=useState(true);

  return (
    <div>
    {/* { showForm && 
      ( */}
    <div className="mt-2">
        <div>
        <button type="button" className="ml-3">
        <Link to="/" style={{ textDecoration: 'none',color: 'black'}}>Back</Link>
         </button>
        </div>
      <label className="title_font m-4 pl-5">
        <i className="fas fa-question-circle"></i>
        Ask a Question
      </label>
      <QuestionForm/>
      {/* <QuestionForm setShowMainPage={setShowMainPage}
      setShowForm={setShowForm}/> */}
      {/* ) */}
     
    {/* {showMainPage &&
     <QuestionCard />
     } */}
     </div>
    {/* )
   } */}
   </div>
  )
};

export default AskQuestionPage;
