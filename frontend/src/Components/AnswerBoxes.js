import React from 'react';
import "bootstrap/dist/css/bootstrap.css";


const AnswerBoxes = ({answer}) => {
    return(
        <div className="container answer_box my-4">
            <label className="px-3 nameOfPerson">{answer.userEmail}</label>
            <div className= "answer_font px-3 py-2">
                {answer.answer}
            </div>
            <div>{answer.createdAt}</div>
        </div>
    )
}

export default AnswerBoxes;