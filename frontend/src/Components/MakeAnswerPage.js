import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import AnswerForm from './AnswerForm'; 


const MakeAnswerPage = () => {
    return(
        <div className="mt-2">
            <label className="title_font m-4 pl-5">
            <i className="far fa-lightbulb"></i>
                Answer a Question
            </label>
            <AnswerForm/>
        </div>
    )
}


export default MakeAnswerPage;