import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from './Header';
import QuestionCard from "./QuestionCard";
import AnswerButton from "./AnswerButton";
import Answers from './Answers';

const ShowQuestionPage = () => {
    return(
        <div>
            <Header />
            <div className="container">
            <QuestionCard />
            <div className="d-flex justify-content-end my-2">
            <AnswerButton />
            </div>
            <div>
            <label className="title_font pl-2">Answers</label>
            <Answers />
            <Answers />
            </div>
            </div>
        </div>
    )
}


export default ShowQuestionPage ;