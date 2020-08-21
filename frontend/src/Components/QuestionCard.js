import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Category from './Category';
import TitleOfQuestion from './TitleOfQuestion';
import '../Components/App.css';
import Question from './Question';

const QuestionCard = () => {
	const [ questions, setQuestions ] = useState([]);
	useEffect(
		() => {
			axios({
				method: 'GET',
				url: 'http://localhost:5000/questions'
			})
				.then((response) => setQuestions(response.data.questions))
				.catch((error) => console.log(error));
		},
		[]
	);

	return questions.map((question, index) => {
		return (
			<Link to={`/questions/${question._id}`} style={{ textDecoration: 'none', color: 'black' }}>
				<div key={index} className="container question_card mt-4">
					<div className="pt-4 pl-3">
						<Category category={question.module} />
					</div>
					<div className="d-flex justify-content-between pl-2">
						<TitleOfQuestion title={question.title} />
					</div>
					<div className="pl-3 pb-4">
						<Question question={question.question} />
					</div>
					<div className="mb-2" />
				</div>
			</Link>
		);
	});
};
export default QuestionCard;
