import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../src/App";
import MainPage from './Components/MainPage';
import "bootstrap/dist/css/bootstrap.css";
import AskQuestionPage from "./Components/AskQuestionPage";
import ShowQuestionPage from "./Components/ShowQuestionPage";
import ShowComment from "./Components/ShowComment";

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
