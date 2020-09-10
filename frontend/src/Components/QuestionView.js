import React from "react"; 
import "bootstrap/dist/css/bootstrap.css";




const QuestionView  = ({question}) => {
    return(
        <div className="view">
		  <p>{question.view} View</p>
		</div>
    )
}

export default QuestionView;