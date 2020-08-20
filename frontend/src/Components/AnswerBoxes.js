import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const AnswerBoxes = () => {
    return(
        <div className="container answer_box my-4">
            <label className="px-3 nameOfPerson">Name of the person</label>
            <div className= "answer_font px-3 py-2">
                Answer of that person
            </div>
        </div>
    )
}

export default AnswerBoxes;