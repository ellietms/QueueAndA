import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../src/App";
import MainPage from "./Components/mainpage/MainPage";
import "bootstrap/dist/css/bootstrap.css";
import AskQuestionPage from "./Components/askQuestionPage/AskQuestionPage";
import ShowQuestionPage from "./Components/showquestionpage/ShowQuestionPage.js";
import ShowComment from "./Components/showquestionpage/answers/comment/ShowComment";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/ask" component={AskQuestionPage} />
          <Route path="/questions/:id" component={ShowQuestionPage} />
          <Route path="/answers/:id/comment" component={ShowComment} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
