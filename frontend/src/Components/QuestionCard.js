import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Category from './Category';
import TitleOfQuestion from './TitleOfQuestion';
import '../Components/App.css';
import Question from './Question';
import { Link } from "react-router-dom";

const QuestionCard = (props) => {
    return(
        <Link to="/questions/5f384ffe2a242f056ccee8e0" style={{ textDecoration: 'none',color: 'black'}}>  
        <div className="container main_style mt-4">
            <div className="pt-4 pl-3">
            <Category />
            </div>
            <div className="d-flex justify-content-between pl-2">
            <TitleOfQuestion/>
            </div>
            <div className="pl-3 pb-4">
            <Question/>
            </div>
            <div className="mb-2">
            </div>
        </div>
        </Link> 
    )
}

export default QuestionCard;

