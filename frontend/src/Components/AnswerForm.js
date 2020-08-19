import React from "react";
import SubmitButton from "./SubmitButton";
import "bootstrap/dist/css/bootstrap.css";

const AnswerForm = () => {
  return (
    <div className="container main_style">
      <form className="m-5">
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
