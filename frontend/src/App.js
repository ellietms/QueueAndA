import React from 'react';
import Header from './Components/Header'; 
import QuestionCard from './Components/QuestionCard';
import 'bootstrap/dist/css/bootstrap.css';
import AskQuestionPage from './Components/AskQuestionPage';
import ShowQuestionPage from './Components/ShowQuestionPage'
import MakeAnswerPage from './Components/MakeAnswerPage';

function App() {
  return (
    <div className="App">
     <Header /> 
     <QuestionCard />
     <QuestionCard />
     <QuestionCard />
     <AskQuestionPage/>
     <ShowQuestionPage/>
     <MakeAnswerPage/>
    </div>
  );
}

export default App;
