import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from './Header';
import QuestionForm from './QuestionForm'; 
import { Link } from 'react-router-dom';

const AskQuestionPage = () => {
    return(
        <div className="mt-2">
            <label className="title_font m-4 pl-5">
            <i class="fas fa-question-circle"></i>
                Ask a Question
            </label>
            <QuestionForm/>
        </div>
    )
}


export default AskQuestionPage;