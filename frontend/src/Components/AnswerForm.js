import React, { useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import SubmitButton from "./SubmitButton";

const AnswerForm = ({ id }) => {
  
  const [newAnswer, setNewAnswer] = useState({
    userEmail: "",
    answer: "",
  });

  useEffect(() => {
    window.tinyMCE.remove("#TextArea");
    window.tinyMCE.init({
      selector: '#TextArea',
      menubar: false
    });
  },[]);

  function submitHandler(event) {
    event.preventDefault();
    const answerValue = {
      ...newAnswer,
      answer: window.tinyMCE.get("TextArea").getContent(),
    };
    axios
      .post(`https://queueanda.herokuapp.com/questions/${id}/answer`, answerValue)
      .then((response) => {console.log(response); window.location.assign(`/questions/${id}`)})
      .catch((err) => console.log(err));
    clearData();
  }

  function clearData() {
    setNewAnswer({ userEmail: "", answer: "" });
  }

  const handelForm = (event) => {
    const answerValue = {
      ...newAnswer,
      [event.target.name]: event.target.value,
    };
    setNewAnswer(answerValue);
  };


  return (
    <div className="container form_style">
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="Name" className="mt-2 p-2 h4">
            Name
          </label>
          <input
            name="userEmail"
            value={newAnswer.userEmail}
            type="text"
            className="form-control"
            id="Name"
            onChange={handelForm}
          />
        </div>
        <div className="form-group">
          <label htmlFor="textArea" className="h4 p-2">
            Answer
          </label>
          <div
            id="TextArea"
          />
        </div>
        <SubmitButton />
      </form>
    </div>
  );
};

export default AnswerForm;
