import React from "react";
import AskButton from './AskButton';
import QuestionCard from './QuestionCard';


const MainPage = (props) => {
    return(
        <div>
            <AskButton/>
            <QuestionCard searchQuestionCard={props.searchMain}/>
        </div>
    )
}

export default MainPage;