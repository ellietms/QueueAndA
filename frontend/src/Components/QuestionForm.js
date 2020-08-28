import React, { useState } from "react";
import SubmitButton from "./SubmitButton";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

const QuestionForm = () => {
  const [newQuestion, setNewQuestion] = useState({
    userEmail: "",
    title: "",
    question: "",
    category: "",
  });
  console.log(newQuestion);
  const addNewQuestion = (event) => {
    event.preventDefault();
    event.target.reset();
    axios
      .post("http://localhost:5000/questions/ask", newQuestion)
      .then((response) => {
        console.log(response);
      });
    window.location.assign("http://localhost:3000/");
  };

  const handleUserEmail = (event) => {
    setNewQuestion({ ...newQuestion, userEmail: event.target.value });
  };
  const handleTitle = (event) => {
    setNewQuestion({ ...newQuestion, title: event.target.value });
  };

  const handleQuestion = (event) => {
    setNewQuestion({ ...newQuestion, question: event.target.value });
  };
  const handleCategory = (event) => {
    setNewQuestion({ ...newQuestion, category: event.target.value });
  };
  return (
    <div>
      <div className="container form_style">
        <form className="m-5" onSubmit={addNewQuestion}>
          <div className="form-group">
            <label htmlFor="Email" className="h4 mt-1 p-2">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="Email"
              placeholder="name@example.com"
              onChange={(event) => handleUserEmail(event)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="category" className="h4 p-2">
              Category
            </label>
            <select
              className="form-control"
              id="category"
              onChange={(event) => handleCategory(event)}
            >
              <option value={"Html"}>Html</option>
              <option value={"Css"}>Css</option>
              <option value={"Javascript"}>Javascript</option>
              <option value={"React"}>React</option>
              <option value={"Node"}>Node</option>
              <option value={"Express"}>Express</option>
              <option value={"MongoDB"}>MongoDB</option>
              <option value={"other"}>other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="Name" className="h4 p-2">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="Name"
              onChange={(event) => handleTitle(event)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="textArea" className="h4 p-2">
              Question
            </label>
            <textarea
              className="form-control"
              id="TextArea"
              rows="3"
              onChange={(event) => handleQuestion(event)}
            ></textarea>
          </div>
          <div className="pb-3">
            <SubmitButton />
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuestionForm;
