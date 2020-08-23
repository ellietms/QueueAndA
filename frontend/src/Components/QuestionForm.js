import React from "react";
import SubmitButton from "./SubmitButton";
import "bootstrap/dist/css/bootstrap.css";

const QuestionForm = () => {
  return (
    <div className="container form_style">
      <form className="m-5">
        <div className="form-group">
          <label htmlFor="Name" className="pt-2">
            Name
          </label>
          <input type="password" className="form-control" id="Name" />
        </div>
        <div className="form-group">
          <label htmlFor="Email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="Email"
            placeholder="name@example.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select className="form-control" id="category">
            <option>Html</option>
            <option>Css</option>
            <option>Javascript</option>
            <option>React</option>
            <option>Node</option>
            <option>Express</option>
            <option>MongoDB</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="Name" className="mr-auto">
            Title
          </label>
          <input type="text" className="form-control" id="Name" />
        </div>
        <div className="form-group">
          <label htmlFor="textArea">Question</label>
          <textarea
            className="form-control"
            id="TextArea"
            rows="3"
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

export default QuestionForm;
