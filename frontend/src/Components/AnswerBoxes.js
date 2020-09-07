import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Comment from './Comment';

const AnswerBoxes = ({ answer }) => {
	let [ displayComponent, setDisplayComponent ] = useState(null);
	return !displayComponent ? (
		<div className="container answer_box my-4">
			<label className="px-3 nameOfPerson">{answer.userEmail}</label>
			<div className="answer_font px-3 py-2">{answer.answer}</div>
			<div>{answer.createdAt}</div>
			<button onClick={() => setDisplayComponent('compComment')}>comment</button>
		</div>
	) : (
		<div>
			<Comment
				display={displayComponent === 'compComment'}
				answerId={answer._id}
				displayState={setDisplayComponent}
			/>
		</div>
	);
};

export default AnswerBoxes;
