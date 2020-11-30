import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import QuestionForm from "../../Components/askQuestionPage/QuestionForm.js";
import PlainHeader from "../../Components/askQuestionPage/PlainHeader";
import Footer from "../../Components/Footer";

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
