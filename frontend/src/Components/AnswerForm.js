import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import SubmitButton from "./SubmitButton";
import './notification.css';

const AnswerForm = ({ id }) => {
  const [newAnswer, setNewAnswer] = useState({
    userEmail: "",
    answer: "",
  });

  useEffect(init,[])
  
  function init() {
    window.tinyMCE.remove("#answerTextArea");
    window.tinyMCE.init({      
      selector : "#answerTextArea",     
      menubar: false,
      plugins: "link emoticons lists codesample ",
      toolbar:
        "styleselect |fontselect fontsizeselect bold italic underline blockquote| forecolor backcolor emoticons link | bullist numlist codesample ",
      fontsize_formats: "8pt 10pt 12pt 14pt 16pt 18pt 24pt",
      font_formats:
        "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva",
    }); 
  }
 

 
  function submitHandler(event) {
    event.preventDefault();
    const answerValue = {
      ...newAnswer,
      answer: window.tinyMCE.get("answerTextArea").getContent(),
    };
    axios
      .post(
        `https://queueanda.herokuapp.com/questions/${id}/answer`,
        answerValue
      )
      .then((response) => {
        console.log("response", response);
        window.location.assign(`/questions/${id}`);
      })
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
          <div id="answerTextArea" />
          
        </div>
        
        <SubmitButton />
      </form>
    </div>
  );
};

export default AnswerForm;
