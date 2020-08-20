import React, { useState, useEffect } from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import Category from './Category';
import TitleOfQuestion from './TitleOfQuestion';
import '../Components/App.css';
import Question from './Question';
import { Link } from "react-router-dom";

const QuestionCard = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        axios.get('https://status200.glitch.me/questions')
        .then(response => {
            console.log(response.data);
            setQuestions(response.data)
        }, error => {
            console.log(error);
        })
     
        
      }, []);
      console.log(questions)
     


    return(
         <React.Fragment>
        
        { questions.map(question => (
            <div key={question._id}>
            <Link to={`/questions/${question._id}`} style={{ textDecoration: 'none',color: 'black'}}> 
                    <div className="container main_style mt-4" id={question._id}>

                    <div className="pt-4 pl-3">
                        
                    <Category module={question.module}/>
                    </div>
                    <div className="d-flex justify-content-between pl-2">
                    <TitleOfQuestion title={question.title}/>
                    </div>
                    <div className="pl-3 pb-4">
                    <Question questionBody={question.question}/>
                    </div>
                    <div className="mb-2">
                    </div>
                    </div>
            </Link>
            </div> 

         ))}
            
         </React.Fragment>
        
    )
}

export default QuestionCard;

