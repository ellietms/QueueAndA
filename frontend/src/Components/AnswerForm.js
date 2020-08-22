import React, { useState, useEffect } from "react";
import SubmitButton from "./SubmitButton";
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios';

const AnswerForm = ({match}) => {

  const [state, setState] = useState({answer: " "});
 
  const handleSubmit = event => {
    event.preventDefault();
    clearData();
    
    
        axios.post(`https://status200.glitch.me/questions/${match.params.id}/answer`, state)
      .then(res=>{
        console.log(res);
        console.log(res.data);
        console.log(match.params.id)
        // window.location = `https://status200.glitch.me/questions/${match.params.id}` //This line of code will redirect you once the submission is succeed
      })
      .catch(error => console.log(error))

      
  
  }

  const clearData =() => {
		setState({ answer: '' });
	}

  const handleChange = (e) => {
    setState({...state, [e.target.name]: e.target.value });
  }

  return (
    <div className="container main_style">
      <form className="m-5" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="Name" className="mr-auto pt-2">
            Title
          </label>
          <input type="text" className="form-control" id="Name" />
        </div>
        <div className="form-group">
          <label htmlFor="textArea">Answer</label>
          <textarea
            className="form-control"
            id="TextArea"
            rows="3"
            name="answer"
            onChange={handleChange}
          >
          </textarea>
          </div>
        <div className="pb-3">
        <SubmitButton/>
        </div>
      </form>
    </div>
  );
};

export default AnswerForm;
