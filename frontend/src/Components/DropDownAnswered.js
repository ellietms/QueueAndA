import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const DropDownAnswered = ({ showQuestionWithNoAnswer }) => {
  return (
    
     <select
        className="border-0 bg-transparent ml-2 text-white"
        onChange={(event) => showQuestionWithNoAnswer(event.target.value)}
      >
        <option value={""} className='text-white bg-dark'>All Questions</option>
        <option value={"0"} className='text-white bg-dark'> No answer</option>
      </select> 
      
            
  );
};

export default DropDownAnswered;
