import React,{useState,useEffect} from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import axios from 'axios';
import QuestionBox from './QuestionBox';
import Answers from "./Answers";
import Checked from './Checked';


const ShowQuestionPage = (props) => {

  const [specificQuestion, setSpecificQuestions] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:5000/questions/${props.match.params.id}`,
    })
      .then((response) => setSpecificQuestions(response.data.questionWithId))
      .catch((error) => console.log(error));
  }, [specificQuestion]);

  return (
    <div>
      <div>
        <button type="button" className="mx-3 mt-3">
          <Link to="/" style={{ textDecoration: 'none',color: 'black'}}>Back</Link>
        </button>
      </div>
      <div className="container">
        <QuestionBox questionDetails={specificQuestion} />
        <div className="d-flex justify-content-center">
          <Link to={`/questions/${props.match.params.id}/answer`} style={{ textDecoration: 'none',color: 'black'}}>
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
          <Answers />
          <Answers />
        </div>
      </div>
    </div>
  );
};

export default ShowQuestionPage;
