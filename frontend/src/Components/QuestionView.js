import React from "react"; 
import "bootstrap/dist/css/bootstrap.css";
const QuestionView  = ({question}) => {
    return(
        <div className="view">
			<p>{question} View</p>
		</div>
    )
}
export default QuestionView;