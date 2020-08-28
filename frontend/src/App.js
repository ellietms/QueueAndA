import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../src/App';
import Header from './Components/Header';
import MainPage from './Components/MainPage';
import 'bootstrap/dist/css/bootstrap.css';
import AskQuestionPage from './Components/AskQuestionPage';
import ShowQuestionPage from './Components/ShowQuestionPage';
import MakeAnswerPage from './Components/MakeAnswerPage';

function App() {
	const [ searchValue, setSearchValue ] = useState('');
	function getSearchValue(value) {
		setSearchValue(value);
	}
	return (
		<BrowserRouter>
			<div className="App">
				<Header searchBox={getSearchValue} />
				<Switch>
					<Route exact path="/" component={() => <MainPage searchMain={searchValue} />} />
					<Route path="/ask" component={AskQuestionPage} />
					<Route path="/questions/:id/answer" component={MakeAnswerPage} />
					<Route path="/questions/:id" component={ShowQuestionPage} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
