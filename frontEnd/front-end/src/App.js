import React from 'react';
import Header from './Components/Header'; 
import QuestionCard from './Components/QuestionCard';
import 'bootstrap/dist/css/bootstrap.css';
import AskQuestionPage from './Components/AskQuestionPage';
import ShowQuestionPage from './Components/ShowQuestionPage'
import MakeAnswerPage from './Components/MakeAnswerPage';
import {BrowserRouter, Route, Switch } from  "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header /> 
        <Switch>
          <Route exact path="/" component={QuestionCard} />
          <Route path="/ask" component={AskQuestionPage} />
          <Route path="/showQuestion" component={ShowQuestionPage} />
          <Route path="/answer" component={MakeAnswerPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
