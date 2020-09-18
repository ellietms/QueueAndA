import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import QuestionForm from "./QuestionForm";
import PlainHeader from "./PlainHeader";
import Footer from "./Footer";

const AskQuestionPage = () => {
  return (
    <div>
      <PlainHeader />
      <QuestionForm />
      <Footer />
    </div>
  );
};

export default AskQuestionPage;
