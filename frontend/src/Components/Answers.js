import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import AnswerBoxes from './AnswerBoxes';




const Answers = ({answer}) => {
    return(
        <div className="container">   
        <div>
        <AnswerBoxes answer={answer}/>
        </div>
        </div>
    )
}

export default Answers;