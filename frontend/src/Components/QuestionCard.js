import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Category from './Category';
import TitleOfQuestion from './TitleOfQuestion';
import Checked from './Checked';
import Question from './Question';
import Cross from './Cross';

const QuestionCard = () => {
    return(
        <div className="container main_style mt-4">
            <div className="pt-4 pl-3">
            <Category />
            </div>
            <div className="d-flex justify-content-between pl-2">
            <TitleOfQuestion />
            <Checked/>
            <Cross />
            </div>
            <div className="pl-3 pb-4">
            <Question/>
            </div>
        </div>
    )
}

export default QuestionCard;

