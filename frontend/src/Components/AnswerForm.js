import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import SubmitButton from "./SubmitButton";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';

CKEditor.create( document.querySelector( '#editor' ), {
  plugins: [ CodeBlock ],
  toolbar: [ 'codeBlock' ]
} )

const AnswerForm = ({ id }) => {
  const [newAnswer, setNewAnswer] = useState({
    userEmail: "",
    answer: "",
  });

  function submitHandler(event) {
    event.preventDefault();
    axios
      .post(`https://queueanda.herokuapp.com/questions/${id}/answer`, newAnswer)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
      window.location.assign(`/questions/${id}`);
    
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

  const handleChange = ( event, editor ) => {
    const data = editor.getData();
    console.log( { event, editor, data } );
    setNewAnswer({
      ...newAnswer,
      answer: data
    });
} 

  return (
    <div className="container form_style">
      <form className="m-5" onSubmit={submitHandler}>
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
        </div>
        <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onInit={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    data={newAnswer.answer}
                    onChange={handleChange}
                    
                   
                />
                
        <SubmitButton />
        {newAnswer.answer}
      </form>
    </div>
  );
};

export default AnswerForm;
