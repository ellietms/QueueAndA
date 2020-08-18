import React from "react";
import SubmitButton from "./SubmitButton";
import "bootstrap/dist/css/bootstrap.css";

const QuestionForm = () => {
  return (
    <div className="container main_style">
      <form className="m-5">
        <div className="form-group">
          <label for="Name" className="pt-2">
            Name
          </label>
          <input type="password" className="form-control" id="Name" />
        </div>
        <div className="form-group">
          <label for="Email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="Email"
            placeholder="name@example.com"
          />
        </div>
        <div className="form-group">
          <label for="category">Category</label>
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
          <label for="Name" className="mr-auto">
            Title
          </label>
          <input type="text" className="form-control" id="Name" />
        </div>
        <div class="form-group">
          <label for="textArea">Question</label>
          <textarea
            class="form-control"
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
