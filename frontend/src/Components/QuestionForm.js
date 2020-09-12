import React, { useState, useEffect } from "react";
import SubmitButton from "./SubmitButton";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import './notification.css';

const QuestionForm = () => {
  const [newQuestion, setNewQuestion] = useState({
    userEmail: "",
    title: "",
    question: "",
    category: "",
  });

  useEffect(() => {
    window.tinyMCE.remove("#TextArea1");
    window.tinyMCE.init({
      selector: "#TextArea1",
      menubar: false,
      plugins: "link emoticons lists codesample ",
      toolbar:
        "styleselect |fontselect fontsizeselect bold italic underline blockquote| forecolor backcolor emoticons link | bullist numlist codesample ",
      fontsize_formats: "8pt 10pt 12pt 14pt 16pt 18pt 24pt",
      font_formats:
        "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva",
    });
  }, []);

  const addNewQuestion = (event) => {
    event.preventDefault();
    const questionValue = {
      ...newQuestion,
      question: window.tinyMCE.get("TextArea1").getContent(),
    };
    event.target.reset();
    axios
      .post("https://queueanda.herokuapp.com/questions/ask", questionValue)
      .then((response) => {
        console.log(response);
        window.location.assign("/");
      })
      .catch((err) => console.log(err));
  };

  const handleUserEmail = (event) => {
    setNewQuestion({ ...newQuestion, userEmail: event.target.value });
  };
  const handleTitle = (event) => {
    setNewQuestion({ ...newQuestion, title: event.target.value });
  };

  const handleCategory = (event) => {
    setNewQuestion({ ...newQuestion, category: event.target.value });
  };
  return (
    <div className="container mt-5">
      <label className="title_question mt-3">
        <i className="fas fa-question-circle">Ask a Question</i>
      </label>
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
              <option value=" ">Please Choose the Category</option>
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
            <div id="TextArea1" />
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
