import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import QuestionForm from "./QuestionForm";
import PlainHeader from "./PlainHeader";

const AskQuestionPage = () => {
  return (
    <div>
      <PlainHeader />
      <QuestionForm />
    </div>
  );
};

export default AskQuestionPage;
