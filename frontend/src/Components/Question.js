import React from "react";
import "bootstrap/dist/css/bootstrap.css";



const Question = ({questionBody}) => {
    return(
        <div className="question_font">
            {questionBody}
        </div>
    )
}

export default Question;