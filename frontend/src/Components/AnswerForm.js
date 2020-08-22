import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

const AnswerForm = (props) => {
	const [ newAnswer, setNewAnswer ] = useState({
		userEmail: '',
		answer: ''
	});

	function submitHandler(e) {
		axios
			.post(`http://localhost:5000/questions/${props.match.params.id}/answer`, newAnswer)
			.then((response) => console.log(response))
			.catch((err) => console.log(err));

		e.preventDefault();
		clearData();
	}
	function clearData() {
		setNewAnswer({ userEmail: '', answer: '' });
	}

	const handelForm = (event) => {
		const answerValue = { ...newAnswer, [event.target.name]: event.target.value };
		setNewAnswer(answerValue);
	};

	return (
		<div className="container main_style">
			<form className="m-5" onSubmit={submitHandler}>
				<div className="form-group">
					<label htmlFor="Name" className="mr-auto pt-2">
						Title
					</label>
					<input
						name="userEmail"
						value={newAnswer.userEmail}
						type="text"
						className="form-control"
						id="Name"
						onChange={handelForm}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="textArea">Answer</label>
					<textarea
						name="answer"
						value={newAnswer.answer}
						className="form-control"
						id="TextArea"
						rows="3"
						onChange={handelForm}
					/>
				</div>
				<div className="pb-3">
					<button type="submit" className="btn btn-success">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default AnswerForm;
