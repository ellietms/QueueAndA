import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import QuestionForm from './QuestionForm';

const AskQuestionPage = () => {
    return(
        <div className="mt-2">
            <label className="title_font m-4 pl-5">
            <i className="fas fa-question-circle"></i>
                Ask a Question
            </label>
            <QuestionForm/>
        </div>
    )
}


export default AskQuestionPage;