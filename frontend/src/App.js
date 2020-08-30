import React, {useState} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../src/App";
import Header from "./Components/Header";
import MainPage from './Components/MainPage';
import "bootstrap/dist/css/bootstrap.css";
import AskQuestionPage from "./Components/AskQuestionPage";
import ShowQuestionPage from "./Components/ShowQuestionPage";
import MakeAnswerPage from "./Components/MakeAnswerPage";
import {UserContext} from "./Components/UserContext";

function App() {
	const [searchValue, setSearchValue] = useState("")
  return (
	<UserContext.Provider value={{searchValue, setSearchValue}}>
		<BrowserRouter>
			<div className="App">
			<Header/>
			<Switch>
			<Route exact path="/" component={MainPage} />
			<Route path="/ask" component={AskQuestionPage} />
			<Route path="/questions/:id/answer" component={MakeAnswerPage} />
			<Route path="/questions/:id" component={ShowQuestionPage} />
			</Switch>
			</div>
		</BrowserRouter>
	</UserContext.Provider>
  );
}

export default App;
