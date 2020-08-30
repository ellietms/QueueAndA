import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../src/App";
import MainPage from './Components/MainPage';
import "bootstrap/dist/css/bootstrap.css";
import AskQuestionPage from "./Components/AskQuestionPage";
import ShowQuestionPage from "./Components/ShowQuestionPage";
import MakeAnswerPage from "./Components/MakeAnswerPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/ask" component={AskQuestionPage} />
          <Route path="/questions/:id/answer" component={MakeAnswerPage} />
          <Route path="/questions/:id" component={ShowQuestionPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
