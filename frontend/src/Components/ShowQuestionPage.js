import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Answers from "./Answers";
import Checked from './Checked';
import { Link } from "react-router-dom";
import axios from 'axios';
import Category from './Category';
import TitleOfQuestion from './TitleOfQuestion';
import Question from './Question';

const ShowQuestionPage = ({match}) => {
  

  const [question, setQuestion] = useState([]);

    useEffect(() => {
        axios.get(`https://status200.glitch.me/questions/${match.params.id}`)
        .then(response => {
            console.log(response.data);
            setQuestion(response.data)
        }, error => {
            console.log(error);
        })
     
        
      }, [match.params.id]);
     
     

return(
    <div>
      <div>
        <button type="button" className="mx-3 mt-3">
          <Link to="/" style={{ textDecoration: 'none',color: 'black'}}>Back</Link>
        </button>
      </div>
      <div className="container">
      <div className="container main_style mt-4" >

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
        <div className="d-flex justify-content-center">
          <Link to={`/questions/${match.params.id}/answer`} style={{ textDecoration: 'none',color: 'black'}}>
            <button type="button" className="buttonColor">
              Answer
            </button>
          </Link>
          </div>  
        <div>
          <label className="title_font pl-2 d-flex m-3">
              <Checked/>
              Answers
          </label>
           { question.answers && question.answers.map(answer => (
            <Answers answer={answer.answer} key={answer._id}/>
          ))} 
          
          {/* <Answers /> */}
        </div>
      </div>
    </div>
  );
};

export default ShowQuestionPage;
