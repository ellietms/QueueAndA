import React, { useState } from 'react';
import SubmitButton from './SubmitButton';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

function CommentForm({answerId,questionId}) {
	const [ newComment, setNewComment ] = useState({
		userName: '',
		comment: ''
	});

	function submitHandler(event) {
		event.preventDefault();
		axios
			.post(`https://queueanda.herokuapp.com/answers/${answerId}/comment`, newComment)
			.then((response) => {console.log(response);window.location.assign(`/questions/${questionId}`)})
			.catch((err) => console.log(err));
		clearData();
	}
	function clearData() {
		setNewComment({ userName: '', comment: '' });
	}

	const handelForm = (event) => {
		const commentValue = { ...newComment, [event.target.name]: event.target.value };
		setNewComment(commentValue);
	};

	return (
		<div className="container form_style">
			<form className="m-5" onSubmit={submitHandler}>
				<div className="form-group">
					<label htmlFor="Name" className="mr-auto pt-2">
						Name:
					</label>
					<input
						type="text"
						className="form-control"
						id="Name"
						onChange={handelForm}
						value={newComment.userName}
						name="userName"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="textArea">Comment</label>
					<textarea
						className="form-control"
						rows="5"
						name="comment"
						value={newComment.comment}
						onChange={handelForm}
					/>
				</div>
				<div className="pb-3">
					<SubmitButton />
				</div>
			</form>
		</div>
	);
}

export default CommentForm;
