import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import QuestionForm from "./QuestionForm";
import QuestionCard from "./QuestionCard";

const AskQuestionPage = () => {
  const [showForm,setShowForm]=useState(true);
  const [showMainPage,setShowMainPage]=useState(false);
  return (
    <div>
    { showForm && 
      (
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
      <QuestionForm setShowMainPage={setShowMainPage}
      setShowForm={setShowForm}
      showMainPage={showMainPage}/>
    </div>
    )}
  </div>
  )
};

export default AskQuestionPage;
